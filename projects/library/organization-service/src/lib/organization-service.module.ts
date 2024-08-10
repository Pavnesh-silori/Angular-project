import { NgModule, ModuleWithProviders } from '@angular/core';
import { OrganizationServiceComponent } from './organization-service.component';



@NgModule({
  declarations: [
    OrganizationServiceComponent
  ],
  imports: [
  ],
  exports: [
    OrganizationServiceComponent
  ]
})
export class OrganizationServiceModule {
  static forRoot(environment: any): ModuleWithProviders<OrganizationServiceModule> {
    return {
      ngModule: OrganizationServiceModule,
      providers: [
        { provide: 'environment', useValue: environment }
      ]
    };
  }
}
