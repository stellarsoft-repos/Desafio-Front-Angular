import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getWelcomeMessage(): Observable<string> {
    return of('Bem-vindo ao Desafio Front Angular');
  }

  getDescription(): Observable<string> {
    return of('Esta é a página inicial da aplicação.');
  }
}
