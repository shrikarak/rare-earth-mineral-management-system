import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-atomic-minerals-compliance',
  templateUrl: './atomic-minerals-compliance.html',
  styleUrls: ['./atomic-minerals-compliance.less']
})
export class AtomicMineralsComplianceComponent implements OnInit {
  compliances: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAtomicMineralsCompliance().subscribe(data => {
      this.compliances = data;
    });
  }
}