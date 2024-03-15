import {useState, useEffect, useRef, useCallback} from "react";

const useTrackScroll = (trackList: string[]) => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollInfo, setScrollInfo] = useState<{ index: number; width: number }>({index: -1, width: 0});
    const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
    useEffect(() => {
        const scrollEventHandler = () => {
            setScrollY(window.scrollY);
        };
        addEventListener("scroll", scrollEventHandler);
        return () => {
            removeEventListener("scroll", scrollEventHandler);
        };
    }, []);

    useEffect(() => {
            const trackHeights = trackRefs.current != null ? trackRefs.current.map((ele) => ele?.offsetTop) : [];
            if (trackHeights.length === 0) return;
            const editedScrollY = scrollY + window.innerHeight / 2;
            const getNewIndex = () => {
                for (let i = 0; i < trackHeights.length; i++) {
                    if (trackHeights[i]! > editedScrollY) {
                        return i - 1;
                    }
                }
                return trackHeights.length - 1;
            }
            const newIndex = getNewIndex();
            const currentHeight = (trackHeights[newIndex + 1] ?? document.documentElement.scrollHeight) - trackHeights[newIndex]!;
            const progress = (editedScrollY - trackHeights[newIndex]!) / currentHeight;
            const newWidth = newIndex === trackHeights.length - 1 ?
                (progress * 2) * 100
                : progress * 100;
            setScrollInfo({index: newIndex, width: newWidth});
        },
        [scrollY]
    );

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
    }, [moveToDivElement]);
    const onNextClickHandler = useCallback(() => {
        const nextIndex = Math.min(scrollInfo.index + 1, trackList.length - 1);
        moveToDivElement(trackRefs.current[nextIndex]);
    }, [moveToDivElement, scrollInfo.index, trackList.length]);
    const onPrevClickHandler = useCallback(() => {
        const prevIndex = Math.max(scrollInfo.index - 1, 0);
        moveToDivElement(trackRefs.current[prevIndex]);
    }, [moveToDivElement, scrollInfo.index]);
    const moveToDivElementByIndex = (index: number) => moveToDivElement(trackRefs.current[index]);

    return {
        soundbarWidth: scrollInfo.index < 0 ? 0 : scrollInfo.width,
        currentTitle: scrollInfo.index < 0 ? "Loading" : trackList[scrollInfo.index],
        titleIndex: scrollInfo.index,
        trackRefs,
        onPlayClickHandler,
        onNextClickHandler,
        onPrevClickHandler,
        moveToDivElementByIndex,
    };
};

export default useTrackScroll;
