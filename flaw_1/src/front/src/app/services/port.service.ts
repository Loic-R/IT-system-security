import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortService {

  constructor(private http: HttpClient) { }

  public getFreePorts(range: string) : Observable<string[]> {
    return this.http.post<string[]>(environment.api + '/ports', { "ports": range });
  }
}
