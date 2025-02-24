import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HlmButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';

  private _themeService = inject(ThemeService);

  public toggleTheme(): void {
    this._themeService.toggleDarkMode();
  }
}
