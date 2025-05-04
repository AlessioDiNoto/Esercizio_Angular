import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private WeatherData = [
    { city: 'Roma', temperature: 25, condition: 'Soleggiato', humidity: 60 },
    { city: 'Parigi', temperature: 18, condition: 'Nuvoloso', humidity: 75 },
    { city: 'Londra', temperature: 15, condition: 'Pioggia', humidity: 85 },
    {
      city: 'Berlino',
      temperature: 20,
      condition: 'Parzialmente nuvoloso',
      humidity: 70,
    },
  ];

  getWeather(city: string) {
    // Simulazione di una chiamata Api con timeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const found = this.WeatherData.find(
          (weather) => weather.city.toLowerCase() === city.toLowerCase()
        );
        if (found) {
          resolve({ ...found });
        } else {
          reject('Città non trovata');
        }
      }, 800);
    });
  }
}
