import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Directive } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,TestComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string = '';
  protaganist:string = 'Geralt'
  counterValue:number=0;
  showStarters:boolean=false;
  starterPokemon:string[] =["bulbasaur","squirtle","charmander"] ;
  display(name:string){
    alert(name);
  }
  increment(){
    this.counterValue++;
  }
  decrement(){
    this.counterValue--;
  }
  showStarter(){
    this.showStarters=true;
  }
}
