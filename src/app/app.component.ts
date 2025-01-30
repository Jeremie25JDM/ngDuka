import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToobarComponent } from './pages/shared/toobar.component';
import { FooterComponent } from './pages/shared/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToobarComponent, FooterComponent],
  template: ` <app-toobar /> <router-outlet /> <app-footer /> `,
  styles: [],
})
export class AppComponent {
  title = 'ngDuka votre boutique en ligne ';
}
