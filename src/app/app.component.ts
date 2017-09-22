import * as cornerstone from 'cornerstone-core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(){this.fazer()}

  public fazer(){
    console.log(cornerstone);
    cornerstone.removeLayer()
    
  }
}
