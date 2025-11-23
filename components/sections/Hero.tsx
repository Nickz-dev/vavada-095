'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface Slide {
  id: string;
  desktopWebp: string;
  desktopWebp2x: string;
  desktopJpg: string;
  desktopJpg2x: string;
  mobileWebp: string;
  mobileWebp2x: string;
  mobileJpg: string;
  mobileJpg2x: string;
  alt: string;
  hasJackpotAnimation?: boolean;
  bottomText?: string;
}

const getSlides = (t: any): Slide[] => [
  {
    id: 'jackpot',
    desktopWebp: '/assets/images/slider/jackpot.desktop.webp',
    desktopWebp2x: '/assets/images/slider/jackpot.desktop.webp',
    desktopJpg: '/assets/images/slider/jackpot.desktop-1.jpg',
    desktopJpg2x: '/assets/images/slider/jackpot.desktop.x2.jpg',
    mobileWebp: '/assets/images/slider/jackpot.mobile-md.webp',
    mobileWebp2x: '/assets/images/slider/jackpot.mobile-md.webp',
    mobileJpg: '/assets/images/slider/jackpot.mobile.jpg',
    mobileJpg2x: '/assets/images/slider/jackpot.mobile.jpg',
    alt: 'Jackpot',
    hasJackpotAnimation: true,
    bottomText: t('slides.jackpot'),
  },
  {
    id: 'crypto',
    desktopWebp: '/assets/images/slider/crypto_new.desktop.webp',
    desktopWebp2x: '/assets/images/slider/crypto_new.desktop.webp',
    desktopJpg: '/assets/images/slider/crypto_new.desktop.webp',
    desktopJpg2x: '/assets/images/slider/crypto_new.desktop.x2.jpg',
    mobileWebp: '/assets/images/slider/crypto_new.mobile.webp',
    mobileWebp2x: '/assets/images/slider/crypto_new.mobile.webp',
    mobileJpg: '/assets/images/slider/crypto_new.mobile-sm.jpg',
    mobileJpg2x: '/assets/images/slider/crypto_new.mobile-sm.jpg',
    alt: 'Crypto',
    bottomText: t('slides.crypto'),
  },
  {
    id: 'maxbet',
    desktopWebp: '/assets/images/slider/maxbet.desktop.webp',
    desktopWebp2x: '/assets/images/slider/maxbet.desktop.webp',
    desktopJpg: '/assets/images/slider/maxbet.desktop.webp',
    desktopJpg2x: '/assets/images/slider/maxbet.desktop.x2.jpg',
    mobileWebp: '/assets/images/slider/maxbet.mobile.webp',
    mobileWebp2x: '/assets/images/slider/maxbet.mobile.webp',
    mobileJpg: '/assets/images/slider/maxbet.mobile-sm.jpg',
    mobileJpg2x: '/assets/images/slider/maxbet.mobile-sm.jpg',
    alt: 'Maxbet',
    bottomText: t('slides.maxbet'),
  },
  {
    id: 'sport',
    desktopWebp: '/assets/images/slider/sport.desktop.webp',
    desktopWebp2x: '/assets/images/slider/sport.desktop.webp',
    desktopJpg: '/assets/images/slider/sport.desktop.webp',
    desktopJpg2x: '/assets/images/slider/sport.desktop.x2.jpg',
    mobileWebp: '/assets/images/slider/sport.mobile.webp',
    mobileWebp2x: '/assets/images/slider/sport.mobile.webp',
    mobileJpg: '/assets/images/slider/sport.mobile.webp',
    mobileJpg2x: '/assets/images/slider/sport.mobile.x2.jpg',
    alt: 'Sport',
    bottomText: t('slides.sport'),
  },
];

/**
 * Hero компонент со слайдером
 */
export default function Hero() {
  const t = useTranslations('hero');
  const slides = useMemo(() => getSlides(t), [t]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [jackpotValues, setJackpotValues] = useState({
    major: 455.10,
    mega: 241528.98,
    minor: 180.57,
  });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Автопрокрутка слайдера
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Меняем слайд каждые 5 секунд

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  // Анимация джекпотов для первого слайда
  useEffect(() => {
    if (currentSlide === 0 && slides[0]?.hasJackpotAnimation) {
      const jackpotInterval = setInterval(() => {
        setJackpotValues((prev) => ({
          major: prev.major + Math.random() * 0.5,
          mega: prev.mega + Math.random() * 10,
          minor: prev.minor + Math.random() * 0.3,
        }));
      }, 1000);

      return () => clearInterval(jackpotInterval);
    }
  }, [currentSlide, slides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // Удаляем неиспользуемую переменную
  // const currentSlideData = slides[currentSlide];

  const currentSlideData = slides[currentSlide];

  return (
    <section className="w-full md:static m-0 p-0 md:mt-[-50px]">
      <div className="relative w-full overflow-hidden h-[100px] md:h-[385px]">
        {/* Слайды */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <picture className="banner_wrapper block w-full h-full">
              {/* Desktop WebP (2x) */}
              <source
                type="image/webp"
                media="(min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)"
                srcSet={slide.desktopWebp2x}
              />
              {/* Desktop WebP (1x) */}
              <source
                type="image/webp"
                media="(min-width: 1024px)"
                srcSet={slide.desktopWebp}
              />
              {/* Desktop JPG (2x) */}
              <source
                media="(min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)"
                srcSet={slide.desktopJpg2x}
              />
              {/* Desktop JPG (1x) */}
              <source
                media="(min-width: 1024px)"
                srcSet={slide.desktopJpg}
              />
              {/* Tablet WebP */}
              <source
                type="image/webp"
                media="(min-width: 669px) and (max-width: 1023px)"
                srcSet={`${slide.mobileWebp} 1x, ${slide.mobileWebp2x} 2x`}
              />
              {/* Tablet JPG */}
              <source
                media="(min-width: 669px) and (max-width: 1023px)"
                srcSet={`${slide.mobileJpg} 1x, ${slide.mobileJpg2x} 2x`}
              />
              {/* Mobile WebP */}
              <source
                type="image/webp"
                media="(max-width: 668px)"
                srcSet={`${slide.mobileWebp} 1x, ${slide.mobileWebp2x} 2x`}
              />
              {/* Mobile JPG */}
              <source
                media="(max-width: 668px)"
                srcSet={`${slide.mobileJpg} 1x, ${slide.mobileJpg2x} 2x`}
              />
              {/* Fallback Image */}
              <img
                src={slide.desktopJpg}
                alt={slide.alt}
                className="banner w-full h-full object-cover"
              />
            </picture>

            {/* Анимация джекпотов для первого слайда */}
            {index === 0 && slide.hasJackpotAnimation && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="grid grid-cols-3 gap-1 md:gap-8 max-w-4xl mx-auto px-1 md:px-4">
                  {/* Minor */}
                  <div className="text-center">
                    <div className="bg-black bg-opacity-70 px-1 py-0.5 md:px-4 md:py-2 rounded mb-1 md:mb-2">
                      <div className="text-white text-[8px] md:text-sm font-bold mb-0.5 md:mb-1">MINOR</div>
                      <div className="text-white text-[10px] md:text-2xl font-bold">
                        ${jackpotValues.minor.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  {/* Mega */}
                  <div className="text-center">
                    <div className="bg-yellow-500 bg-opacity-90 px-1 py-0.5 md:px-4 md:py-2 rounded mb-1 md:mb-2">
                      <div className="text-black text-[8px] md:text-sm font-bold mb-0.5 md:mb-1">MEGA</div>
                      <div className="text-black text-[10px] md:text-3xl font-bold">
                        ${jackpotValues.mega.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>

                  {/* Major */}
                  <div className="text-center">
                    <div className="bg-black bg-opacity-70 px-1 py-0.5 md:px-4 md:py-2 rounded mb-1 md:mb-2">
                      <div className="text-white text-[8px] md:text-sm font-bold mb-0.5 md:mb-1">MAJOR</div>
                      <div className="text-white text-[10px] md:text-2xl font-bold">
                        ${jackpotValues.major.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Навигационные точки */}
        <div className="absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 md:h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-4 md:w-8'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75 w-1 md:w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Враппер с текстом внизу для активного слайда */}
        {slides[currentSlide].bottomText && (
          <div
            className="absolute left-0 right-0 bottom-0 w-full transition-opacity duration-1000 z-20 py-1 md:py-3"
            style={{
              backgroundColor: 'rgba(26, 26, 46, 0.8)', // Темно-синий фон с opacity 0.8
            }}
          >
            <div className="carousel_jackpot-text text-center flex items-center justify-center">
              <span
                className="text-white md:text-yellow-400 font-bold uppercase tracking-wide text-[10px] md:text-xl leading-tight"
                style={{
                  fontFamily: 'sans-serif',
                  letterSpacing: '0.05em',
                }}
              >
                {slides[currentSlide].bottomText}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
