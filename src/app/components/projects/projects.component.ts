import { Component } from '@angular/core';
import { PrimeModule } from '../../shared/prime/prime.module';
import { IconComponent } from '../../shared/icon/icon.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PrimeModule, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  imagesElectroDash: any[] = [];
  imagesFusionFood: any[] = [];
  imagesPelisflix: any[] = [];
  imagesMicros: any[] = [];
  responsiveOptions: any[] = [];
  displayVideoDialogFusion: boolean = false;
  displayVideoDialogElectro: boolean = false;

  ngOnInit() {
    AOS.init({
      duration: 1500,
      once: false, // 👈 permite desaparecer y reaparecer
    });
    // Lista de imágenes con miniaturas
    this.imagesElectroDash = [
      {
        itemImageSrc: 'electrodash/loginelectro.webp',
        thumbnailImageSrc: 'electrodash/loginelectro.webp',
      },
      {
        itemImageSrc: 'electrodash/dashelectro.webp',
        thumbnailImageSrc: 'electrodash/dashelectro.webp',
      },
      {
        itemImageSrc: 'electrodash/productoelectro.webp',
        thumbnailImageSrc: 'electrodash/productoelectro.webp',
      },
      {
        itemImageSrc: 'electrodash/ventaelectro.webp',
        thumbnailImageSrc: 'electrodash/ventaelectro.webp',
      },
    ];

    this.imagesFusionFood = [
      {
        itemImageSrc: 'fusionfood/loginfusion.webp',
        thumbnailImageSrc: 'fusionfood/loginfusion.webp',
      },
      {
        itemImageSrc: 'fusionfood/dashfusion.webp',
        thumbnailImageSrc: 'fusionfood/dashfusion.webp',
      },
      {
        itemImageSrc: 'fusionfood/foodfusion.webp',
        thumbnailImageSrc: 'fusionfood/foodfusion.webp',
      },
      {
        itemImageSrc: 'fusionfood/menufusion.webp',
        thumbnailImageSrc: 'fusionfood/menufusion.webp',
      },
    ];

    this.imagesPelisflix = [
      {
        itemImageSrc: 'pelisflix/bannerpelis.webp',
        thumbnailImageSrc: 'pelisflix/bannerpelis.webp',
      },
      {
        itemImageSrc: 'pelisflix/movies.webp',
        thumbnailImageSrc: 'pelisflix/movies.webp',
      },
    ];

    this.imagesMicros = [
      {
        itemImageSrc: 'micro/spring2.png',
        thumbnailImageSrc: 'micro/spring2.png',
      },
    ];

    // Opciones responsivas
    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 3 },
      { breakpoint: '768px', numVisible: 2 },
      { breakpoint: '560px', numVisible: 1 },
    ];
  }
  redirectToUrl() {
    window.open('https://app-pelisflix-react-cristiano.netlify.app/', '_blank');
  }
}
