import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function LazyImage({ src, alt, className = "", width, height, priority = false }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" style={{ width, height }} />}

      {/* Actual Image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
}
