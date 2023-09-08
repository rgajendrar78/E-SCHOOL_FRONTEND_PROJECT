import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalMapService {
  private myMap = new Map();

  constructor() { }

  public setItem(key: any, value: any) {
    this.myMap.set(key, value);
  }

  public getItem(key: any) {
    return this.myMap.get(key);
  }

  public hasItem(key: any) {
    return this.myMap.has(key);
  }
}