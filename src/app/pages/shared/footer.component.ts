import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class="footer-container max-width">
        <div class="left-container">
          <div>
            <p><b>PRODUITS</b></p>
            <a routerLink="/products/electronics">Electronique</a>
            <a routerLink="/products/jewelery">Bijoux</a>
            <a routerLink="/products/men's clothing">Vêtements pour homes</a>
            <a routerLink="/products/women's clothing">Vêtements pour femmes</a>
          </div>
          <div>
            <p><b>LIENS</b></p>
            <a href="#" target="blank">Tutorial Youtube</a>
            <a href="#" target="blank">Code Github</a>
            <a href="#" target="blank">Malakisi</a>
          </div>
        </div>
        <p>
          <b>ngDuka 0 {{ date.getFullYear() }}</b> <br />
          Développé par Amani Bisimwa, popularisé par Malakisi
        </p>
      </div>
    </footer>
  `,
  styles: `
  footer{
    background:#e4e4e4;
  }
  .footer-container{
    display:flex;
    justify-content:space-between;
    align-items:end;
    padding:2rem;
    flex-wrap:wrap;
  }
  .left-container{
    display:flex;
    flex-wrap:wrap;
    gap:3rem;
    a{
      display:block;
      margin:0.5rem 0 
    }
  }
  `,
})
export class FooterComponent {
  date = new Date();
}
