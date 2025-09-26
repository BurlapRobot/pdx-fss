import { useEffect, useRef, useState } from "react";

export default function useComponentPosition() {
  const [componentPosition, setComponentPosition] = useState(null);
  const componentRef = useRef(null);

  useEffect(() => {
    if (!componentRef.current && !isMobile) return;
    const handleResize = (entries) => {
      setComponentPosition(entries[0]?.target.clientHeight);
    };
    const observer = new ResizeObserver(handleResize);
    observer.observe(componentRef.current);

    setComponentPosition(componentRef.current.clientHeight);

    return () => observer.disconnect();
  }, [componentRef]);

  return { componentPosition, componentRef };
}
