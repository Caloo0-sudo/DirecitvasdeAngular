import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgifComponentComponent } from './Components/ngif-component/ngif-component.component';
import { NgforComponentComponent } from './Components/ngfor-component/ngfor-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgifComponentComponent,NgforComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DirecitvasdeAngular';
}
