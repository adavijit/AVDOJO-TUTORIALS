import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as React from 'react';

import * as ReactDOM  from 'react-dom';

import MyReactComponent from './MyReactComponent';
@Component({
  selector: 'app-root',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AfterViewInit, OnDestroy{
  title = 'angularreactapp';

  public rootId = 'rootId'

  ngOnChanges(changes: SimpleChanges){
    this.render();
  }

  ngAfterViewInit(){
    this.render();
  }

  ngOnDestroy(){

  }

  private render(){
    ReactDOM.render(React.createElement(MyReactComponent ), document.getElementById(this.rootId));
  }
}
