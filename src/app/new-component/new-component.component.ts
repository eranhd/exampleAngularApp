import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit, OnChanges {

  @Input() name: string 
  @Output() specialClick: EventEmitter<string> = new EventEmitter()
  private count = 0
  constructor() { }

  ngOnInit() {
  }

  tripleClicks(){
    if(++this.count == 3){
      this.specialClick.emit(this.name)
      this.count = 0
    }
  }

  ngOnChanges(data){

  }

}




