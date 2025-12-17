import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div style="display:flex">
      <nav style="width:200px">
        <a routerLink="">Home</a><br><br>
        <a routerLink="add">Add Student</a>
      </nav>

      <div style="margin-left:20px">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}
