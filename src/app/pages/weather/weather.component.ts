import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  city: string = '';
  weather: any = null;
  error: string = '';
  loading: boolean = false;

  constructor(private weatherService: WeatherService) {}

  async getWeather() {
    if (!this.city.trim()) {
      this.error = 'Inserisci il nome di una città';
      return;
    }

    this.loading = true;
    this.error = '';
    this.weather = null;

    try {
      this.weather = await this.weatherService.getWeather(this.city);
    } catch (err) {
      this.error = 'Non sono stati trovati i dati meteo';
    } finally {
      this.loading = false;
    }
  }

  getWeatherIcon(condition: string): string {
    switch (condition.toLowerCase()) {
      case 'soleggiato':
        return '☀️'; // Sole
      case 'nuvoloso':
        return '☁️'; // Nuvola
      case 'pioggia':
        return '🌧️'; // Pioggia
      case 'parizialmente nuvoloso':
        return '⛅'; // Sole e nuvola
      case 'tempesta':
        return '⛈️'; // Temporale
      case 'neve':
        return '❄️'; // Neve
      default:
        return '🌈'; // Arcobaleno (default)
    }
  }
}
