import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dotdotdot'
})
export class EllipsisPipeService implements PipeTransform {

    transform(value: string, limit: number): string {
        if (value == null) return null;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [EllipsisPipeService],
    exports: [EllipsisPipeService]
})
export class EllipsisPipeModule { }