import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable} from  'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  routeOBS: Observable<ParamMap> | undefined;

  artist : any //Qui salverò la traccua selezionata
  spotifyServiceObs: Observable<Object> | undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SpotifyService,
    private location: Location) { }

  ngOnInit(): void {
    this.routeOBS = this.route.paramMap;
    this.routeOBS.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let artistId = params.get('id');
    this.spotifyServiceObs = this.service.getArtist(artistId);
    this.spotifyServiceObs.subscribe((data)=>this.artist = data)
  }
  back() : void
  {
    this.location.back();
  }

}
