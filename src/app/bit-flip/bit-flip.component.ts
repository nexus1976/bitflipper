import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bit-flip',
  templateUrl: './bit-flip.component.html',
  styleUrls: ['./bit-flip.component.scss']
})
export class BitFlipComponent implements OnInit {
  @Input() bitPosition:string = '';
  @Output() valueOfBitEvent = new EventEmitter<IBitValueObject>();
  public isChecked: boolean = false;
  public bitValue: number = 0;
  constructor() { }

  public isCheckedValueChanged(): void {
    if (this.isChecked) {
      this.bitValue = 1;
    } else {
      this.bitValue = 0;
    }
    const bitValueObject: IBitValueObject = {
      bitPos: Number(this.bitPosition),
      bitValue: this.isChecked
    };
    this.valueOfBitEvent.emit(bitValueObject);
  }
  public getClass(): string {
    if (this.bitPosition.length === 1) {
      return "bit-flip-single-digit-left-margin";
    } else if (this.bitPosition.length === 2) {
      return "bit-flip-double-digit-left-margin";
    } else if (this.bitPosition.length === 3) {
      return "bit-flip-triple-digit-left-margin";
    } else if (this.bitPosition.length === 4) {
      return "bit-flip-four-digit-left-margin";
    } else {
      return '';
    }
  }
  ngOnInit(): void {
  }
}
