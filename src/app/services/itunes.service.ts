import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  constructor(private http: HttpClient) {
    console.log('iTunes service listo.');
  }

  getSongs(artistTerm: string) {
    return this.http.get(`https://itunes.apple.com/search?term="${artistTerm}"&entity=song`);
  }
}
