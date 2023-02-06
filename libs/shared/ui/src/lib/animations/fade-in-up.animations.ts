import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

/**
 * Animation to simulate that an element is fading up
 * @param duration - duration in ms
 */
export function fadeInUpAnimation(duration: number): AnimationTriggerMetadata {
  return trigger('fadeInUp', [
    transition(':enter', [
      style({
        transform: 'translateY(20px)',
        opacity: 0
      }),
      animate(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
        transform: 'translateY(0)',
        opacity: 1
      }))
    ])
  ]);
}

export const fadeInUp400ms = fadeInUpAnimation(400);
