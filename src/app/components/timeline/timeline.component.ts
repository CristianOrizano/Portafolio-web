import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { PrimeModule } from '../../shared/prime/prime.module';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  icon: string;
  color: string;
}
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  experiences: ExperienceItem[];

  constructor() {
    this.experiences = [
      {
        company: 'VALTX',
        role: 'Analista Programador',
        period: 'Oct.2025 - Abr.2026',
        description: [
          'Desarrollé y mantuve aplicaciones internas de Backoffice, implementando funcionalidades frontend en Angular',
          'Implementé y desarrolle microservicios backend en Java, cumpliendo requerimientos funcionales y técnicos',
          'Participé en reuniones, definiendo soluciones técnicas',
          'Diseñé y gestioné base de datos en PostgreSQL, asegurando integrida y rendimiento',
        ],
        icon: 'pi pi-desktop',
        color: '#FF9800',
      },
      {
        company: 'Fractal',
        role: 'Programador Full Stack .Net',
        period: 'Abr.2025 - Jul.2025',
        description: [
          'Desarrollo de nuevas funcionalidades de sistemas existentes, adaptándolos a los nuevos requerimientos del negocio.',
          'Mantenimiento de aplicaciones, asegurando su funcionamiento y resolviendo incidencias de forma eficiente.',
          'Ejecucion de pruebas unitarias para garantizar la calidad del software.',
        ],
        icon: 'pi pi-briefcase',
        color: '#9C27B0',
      },
      {
        company: 'Fintech Solidario',
        role: 'Freelancer Full Stack',
        period: 'Ene.2025 - Mar.2025',
        description: [
          'Diseño y desarrollo de soluciones backend basadas en arquitectura de microservicios utilizando .NET Core, garantizando escalabilidad.',
          'Mantenimiento y optimización del frontend en Angular, promoviendo buenas prácticas y un código limpio y eficiente.',
          'Integración de servicios y APIs externas, asegurando comunicación fluida entre sistemas y aplicando estrategias de seguridad con autenticación y autorización basadas en JWT.',
        ],
        icon: 'pi pi-briefcase',
        color: '#673AB7',
      },
      {
        company: 'Sistemas Analíticos SA',
        role: 'Programador Full Stack',
        period: 'Ago.2024 - Oct.2024',
        description: [
          'Gestion y diseño de bases de datos, asegurando integridad y normalizacion',
          'Implementación de funcionalidades en React, optimizando la experiencia de usuario en la nueva plataforma web.',
          'Desarrollo modular, escalable y mantenible de microservicios en Node.js y Express, aplicando buenas prácticas de arquitectura y principios SOLID.',
        ],
        icon: 'pi pi-briefcase',
        color: '#607D8B',
      },
      {
        company: 'Jazani Consultora',
        role: 'Analista Programador Junior .Net',
        period: 'Oct.2023 - Abr.2024',
        description: [
          'Participación en reuniones con clientes para análisis de requerimientos y definición de funcionalidades.',
          'Integración de autenticación y autorización con JWT, fortaleciendo la seguridad en las aplicaciones.',
          'Desarrollo de microservicios en .NET Core y funcionalidades en React, integrando soluciones de backend y frontend.',
        ],
        icon: 'pi pi-desktop',
        color: '#FF9800',
      },
    ];
  }
}
