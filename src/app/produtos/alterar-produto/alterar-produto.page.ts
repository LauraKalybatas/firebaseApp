import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/Produto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.page.html',
  styleUrls: ['./alterar-produto.page.scss'],
})
export class AlterarProdutoPage implements OnInit {

  produto: Produto = new Produto();
salvar: any;

  constructor(
    private prodService: ProdutoService,
    private router: Router,
    private rotaAtiva: ActivatedRoute
  ) {
    this.produto.id = this.rotaAtiva.snapshot.params['id'];
  }

  ngOnInit() {
    this.prodService.alterar(this.produto);
    this.router.navigateByUrl('/');
  }

}
