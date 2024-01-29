import React from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

const useLinearCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.9, 0.9], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.9, 0.9], ["-8deg", "8deg"]);

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.9;
    const yPct = mouseY / height - 0.9;

    x.set(xPct);
    y.set(yPct);
    cursorX.set(mouseX);
    cursorY.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return {
    cursorX,
    cursorY,
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave,
  };
};

export default useLinearCard;
