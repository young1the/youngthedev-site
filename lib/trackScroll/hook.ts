import { useState, useEffect, useCallback } from "react";
import { trackTitleList } from "./constants";

const useTrackScroll = () => {
  const [soundbarWidth, setSoundbarWidth] = useState("0%");
  const [titleIndex, setTitleIndex] = useState(0);

  const scrollEventHandler = useCallback(() => {
    setTitleIndex((currentIndex) => {
      const elementHeight = 2 * window.innerHeight;
      const calibrationScroll = window.scrollY - 300;
      const scrolled = elementHeight * (currentIndex - 1);
      if (calibrationScroll >= elementHeight * currentIndex) {
        setSoundbarWidth("0%");
        return currentIndex + 1;
      }
      if (calibrationScroll <= scrolled) {
        setSoundbarWidth("100%");
        return currentIndex - 1;
      }
      const lastPagePad = currentIndex === trackTitleList.length - 1 ? 100 : 0;
      const percentage =
        ((calibrationScroll - scrolled + lastPagePad) / elementHeight) * 100;
      setSoundbarWidth(`${percentage}%`);
      return currentIndex;
    });
  }, []);

  useEffect(() => {
    addEventListener("scroll", scrollEventHandler);
    return () => {
      removeEventListener("scroll", scrollEventHandler);
    };
  }, []);

  return { soundbarWidth, currentTitle: trackTitleList[titleIndex] };
};

export default useTrackScroll;
