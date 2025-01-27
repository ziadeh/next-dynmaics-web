"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Arrow: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const arrowElement = document.getElementById("arrow");
      if (!arrowElement) return;

      const rect = arrowElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;

      // Calculate the new angle
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Smoothly transition to the new angle
      const normalizedAngle = ((angle - rotation + 540) % 360) - 180 + rotation;

      setRotation(normalizedAngle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotation]);

  return (
    <div
      id="arrow"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-linear"
      style={{
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      <Image
        src="/nd-icon.svg"
        alt=""
        className="w-[148px]"
        width={168}
        height={260}
      />
    </div>
  );
};

export default Arrow;
