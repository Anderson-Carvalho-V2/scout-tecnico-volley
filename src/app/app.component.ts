import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pontosA = 0;
  pontosB = 0;
  painelVisivel: string = 'quadra'; // 'quadra' será o painel padrão, e 'acao' será o painel de "Ação do Atleta"

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

  // Função para alternar entre a quadra e o painel de ação do atleta
  exibirPainelAcao(): void {
    this.painelVisivel = 'acao'; // Muda para o painel de "Ação do Atleta"
  }

  // Função chamada quando um botão de ação é clicado
  exibirAcaoAtleta(acao: string): void {
    console.log(`Ação do Atleta: ${acao}`); // Imprime a ação para fins de depuração

    // Aqui, você pode adicionar a lógica de ações do atleta
    // Exemplo: Mostrar um painel específico baseado na ação
    // Mas, para sua necessidade, altere para mostrar o painel de ação do atleta
    this.painelVisivel = 'acao'; // Isso troca para o painel de ação do atleta
  }

  // Função para voltar para a quadra
  voltarParaQuadra(): void {
    this.painelVisivel = 'quadra'; // Volta para o painel da quadra
  }

  // Função para posicionar os atletas na quadra
  posicionarAtleta(atleta: string): void {
    console.log(`Posicionando o atleta ${atleta}`);
  }
}
