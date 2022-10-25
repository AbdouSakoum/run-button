import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-next-level-valid',
  templateUrl: './next-level-valid.component.html',
  styleUrls: ['./next-level-valid.component.css'],
  animations: [
    // notre animation
    trigger(
      'openClose', [
        state(
          'axe',
          style({
            position: 'relative',
            left: '0px',
          })
        ),
        state(
          'left',
          style({
            position: 'relative',
            left: '-100px'
          })
        ),
        state(
          'right',
          style({
            position: 'relative',
            left: '100px'
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
  myForm: FormGroup;
  state: string = 'axe';
  innerWidth: any ; // largeur de notre ecran

  constructor(private fb: FormBuilder) { }

  toggle(event) {
    if(this.myForm.get('toDo').hasError('minlength') || this.myForm.get('toDo').hasError('required')) {
      let center = this.innerWidth / 2 ;
      if(event.x > center + 40 || event.x < center - 40) {
        this.state = 'axe';
      } else {
        if(event.x > center) {
          this.state = 'left';
        } else {
          this.state = 'right';
        }
      }
    } else {
      this.state = 'axe';
    }

  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.myForm = this.fb.group({
      toDo: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

}
