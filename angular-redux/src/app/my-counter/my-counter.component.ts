import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {increment , decrement , reset} from '../counter.actions'
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$ : Observable<number>;
  constructor(private store: Store<{count : number}>) { 
    this.count$ = store.pipe(select('count'));
  }
  increment(){
    this.store.dispatch(increment({payload: {incrementNumber : 10}}));
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }

  ngOnInit(): void {
  }

}
