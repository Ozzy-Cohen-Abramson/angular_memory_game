import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  myControl = new FormControl();
  breedName: string = '';
  options: string[] = [
    'affenpinscher',
    'african',
    'airedale',
    'akita',
    'appenzeller',
    'australian',
    'basenji',
    'beagle',
    'bluetick',
    'borzoi',
    'bouvier',
    'boxer',
    'brabancon',
    'briard',
    'buhund',
    'bulldog',
    'bullterrier',
    'cattledog',
    'chihuahua',
    'chow',
    'clumber',
    'cockapoo',
    'collie',
    'coonhound',
    'corgi',
    'cotondetulear',
    'dachshund',
    'dalmatian',
    'dane',
    'deerhound',
    'dhole',
    'dingo',
    'doberman',
    'elkhound',
    'entlebucher',
    'eskimo',
    'finnish',
    'frise',
    'germanshepherd',
    'greyhound-italian',
    'groenendael',
    'havanese',
    'hound',
    'husky',
    'keeshond',
    'kelpie',
    'komondor',
    'kuvasz',
    'labradoodle',
    'labrador',
    'leonberg',
    'lhasa',
    'malamute',
    'malinois',
    'maltese',
    'mastiff',
    'mexicanhairless',
    'mix',
    'mountain',
    'newfoundland',
    'otterhound',
    'ovcharka',
    'papillon',
    'pekinese',
    'pembroke',
    'pinscher',
    'pitbull',
    'pointer',
    'pomeranian',
    'poodle',
    'pug',
    'puggle',
    'pyrenees',
    'redbone',
    'retriever',
    'ridgeback',
    'rottweiler',
    'saluki',
    'samoyed',
    'schipperke',
    'schnauzer',
    'setter',
    'sheepdog',
    'shiba',
    'shihtzu',
    'spaniel',
    'stbernard',
    'terrier',
    'vizsla',
    'waterdog',
    'weimaraner',
    'whippet',
    'wolfhound',
  ];

  filteredOptions!: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  // searchBreed() {
  //   console.log(this.breedName);
  // }
  // fetch random dog images
  // https://dog.ceo/api/breeds/image/random/4
}
