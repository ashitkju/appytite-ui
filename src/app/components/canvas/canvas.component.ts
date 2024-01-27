import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, FooterComponent],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent {

}
