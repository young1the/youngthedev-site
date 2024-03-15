import {useState, useEffect, useRef, useCallback, useMemo} from "react";

const useTrackScroll = (trackList: string[]) => {
    const [scrollY, setScrollY] = useState(0);
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

    const trackHeights = useMemo(() => {
        if (trackRefs.current.length === 0) return [];
        return trackRefs.current.map((ele) => ele?.offsetTop);
    }, [trackRefs]);

    const getSubState = useCallback(
        (scrollY: number) => {
            if (trackHeights.length === 0) return {newIndex: -1, newWidth: 0};
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
            return {newIndex, newWidth};
        },
        [trackList.length, trackHeights]
    );

    const {newIndex: titleIndex, newWidth: soundbarWidth} = getSubState(scrollY);

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
        const nextIndex = Math.min(titleIndex + 1, trackList.length - 1);
        moveToDivElement(trackRefs.current[nextIndex]);
    }, [moveToDivElement, titleIndex, trackList.length]);
    const onPrevClickHandler = useCallback(() => {
        const prevIndex = Math.max(titleIndex - 1, 0);
        moveToDivElement(trackRefs.current[prevIndex]);
    }, [moveToDivElement, titleIndex]);
    const moveToDivElementByIndex = (index: number) => moveToDivElement(trackRefs.current[index]);

    return {
        soundbarWidth: titleIndex < 0 ? 0 : soundbarWidth,
        currentTitle: titleIndex < 0 ? "Loading" : trackList[titleIndex],
        titleIndex,
        trackRefs,
        onPlayClickHandler,
        onNextClickHandler,
        onPrevClickHandler,
        moveToDivElementByIndex,
    };
};

export default useTrackScroll;
