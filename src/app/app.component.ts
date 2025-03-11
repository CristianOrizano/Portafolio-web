import { Component, HostListener, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeModule } from './shared/prime/prime.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { IconComponent } from './shared/icon/icon.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrimeModule,
    ProjectsComponent,
    IconComponent,
    AboutComponent,
    SkillsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();
  fullText: string = 'Full Stack Developer'; // Texto a escribir
  typedText: string = ''; // Texto dinámico
  typingSpeed: number = 100; // Velocidad de escritura (ms)
  deletingSpeed: number = 50; // Velocidad de borrado (ms)
  delayBeforeDelete: number = 3000; // Pausa antes de borrar (ms)
  loopDelay: number = 1000; // Pausa antes de volver a escribir (ms)
  isDeleting: boolean = false; // Indica si está borrando
  showCursor: boolean = true; // Controla la visibilidad del cursor
  index: number = 0; // Posición actual en el texto

  items = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skill' },
    { label: 'Projects', section: 'projects' },
  ];
  constructor(private renderer: Renderer2) {}
  activeSection = 'home';
  title = 'app-portafolio';
  isScrolled = false;
  ngOnInit(): void {
    this.startTypingEffect();
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.custom-menu');
      if (window.scrollY > 50) {
        this.renderer.addClass(navbar, 'scrolled');
      } else {
        this.renderer.removeClass(navbar, 'scrolled');
      }
    });
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.activeSection = section;
  }

  startTypingEffect(): void {
    const typingInterval = setInterval(
      () => {
        if (!this.isDeleting) {
          // Escribiendo letra por letra
          if (this.index < this.fullText.length) {
            this.typedText += this.fullText[this.index];
            this.index++;
          } else {
            // Esperar antes de borrar
            setTimeout(() => {
              this.isDeleting = true;
            }, this.delayBeforeDelete);
          }
        } else {
          // Borrando letra por letra
          if (this.index > 0) {
            this.typedText = this.fullText.substring(0, this.index - 1);
            this.index--;
          } else {
            // Reiniciar el estado para comenzar de nuevo
            this.isDeleting = false;
            this.showCursor = false; // Ocultar el cursor después de la primera iteración
            setTimeout(() => {
              this.index = 0;
              this.typedText = ''; // Reiniciar el texto
            }, this.loopDelay);
          }
        }
      },
      this.isDeleting ? this.deletingSpeed : this.typingSpeed
    );
  }
}
