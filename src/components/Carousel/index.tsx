// import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from 'react';

// export interface CarouselProps {
//   children: ReactNode[];
//   width?: string;
//   height?: string;
//   autoPlay?: boolean;
//   autoPlayInterval?: number;
//   showArrows?: boolean;
//   showIndicators?: boolean;
//   className?: string;
// }

// const Carousel: React.FC<CarouselProps> = ({
//   children,
//   width = '100%',
//   height = '400px',
//   autoPlay = false,
//   autoPlayInterval = 5000,
//   showArrows = true,
//   showIndicators = true,
//   className = '',
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [zoomIndex, setZoomIndex] = useState<number | null>(null);
//   const slideCount = children.length;
//   const timeoutRef = useRef<number | null>(null);

//   const resetTimeout = () => {
//     if (timeoutRef.current !== null) {
//       window.clearTimeout(timeoutRef.current);
//     }
//   };

//   useEffect(() => {
//     if (autoPlay) {
//       resetTimeout();
//       timeoutRef.current = window.setTimeout(() => {
//         handleNext();
//       }, autoPlayInterval);
//     }
//     return () => resetTimeout();
//   }, [currentIndex, autoPlay, autoPlayInterval]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
//   };

//   const goToIndex = (index: number) => {
//     setCurrentIndex(index);
//   };

//   const openZoom = (index: number) => {
//     setZoomIndex(index);
//   };

//   const closeZoom = () => {
//     setZoomIndex(null);
//   };

//   /* Styles */
//   const containerStyle: CSSProperties = {
//     position: 'relative',
//     width,
//     height,
//     overflow: 'hidden',
//   };

//   const sliderStyle: CSSProperties = {
//     display: 'flex',
//     height: '100%',
//     transition: 'transform 0.5s ease-in-out',
//     transform: `translateX(-${currentIndex * 100}%)`,
//   };

//   const slideStyle: CSSProperties = {
//     flex: '0 0 100%',
//     height: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'zoom-in',
//   };

//   const arrowStyle: CSSProperties = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     background: 'rgba(0, 0, 0, 0.5)',
//     border: 'none',
//     color: '#fff',
//     padding: '0.5rem 1rem',
//     cursor: 'pointer',
//     zIndex: 1,
//   };

//   const indicatorContainerStyle: CSSProperties = {
//     position: 'absolute',
//     bottom: '10px',
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '0.5rem',
//     zIndex: 1,
//   };

//   const indicatorStyle = (active: boolean): CSSProperties => ({
//     width: '10px',
//     height: '10px',
//     borderRadius: '50%',
//     background: active ? '#000' : '#ccc',
//     cursor: 'pointer',
//   });

//   const overlayStyle: CSSProperties = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'rgba(0, 0, 0, 0.8)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 1000,
//     cursor: 'zoom-out',
//   };

//   const zoomImageStyle: CSSProperties = {
//     maxWidth: '90%',
//     maxHeight: '90%',
//   };

//   return (
//     <>
//       <div className={className} style={containerStyle}>
//         {showArrows && (
//           <button
//             style={{ ...arrowStyle, left: '10px' }}
//             onClick={handlePrev}
//             aria-label="Previous slide"
//           >
//             ‹
//           </button>
//         )}

//         <div style={sliderStyle}>
//           {children.map((child, idx) => (
//             <div
//               key={idx}
//               style={slideStyle}
//               onClick={() => openZoom(idx)}
//               role="button"
//               aria-label={`Zoom slide ${idx + 1}`}
//             >
//               {child}
//             </div>
//           ))}
//         </div>

//         {showArrows && (
//           <button
//             style={{ ...arrowStyle, right: '10px' }}
//             onClick={handleNext}
//             aria-label="Next slide"
//           >
//             ›
//           </button>
//         )}

//         {showIndicators && (
//           <div style={indicatorContainerStyle}>
//             {children.map((_, idx) => (
//               <div
//                 key={idx}
//                 style={indicatorStyle(idx === currentIndex)}
//                 onClick={() => goToIndex(idx)}
//                 aria-label={`Go to slide ${idx + 1}`}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {zoomIndex !== null && (
//         <div style={overlayStyle} onClick={closeZoom}>
//           {/* @ts-ignore */}
//           <img
//             src={(children[zoomIndex] as any).props.src}
//             alt={(children[zoomIndex] as any).props.alt}
//             style={zoomImageStyle}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default Carousel;

import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from 'react';

export interface CarouselProps {
  children: ReactNode[];
  width?: string;
  height?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  width = '100%',
  height = '400px',
  autoPlay = false,
  autoPlayInterval = 5000,
  showArrows = true,
  showIndicators = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const slideCount = children.length;
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      resetTimeout();
      timeoutRef.current = window.setTimeout(() => {
        handleNext();
      }, autoPlayInterval);
    }
    return () => resetTimeout();
  }, [currentIndex, autoPlay, autoPlayInterval]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const openZoom = (index: number) => {
    setZoomIndex(index);
  };

  const closeZoom = () => {
    setZoomIndex(null);
  };

  /* Styles */
  const containerStyle: CSSProperties = {
    position: 'relative',
    width,
    height,
    overflow: 'hidden',
  };

  const sliderStyle: CSSProperties = {
    display: 'flex',
    height: '100%',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  const slideStyle: CSSProperties = {
    flex: '0 0 100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'zoom-in',
  };

  const arrowStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    zIndex: 1,
  };

  const indicatorContainerStyle: CSSProperties = {
    position: 'absolute',
    bottom: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    zIndex: 1,
  };

  const indicatorStyle = (active: boolean): CSSProperties => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: active ? '#000' : '#ccc',
    cursor: 'pointer',
  });

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    cursor: 'zoom-out',
  };

  const zoomImageStyle: CSSProperties = {
    maxWidth: '90%',
    maxHeight: '90%',
  };

  return (
    <>
      <div className={className} style={containerStyle}>
        {showArrows && (
          <button
            style={{ ...arrowStyle, left: '10px' }}
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            ‹
          </button>
        )}

        <div style={sliderStyle}>
          {children.map((child, idx) => (
            <div
              key={idx}
              style={slideStyle}
              onClick={() => openZoom(idx)}
              role="button"
              aria-label={`Zoom slide ${idx + 1}`}
            >
              {child}
            </div>
          ))}
        </div>

        {showArrows && (
          <button
            style={{ ...arrowStyle, right: '10px' }}
            onClick={handleNext}
            aria-label="Next slide"
          >
            ›
          </button>
        )}

        {showIndicators && (
          <div style={indicatorContainerStyle}>
            {children.map((_, idx) => (
              <div
                key={idx}
                style={indicatorStyle(idx === currentIndex)}
                onClick={() => goToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {zoomIndex !== null && (
        <div
          style={overlayStyle}
          onClick={closeZoom}
          onWheel={closeZoom}
        >
          {/* @ts-ignore */}
          <img
            src={(children[zoomIndex] as any).props.src}
            alt={(children[zoomIndex] as any).props.alt}
            style={zoomImageStyle}
          />
        </div>
      )}
    </>
  );
};

export default Carousel;
