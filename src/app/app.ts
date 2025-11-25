import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Why } from './components/why/why';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Why, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sv-energy-landing');
}
