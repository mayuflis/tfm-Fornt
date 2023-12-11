import { Component, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-choose-class',
  templateUrl: './choose-class.component.html',
  styleUrls: ['./choose-class.component.css'],
})
export class ChooseClassComponent {
  @Input() class!: string[];

  ngOnInit() {
    console.log(this.class);
  }
}
