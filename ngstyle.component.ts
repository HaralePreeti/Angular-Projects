import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngstyle',
  standalone: true,
  imports: [NgStyle,CommonModule],
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.css'
})
export class NgstyleComponent {
  flag:boolean=false;

  changeColors(){
      this.flag = !this.flag;
  }

}
