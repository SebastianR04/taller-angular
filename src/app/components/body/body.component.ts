import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;
    frase: any = {
        mensaje: 'Dame un whisky. Estoy hambriento',
        autor: 'Iron Man'
    }

    personajes: string[] = ['Spiderman', 'Batman', 'Flash', 'Superman', 'WW', 'otro']
}