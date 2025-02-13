import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactUsModule } from './contact-us/contact-us.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactUsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'child-app-b';
}
