import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  items: any;

  ngOnInit() {
    // of(1, 2, 3, 4, 5, 6).pipe(
    //   map(item => item * 2)
    // ).subscribe({
    //   next: item => console.log(item),
    //   error: err => console.log(err),
    //   complete: () => console.log("completed....")
    // })

    of(1, 2, 3, 4, 5, 6)
      .pipe(
        map((item) => item * 2),
        // tap(item => console.log(item, ' second state')),
        take(2),
        map((item) => console.log(item, 'after take'))
      )
      .subscribe();
  }
}
