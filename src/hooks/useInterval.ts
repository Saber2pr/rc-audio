import { useState, useEffect } from "react";

export const useInterval = (statu: boolean, cb: Function) => {
  const [handle, setHandle] = useState(0);
  useEffect(() => {
    if (statu) {
      setHandle(setInterval(() => cb(), 1000) as any);
    } else {
      clearInterval(handle);
    }
  }, [statu]);
};
