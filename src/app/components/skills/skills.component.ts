import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { PrimeModule } from '../../shared/prime/prime.module';
import Aos from 'aos';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [IconComponent, PrimeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  ngOnInit() {
    Aos.init({
      duration: 1500,
      once: false, // 👈 permite desaparecer y reaparecer
    });
  }
}
