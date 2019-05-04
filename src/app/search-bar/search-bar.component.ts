import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { SliderType } from "igniteui-angular";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(0, 24);
  
  public showFilters = false;

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    console.log("onChange - ", event);
  }
}

class PriceRange {
  constructor(
    public lower: number,
    public upper: number,
  ) {
  }
}