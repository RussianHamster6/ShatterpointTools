import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StruggleTrackerComponent } from './Struggle-Tracker/struggle-tracker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StruggleTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shatterpoint-Tools';
}
