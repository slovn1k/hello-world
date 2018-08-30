import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})

export class PipesComponent {
  title = 'Pipes component';

  course = {
    title: 'The Complete Angular Course',
    rating: 4.9785,
    students: 23560,
    price: 190.95,
    releaseDate: new Date(2018, 8, 1)
  };
}
