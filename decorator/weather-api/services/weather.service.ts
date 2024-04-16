import { Cacheable } from '../decorators/cacheable.decorator.ts';
import { InMemoryCache } from '../cache/in-memory.cache.ts';

export class WeatherService {
 private apiKey = 'your_api_key';
 private cache = new InMemoryCache();

 @Cacheable(this.cache, 300) // Cache for 5 minutes
 async getWeather(city: string): Promise<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    const response = await fetch(url);
    return response.json();
 }
}
