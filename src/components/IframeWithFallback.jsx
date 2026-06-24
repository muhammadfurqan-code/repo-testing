import { useEffect, useRef, useState } from 'react';

const LOAD_TIMEOUT_MS = 2500;

function IframeWithFallback({ src, fallbackSrc, title }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const loadedRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (!loadedRef.current) setFailed(true);
    }, LOAD_TIMEOUT_MS);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleLoad = () => {
    loadedRef.current = true;
    clearTimeout(timeoutRef.current);
    setLoaded(true);
  };

  const handleError = () => {
    clearTimeout(timeoutRef.current);
    setFailed(true);
  };

  const showIframe = loaded && !failed;

  return (
    <div className="relative w-full h-full bg-[#0F2340]">
      <img
        src={fallbackSrc}
        alt={`${title} — screenshot preview`}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
      />
      {!failed && (
        <iframe
          src={src}
          title={title}
          onLoad={handleLoad}
          onError={handleError}
          className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-300 ${
            showIframe ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}

export default IframeWithFallback;
