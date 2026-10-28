import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  imports: [RouterLink],
  selector: 'app-content',
  styleUrls: ['./content.css', './content.responsive.component.css'],
  templateUrl: './content.html',
})
export class Content {
  private readonly route = inject(ActivatedRoute);
  photoCover = '';
  contentTitle = 'Notícia não encontrada';
  contentDescription = '';

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const article = dataFake.find((item) => item.id === id);

    if (article) {
      this.photoCover = article.photo;
      this.contentTitle = article.title;
      this.contentDescription = article.description;
    } else {
      this.contentDescription = `Não existe notícia com o ID ${id}.`;
    }
  }
}
