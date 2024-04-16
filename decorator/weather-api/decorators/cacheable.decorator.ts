import { Cache } from '../cache/cache.interface.ts';

export function Cacheable(cache: Cache, ttl = 60) {
 // This is the higher-order function that returns the actual decorator
 return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const key = `${propertyKey}:${JSON.stringify(args)}`;
      const cachedValue = cache.get(key);

      if (cachedValue !== undefined) {
        console.log(`Returning cached value for ${key}`);
        return cachedValue;
      }

      const result = await originalMethod.apply(this, args);
      cache.set(key, result, ttl);
      return result;
    };

    return descriptor;
 };
}
