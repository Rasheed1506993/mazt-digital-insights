
import { useEffect } from 'react';

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface LargestContentfulPaintEntry extends PerformanceEntry {
  processingStart: number;
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Cumulative Layout Shift
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            console.log('CLS:', layoutShiftEntry.value);
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          const lcpEntry = entry as LargestContentfulPaintEntry;
          console.log('LCP:', lcpEntry.processingStart || entry.startTime);
        }
      }
    });

    observer.observe({ entryTypes: ['layout-shift', 'largest-contentful-paint'] });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default PerformanceMonitor;
