import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-device-data',
  templateUrl: './device-data.component.html',
  styleUrls: ['./device-data.component.css']
})
export class DeviceDataComponent implements OnInit {
  deviceType: string;
  data: any;
  measurementDate: string;
  measurementTime: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.deviceType = this.route.snapshot.params.type;
    this.loadDeviceData();
  }

  loadDeviceData() {
    // Simulated data - in a real app, this would come from the device or a backend
    const now = new Date();
    this.measurementDate = now.toLocaleDateString();
    this.measurementTime = now.toLocaleTimeString();

    switch (this.deviceType) {
      case 'watch':
        this.data = {
          steps: { value: 8500, normal: { min: 7000, max: 10000 } },
          heartRate: { value: 72, normal: { min: 60, max: 100 } },
          calories: { value: 2100, normal: { min: 1800, max: 2500 } }
        };
        break;
      case 'bp':
        this.data = {
          systolic: { value: 120, normal: { min: 90, max: 120 } },
          diastolic: { value: 80, normal: { min: 60, max: 80 } },
          pulse: { value: 72, normal: { min: 60, max: 100 } }
        };
        break;
      case 'ecg':
        this.data = {
          rhythm: { value: 'Normal Sinus', normal: 'Normal Sinus' },
          qrsInterval: { value: 100, normal: { min: 80, max: 120 } },
          prInterval: { value: 160, normal: { min: 120, max: 200 } }
        };
        break;
    }
  }

  isNormal(item: any): boolean {
    if (typeof item.normal === 'string') {
      return item.value === item.normal;
    }
    return item.value >= item.normal.min && item.value <= item.normal.max;
  }
}