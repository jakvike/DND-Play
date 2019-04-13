// my-lodash.ts
import * as _ from 'lodash';

declare module 'lodash' {
  interface LoDashStatic {
    isNonEmptyString(str: string): boolean;
    isEmptyString(str: string): boolean;
    isEmptyArray<T>(a: T[]): boolean;
    isNullOrEmptyString(str: string): boolean;
  }
}

module LoDashModule {
  export function isEmptyArray<T>(a: T): boolean {
    return Array.isArray(a) && !a.length;
  }
  export function isNullOrEmptyString(str: string) : boolean{
    return str === '' || _.isNil(str);
  }
  export function isEmptyString(str: string) : boolean{
    return str === '';
  }
  export function isNonEmptyString(str: string) : boolean{
    return str !== '';
  }
}

_.mixin(Object.keys(LoDashModule)
               .reduce(
                 (object, key) => {
                   object[key] = LoDashModule[key];
                   return object;
                 },
                 Object.create(null)
              )); 

export default _;
