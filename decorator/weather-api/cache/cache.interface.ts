export interface Cache {
    set(key: string, value: any, ttl?: number): void;
    get(key: string): any | undefined;
  }
  