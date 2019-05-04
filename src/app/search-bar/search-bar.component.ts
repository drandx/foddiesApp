import { Component, OnInit, EventEmitter , Output } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { SliderType } from "igniteui-angular";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(0, 24);
  
  public genders: String[] = ["Male", "Female", "Other", "Prefer not to specify"];
  public languages: String[] = ["English", "Español", "Francais", "Polish", "عربي", "كردي", "Mandarin"];

  public inputField = "";

  public showFilters = false;

  public checked: boolean = false;
  
  public data;
  public data_first20;

  public form_submitted: boolean = false;

  @Output() FormSubmitted: EventEmitter<any> = new EventEmitter();
  

  constructor() { }

  onChange(event) {
    console.log("onChange - ", event);
  }

  submitForm() {
    console.log("Form submit");
    this.form_submitted = true;
    this.FormSubmitted.emit(this.inputField);
  }
}

class PriceRange {
  constructor(
    public lower: number,
    public upper: number,
  ) {
  }
}