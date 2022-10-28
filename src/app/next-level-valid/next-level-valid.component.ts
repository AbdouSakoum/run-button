import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-next-level-valid',
  templateUrl: './next-level-valid.component.html',
  styleUrls: ['./next-level-valid.component.css'],
  animations: [
    trigger(
      'openClose', [
        // state 1
        state(
          'axe',
          style({
            position: 'relative',
            left: '0px',
          })
        ),
        //state 2
        state(
          'left',
          style({
            position: 'relative',
            left: '-100px',
          })
        ),
        //state 3
        state(
          'right',
          style({
            position: 'relative',
            left: '100px',
          })
        ),
        transition('left => axe', [animate('0.1s')]),
        transition('axe => left', [animate('0.1s')]),
        transition('right => axe', [animate('0.1s')]),
        transition('axe => right', [animate('0.1s')]),
      ]
    )
  ]
})
export class NextLevelValidComponent implements OnInit {
  //nothing happen
  state: string = 'axe';
  innerWidth: any; // width of screan
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.myForm = this.fb.group({
      toDo: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  toggle(event) {
    let center = this.innerWidth / 2 ;
    if(this.myForm.get('toDo').hasError('minlength')
     || this.myForm.get('toDo').hasError('required')) {
       if(event.x > center + 40 || event.x < center - 40) {
         this.state = 'axe';
       } else {
         if(event.x > center)
           this.state = 'left';
         else
           this.state = 'right';
       }
     } else {
      this.state = 'axe';
      // nice nice
     }
  }
  // thanks for watching

}
