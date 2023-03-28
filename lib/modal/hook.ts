import { useCallback, useState } from "react";

const useModal = (scrollLock = true) => {
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const on = useCallback(() => {
    scrollLock ? (document.body.style.overflow = "hidden") : null;
    setIsModalOn(true);
  }, [scrollLock]);
  const off = useCallback(() => {
    scrollLock ? document.body.style.removeProperty("overflow") : null;
    setIsModalOn(false);
  }, [scrollLock]);
  return { state: isModalOn, on, off };
};

export default useModal;
