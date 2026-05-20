import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(
  threshold = 0.12,
  delay = 0
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }, delay);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, delay]);

  return ref;
}
