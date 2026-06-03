import * as LRUCacheModule from "lru-cache";
import type { LRUCache as LRUCacheType } from "lru-cache";

const LRUCache = ((LRUCacheModule as any).LRUCache ||
  (LRUCacheModule as any).default ||
  LRUCacheModule) as typeof LRUCacheType;

const cache = new LRUCache<string, string>({ max: 100 });
console.log(cache);
