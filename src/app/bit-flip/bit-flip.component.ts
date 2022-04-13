import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bit-flip',
  templateUrl: './bit-flip.component.html',
  styleUrls: ['./bit-flip.component.scss']
})
export class BitFlipComponent implements OnInit {
  public isChecked = false;
  public bitValue = this.isChecked ? 1 : 0;
  constructor() { }

  public logIsCheckedValue(): void {
    console.log(this.isChecked);
  }
  ngOnInit(): void {
  }
}
