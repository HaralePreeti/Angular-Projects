import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { NgstyleComponent } from './ngstyle/ngstyle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,NgstyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstApp';
  inputText:string='';
  inputText1:string='';

  userClick(userInput:string){
    this.inputText1=userInput;
  }
  heading:string='Binding In Angular';
  images:string[]=[
    "https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?cs=srgb&dl=pexels-guillaume-meurice-1591447.jpg&fm=jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/605/967/desktop-wallpaper-outdoor-natural-studio-backgrounds-nature-background.jpg"
  ]
  button1:boolean=false;
  button2:boolean=true;
  button3:boolean=false;

  btn1:string="Upload"
  btn2:string="submit"
  btn3:string="Cancel"

  result:string=" ";

  action1(){
    this.result="Button1 clicked";
  }
  action2(){
    this.result="Button2 clicked";
  }
  action3(){
    this.result="Button3 clicked";
  }
}
