import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {
    // of(1, 2, 3, 4, 5, 6).pipe(
    //   map(item => item * 2)
    // ).subscribe({
    //   next: item => console.log(item),
    //   error: err => console.log(err),
    //   complete: () => console.log("completed....")
    // })
  }
}
