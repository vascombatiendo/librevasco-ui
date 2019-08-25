import { Component, OnInit } from '@angular/core';
import { LibrosService } from './services/libros.service';
import { Libro } from './models/libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  libros: Libro[] = []

  constructor(public _librosService: LibrosService){

  }

  ngOnInit(){
    this.getLibros();
  }

  getLibros() {
    this._librosService.getLibros()
      .subscribe( (libros) => {
        this.libros = libros;
        console.log(this.libros)
      })
  }
}
