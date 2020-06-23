import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../models/tema.model';
import { Estilo } from '../models/estilo.model';
import { Tecnica } from '../models/tecnica.model';
import { Superficie } from '../models/superficie.model';
import { Tamanho } from '../models/tamanho.model';
import { TemasService } from '../services/temas.service';
import { EstilosService } from '../services/estilos.service';
import { TecnicasService } from '../services/tecnicas.service';
import { TamanhosService } from '../services/tamanhos.service';
import { SuperficiesService } from '../services/superficies.service';
import { ArtesService } from '../services/artes.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-artes',
    templateUrl: './artes.component.html',
    styleUrls: ['./artes.component.scss']
})
export class ArtesComponent implements OnInit {

    temas: Observable<Tema[]>;
    estilos: Observable<Estilo[]>;
    tecnicas: Observable<Tecnica[]>;
    tamanhos: Observable<Tamanho[]>;
    superficies: Observable<Superficie[]>;
    artes: Observable<Superficie[]>;

    constructor(
        private router: Router,
        private temasService: TemasService,
        private estilosService: EstilosService,
        private tecnicasService: TecnicasService,
        private tamanhosService: TamanhosService,
        private superficiesService: SuperficiesService,
        private artesService: ArtesService,
        private storage: AngularFireStorage
    ) { }

    ngOnInit(): void {
        this.temas = this.temasService.getObservable();
        this.estilos = this.estilosService.getObservable();
        this.tecnicas = this.tecnicasService.getObservable();
        this.tamanhos = this.tamanhosService.getObservable();
        this.superficies = this.superficiesService.getObservable();
        this.artes = this.artesService.getObservable();
    }

    editarEstilo(estilo: Estilo) {
        this.router.navigate([`home/estilos/${estilo.id}/edicao`]);
    }

}
