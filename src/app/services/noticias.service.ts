import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaTopHeadlines } from '../interfaces/noticias.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  //URL + ApiKey 
  private page = 0;
  private apiKey: string = environment.apiKey;
  private country: string = "mx";
  private url: string = `http://newsapi.org/v2/top-headlines?country=mx&apiKey=${this.apiKey}`;
  private baseUrl: string = "http://newsapi.org/v2/top-headlines?";
  constructor(private http: HttpClient) { }

  getLastNews(){
    
    //Cambia de pagina
    this.page++;
    //Realiza una peticion
    return this.http.get<RespuestaTopHeadlines>(this.url +  `&page=${this.page}`).pipe(tap(console.log));
  }

  //Solicita datos por categoria de noticias
  getLasNewsByCategory(category: string){
    //console.log(this.page);
    
    //Cambio de pagina
    this.page++;
    return this.http.get<RespuestaTopHeadlines>(this.baseUrl + "country="+this.country+"&category="+category+"&apiKey=" + this.apiKey + `&page=${this.page}`);
  }

  setPage(page){
    this.page = page;
  }
}
