import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {

  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('content') content!: ElementRef;
  @ViewChild('background') background!: ElementRef;
  @ViewChild('ctaButton') ctaButton!: ElementRef;

  ngAfterViewInit(): void {
    // Timeline para animar a entrada dos elementos de forma elegante
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.from(this.content.nativeElement, { opacity: 0, x: -50, duration: 1 })
      .from(this.ctaButton.nativeElement, { opacity: 0, scale: 0.95, duration: 1 }, '-=0.6');

    // Efeito parallax suave no fundo durante o scroll
    gsap.to(this.background.nativeElement, {
      scrollTrigger: {
        trigger: this.heroSection.nativeElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      x: 50,
      ease: 'none'
    });
  }
}
