import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string = '';
  protaganist:string = 'Geralt'
  counterValue:number=0;
  display(name:string){
    alert(name);
  }
  increment(){
    this.counterValue++;
  }
  decrement(){
    this.counterValue--;
  }
}
