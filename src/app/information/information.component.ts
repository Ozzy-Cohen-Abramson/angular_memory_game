import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // fetch random dog images
  // https://dog.ceo/api/breeds/image/random/4
}
