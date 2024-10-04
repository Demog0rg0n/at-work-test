import React, { Ref, useEffect } from "react";

export const useClickOutside = (ref: React.RefObject<HTMLDivElement>, callback: () => void) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};