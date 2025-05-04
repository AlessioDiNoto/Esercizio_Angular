import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  titolo: string =
    'Compito intermedio del corso di Angular dove vendono applicati i seguenti concetti';

  concetti: string[] = [
    'Components',
    'Data Binding',
    'Direttive',
    'Routing',
    'Reactive Forms',
    'Comunicazione tra componenti',
  ];
}
