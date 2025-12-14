
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExplorationLicensesComponent } from './exploration-licenses/exploration-licenses';
import { MiningLeasesComponent } from './mining-leases/mining-leases';
import { ComplianceReportsComponent } from './compliance-reports/compliance-reports';
import { AtomicMineralsComplianceComponent } from './atomic-minerals-compliance/atomic-minerals-compliance';
import { FinancialContributionsComponent } from './financial-contributions/financial-contributions';
import { EnvironmentalClearancesComponent } from './environmental-clearances/environmental-clearances';
import { SafetyIncidentsComponent } from './safety-incidents/safety-incidents';
import { WasteManagementComponent } from './waste-management/waste-management';
import { UsersComponent } from './users/users';

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
