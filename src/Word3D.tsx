import React, { useEffect, useState } from "react";

export function Word3D({
  style,
  showDelay = 0,
  children,
}: {
  style?: React.CSSProperties;
  showDelay?: number;
  children?: React.ReactNode;
}) {
  const [depth, setDepth] = useState(0);
  const [visible, setVisible] = useState(!showDelay);

  useEffect(() => {
    const timer = setInterval(() => {
      setDepth(Math.random() * 2 - 1);
    }, 2000);

    let delayTimer: number | undefined;
    if (showDelay) {
      delayTimer = setTimeout(() => {
        setVisible(true);
      }, showDelay);
    }

    return () => {
      clearInterval(timer);
      if (delayTimer) clearTimeout(delayTimer);
    };
  }, [showDelay]);

  return (
    <div
      className="transition-all duration-1000"
      style={{
        ...style,
        textShadow: `rgb(30, 242, 241) ${depth * -5}px 0 1px, rgb(246, 5, 10) ${
          depth * 5
        }px 0 1px`,
        opacity: visible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
