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
  currentHexValue: string = '0';
  constructor () {

  }

  ngOnInit(): void {
    const maxBitPositions = 16;
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
    this.recalculateHexValue();
  }

  recalculateHexValue(): void {
    if (this.currentDecValue === 0) {
      this.currentHexValue = '0';
      return;
    }
    let newHexValue = '';
    let nbr = this.currentDecValue;
    let keepProcessing = true;
    while (keepProcessing) {
      const newNbr = Math.trunc(nbr / 16);
      const remainder = nbr % 16;
      nbr = newNbr;
      newHexValue += this.getHexDigit(remainder);
      if (nbr === 0 && remainder ===0) {
        keepProcessing = false;
      }
    }
    this.currentHexValue = newHexValue.split("").reverse().join("").replace(/^0+/, '');
  }
  getHexDigit(decDigit: number): string {
    if (decDigit < 10) {
      return decDigit.toString();
    }
    switch (decDigit) {
      case 10:
        return "A";
      case 11:
        return "B";
      case 12:
        return "C";
      case 13:
        return "D";
      case 14:
        return "E";
      case 15:
        return "F";
      default:
        return "";
    }
  }
}
