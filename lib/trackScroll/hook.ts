import { useState, useEffect, useRef } from "react";

const useTrackScroll = (trackList: string[]) => {
  const [scrollY, setScrollY] = useState(-300);
  const [titleIndex, setTitleIndex] = useState(-1);
  const [soundbarWidth, setSoundbarWidth] = useState(0);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const scrollEventHandler = () => {
      setScrollY(window.scrollY - 300);
    };
    addEventListener("scroll", scrollEventHandler);
    return () => {
      removeEventListener("scroll", scrollEventHandler);
    };
  }, []);

  useEffect(() => {
    const elementHeight = window.innerHeight * 2;
    const newIndex = Math.floor(scrollY / elementHeight);
    const lastArticlePad = newIndex === trackList.length - 1 ? 100 : 0;
    const scrolled = elementHeight * newIndex;
    const scrolledRatio = (scrollY + lastArticlePad - scrolled) / elementHeight;
    const newWidth = Math.ceil(scrolledRatio * 100);
    setTitleIndex(newIndex);
    setSoundbarWidth(newWidth);
  }, [scrollY]);

  const moveToDivElement = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const onPlayClickHandler = () => {
    moveToDivElement(trackRefs.current[0]);
  };
  const onNextClickHandler = () => {
    const nextIndex = Math.min(titleIndex + 1, trackList.length - 1);
    moveToDivElement(trackRefs.current[nextIndex]);
  };
  const onPrevClickHandler = () => {
    const prevIndex = Math.max(titleIndex - 1, 0);
    moveToDivElement(trackRefs.current[prevIndex]);
  };

  return {
    soundbarWidth,
    currentTitle: titleIndex < 0 ? "null" : trackList[titleIndex],
    trackRefs,
    onPlayClickHandler,
    onNextClickHandler,
    onPrevClickHandler,
  };
};

export default useTrackScroll;
