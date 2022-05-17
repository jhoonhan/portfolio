import { useEffect } from "react";
import history from "../../../history";

const useVerticalNavigation = (pageControl) => {
  const { urls, workPage, touch } = pageControl;

  useEffect(() => {
    const currentI = urls.workPage.indexOf(workPage);
    if (touch.action.top && urls.workPage[currentI + 1]) {
      history.push(
        `/works/${urls.workPage[currentI + 1]}/${urls.workSubPage[0]}`
      );
    }

    if (touch.action.bottom && urls.workPage[currentI - 1]) {
      history.push(
        `/works/${urls.workPage[currentI - 1]}/${urls.workSubPage[0]}`
      );
    }
  }, [touch.action]);
};

export default useVerticalNavigation;
