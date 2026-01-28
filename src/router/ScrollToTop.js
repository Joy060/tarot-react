import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // 只有在「推入新路由 (PUSH)」時才置頂
    // 如果是「回上一頁 (POP)」，則不執行，保留瀏覽器預設行為
    if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null; // 這個元件不需要渲染任何東西
};

export default ScrollToTop;