import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/Proyecto';
import { Global } from 'src/app/services/Global';


@Component({
  selector: 'app-proyecto-preview-panel',
  templateUrl: './proyecto-preview-panel.component.html',
  styleUrls: ['./proyecto-preview-panel.component.css']
})
export class ProyectoPreviewPanelComponent implements OnInit {
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
