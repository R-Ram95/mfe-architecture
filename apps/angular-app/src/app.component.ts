import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <p>hello, this is angular and vite</p>
    <a
      routerLink="/angular"
      href="#"
      class="text-xl font-bold no-underline hover:underline ..."
      >Home |
    </a>
    <a
      routerLink="/about"
      href="#"
      class="text-xl font-bold no-underline hover:underline ..."
      >About us |</a
    >
    <a
      href="/dashboard"
      class="text-xl font-bold no-underline hover:underline ..."
      >Dashboard</a
    >
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      :root {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
