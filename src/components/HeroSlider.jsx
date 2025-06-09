import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/slider/hero1.png',
    title: 'Unleash The RC Power',
    subtitle: 'Premium Remote Control Vehicles',
    description: 'Experience the thrill of high-performance RC cars, drones, and boats'
  },
  {
    image: '/images/slider/hero2.png',
    title: 'Speed Meets Precision',
    subtitle: 'Professional Grade Models',
    description: 'Built for enthusiasts who demand excellence and performance'
  },
  {
    image: '/images/slider/hero3.png',
    title: 'Adventure Awaits',
    subtitle: 'Off-Road Champions',
    description: 'Conquer any terrain with our rugged RC collection'
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isPlaying]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full h-screen relative overflow-hidden group">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Dynamic overlay based on slide */}
          <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-1000 ${
            index === 0 
              ? 'from-purple-900/60 via-blue-900/40 to-transparent'
              : index === 1
              ? 'from-red-900/60 via-orange-900/40 to-transparent'
              : 'from-green-900/60 via-teal-900/40 to-transparent'
          }`} />
        </div>
      ))}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content - Dynamic corner positioning */}
      <div className="absolute inset-0 z-20">
        {/* Animated content with different corner layouts per slide */}
        <div 
          key={current} 
          className={`animate-fade-in-up h-full ${
            current === 0 
              ? 'flex items-end justify-start' // Bottom-left
              : current === 1
              ? 'flex items-start justify-end' // Top-right
              : 'flex items-center justify-start' // Middle-left
          }`}
        >
          <div className={`px-8 md:px-16 ${
            current === 0 
              ? 'pb-20 max-w-2xl' // Bottom-left positioning
              : current === 1
              ? 'pt-20 pr-8 max-w-xl text-right' // Top-right positioning
              : 'max-w-2xl' // Middle-left positioning
          }`}>
            {/* Decorative line */}
            <div className={`w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mb-6 ${
              current === 1 ? 'ml-auto' : ''
            }`}></div>
            
            {/* Subtitle with background */}
            <div className={`inline-block bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mb-4 ${
              current === 1 ? 'float-right clear-both' : ''
            }`}>
              <p className="text-sm md:text-base text-white/90 font-semibold tracking-wider uppercase">
                {slides[current].subtitle}
              </p>
            </div>
            
            {/* Main title */}
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight ${
              current === 1 ? 'text-right' : 'text-left'
            }`}>
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
                {slides[current].title.split(' ').map((word, i) => (
                  <span 
                    key={i} 
                    className="inline-block mr-4 animate-slide-in-word"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>
            
            {/* Description */}
            <p className={`text-lg md:text-xl text-white/80 mb-8 font-light leading-relaxed max-w-lg ${
              current === 1 ? 'text-right ml-auto' : 'text-left'
            }`}>
              {slides[current].description}
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex gap-4 ${
              current === 1 ? 'justify-end' : 'justify-start'
            } ${current === 0 ? 'flex-col sm:flex-row' : 'flex-row'}`}>
              <button className="group bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 relative overflow-hidden">
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md">
                Learn More
              </button>
            </div>

            {/* Decorative corner accent */}
            <div className={`absolute ${
              current === 0 
                ? 'bottom-8 left-8 w-12 h-12 border-l-4 border-b-4'
                : current === 1
                ? 'top-8 right-8 w-12 h-12 border-r-4 border-t-4'
                : 'left-8 top-1/2 -translate-y-1/2 w-12 h-12 border-l-4 border-t-4'
            } border-yellow-400 opacity-60`}></div>
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6">
        {/* Slide indicators */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === current
                  ? 'w-12 h-3 bg-white rounded-full'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full'
              }`}
            />
          ))}
        </div>

        {/* Play/Pause button */}
        <button
          onClick={togglePlayPause}
          className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-100 ease-linear"
          style={{ 
            width: isPlaying ? `${((current + 1) / slides.length) * 100}%` : '0%'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;