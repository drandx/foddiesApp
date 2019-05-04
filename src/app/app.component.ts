import { Component, OnInit } from '@angular/core';
import { dummy_data } from "../assets/dummy";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'foodies-app';
  data: any = [];
  data_first20: any = [];

  form_submitted: boolean = false;

  ngOnInit() {
    this.data = dummy_data;
    this.data_first20 = dummy_data.slice(0, 4);
    console.log("data_first20 is: ", this.data_first20);
    console.log("data_first20[0] is: ", this.data_first20[0]);
  }

  onClick(data) {
    console.log("clicked on data: ", data);
  }

  showResults(data) {
    console.log("data is: ", data);
    this.form_submitted = true;
  }

}
