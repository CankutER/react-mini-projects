import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = (color) => {
  const [isCopied, setIsCopied] = useState(false);
  const { rgb, weight, type } = color;

  useEffect(() => {
    let timer;
    if (isCopied) {
      timer = setTimeout(() => setIsCopied(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [isCopied]);
  return (
    <article
      className={type === "shade" ? "color color-light" : "color false"}
      style={{ backgroundColor: rgbToHex(...rgb) }}
      onClick={() => {
        setIsCopied(true);
        navigator.clipboard.writeText(rgbToHex(...rgb));
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{rgbToHex(...rgb)}</p>
      {isCopied ? <p className="alert">copied to clipboard</p> : null}
    </article>
  );
};

export default SingleColor;
