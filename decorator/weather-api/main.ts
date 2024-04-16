import { WeatherService } from './services/weather.service.ts';

const weatherService = new WeatherService();

async function main() {
  console.time('First call');
  const weatherData1 = await weatherService.getWeather('London');
  console.timeEnd('First call');

  console.time('Second call');
  const weatherData2 = await weatherService.getWeather('London');
  console.timeEnd('Second call');
}

main();
