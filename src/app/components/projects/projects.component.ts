import { Component } from '@angular/core';
import { PrimeModule } from '../../shared/prime/prime.module';
import { IconComponent } from '../../shared/icon/icon.component';

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
  responsiveOptions: any[] = [];
  displayVideoDialogFusion: boolean = false;
  displayVideoDialogElectro: boolean = false;

  ngOnInit() {
    // Lista de imágenes con miniaturas
    this.imagesElectroDash = [
      {
        itemImageSrc: 'electrodash/loginelectro.png',
        thumbnailImageSrc: 'electrodash/loginelectro.png',
      },
      {
        itemImageSrc: 'electrodash/dashelectro.png',
        thumbnailImageSrc: 'electrodash/dashelectro.png',
      },
      {
        itemImageSrc: 'electrodash/productoelectro.png',
        thumbnailImageSrc: 'electrodash/productoelectro.png',
      },
      {
        itemImageSrc: 'electrodash/ventaelectro.png',
        thumbnailImageSrc: 'electrodash/ventaelectro.png',
      },
    ];

    this.imagesFusionFood = [
      {
        itemImageSrc: 'fusionfood/loginfusion.png',
        thumbnailImageSrc: 'fusionfood/loginfusion.png',
      },
      {
        itemImageSrc: 'fusionfood/dashfusion.png',
        thumbnailImageSrc: 'fusionfood/dashfusion.png',
      },
      {
        itemImageSrc: 'fusionfood/foodfusion.png',
        thumbnailImageSrc: 'fusionfood/foodfusion.png',
      },
      {
        itemImageSrc: 'fusionfood/menufusion.png',
        thumbnailImageSrc: 'fusionfood/menufusion.png',
      },
    ];

    this.imagesPelisflix = [
      {
        itemImageSrc: 'pelisflix/bannerpelis.png',
        thumbnailImageSrc: 'pelisflix/bannerpelis.png',
      },
      {
        itemImageSrc: 'pelisflix/peliculas.png',
        thumbnailImageSrc: 'pelisflix/peliculas.png',
      },
      {
        itemImageSrc: 'pelisflix/detalle.png',
        thumbnailImageSrc: 'pelisflix/detalle.png',
      },
    ];

    // Opciones responsivas
    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 3 },
      { breakpoint: '768px', numVisible: 2 },
      { breakpoint: '560px', numVisible: 1 },
    ];
  }
}
