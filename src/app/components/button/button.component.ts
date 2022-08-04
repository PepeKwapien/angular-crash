import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Add';
  @Input() color: string = '#ccc';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log(this.text);
  }
}
