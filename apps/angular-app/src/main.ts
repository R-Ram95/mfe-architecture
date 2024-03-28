import "@angular/compiler";
import "zone.js";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouting } from "./app.routing";
import './index.css';

class WebComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const root = document.createElement("app-root");
    this.appendChild(root);
    bootstrapApplication(AppComponent, {providers: [...appRouting]});
  }
}

customElements.define("angular-app", WebComponent);