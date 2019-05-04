import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})

export class HereMapComponent implements OnInit {

  private platform: any;

  @ViewChild("map")
  public mapElement: ElementRef;

  constructor() {
    this.platform = new H.service.Platform({
      "app_id": "jiEQS7dDo4pfISxqjnt5",
      "app_code": "mdJytdxxNKwbU-sjo9Qglw"
    });
  }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: 37.7397, lng: -121.4252 }
      }
    );
  }
}
