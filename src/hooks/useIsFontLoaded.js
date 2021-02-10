import { useState, useEffect } from "react";

const useIsFontLoaded = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(function () {
      setIsFontLoaded(true);
    });
  }, []);

  return isFontLoaded;
};

export default useIsFontLoaded;
