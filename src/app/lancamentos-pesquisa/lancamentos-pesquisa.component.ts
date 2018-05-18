import { Component} from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2018, 3, 9),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date (2018, 3, 10),
      dataPagamento: new Date(2018, 4, 9), valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2018, 3, 20),
      dataPagamento: null, valor: 14321, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de Escola', dataVencimento: new Date(2018, 4, 23),
      dataPagamento: new Date(2018, 4, 30), valor: 500, pessoa: 'Escola Santa Luzia' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2018, 4, 18),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2018, 5, 4),
      dataPagamento: new Date(2018, 5, 2), valor: 800, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2018, 5, 7),
      dataPagamento: null, valor: 100, pessoa: 'Academia Mulk' }

  ];

}
