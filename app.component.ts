import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDirectives';
  search:string='';

  products=[
    {
      'image':'',
      'name':'',
      'mrp':25000.00,
      'Price':19000.00,
      'isAvailable':true
    },
    {
      'image':'',
      'name':'Product1',
      'mrp':25000.00,
      'Price':19000.00,
      'isAvailable':false
    },
    {
      'image':'',
      'name':'Product1',
      'mrp':25000.00,
      'Price':19000.00,
      'isAvailable':true
    },{
      'image':'',
      'name':'Product1',
      'mrp':25000.00,
      'Price':19000.00,
      'isAvailable':false
    },{
      'image':'',
      'name':'Product1',
      'mrp':25000.00,
      'Price':19000.00,
      'isAvailable':true
    }
  ]
}
