import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* => place', [
    query(
      '.profile-name',
      animate(
        1000,
        style({
          transform: 'translate3d(140px, -125px, 0) scale(0.75)',
          color: 'white'
        })
      ),
      { optional: true }
    )
  ])
]);
