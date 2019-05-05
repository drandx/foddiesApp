import { Component, OnInit } from '@angular/core';
import { dummy_data } from "../assets/dummy";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'foodies-app';
  data: any = [];
  data_first20: any = [];

  onClickCard: Subject<any>;

  form_submitted: boolean = false;

  ngOnInit() {
    this.onClickCard = new Subject();
    this.data = dummy_data;
    this.data_first20 = dummy_data.slice(5, 9);
    console.log("data_first20 is: ", this.data_first20);
    console.log("data_first20[0] is: ", this.data_first20[0]);
  }

  onClick(data) {
    this.onClickCard.next({
      "lat": "41.936836",
      "lng": "-87.653399"
    });
  }

  showResults(data) {
    if(this.form_submitted) {
      console.log("data is: ", data);
      this.data_first20 = dummy_data.slice(0, 4);
    } else {
      this.data_first20 = dummy_data.slice(5, 9);
      this.form_submitted = true;
    }
  }

}
