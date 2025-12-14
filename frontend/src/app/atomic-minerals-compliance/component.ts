import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-atomic-minerals-compliance',
  templateUrl: './component.html',
  styleUrls: ['./component.less']
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