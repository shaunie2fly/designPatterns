import { Cache } from './cache.interface.ts';

export class InMemoryCache implements Cache {
  private cache = new Map<string, { value: any; expiration: number }>();

  set(key: string, value: any, ttl = 60): void {
    const expiration = Date.now() + ttl * 1000;
    this.cache.set(key, { value, expiration });
  }

  get(key: string): any | undefined {
    const entry = this.cache.get(key);
    if (entry && Date.now() < entry.expiration) {
      return entry.value;
    }
    this.cache.delete(key);
    return undefined;
  }
}