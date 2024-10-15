import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  devices = [
    { name: 'Smart Watch', type: 'watch', icon: '⌚' },
    { name: 'Blood Pressure Monitor', type: 'bp', icon: '💉' },
    { name: 'ECG Device', type: 'ecg', icon: '💓' },
  ];

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {}

  onDeviceTap(deviceType: string) {
    this.routerExtensions.navigate(['/device-data', deviceType]);
  }
}