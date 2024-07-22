import {
    Component,
    ElementRef,
    Input,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { combineLatest } from 'rxjs';

import { PROCESS_INPUT_ENUM, PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM, PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';

import { StorageService } from '@library/storage-service';

import { ProductionRouteController } from '@netzero/controller/production-route.controller';

interface Node {
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    externalInputs: ExternalInput[];
    outputs: Output[];
}

interface Output {
    x: number;
    y: number;
    name: string;
    keyID: string;
}

interface Connection {
    from: number;
    to: number;
    name: string;
}

interface ExternalInput {
    x: number;
    y: number;
    type: 'top' | 'left';
    name: string;
    keyID: string;
}

const DEFAULT_STROKE_COLOR = 'black';
const ELECTRICITY_INPUT_COLOR = '#063474';
const HEAT_INPUT_COLOR = '#FF3C00';
const PROCESS_BOX_COLOR = '#043484';
const PRODUCT_INPUT_COLOR = '#f57c05';
const PROCESS_OUTPUT_COLOR = '#6c757d';
const PROCESS_CONNECTION_COLOR = 'green';
const fuel_input_color = 'blue';
const CURVE_RADIUS = 16;
const SPACE_BW_LEFT_INPUTS = 15;
const HORIZONTAL_SPACE_BW_OUTPUTS = 20;

@Component({
    selector: 'production-route',
    templateUrl: './process-map.component.html',
    styleUrls: ['./process-map.component.scss']
})
export class ProcessMapComponent implements OnInit {
    @Input() refresh: boolean = false;

    currentOrgID;
    productionRouteID;

    @ViewChild('myCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
    private ctx!: CanvasRenderingContext2D;

    nodes: Node[] = [];
    multi_connections: Connection[][] = [];

    externalInputs: ExternalInput[] = [];
    productionRoute: { id, name, process } = null;

    total_rows: number = 1;
    nodeCount: number = 5;
    inputLines_y = 70;
    row_output_max: number[];

    readonly nodeWidth = 200;
    readonly nodeHeight = 100;
    readonly nodesPerRow = 3;

    canvasHeight = 600;
    canvasWidth: number = 600;

    constructor(
        activatedRoute: ActivatedRoute,
        storageService: StorageService,
        private prController: ProductionRouteController,
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');

        combineLatest([activatedRoute.params, activatedRoute.queryParams]).subscribe(([params, queryParams]) => {
            if (params['productionRouteID']) {
                this.productionRouteID = parseInt(params['productionRouteID']);
                this.getProductionRoute();
            }
            else if (queryParams['productionRouteID']) {
                if (this.productionRoute == null) {
                    this.productionRouteID = queryParams['productionRouteID'];
                    this.getProductionRoute();
                }
            }
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.refresh && !changes.refresh.firstChange) {
            this.getProductionRoute();
        }
    }

    ngOnInit(): void { }

    getProductionRoute() {
        this.prController.getProductionRouteByID(this.currentOrgID, this.productionRouteID)
            .subscribe((res: any) => {
                this.productionRoute = res;
                this.initCanvas();
            });
    }

    readonly heatSvgString = `
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="24px" viewBox="0 -960 960 960" width="24px" 
                fill="${HEAT_INPUT_COLOR}">
                <path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z"/>
            </svg>`;

    readonly electricitySvgString = `
            <svg xmlns="http://www.w3.org/2000/svg" 
                height="24px" viewBox="0 -960 960 960" width="24px" 
                fill="${ELECTRICITY_INPUT_COLOR}">
                <path d="m280-80 160-300-320-40 480-460h80L520-580l320 40L360-80h-80Zm222-247 161-154-269-34 63-117-160 154 268 33-63 118Zm-22-153Z"/>
            </svg>`;

    private loadImage = (svg, width, height, callback) => {
        const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const img = new Image();

        img.onload = () => {
            URL.revokeObjectURL(url);
            callback(img);
        };

        img.src = url;
    };

    drawNonProductInputs() {
        this.createInputLine(this.inputLines_y - 5, ELECTRICITY_INPUT_COLOR);
        this.loadImage(this.electricitySvgString, 5, 5, (image) => {
            this.ctx.drawImage(image, 40, this.inputLines_y - 15, 15, 15);
            this.ctx.fillText('Electricity', 0, this.inputLines_y - 5);
        });

        this.createInputLine(this.inputLines_y + 15, HEAT_INPUT_COLOR);
        this.loadImage(this.heatSvgString, 5, 5, (image) => {
            this.ctx.drawImage(image, 35, this.inputLines_y + 5, 15, 15);
            this.ctx.fillText('Heat', 10, this.inputLines_y + 15);
        });
    }

    ngAfterViewInit(): void { }

    drawRoundedRectangle(x: number, y: number, width: number, height: number, radius: number): void {
        this.ctx.beginPath();
        this.ctx.moveTo(x + radius, y);
        this.ctx.lineTo(x + width - radius, y);
        this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        this.ctx.lineTo(x + width, y + height - radius);
        this.ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        this.ctx.lineTo(x + radius, y + height);
        this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        this.ctx.lineTo(x, y + radius);
        this.ctx.quadraticCurveTo(x, y, x + radius, y);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    initCanvas() {
        this.canvasRef.nativeElement.width = 1100;
        this.canvasRef.nativeElement.height = 200;
        this.canvasWidth = this.canvasRef.nativeElement.width;

        this.ctx = this.canvasRef.nativeElement.getContext('2d');

        // this.adjustCanvasResolution();

        let processArr: any[] = this.productionRoute.process;
        this.nodeCount = processArr.length;

        let no_of_rows = (this.nodeCount / this.nodesPerRow);
        if ((this.nodeCount % this.nodesPerRow) > 0) { no_of_rows += 1; }
        this.total_rows = Math.floor(no_of_rows);

        this.row_output_max = new Array(this.total_rows).fill(1);

        processArr.forEach((process, index) => {
            let row = Math.floor((index / this.nodesPerRow));
            if (process.output.length > this.row_output_max[row]) {
                this.row_output_max[row] = process.output.length;
            }
        });

        {  /* block to adjust height of canvas according to need (based on number of outputs) */
            /* sum of all max outputs from each row */
            const total_max_outputs = this.row_output_max.reduce((accumulator, r_max) => { return accumulator + r_max; }, 0);

            this.canvasRef.nativeElement.height += 200 * this.total_rows;
            this.canvasRef.nativeElement.height += 25 * total_max_outputs;
        }
        this.createInstallationBoundary();
        this.drawNonProductInputs();


        // this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

        this.initializeProcess();
    }

    // adjustCanvasResolution(): void {
    //     const canvas = this.canvasRef.nativeElement;
    //     const rect = canvas.getBoundingClientRect();
    //     const scale = window.devicePixelRatio || 1;
    //     const width = rect.width;
    //     const height = rect.height;

    //     // Increase the canvas resolution
    //     canvas.width = width * scale;
    //     canvas.height = height * scale;

    //     // Scale the canvas back down to logical size
    //     canvas.style.width = width + 'px';
    //     canvas.style.height = height + 'px';

    //     // Scale the context to match the increased resolution
    //     this.ctx.scale(scale, scale);
    // }

    createInstallationBoundary() {
        this.ctx.beginPath();
        this.ctx.setLineDash([5, 5]); // Set the line dash pattern

        this.drawRoundedRect(this.ctx, 70, 50, this.canvasRef.nativeElement.width - 140, this.canvasRef.nativeElement.height - 100, CURVE_RADIUS);
        this.ctx.setLineDash([]);
        this.drawTextVertically('Installation boundary', 65, (this.canvasRef.nativeElement.height) / 2);
    }

    private drawRoundedRect = (ctx, x, y, width, height, borderRadius) => {
        ctx.strokeStyle = PROCESS_BOX_COLOR;

        ctx.beginPath(); /* Begins a new path by emptying the list of sub-paths */
        ctx.moveTo(x + borderRadius, y); /*  Moves the starting point of a new sub-path to the (x, y) coordinates specified. */
        ctx.lineTo(x + width - borderRadius, y); /* Adds a straight line to the current path by connecting the current point to the (x, y) coordinates specified. */
        ctx.quadraticCurveTo(x + width, y, x + width, y + borderRadius); /* used to create a quadratic Bézier curve. */
        ctx.lineTo(x + width, y + height - borderRadius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - borderRadius, y + height);
        ctx.lineTo(x + borderRadius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
        ctx.lineTo(x, y + borderRadius);
        ctx.quadraticCurveTo(x, y, x + borderRadius, y);
        ctx.stroke(); /* Renders the drawn path. */
    }

    drawTextVertically(text: string, x: number, y: number): void {
        this.ctx.save(); // Save the current drawing state
        this.ctx.translate(x, y); // Move the origin to the desired position
        this.ctx.rotate(-Math.PI / 2); // Rotate the canvas 90 degrees clockwise (in radians)
        this.ctx.textAlign = "center"; // Set the text alignment to center
        this.ctx.fillText(text, 0, 0); // Draw the text
        this.ctx.restore(); // Restore the saved drawing state
    }

    createInputLine(yAxis: number, input_color: typeof ELECTRICITY_INPUT_COLOR | typeof HEAT_INPUT_COLOR) {
        this.ctx.fillStyle = input_color;
        this.ctx.strokeStyle = input_color;

        this.ctx.beginPath();
        this.ctx.arc(60, yAxis, 5, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(54, yAxis);
        this.ctx.lineTo(this.canvasWidth, yAxis);
        this.ctx.stroke();

        this.ctx.fillStyle = DEFAULT_STROKE_COLOR;
        this.ctx.strokeStyle = DEFAULT_STROKE_COLOR; // Change 'blue' to any color you desire
    }


    drawProcesses() {
        this.nodes.forEach((process, index) => {
            let row = Math.floor((index / this.nodesPerRow));
            if (process.outputs.length > this.row_output_max[row]) {
                this.row_output_max[row] = process.outputs.length;
            }

            function drawCenteredAndWrappedText(ctx, text, x, y, width, height, maxLength) {
                ctx.save();

                ctx.font = '12px Arial'; // Set font properties
                ctx.textAlign = 'center'; // Center horizontally
                ctx.textBaseline = 'middle'; // Center vertically

                const centerX = x + width / 2;
                const lineHeight = 20;
                let lines = [text];
                let startY = y + height / 2;

                // Check if text length exceeds the maximum length
                if (text.length > maxLength) {
                    const words = text.split(' ');
                    lines = [];
                    let currentLine = words[0];

                    // Create lines of text that fit within the specified width
                    for (let i = 1; i < words.length; i++) {
                        const testLine = currentLine + ' ' + words[i];
                        if (ctx.measureText(testLine).width > width) {
                            lines.push(currentLine);
                            currentLine = words[i];
                        } else {
                            currentLine = testLine;
                        }
                    }
                    lines.push(currentLine);

                    // Calculate the starting Y position to center the text block vertically
                    startY = y + (height - lines.length * lineHeight) / 2 + lineHeight / 2;
                }

                // Draw each line of text
                lines.forEach((line, index) => {
                    ctx.fillText(line, centerX, startY + index * lineHeight);
                });

                ctx.restore();
            }

            this.ctx.strokeStyle = DEFAULT_STROKE_COLOR;
            this.drawRoundedRect(this.ctx, process.x, process.y, process.width, process.height, CURVE_RADIUS);
            drawCenteredAndWrappedText(this.ctx, process.name, process.x, process.y, process.width, process.height, 20);
            // Draw external inputs
            let input_length = process.externalInputs.length;
            process.externalInputs.forEach((input) => {
                let input_y = input.y;
                let input_line_color = DEFAULT_STROKE_COLOR;
                let extendFromInputLine = false;

                if ((input.type == 'top')) {
                    /* for inputs that are in 1st row and are of type either electricity or heat */
                    if (input['keyID'] == PROCESS_INPUT_ENUM.ELECTRICITY) {
                        input_line_color = ELECTRICITY_INPUT_COLOR;
                    } else {
                        input_line_color = HEAT_INPUT_COLOR;
                    }
                }

                if (index < this.nodesPerRow) {
                    extendFromInputLine = (input.type == 'top');
                    if (extendFromInputLine) {
                        /* for inputs that are in 1st row and are of type either electricity or heat */
                        if (input['keyID'] == PROCESS_INPUT_ENUM.ELECTRICITY) {
                            input_y = this.inputLines_y - 5;
                        } else {
                            input_y = this.inputLines_y + 15;
                        }
                    }
                }
                this.drawExternalInput(extendFromInputLine, process.x, process.y, input.x, input_y, input.type, input.name, input_line_color, input_length, input['keyID']);
            });

            process.outputs.forEach((output, oIndex) => {
                this.drawOutput(process.x, process.y, output.x, output.y, output.name, oIndex, process.outputs.length, index);
            });

        });
    }


    initializeProcess(): void {

        this.nodes = [];
        let processArr: [] = this.productionRoute.process;
        this.nodeCount = processArr.length;
        this.canvasWidth = this.canvasRef.nativeElement.width;
        const canvasHeight = this.canvasRef.nativeElement.height;

        let prevOutput: any[] = [];
        for (let i = 0; i < this.nodeCount; i++) {

            let externalInputs: ExternalInput[] = [];

            let inputs: any[] = processArr[i]['input'];
            let outputs: Output[] = [];
            const inputCount = inputs.length;
            let left_count = 0;

            for (let j = 0; j < inputCount; j++) {
                const type = (inputs[j]['type']['keyID'] == PROCESS_INPUT_ENUM.ELECTRICITY || inputs[j]['type']['keyID'] == PROCESS_INPUT_ENUM.HEAT) ? 'top' : 'left';

                if (type == 'left') { /* change to type of inputs */
                    if (inputs[j].entities != null) {
                        inputs[j].entities.forEach((entity) => {
                            if (!prevOutput.includes(entity.name)) {
                                ++left_count;
                                let managed_y = left_count * SPACE_BW_LEFT_INPUTS + (left_count < 4 ? 0 : (SPACE_BW_LEFT_INPUTS + 5));
                                externalInputs.push({ x: -20, y: managed_y, type: type, name: entity['name'], keyID: entity['keyID'] });
                            }
                        })
                    }
                } else {
                    let x = this.nodeWidth / this.nodesPerRow;
                    /* TODO check this condition */
                    if (inputs[j]['type']['keyID'] == PROCESS_INPUT_ENUM.ELECTRICITY) x = (this.nodeWidth / this.nodesPerRow) * 2;
                    externalInputs.push({ x: x, y: -20, type: type, name: inputs[j]['type']['name'], keyID: inputs[j]['type']['keyID'] });
                }

            }
            prevOutput = [];

            let outputsx: any[] = processArr[i]['output'];
            const outputCount = outputsx.length;
            let count = 0; /* number of outputs exported from process */
            this.multi_connections[i] = [];

            for (let k = 0; k < outputCount; k++) {
                let space = count;
                const { keyID, name } = outputsx[k]['type'];
                switch (keyID) {
                    case PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT:
                    case PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT:
                    case PROCESS_OUTPUT_ENUM.CO_PRODUCT:
                    case PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT:
                    case PROCESS_OUTPUT_ENUM.BY_PRODUCT_AND_WASTE:
                        outputsx[k]['entities'].forEach((entity: { id, name, keyID }, j) => {
                            if (this.isExported(keyID, outputsx[k]['entitySource'], entity.id)) {
                                ++count;
                                outputs.push(
                                    {
                                        x: -20,
                                        y: (space + j + 1) * HORIZONTAL_SPACE_BW_OUTPUTS,
                                        name: entity.name,
                                        keyID: entity.keyID
                                    }
                                );
                            }

                            if (this.isUsedInProductionRoute(keyID, outputsx[k]['entitySource'], entity.id)) {
                                if (
                                    keyID == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT ||
                                    keyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT ||
                                    keyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT
                                ) {
                                    prevOutput.push(entity.name);
                                    
                                    this.multi_connections[i].push({ from: i, to: i + 1, name: entity.name });
                                }
                            }
                        });
                        break;
                    case PROCESS_OUTPUT_ENUM.ELECTRICITY:
                    case PROCESS_OUTPUT_ENUM.HEAT:
                    case PROCESS_OUTPUT_ENUM.WASTE_GAS_STREAM:
                        if (this.isExported(keyID, outputsx[k]['entitySource'])) {
                            ++count;
                            outputs.push(
                                {
                                    x: -20,
                                    y: (space + 1) * HORIZONTAL_SPACE_BW_OUTPUTS,
                                    name: name,
                                    keyID: keyID
                                }
                            );
                        } else {
                            this.multi_connections[i].push({ from: i, to: i + 1, name: name });
                        }
                        break;
                }
            }

            const row = Math.floor(i / this.nodesPerRow);
            const column = i % this.nodesPerRow;

            if (count > this.row_output_max[row]) {
                this.row_output_max[row] = outputsx.length;
            }

            let x = (this.canvasWidth - (this.nodeWidth + 100) * this.nodesPerRow + 100) / 2 + column * (this.nodeWidth + 100);
            if (this.nodeCount == 1) {
                x = (this.canvasWidth / 2) - (this.nodeWidth / 2);
            } else if (this.nodeCount == 2) {
                x = (this.canvasWidth - (this.nodeWidth + 100) * (this.nodesPerRow - 1) + 100) / 2 + column * (this.nodeWidth + 100);
            }

            // let y = (canvasHeight - (this.nodeHeight + 100) * Math.ceil(this.nodeCount / this.nodesPerRow) + 100) / 2 + row * (this.nodeHeight + 100);
            let y = 150;
            if (row > 0) {
                y += (this.nodeHeight + 100) * row;

                let totalSpace = 0;
                totalSpace = this.row_output_max.slice(0, row).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                y += (totalSpace * 25);
            }
            this.nodes.push({ x, y, width: this.nodeWidth, height: this.nodeHeight, name: processArr[i]['name'], externalInputs, outputs });
        }

        // Draw nodes and connections
        this.drawProcesses();
        this.drawConnections();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    }

    private isExported = (typeKeyID: string, source: any[], entityID?: number): boolean => {
        switch (typeKeyID) {
            case PROCESS_OUTPUT_ENUM.ELECTRICITY:
            case PROCESS_OUTPUT_ENUM.CO_PRODUCT:
            case PROCESS_OUTPUT_ENUM.BY_PRODUCT_AND_WASTE:
                return true;
            case PROCESS_OUTPUT_ENUM.HEAT:
                return source.map(s => s.keyID).some(s => s == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.HEAT_GENERATED_AND_EXPORTED);
            case PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT:
            case PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT:
                return source.filter(source => source.entityID == entityID).map(s => s.keyID).some(s => s == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS);
            case PROCESS_OUTPUT_ENUM.WASTE_GAS_STREAM:
                return source.filter(source => source.entityID == entityID).map(s => s.keyID).some(s => s == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_TO_CBAM_INSTALLATION || s == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_TO_NON_CBAM_INSTALLATION);
            default:
                break;
        }
        return false;
    }

    private isUsedInProductionRoute = (typeKeyID: string, source: any[], entityID?: number): boolean => {
        switch (typeKeyID) {
            case PROCESS_OUTPUT_ENUM.ELECTRICITY:
            case PROCESS_OUTPUT_ENUM.CO_PRODUCT:
            case PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT:
                return true;
            case PROCESS_OUTPUT_ENUM.HEAT:
            // return source.map(s => s.keyID).some(s => s == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.HEAT_GENERATED_AND_EXPORTED);
            case PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT:
            case PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT:
                return source.filter(source => source.entityID == entityID).map(s => s.keyID).some(s => s == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.CONSUMED_IN_PRODUCTION_ROUTE);
            case PROCESS_OUTPUT_ENUM.WASTE_GAS_STREAM:
                return source.filter(source => source.entityID == entityID).map(s => s.keyID).some(s => s == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.CONSUMED_AS_FUEL_IN_PRODUCTION_ROUTE);
            default:
                break;
        }
        return false;
    }

    drawOutput(nodeX: number, nodeY: number, outputX: number, outputY: number, name: string, index: number, outputCount: number, rowIndex: number): void {

        this.ctx.strokeStyle = PROCESS_OUTPUT_COLOR;

        // const startX = nodeX + outputX ;
        const startX = nodeX;

        const startY = nodeY + outputY + 125; // Move starting point to the bottom border of the node

        // Move downwards by the vertical offset
        // const bendY = startY + verticalOffset;
        const bendY = startY;

        // Calculate the horizontal offset between output lines
        const horizontalOffset = (this.nodeWidth / (outputCount + 1)); // Adjust this value as needed for the spacing between output lines

        const bendX = startX - (index + 1) * horizontalOffset; // Move left by the length of the output line

        const endX = bendX; // Move left from the bend point
        const endY = bendY;

        const outputJoin = startX + ((index + 1) * horizontalOffset);

        function drawCurvyOutput(ctx, outputJoin, nodeY, bendY, startX, radius) {
            ctx.beginPath();
            // Move to the starting point
            ctx.moveTo(outputJoin, nodeY + 100);
            // Draw a straight line down first
            ctx.lineTo(outputJoin, bendY - 20 - radius);
            ctx.quadraticCurveTo(outputJoin, bendY - 20, outputJoin - radius, bendY - 20);
            // Draw a horizontal line to the left with a curve
            ctx.lineTo(startX + radius, bendY - 20);
            ctx.quadraticCurveTo(startX, bendY - 20, startX, bendY - 20);

            ctx.stroke();
        }

        // Draw line
        drawCurvyOutput(this.ctx, outputJoin, nodeY, bendY, startX, CURVE_RADIUS);

        // Draw arrow at the end point (left line of the output)
        this.drawArrowhead(startX, bendY - 20, startX - 10, endY - 20); // Arrow points to the left

        // Draw output name
        this.ctx.fillText(name, startX + 10, bendY - 10);

        this.ctx.strokeStyle = PROCESS_OUTPUT_COLOR; // Change 'blue' to any color you desire

    }

    drawExternalInput(extendFromInputLine: boolean, nodeX: number, nodeY: number, inputX: number, inputY: number,
        type: 'top' | 'left', name: string, color: string, totalInputs: number, key_id: string): void {

        this.ctx.save();

        this.ctx.font = '12px Arial'; // Set font properties
        // this.ctx.textAlign = 'center'; // Center horizontally
        // this.ctx.textBaseline = 'middle'; // Center vertically

        const x = nodeX + inputX;
        let y = nodeY + inputY;
        if (extendFromInputLine) { y = inputY; }

        // Draw line connecting arrow to node
        this.ctx.beginPath();
        if (type === 'left') {
            this.ctx.strokeStyle = PRODUCT_INPUT_COLOR;
            this.ctx.moveTo(nodeX, y);
            this.ctx.lineTo(x - 60, y);
            // this.ctx.fillText(name, nodeX - 100, y - 3, 130);
            this.writeTextWithEllipsis(this.ctx, name, nodeX - 80, y - 3, 12);
        } else {
            this.ctx.strokeStyle = color;

            if (type == 'top' && !extendFromInputLine) y = y - 20;

            this.ctx.moveTo(x, nodeY);
            this.ctx.lineTo(x, y);

            let icon = this.electricitySvgString;
            if (key_id == PROCESS_INPUT_ENUM.HEAT) {
                icon = this.heatSvgString;
            }
            this.loadImage(icon, x, nodeY, (image) => {
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.arc(x, y + 2, CURVE_RADIUS - 8, 0, 2 * Math.PI);
                this.ctx.fillStyle = 'white';
                this.ctx.fill();
                this.ctx.stroke();

                this.ctx.restore();
                this.ctx.drawImage(image, x - 6, y - 5, 12, 12);
            });
            // this.ctx.fillText(name, x - 45, nodeY - 30);

            // this.drawTextWithEllipsis(this.ctx, name, x - 30, nodeY - 30, 12 /* max_length */);

        }
        this.ctx.stroke();

        // Draw arrow
        this.ctx.beginPath();
        if (type === 'left') {
            this.ctx.moveTo(nodeX - 10, y - 5);
            this.ctx.lineTo(nodeX, y);
            this.ctx.lineTo(nodeX - 10, y + 5);
        } else {
            this.ctx.moveTo(x - 5, nodeY - 10);
            this.ctx.lineTo(x, nodeY);
            this.ctx.lineTo(x + 5, nodeY - 10);
        }
        this.ctx.stroke();
        this.ctx.strokeStyle = DEFAULT_STROKE_COLOR;

        this.ctx.restore();
    }


    drawConnections(): void {
        const number_of_nodes = this.nodes.length;
        this.multi_connections.forEach((connections, node_i) => {
            let count = 0;
            connections.forEach((connection, index) => {
                if (connection !== null) {
                    let row = Math.floor((index / this.nodesPerRow));
                    const row_space = (this.row_output_max[row] * 25) + 75;

                    const fromNode = this.nodes[connection.from];
                    let startX, startY, endX, endY;
                    if (connection.to != number_of_nodes) {
                        const toNode = this.nodes[connection.to];

                        startX = fromNode.x + fromNode.width; // Right middle X
                        startY = fromNode.y + (fromNode.height / 2) + (count * SPACE_BW_LEFT_INPUTS); // Right middle Y
                        endX = toNode.x; // Left edge X
                        endY = toNode.y + (toNode.height / 2) + (count * SPACE_BW_LEFT_INPUTS); // Middle Y

                    } else {
                        startX = fromNode.x + fromNode.width; // Right middle X
                        startY = fromNode.y + (fromNode.height / 2) + (count * SPACE_BW_LEFT_INPUTS); // Right middle Y
                        endX = startX + 100; // Left edge X
                        if (connection.to == number_of_nodes) {
                            endX -= 50;
                        }
                        endY = fromNode.y + (fromNode.height / 2) + (count * SPACE_BW_LEFT_INPUTS); // Middle Y
                    }

                    // Draw line
                    this.ctx.strokeStyle = PROCESS_CONNECTION_COLOR;

                    function drawCurvyConnection(ctx, startX, startY, endX, endY, row_space, radius) {
                        ctx.beginPath();

                        // Move to the starting point
                        ctx.moveTo(startX, startY);

                        // Horizontal line to the right with a curve to the vertical line down
                        ctx.lineTo(startX + 20 - radius, startY);
                        ctx.quadraticCurveTo(startX + 20, startY, startX + 20, startY + radius);

                        // Vertical line down with a curve to the horizontal line right
                        ctx.lineTo(startX + 20, startY + row_space - radius);
                        ctx.quadraticCurveTo(startX + 20, startY + row_space, startX + 20 - radius, startY + row_space);

                        // Horizontal line to the right with a curve to the vertical line down
                        ctx.lineTo(endX - 20 + radius, startY + row_space);
                        ctx.quadraticCurveTo(endX - 20, startY + row_space, endX - 20, startY + row_space + radius);

                        // Vertical line down with a curve to the horizontal line right
                        ctx.lineTo(endX - 20, endY - radius);
                        ctx.quadraticCurveTo(endX - 20, endY, endX - 20 + radius, endY);

                        // Final horizontal line to the end point
                        ctx.lineTo(endX, endY);

                        ctx.stroke();
                    }

                    this.ctx.beginPath();
                    if (node_i != 0 && node_i % this.nodesPerRow == 2 && node_i != (number_of_nodes - 1)) {
                        drawCurvyConnection(this.ctx, startX, startY, endX, endY, row_space, CURVE_RADIUS);
                    } else {
                        this.ctx.moveTo(startX, startY);
                        this.ctx.lineTo(endX, endY);
                    }
                    this.ctx.stroke();

                    // Calculate midpoint
                    const midX = (startX + endX) / 2;
                    const midY = (startY + endY) / 2;

                    if (node_i % 2 == 0 && node_i % this.nodesPerRow == 2) {
                        this.drawArrowhead(endX - 20, endY, endX, endY);
                        this.writeTextWithEllipsis(this.ctx, connection.name, midX - 20, midY + 48, 12);
                    } else {
                        this.drawArrowhead(startX, startY, endX, endY);
                        this.writeTextWithEllipsis(this.ctx, connection.name, midX - 25, midY + 10, 12);
                    }

                    this.ctx.strokeStyle = DEFAULT_STROKE_COLOR;
                    ++count;
                }
            });
        })
    }

    drawArrowhead(startX: number, startY: number, endX: number, endY: number): void {
        const dx = endX - startX;
        const dy = endY - startY;
        const angle = Math.atan2(dy, dx);
        this.ctx.beginPath();
        this.ctx.moveTo(endX, endY);
        this.ctx.lineTo(endX - 10 * Math.cos(angle - Math.PI / 6), endY - 10 * Math.sin(angle - Math.PI / 6));
        this.ctx.lineTo(endX - 10 * Math.cos(angle + Math.PI / 6), endY - 10 * Math.sin(angle + Math.PI / 6));
        this.ctx.closePath();
        this.ctx.stroke();
    }

    private writeTextWithEllipsis(ctx, text, x, y, maxLength) {
        const ellipsis = '...';
        let displayText = text;
        if (text.length > maxLength) {
            displayText = text.substring(0, maxLength - ellipsis.length) + ellipsis;
            ctx.canvas.title = text; // Set the full text as the tooltip
        }
        ctx.fillText(displayText, x, y);
    }

}
