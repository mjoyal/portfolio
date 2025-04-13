import { useCallback } from "react";

const useSmoothScrollToAnchor = () => {
  return useCallback((id: string) => {
    const html = document.documentElement;
    html.classList.add("smooth-scroll");

    const el = document.getElementById(id);
    if (el) el.scrollIntoView();

    setTimeout(() => {
      html.classList.remove("smooth-scroll");
    }, 500);
  }, []);
};

export default useSmoothScrollToAnchor;
