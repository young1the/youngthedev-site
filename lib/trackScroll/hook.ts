import { useState, useEffect, useRef, useCallback } from "react";

// const InitialState = {
//   soundbarWidth: 0,
//   currentTitle: "",
//   titleIndex: 0,
//   trackRefs: null,
//   onPlayClickHandler: () => {},
//   onNextClickHandler: () => {},
//   onPrevClickHandler: () => {},
// };

const useTrackScroll = (trackList: string[]) => {
  const [scrollY, setScrollY] = useState(-300);
  const innerHeight = useRef(0);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const scrollEventHandler = () => {
      setScrollY(window.scrollY - 300);
    };
    innerHeight.current = window.innerHeight * 3;
    addEventListener("scroll", scrollEventHandler);
    return () => {
      removeEventListener("scroll", scrollEventHandler);
    };
  }, []);

  const getSubState = useCallback(
    (scrollY: number) => {
      const elementHeight = innerHeight.current;
      const newIndex = Math.floor(scrollY / elementHeight);
      const lastArticlePad = newIndex === trackList.length - 1 ? 100 : 0;
      const scrolled = elementHeight * newIndex;
      const scrolledRatio =
        (scrollY + lastArticlePad - scrolled) / elementHeight;
      const newWidth = Math.ceil(scrolledRatio * 100);
      return { newIndex, newWidth };
    },
    [trackList.length]
  );

  const { newIndex: titleIndex, newWidth: soundbarWidth } =
    getSubState(scrollY);

  const moveToDivElement = useCallback((element: HTMLDivElement | null) => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
  const onPlayClickHandler = useCallback(() => {
    moveToDivElement(trackRefs.current[0]);
  }, []);
  const onNextClickHandler = useCallback(() => {
    const nextIndex = Math.min(titleIndex + 1, trackList.length - 1);
    moveToDivElement(trackRefs.current[nextIndex]);
  }, []);
  const onPrevClickHandler = useCallback(() => {
    const prevIndex = Math.max(titleIndex - 1, 0);
    moveToDivElement(trackRefs.current[prevIndex]);
  }, []);

  return {
    soundbarWidth: titleIndex < 0 ? 0 : soundbarWidth,
    currentTitle: titleIndex < 0 ? "Loading" : trackList[titleIndex],
    titleIndex,
    trackRefs,
    onPlayClickHandler,
    onNextClickHandler,
    onPrevClickHandler,
  };
};

export default useTrackScroll;
