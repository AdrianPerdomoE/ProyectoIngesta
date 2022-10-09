import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/Proyecto';
import { Global } from 'src/app/services/Global';
import 'bootstrap';

@Component({
  selector: 'app-proyecto-preview',
  templateUrl: './proyecto-preview.component.html',
  styleUrls: ['./proyecto-preview.component.css']
})
export class ProyectoPreviewComponent implements OnInit {
  @Input() proyecto!: Proyecto; //obligatorio
  public url;
  public clicked: boolean = false;
  public SeeMore: boolean = false;
  constructor(private _router: Router) { 
  this.url = Global.url;
  }

  ngOnInit(): void {
  }
  verProyecto(){ 
    this._router.navigate(['/proyecto/'+this.proyecto._id])
}
}

