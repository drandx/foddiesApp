import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-distributor-card',
  templateUrl: './distributor-card.component.html',
  styleUrls: ['./distributor-card.component.scss']
})
export class DistributorCardComponent implements OnInit {
  @Input() info: any;

  name: string;
  zip: string;
  phone: string;
  contact: string;
  address: string;
  constructor() { }

  ngOnInit() {
    this.name = this.info.name;
    this.zip = this.info.zip;
    this.phone = this.info.phone;
    this.contact = this.info.contact;
    this.address = this.info.address;
  }

  // [ { community_area_code: 'HUMBOLDT P',
  //   city: 'Chicago',
  //   name: 'GATEWAY FOUNDATION I',
  //   zip: '60647',
  //   phone_ext: '',
  //   address2: '',
  //   fbc_category_code: '﻿GROUP HOME',
  //   fbc_size_code: 'SUBABUSE',
  //   metro_code: 'OTHERNFP',
  //   hours: { friday: [Array], wednesday: [Array], saturday: [Array] },
  //   phone: '(773) 252-7023',
  //   state: 'IL',
  //   contact: 'Linda Donaldson',
  //   address: '1706 N KEDZIE AVE',
  //   email:
  //    'jjackpea@gatewayfoundation.org; LJDonald@gatewayfoundation.org' } ]
}
