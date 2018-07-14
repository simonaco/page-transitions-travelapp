import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html'
})
export class StarRatingComponent {

  private maxRating = 10;
  private defaultRating = 4;
  private maxValue = Math.ceil(this.maxRating / 2);
  private _rating = 0;
  stars: number[] = Array.from(Array(this.defaultRating).keys());
  emptyStars: number[] = Array.from(Array(this.maxValue - this.defaultRating).keys());

  @Input('rating')
  set rating(value: number) {
    this._rating = Math.max(0, Math.min(this.maxRating, value));
    const scaledRating = Math.ceil(this._rating / 2);
    this.stars = Array.from(Array(scaledRating).keys());
    this.emptyStars = Array.from(Array(this.maxValue - scaledRating).keys());
  }
  get rating(): number {
    return this.stars.length;
  }

}
