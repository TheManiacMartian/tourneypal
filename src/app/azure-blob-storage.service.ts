import { Injectable } from '@angular/core';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzureBlobStorageService {

  accountName = "tourneypalstorage"
  containerName = "data"

  constructor() { }

  public updateBlob(sas: string, blobName: string, content: Blob) : Promise<any>
  {
    return this.getContainerClient(sas).getBlockBlobClient(blobName).uploadData(content, { blobHTTPHeaders: {blobContentType: content.type}})
  }

  private getContainerClient(sas?: string): ContainerClient
  {
    let token = "";
    if (sas)
    {
      token = sas;
    }

    return new BlobServiceClient(`https://${this.accountName}.blob.core.windows.net?${token}`).getContainerClient(this.containerName);


  }
}
