export class ScheduleReport {
    constructor() {
        this.reportConfig = {
            reportType: '',
            deviceID: [],
            entityType: '',
            entityID: [],
            sourceConsumer: {
                type: '',
                keyID: '',
            },
            paramMetric: [],
        };
        this.schedulerConfig = {
            name: '',
            dataInterval: '',
            frequency: '',
            userChoice: '',
            userID: [],
            otherUserEmail: [],
            status: '',
            reportFormat: '',
        };
    }
}
export class ScheduleReportPage {
    constructor() {
        this.id = null;
        this.name = '';
        this.type = '';
        this.recipients = [];
        this.frequency = '';
        this.scheduledBy = {
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            profileImgUrl: ''
        };
        this.status = '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtcmVwb3J0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9tb2RlbC9zY2hlZHVsZS1yZXBvcnQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ0ksaUJBQVksR0FBRztZQUNYLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxFQUFFO1lBQ1osY0FBYyxFQUFFO2dCQUNaLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7WUFDRCxXQUFXLEVBQUUsRUFBRTtTQUNsQixDQUFDO1FBQ0Ysb0JBQWUsR0FBRztZQUNkLElBQUksRUFBRSxFQUFFO1lBQ1IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsU0FBUyxFQUFFLEVBQUU7WUFDYixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxFQUFFO1lBQ1YsY0FBYyxFQUFFLEVBQUU7WUFDbEIsTUFBTSxFQUFFLEVBQUU7WUFDVixZQUFZLEVBQUUsRUFBRTtTQUNuQixDQUFDO0lBQ04sQ0FBQztDQUFBO0FBd0JELE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFDSSxPQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ1YsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVyxHQUFHO1lBQ1YsRUFBRSxFQUFFLElBQUk7WUFDUixTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxhQUFhLEVBQUUsRUFBRTtTQUNwQixDQUFDO1FBQ0YsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlUmVwb3J0SSB7XG4gICAgcmVwb3J0Q29uZmlnOiB7XG4gICAgICAgIHJlcG9ydFR5cGU6IHN0cmluZztcbiAgICAgICAgZW50aXR5VHlwZTogc3RyaW5nO1xuICAgICAgICBkZXZpY2VJRDogbnVtYmVyW107XG4gICAgICAgIGVudGl0eUlEOiBudW1iZXJbXTtcbiAgICAgICAgc291cmNlQ29uc3VtZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgIGtleUlEOiBzdHJpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtTWV0cmljOiBzdHJpbmdbXTtcbiAgICB9O1xuICAgIHNjaGVkdWxlckNvbmZpZzoge1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgIGRhdGFJbnRlcnZhbDogc3RyaW5nO1xuICAgICAgICBmcmVxdWVuY3k6IHN0cmluZztcbiAgICAgICAgdXNlckNob2ljZTogc3RyaW5nO1xuICAgICAgICB1c2VySUQ6IG51bWJlcltdO1xuICAgICAgICBvdGhlclVzZXJFbWFpbDogc3RyaW5nW107XG4gICAgICAgIHN0YXR1czogc3RyaW5nO1xuICAgICAgICByZXBvcnRGb3JtYXQ6IHN0cmluZztcbiAgICB9O1xufVxuXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVSZXBvcnQgaW1wbGVtZW50cyBTY2hlZHVsZVJlcG9ydEkge1xuICAgIHJlcG9ydENvbmZpZyA9IHtcbiAgICAgICAgcmVwb3J0VHlwZTogJycsXG4gICAgICAgIGRldmljZUlEOiBbXSxcbiAgICAgICAgZW50aXR5VHlwZTogJycsXG4gICAgICAgIGVudGl0eUlEOiBbXSxcbiAgICAgICAgc291cmNlQ29uc3VtZXI6IHtcbiAgICAgICAgICAgIHR5cGU6ICcnLFxuICAgICAgICAgICAga2V5SUQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbU1ldHJpYzogW10sXG4gICAgfTtcbiAgICBzY2hlZHVsZXJDb25maWcgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBkYXRhSW50ZXJ2YWw6ICcnLFxuICAgICAgICBmcmVxdWVuY3k6ICcnLFxuICAgICAgICB1c2VyQ2hvaWNlOiAnJyxcbiAgICAgICAgdXNlcklEOiBbXSxcbiAgICAgICAgb3RoZXJVc2VyRW1haWw6IFtdLFxuICAgICAgICBzdGF0dXM6ICcnLFxuICAgICAgICByZXBvcnRGb3JtYXQ6ICcnLFxuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZWR1bGVSZXBvcnRQYWdlSSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHJlY2lwaWVudHM6IEFycmF5PHtcbiAgICAgICAgaWQ6IG51bWJlcixcbiAgICAgICAgZmlyc3ROYW1lOiBzdHJpbmcsXG4gICAgICAgIGxhc3ROYW1lOiBzdHJpbmcsXG4gICAgICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgICAgIHByb2ZpbGVJbWdVcmw6IHN0cmluZ1xuICAgIH0+O1xuICAgIGZyZXF1ZW5jeTogc3RyaW5nO1xuICAgIHNjaGVkdWxlZEJ5OiB7XG4gICAgICAgIGlkOiBudW1iZXIsXG4gICAgICAgIGZpcnN0TmFtZTogc3RyaW5nLFxuICAgICAgICBsYXN0TmFtZTogc3RyaW5nLFxuICAgICAgICBlbWFpbDogc3RyaW5nLFxuICAgICAgICBwcm9maWxlSW1nVXJsOiBzdHJpbmdcbiAgICB9O1xuICAgIHN0YXR1czogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVSZXBvcnRQYWdlIGltcGxlbWVudHMgU2NoZWR1bGVSZXBvcnRQYWdlSSB7XG4gICAgaWQgPSBudWxsO1xuICAgIG5hbWUgPSAnJztcbiAgICB0eXBlID0gJyc7XG4gICAgcmVjaXBpZW50cyA9IFtdO1xuICAgIGZyZXF1ZW5jeSA9ICcnO1xuICAgIHNjaGVkdWxlZEJ5ID0ge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHByb2ZpbGVJbWdVcmw6ICcnXG4gICAgfTtcbiAgICBzdGF0dXMgPSAnJztcbn0iXX0=