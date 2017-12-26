import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class SpotifyService{

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private access_token: string = 'BQD2aXH_gh91cKE5h6WkrYE552w_p5HmgvRj0UjjRx6FH3lHofE5XeRGoDclheNcGgcunpIHo939WJRjMhOnpGFw4ZohkzpoXIjHku0G0TbmUuP5_JPVLaD2frG_a28c64u7SiuPBQJnJzUV3aeDB8BdAMTL01QCLu3aLg1RUpXIHO_YQw';
  constructor (private _http: HttpClient){
  }

  searchArtist(str:string){

      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);

      this.searchUrl = 'https://api.spotify.com/v1/search?q='+ str + '&type=artist&market=US&limit=20&offset=0';
      return this._http.get(this.searchUrl, {headers: headers })
      .map(res => res);
  }

  getArtist(id:string){

      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);

      this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
      return this._http.get(this.artistUrl, {headers: headers })
      .map(res => res);
  }

  getAlbums(artistId:string){

      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
      this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+ '/albums';
      return this._http.get(this.albumsUrl, {headers: headers })
      .map(res => res);
  }

  getAlbum(id:string){

      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
      this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
      return this._http.get(this.albumUrl, {headers: headers })
      .map(res => res);
  }
}
