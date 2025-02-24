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
  @ViewChild('hero') heroSection!: ElementRef;
  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroImage') heroImage!: ElementRef;

  ngAfterViewInit(): void {
    // Anima a imagem surgindo do centro
    gsap.from('.hero-image-container', {
      width: 0,
      height: 0,
      duration: 1.5,
      ease: 'power2.out'
    });
    gsap.to('.hero-image-container', {
      opacity: 1,
      width: '100%',
      height: '100%',
      duration: 1.5,
      delay: 0.5
    });
    // Divide o texto em caracteres e anima letra por letra
    const text = this.heroTitle.nativeElement;
    const chars = text.textContent.split('');
    text.textContent = '';
    
    // Cria spans para cada caractere
    chars.forEach((char: any) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      text.appendChild(span);
    });

    // Anima cada caractere com stagger
    gsap.from(text.children, {
      opacity: 0,
      y: 20,
      rotateY: 90,
      duration: 0.8,
      stagger: 0.05,
      ease: 'back.out',
      delay: 0.5
    });
  }
}