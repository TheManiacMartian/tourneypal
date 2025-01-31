import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { AzureBlobStorageService } from './azure-blob-storage.service';

import { environment } from '../environments/environment.example';

const blobName = 'streamdata.json';
const streamDataUrl = 'https://tourneypalstorage.blob.core.windows.net/data/streamdata.json';

@Injectable({
  providedIn: 'root'
})
export class StreamDataService{
  // This script will manage the editing of the stream data JSON.

  constructor(private readonly http: HttpClient, private readonly blobStorage: AzureBlobStorageService){}

  data: any;

  /* gets the data from the file */
  async getSetData(): Promise<any>
  {
    const data = await fetch(streamDataUrl);
    return await data.json() ?? [];
  }
  
  /* Update the set data */
  updateSetData(setData: any): Promise<any>
  {
    // make set data into correct form
    const setDataJson = new File([JSON.stringify(setData)], "streamdata.json", {type: "application/json"});

    console.log("Hi");

    console.log(environment.AZURE_BLOB_STORAGE_SAS);

    return this.blobStorage.updateBlob(environment.AZURE_BLOB_STORAGE_SAS, blobName, setDataJson);
  }
}
