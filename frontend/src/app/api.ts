
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getExplorationLicenses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/exploration-licenses`);
  }

  getMiningLeases(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mining-leases`);
  }

  getComplianceReports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/compliance-reports`);
  }

  getAtomicMineralsCompliance(): Observable<any> {
    return this.http.get(`${this.baseUrl}/atomic-minerals-compliance`);
  }

  getFinancialContributions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/financial-contributions`);
  }

  getEnvironmentalClearances(): Observable<any> {
    return this.http.get(`${this.baseUrl}/environmental-clearances`);
  }

  getSafetyIncidents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/safety-incidents`);
  }

  getWasteManagement(): Observable<any> {
    return this.http.get(`${this.baseUrl}/waste-management`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
}
