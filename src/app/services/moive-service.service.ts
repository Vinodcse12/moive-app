import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Moive } from "../moives/moive";
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MoiveServiceService {
  moiveList: any = [];
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('http://localhost:9090/')
      .pipe(
        map((moives) => {
          this.moiveList = moives;
          return moives;
        })
      )
  };

  addNewMoive(moiveData: any) {
    return this.http.post('http://localhost:9090/moive/add', moiveData)
      .pipe(
        map((res) => {
          console.log(res);
        })
      )
  }

  getMoiveDetails(title: string) {
    return this.moiveList.filter((e) => {
      return e.title == title;
    })
  }

  deleteMoive(moiveName: string) {
    if (!moiveName) {
      let body = {
        'name': moiveName
      };
      return this.http.put('http://localhost:9090/moive/delete', body)
        .pipe(
          map((res) => {
            console.log(res);
          })
        )
    }    
  }
}
