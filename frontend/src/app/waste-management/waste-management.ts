import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-waste-management',
  standalone: true,
  imports: [CommonModule],
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