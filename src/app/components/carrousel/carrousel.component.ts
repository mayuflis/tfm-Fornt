import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
  carouselItems = [
    {
      backgroundImage: 'assets/images/best_rating_2.png',
      content: 'Contenido para la primera imagen'
    },
    {
      backgroundImage: 'assets/images/filter.png',
      content: 'Contenido para la segunda imagen'
    },
    {
      backgroundImage: 'assets/images/best_rating_3.png',
      content: 'Contenido para la tercera imagen'
    }
    
  ];
  activeSlide = 0;
  private scrollDelta = 0;
  private threshold = 100;

  onScroll(event: WheelEvent) {
    this.scrollDelta += event.deltaY;

    if (this.scrollDelta > this.threshold) {
      this.nextSlide();
      this.scrollDelta = 0;
    } else if (this.scrollDelta < -this.threshold) {
      this.previousSlide();
      this.scrollDelta = 0;
    }
  }

  nextSlide() {
    if (this.activeSlide < this.carouselItems.length - 1) {
      this.activeSlide++;
    }
  }

  previousSlide() {
    if (this.activeSlide > 0) {
      this.activeSlide--;
    }
  }
}
