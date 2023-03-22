import { useCallback, useState } from "react";

const useModal = (scrollLock = true) => {
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const on = useCallback(() => {
    setIsModalOn(true);
    scrollLock ? (document.body.style.overflow = "hidden") : null;
  }, [scrollLock]);
  const off = useCallback(() => {
    setIsModalOn(false);
    scrollLock ? document.body.style.removeProperty("overflow") : null;
  }, [scrollLock]);
  return { modalState: isModalOn, on, off };
};

export default useModal;
