import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // Importando botões do Material
import { MatToolbarModule } from '@angular/material/toolbar'; // Se estiver usando `mat-toolbar`


@Component({
  selector: 'app-root',
  standalone: true, // Indica que este componente é standalone
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Pontuação dos Times
  pontosA = 0;
  pontosB = 0;

  // Função para incrementar os pontos
  incrementarPontos(time: string): void {
    if (time === 'A') {
      this.pontosA++;
    } else if (time === 'B') {
      this.pontosB++;
    }
  }

  // Função para decrementar os pontos
  decrementarPontos(time: string): void {
    if (time === 'A' && this.pontosA > 0) {
      this.pontosA--;
    } else if (time === 'B' && this.pontosB > 0) {
      this.pontosB--;
    }
  }

  // Função para posicionar os atletas na quadra
  posicionarAtleta(atleta: string): void {
    console.log(`Posicionando o atleta ${atleta}`);
    // Aqui você pode adicionar a lógica para realizar alguma ação ao clicar no atleta, como mover o botão ou salvar a posição.
  }
}
