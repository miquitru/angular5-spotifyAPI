import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';
import { Album} from '../../../Album';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: './album.component.html'
  providers : [SpotifyService]
})

export class AlbumComponent implements OnInit
{
  id:string;
  album:Album[];

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute)
  {
      this.album =[];
  }

  ngOnInit(){
    this._route.params
    .map(params => params['id'])
    .subscribe((id) => {
      this._spotifyService.getAlbum(id)
        .subscribe(album => this.album = album);
    })
  }
}
