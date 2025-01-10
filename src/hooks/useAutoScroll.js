import { useEffect, useLayoutEffect, useRef } from 'react';

const SCROLL_THRESHOLD = 10;

function useAutoScroll(active) {
  const scrollContentRef = useRef(null);
  const isDisabled = useRef(false);
  const prevScrollTop = useRef(null);

  useEffect(() => {
    const currentRef = scrollContentRef.current;
  
    const resizeObserver = new ResizeObserver(() => {
      if (currentRef) {
        const { scrollHeight, clientHeight, scrollTop } = currentRef;
        if (!isDisabled.current && scrollHeight - clientHeight > scrollTop) {
          currentRef.scrollTo({
            top: scrollHeight - clientHeight,
            behavior: 'smooth'
          });
        }
      }
    });
  
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
      resizeObserver.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    if (!active) {
      isDisabled.current = true;
      return;
    }

    const currentRef = scrollContentRef.current;  // Store ref value

    function onScroll() {
      if (currentRef) {
        const { scrollHeight, clientHeight, scrollTop } = currentRef;
        if (
          !isDisabled.current &&
          scrollTop < prevScrollTop.current &&
          scrollHeight - clientHeight > scrollTop + SCROLL_THRESHOLD
        ) {
          isDisabled.current = true;
        } else if (
          isDisabled.current &&
          scrollHeight - clientHeight <= scrollTop + SCROLL_THRESHOLD
        ) {
          isDisabled.current = false;
        }
        prevScrollTop.current = scrollTop;
      }
    }

    isDisabled.current = false;
    if (currentRef) {
      prevScrollTop.current = currentRef.scrollTop;
      currentRef.addEventListener('scroll', onScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', onScroll);
      }
    };
  }, [active]);

  return scrollContentRef;
}

export default useAutoScroll;