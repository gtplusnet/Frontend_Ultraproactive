import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { WOW } from 'wowjs';
import Swiper from 'swiper';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        new WOW().init();
        this.parallax();
        this.home_swiper();
        this.product_swiper();
        this.testimonial_swiper();
    }

    home_swiper(): void {
        const swiper = new Swiper('.home-swiper-container', {
            autoplay:
            {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    product_swiper(): void {
        const swiper = new Swiper('.product-container',
        {
            slidesPerView: 4,
            // autoplay:
            // {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            spaceBetween: 16,

            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    testimonial_swiper(): void {
        const swiper = new Swiper('.testimonial-swiper-container',
        {
            effect: 'coverflow',
            grabCursor: true,
            slidesPerView: 4,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
            },
            autoplay:
            {
                delay: 2500,
                disableOnInteraction: false,
            },
            spaceBetween: 16,

            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    }

    parallax(): void {
        if ('ontouchstart' in window) {
            document.documentElement.className = document.documentElement.className + ' touch';
        }

        if (!$('html').hasClass('touch')) {
            /* background fix */
            $('.parallax').css('background-attachment', 'fixed');
        }

        $(window).resize(this.fullscreenFix);
        this.fullscreenFix();

        $(window).resize(this.backgroundResize);
        $(window).focus(this.backgroundResize);
        this.backgroundResize();

        if (!$('html').hasClass('touch')) {
            $(window).resize(this.parallaxPosition);
            // $(window).focus(this.parallaxPosition);
            $(window).scroll(this.parallaxPosition);
            this.parallaxPosition();
      }
  }

  fullscreenFix(): void {
    const h = $('body').height();
      // set .fullscreen height
        $('.content-b').each(function(i) {
            if ($(this).innerHeight() > h) {
                $(this).closest('.fullscreen').addClass('overflow');
        }
    });
  }

  backgroundResize(): void {
    const windowH = $(window).height();
      $('.background').each(function(i) {
          const path = $(this);
          // constiables
          const contW = path.width();
          const contH = path.height();
          let imgW = parseInt(path.attr('data-img-width'), null);
          let imgH = parseInt(path.attr('data-img-height'), null);
          const ratio = imgW / imgH;
          // overflowing difference
          let diff = parseFloat(path.attr('data-diff'));
          diff = diff ? diff : 0;
          // remaining height to have fullscreen image only on parallax
          let remainingH = 0;
          if (path.hasClass('parallax') && !$('html').hasClass('touch')) {
                const maxH = contH > windowH ? contH : windowH;
                remainingH = windowH - contH;
          }
          // set img values depending on cont
          imgH = contH + remainingH + diff;
          imgW = imgH * ratio;
          // fix when too large
          if (contW > imgW) {
              imgW = contW;
              imgH = imgW / ratio;
          }
          //
          path.data('resized-imgW', imgW);
          path.data('resized-imgH', imgH);
          path.css('resized-imgH', imgW + 'px ' + imgH + 'px');
      });
  }

  parallaxPosition(): void {
      const heightWindow = $(window).height();
      const topWindow = $(window).scrollTop();
      const bottomWindow = topWindow + heightWindow;
      const currentWindow = (topWindow + bottomWindow) / 2;
      $('.parallax').each(function(i) {
          const path = $(this);
          const height = path.height();
          let top = path.offset().top;
          let bottom = top + height;
          // only when in range
          if (bottomWindow > top && topWindow < bottom) {
              const imgW = path.data('resized-imgW');
              const imgH = path.data('resized-imgH');
              // min when image touch top of window
              const min = 0;
              // max when image touch bottom of window
              const max = - imgH + heightWindow;
              // overflow changes parallax
              const overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
              top = top - overflowH;
              bottom = bottom + overflowH;
              // value with linear interpolation
              const value = min + (max - min) * (currentWindow - top) / (bottom - top);
              // set background-position
              let orizontalPosition = path.attr('data-oriz-pos');
              orizontalPosition = orizontalPosition ? orizontalPosition : '50%';
              $(this).css('background-position', orizontalPosition + ' ' + value + 'px');
          }
      });
  }
}
