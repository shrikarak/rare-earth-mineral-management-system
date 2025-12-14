
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExplorationLicensesComponent } from './exploration-licenses/exploration-licenses.component';
import { MiningLeasesComponent } from './mining-leases/mining-leases.component';
import { ComplianceReportsComponent } from './compliance-reports/compliance-reports.component';
import { AtomicMineralsComplianceComponent } from './atomic-minerals-compliance/atomic-minerals-compliance.component';
import { FinancialContributionsComponent } from './financial-contributions/financial-contributions.component';
import { EnvironmentalClearancesComponent } from './environmental-clearances/environmental-clearances.component';
import { SafetyIncidentsComponent } from './safety-incidents/safety-incidents.component';
import { WasteManagementComponent } from './waste-management/waste-management.component';
import { UsersComponent } from './users/users.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ExplorationLicensesComponent,
    MiningLeasesComponent,
    ComplianceReportsComponent,
    AtomicMineralsComplianceComponent,
    FinancialContributionsComponent,
    EnvironmentalClearancesComponent,
    SafetyIncidentsComponent,
    WasteManagementComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
