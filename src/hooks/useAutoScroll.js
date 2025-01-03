import { useEffect, useLayoutEffect, useRef } from 'react';

const SCROLL_THRESHOLD = 10;

function useAutoScroll(active) {
  const scrollContentRef = useRef(null);
  const isDisabled = useRef(false);
  const prevScrollTop = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (scrollContentRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = scrollContentRef.current;
        // Scroll to bottom only if content is not disabled
        if (!isDisabled.current && scrollHeight - clientHeight > scrollTop) {
          scrollContentRef.current.scrollTo({
            top: scrollHeight - clientHeight,
            behavior: 'smooth'
          });
        }
      }
    });

    if (scrollContentRef.current) {
      resizeObserver.observe(scrollContentRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!active) {
      isDisabled.current = true;
      return;
    }

    function onScroll() {
      if (scrollContentRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = scrollContentRef.current;
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
    if (scrollContentRef.current) {
      prevScrollTop.current = scrollContentRef.current.scrollTop;
    }
    scrollContentRef.current?.addEventListener('scroll', onScroll);

    return () => scrollContentRef.current?.removeEventListener('scroll', onScroll);
  }, [active]);

  return scrollContentRef;
}

export default useAutoScroll;
