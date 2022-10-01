import { Injectable } from '@angular/core';
import { Global } from "./Global";

@Injectable({
  providedIn: 'root'
})
  export class ArchivoService {
    public url: String;
    constructor() {
      this.url = Global.url;
    }
    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
      return new Promise((resolve, reject) => {
          var formData: any = new FormData();
          var xhr: any = new XMLHttpRequest();//objeto para peticiones asincronas
          for (let i = 0; i < files.length; i++) {
              formData.append(name, files[i], files[i].name);
          }
          xhr.onreadystatechange = () => {
              if (xhr.readyState == 4) {
                  if (xhr.status == 200) {
                      resolve(JSON.parse(xhr.response));
                  }
                  else {
                      reject(xhr.response);
                  }
              }
          }
          xhr.open("POST", url, true);
          xhr.send(formData);
      });
  }
   
}
