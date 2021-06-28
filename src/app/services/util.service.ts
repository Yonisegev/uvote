import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  public makeid = (length: number): string => {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  };

  public getRandomLightColor = (): string => {
    let color = 'hsl(' + Math.random() * 360 + ', 100%, 40%)';
    return color;
  };

  public saveToStorage(key: string, val: any) {
    const str = JSON.stringify(val);
    localStorage.setItem(key, str);
  }

  public loadFromStorage(key: string) {
    const str = localStorage.getItem(key);
    return JSON.parse(str);
  }
}
