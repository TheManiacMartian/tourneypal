import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

const url = 'http://localhost:3000/set';


@Injectable({
  providedIn: 'root'
})
export class StreamDataService{
  // This script will manage the editing of the stream data JSON.

  constructor(private readonly http: HttpClient){}

  data: any;

  /** gets the data from the file */
  async getSetData(): Promise<any>
  {
    const data = await fetch(url);
    return await data.json() ?? [];
  }
  
  updateSetData(setData: any): Observable<any>
  {
    return this.http.put<any>(url, setData).pipe();
  }
}
