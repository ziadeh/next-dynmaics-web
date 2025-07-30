"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Magnetic } from "../animate-ui/effects/magnetic";

const Arrow: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);

  return (
    <div
      id="arrow"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-linear"
      style={{
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      <Magnetic range={150}>
        <Image
          src="/nd-icon.svg"
          alt=""
          className="w-[148px]"
          width={168}
          height={260}
        />
      </Magnetic>
    </div>
  );
};

export default Arrow;
