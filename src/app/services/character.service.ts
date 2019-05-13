import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  'providedIn': 'root'
})
export class CharacterService {

  private dndBeyondUrl = 'https://www.dndbeyond.com/character/';
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  });
  constructor(private http: HttpClient) { }

  getDnDBeyondCharacter(characterId: number) {
    return this.getViaRxJs(characterId);
    // return this.getViaXmlHttp(characterId);
  }

  private getViaRxJs(characterId: number) {
    // tslint:disable-next-line: prefer-template
    const url = this.dndBeyondUrl + characterId + '/json';
    return this.http.get(url, { 'headers': this.headers, 'responseType': 'blob' });
  }
}
