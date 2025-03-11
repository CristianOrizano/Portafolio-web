import { Component, Input } from '@angular/core';
import { PrimeModule } from '../prime/prime.module';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  @Input() name!: string;
}
