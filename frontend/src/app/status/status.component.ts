import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4> 404 page does not exist.</h4>
  `,
  styles: [
   `h4{ color: red;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        size: 50px;
    }`
  ]
})
export class StatusComponent {

}
