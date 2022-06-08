import { useEffect, useContext } from "react";
import history from "../../../history";
import { PageContext } from "../../../App";

const useVerticalNavigation = () => {
  const { urls, page, touch } = useContext(PageContext);

  useEffect(() => {
    const currentI = urls.workPage.indexOf(page.workPage);
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
