import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-waste-management',
  templateUrl: './waste-management.html',
  styleUrls: ['./waste-management.less']
})
export class WasteManagementComponent implements OnInit {
  waste: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getWasteManagement().subscribe(data => {
      this.waste = data;
    });
  }
}