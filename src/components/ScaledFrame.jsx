import { useEffect, useRef, useState } from 'react';

const VIRTUAL_WIDTH = 1440;

// Renders children at a fixed "desktop" width, then scales the whole frame down
// to fit the available panel width — so layouts never squish into mobile breakpoints.
export function ScaledContentPanel({ children, virtualWidth = VIRTUAL_WIDTH }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [outerWidth, setOuterWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const ro = new ResizeObserver((entries) => setOuterWidth(entries[0].contentRect.width));
    ro.observe(outer);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const ro = new ResizeObserver((entries) => setInnerHeight(entries[0].contentRect.height));
    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  const scale = outerWidth / virtualWidth;

  return (
    <div ref={outerRef} className="w-full h-full overflow-y-auto overflow-x-hidden">
      {outerWidth > 0 && (
        <div style={{ height: innerHeight * scale }}>
          <div
            ref={innerRef}
            style={{ width: virtualWidth, transform: `scale(${scale})`, transformOrigin: 'top left' }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// Same idea for an iframe panel, but sized to exactly fill the panel's height too,
// since an iframe creates its own viewport based on its rendered (pre-scale) box size.
export function ScaledIframePanel({ children, virtualWidth = VIRTUAL_WIDTH }) {
  const outerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });
    ro.observe(outer);
    return () => ro.disconnect();
  }, []);

  const scale = size.width / virtualWidth;
  const virtualHeight = scale ? size.height / scale : 0;

  return (
    <div ref={outerRef} className="relative w-full h-full overflow-hidden">
      {size.width > 0 && (
        <div
          style={{
            width: virtualWidth,
            height: virtualHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
