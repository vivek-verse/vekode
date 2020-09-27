import 'reflect-metadata';
import { MetadataKeys } from './keys';
import { Methods } from './methods';
import { Router } from './router';
export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = Router.getInstance();
    for (const key of Object.getOwnPropertyNames(target.prototype)) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        'method',
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];
      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
