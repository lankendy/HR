import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { managerFileRouter, metadataServiceRouter } from './../../utils/api-router';
import { environment } from './../../../environments/environment';
import { _HttpClient } from '@delon/theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileManagerService {
  constructor(
    private httpClient: _HttpClient,
    private http: HttpClient
  ) { }

  getListFile(currentPage: number, pageSize: number, queryString: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URI.FILE_SERVICE_API +
      managerFileRouter.getFileFilter +
      '?currentPage=' +
      currentPage +
      '&pageSize=' +
      pageSize +
      '&queryString=' +
      queryString,
    );
  }

  getFileById(id: any): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URI.FILE_SERVICE_API + managerFileRouter.getFile + '/' + id);
  }

  getFilesByParent(parentId: string): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URI.FILE_SERVICE_API + managerFileRouter.getFileByParent + `?parentId=${parentId}`,
    );
  }

  getListMetadataClasses(
    applicationId: string,
    currentPage: number,
    pageSize: number,
    queryString: string,
  ): Observable<any> {
    return this.httpClient.get(
      environment.BASE_API_URI.METADATA_SERVICE_API +
      metadataServiceRouter.getFilter +
      '?applicationId=' +
      applicationId +
      '&page=' +
      currentPage +
      '&size=' +
      pageSize +
      '&filter=' +
      queryString,
    );
  }

  uploadMultifile(listFile: any, parentIds: string): Observable<any> {
    const frmData = new FormData();
    const leng = listFile.length;
    for (let i = 0; i < leng; i++) {
      frmData.append('Files', listFile[i]);
    }
    frmData.append('ParentIds', parentIds);
    return this.httpClient.post(environment.BASE_API_URI.FILE_SERVICE_API + managerFileRouter.uploadMultiFile, frmData);
  }

  uploadAFile(File: any, parentIds: string): Observable<any> {
    const frmData = new FormData();
    frmData.append('File', File);
    frmData.append('ParentIds', parentIds);
    return this.httpClient.post(environment.BASE_API_URI.FILE_SERVICE_API + managerFileRouter.uploadaAFile, frmData);
  }

  async downloadAFileFromAPI(dataFile) {
    let file = await this.http.get(
      environment.BASE_API_URI.FILE_SERVICE_API + managerFileRouter.downloadFile + '/' + dataFile.id,
      { responseType: 'blob' }
    ).toPromise();
    this.downLoadFileToPc(
      file,
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      dataFile.metadata.fileName,
    );
  }

  deleteFile(dataFile) {
    return this.httpClient.delete(
      environment.BASE_API_URI.FILE_SERVICE_API + managerFileRouter.deleteFile + '/' + dataFile.id,
    );
  }

  choiceIconFile(name) {
    let icon = 'file';
    try {
      const nameFile = name.substring(name.lastIndexOf('.'), name.length);
      switch (nameFile) {
        case '.txt':
          icon = 'file-text';
          break;
        case '.pdf':
          icon = 'file-pdf';
          break;
        case '.xlsx':
          icon = 'file-excel';
          break;
        case '.jpg':
        case '.png':
          icon = 'file-image';
          break;
        case '.zip':
          icon = 'file-zip';
          break;
        case '.doc':
        case '.docx':
          icon = 'file-word';
          break;
        case '.ppt':
        case '.pptx':
          icon = 'file-ppt';
          break;
        default:
          icon = 'file';
          break;
      }
      return icon;
    } catch (error) { }
  }

  getFormat(name) {
    return name && name != null ? name.substring(name.lastIndexOf('.'), name.length) : '';
  }

  getSizebyMB(sizeKB) {
    return sizeKB && sizeKB != null ? Math.round((sizeKB / 1048576) * 100) / 100 : '';
  }

  downLoadFileToPc(data: any, type: string, filename) {
    const blob = new Blob([data], { type });
    const url = window.URL.createObjectURL(blob);

    // create hidden dom element (so it works in all browsers)
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);

    // create file, attach to hidden element and open hidden element
    a.href = url;
    a.download = filename;
    a.click();
  }
}
