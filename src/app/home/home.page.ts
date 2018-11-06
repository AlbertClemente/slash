import { Component } from '@angular/core';
import { ItunesService } from '../services/itunes.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  songs: any[] = [];
  constructor(private itunes: ItunesService)  {
  }

  getItems(artistTerm: string) {
      this.itunes.getSongs(artistTerm).subscribe((data: any) => {
      this.songs = data.results;
      console.log(data.results);
    });
  }
}
