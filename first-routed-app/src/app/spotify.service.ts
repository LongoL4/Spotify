import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
  getArtist(artistId: string | null): import("rxjs").Observable<Object> {
    throw new Error('Method not implemented.');
  }
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(id: string | null) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken
    });
    
    return this.http.get(url, { headers });
  }

  searchArtis(query: string) {
    const url = 'https://api.spotify.com/v1/search?q=${query}&type=artist';
    const headers = new HttpHeaders({Autorization: environment.oauthToken});
  ;
  let obsArtist = 
  }
}
