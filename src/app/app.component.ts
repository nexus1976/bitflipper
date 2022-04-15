import { Component, OnInit } from '@angular/core';
enum BitnessEnum {
  Bitness8 = 0,
  Bitness16 = 1,
  Bitness32 = 2,
  Bitness64 = 3
}
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
  currentBitness: BitnessEnum = BitnessEnum.Bitness8;
  bitnessValues: Array<IBitnessValueObject> = new Array<IBitnessValueObject>();
  constructor () {

  }

  ngOnInit(): void {
    this.hydrateBitnessValues();
    this.hydrateBitMap();
  }
  hydrateBitMap() {
    const maxBitPositions = this.getMaxBitPositions(this.currentBitness);
    let currentBitPos = 1;
    this.clearBitMapArray();
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
  hydrateBitnessValues(): void {
    this.bitnessValues.push({
      bitnessValue: BitnessEnum.Bitness8,
      bitnessDisplay: "8 bits"
    });
    this.bitnessValues.push({
      bitnessValue: BitnessEnum.Bitness16,
      bitnessDisplay: "16 bits"
    });
    this.bitnessValues.push({
      bitnessValue: BitnessEnum.Bitness32,
      bitnessDisplay: "32 bits"
    });
    // saving 64 bits for later
    // this.bitnessValues.push({
    //   bitnessValue: BitnessEnum.Bitness64,
    //   bitnessDisplay: "64 bits"
    // });        
  }
  onBitnessChanged(e: any): void {
    this.hydrateBitMap();
    this.recalculateDecValue();
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
  clearBitMapArray(): void {
    if (this.bitMap.length === 0) {
      return;
    }
    this.bitMap.splice(0,this.bitMap.length);
  }
  getMaxBitPositions(bitness: BitnessEnum): Number {
    switch (bitness) {
      case BitnessEnum.Bitness8:
        return 8;
      case BitnessEnum.Bitness16:
        return 16;
      case BitnessEnum.Bitness32:
        return 32;
      case BitnessEnum.Bitness64:
        return 64;
      default:
        return 8;
    }
  }
}
