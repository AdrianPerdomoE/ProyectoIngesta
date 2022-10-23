import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { Global } from 'src/app/services/Global';

@Component({
  selector: 'app-display-file',
  templateUrl: './display-file.component.html',
  styleUrls: ['./display-file.component.css']
})
export class DisplayFileComponent implements OnInit {
  @Input() proyecto!: Proyecto; //obligatorio
  public url:string = Global.url
  constructor() { }

  ngOnInit(): void {
    
  }
 /* @HostListener('window:beforeunload')
  onUnload() {
    Captura el evento de cerrar la ventana

    return false;
  }*/
}
