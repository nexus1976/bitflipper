import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bitflipper';
  bitMap: Boolean[] = new Array(8).fill(false);
  constructor () { }

  ngOnInit(): void {
    
  }
}
