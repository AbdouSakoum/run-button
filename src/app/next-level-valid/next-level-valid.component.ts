import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// let's start
import  {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-next-level-valid',
  templateUrl: './next-level-valid.component.html',
  styleUrls: ['./next-level-valid.component.css'],
  animations: [
    trigger(
      'nextLevel', [
        // state 1
        state(
          'center',
          style({
            position: 'relative',
            left: '0px'
          })
        ),
        // state 2
        state(
          'left',
          style({
            position: 'relative',
            left: '-100px'
          })
        ),
        // state 3
        state(
          'right',
          style({
            position: 'relative',
            left: '100px'
          })
        ),
        transition('left => center', [animate('0.1s')]),
        transition('center => left', [animate('0.1s')]),
        transition('right => center', [animate('0.1s')]),
        transition('center => right', [animate('0.1s')]),
      ]
    )
  ]

})
export class NextLevelValidComponent implements OnInit {
  myForm: FormGroup;
  statut: string = 'center';
  innerWidth: any // width of screan


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
      if(event.x > center + 40 || event.x < center - 40 )
        this.statut = 'center';
      else
        if(event.x > center)
          this.statut = 'left';
        else
          this.statut = 'right';
    } else
      this.statut = 'center';

  }
  // that's nice
  // sooo thank uuu for watching see u in a next video
  // have a great day

}
