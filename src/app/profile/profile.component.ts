import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile = {
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    height: '180 cm',
    weight: '75 kg'
  };

  constructor() {}

  ngOnInit() {}
}