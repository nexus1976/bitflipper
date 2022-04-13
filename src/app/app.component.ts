import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bitflipper';
  bitMap: Array<IBitValueObject> = new Array<IBitValueObject>();
  currentDecValue: number = 0;
  constructor () {

  }

  ngOnInit(): void {
    const maxBitPositions = 8;
    let currentBitPos = 1;
    for (let index = 0; index < maxBitPositions; index++) {
      const element: IBitValueObject = {
        bitPos: currentBitPos,
        bitValue: false
      };
      this.bitMap.push(element);
      currentBitPos = currentBitPos * 2;
    }
    this.bitMap.sort((a, b) => b.bitPos - a.bitPos);
  }

  updateBitMap(e: any): void {
    const el = this.bitMap.find(d => d.bitPos === e.bitPos);
    if (el) {
      el.bitValue = e.bitValue;
    }
    this.recalculateDecValue();
  }

  recalculateDecValue(): void {
    let newDecValue = 0;
    for (let index = 0; index < this.bitMap.length; index++) {
      const element = this.bitMap[index];
      if (element.bitValue) {
        newDecValue += element.bitPos;
      }
    }
    this.currentDecValue = newDecValue;
  }
}
