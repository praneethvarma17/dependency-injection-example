import { Component, VERSION } from '@angular/core';
import { ImageGridService } from './components/image-grid/image-grid.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImageGridService]
})
export class AppComponent {
  images = [1, 2, 3, 5, 6, 7, 8, 9, 10];
  name = 'Angular ' + VERSION.major;
  // public imgService = new ImageGridService();
  constructor(public imgService: ImageGridService) {
    console.log(imgService.addNumbers(5, 6));
  }
  ngOnInit() {
    console.log(this.imgService.addNumbers(5, 6));
  }
}
