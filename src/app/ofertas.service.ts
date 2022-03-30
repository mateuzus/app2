import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/ofertas'

    public getOfertas() {
     return this.http.get(this.url)
      .toPromise().then((response) => response)
    }
}
