import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http : HttpClient) { }

  private json = 'https://random.dog/woof.json'

  getDog() {
    return this.http.get<Dog>(this.json);
  }
}
