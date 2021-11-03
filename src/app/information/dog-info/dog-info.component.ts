import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dog-info',
  templateUrl: './dog-info.component.html',
  styleUrls: ['./dog-info.component.css'],
})
export class DogInfoComponent implements OnInit {
  pathName: string = '';
  urlArr: string[] = [];
  breedFromUrl: string = '';
  dogImgArr: any;
  dogSubBreedArr: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.pathName = window.location.href;
    this.urlArr = this.pathName.split('/');
    this.breedFromUrl = this.urlArr[5];
    console.log(this.urlArr);
    if (window.location.href) {
      this.http
        .get(`https://dog.ceo/api/breed/${this.breedFromUrl}/images/random/5`)
        .subscribe((res: any) => (this.dogImgArr = res.message));
      this.http
        .get(`https://dog.ceo/api/breed/${this.breedFromUrl}/list`)
        .subscribe((res: any) => (this.dogSubBreedArr = res.message));
    }
  }
}
