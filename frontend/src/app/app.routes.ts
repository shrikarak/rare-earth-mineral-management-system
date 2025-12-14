import { Routes } from '@angular/router';
import { ExplorationLicensesComponent } from './exploration-licenses/exploration-licenses.component';
import { MiningLeasesComponent } from './mining-leases/mining-leases.component';
import { ComplianceReportsComponent } from './compliance-reports/compliance-reports.component';
import { AtomicMineralsComplianceComponent } from './atomic-minerals-compliance/atomic-minerals-compliance.component';
import { FinancialContributionsComponent } from './financial-contributions/financial-contributions.component';
import { EnvironmentalClearancesComponent } from './environmental-clearances/environmental-clearances.component';
import { SafetyIncidentsComponent } from './safety-incidents/safety-incidents.component';
import { WasteManagementComponent } from './waste-management/waste-management.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { path: 'exploration-licenses', component: ExplorationLicensesComponent },
    { path: 'mining-leases', component: MiningLeasesComponent },
    { path: 'compliance-reports', component: ComplianceReportsComponent },
    { path: 'atomic-minerals-compliance', component: AtomicMineralsComplianceComponent },
    { path: 'financial-contributions', component: FinancialContributionsComponent },
    { path: 'environmental-clearances', component: EnvironmentalClearancesComponent },
    { path: 'safety-incidents', component: SafetyIncidentsComponent },
    { path: 'waste-management', component: WasteManagementComponent },
    { path: 'users', component: UsersComponent },
    { path: '', redirectTo: '/exploration-licenses', pathMatch: 'full' }
];