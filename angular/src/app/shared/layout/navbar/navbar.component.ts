import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../services/usuario.service';
import { SidebarService } from './../../services/sidebar.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario: Usuario;
  constructor(private _SIDEBAR: SidebarService, 
              private _USUARIOSERVICE: UsuarioService) {

    this.usuario = this._USUARIOSERVICE.usuario;

  }

  ngOnInit() {
    this._SIDEBAR.cargarMenu();
  }

  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

}
