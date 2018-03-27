import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  array = ["Angular", "Github", "Firebase", "Nodejs", "MongoDB"]

  public handler(){
    this.title = "change"
  }

  public alertName(name: string){
    alert(name)
  }
}


