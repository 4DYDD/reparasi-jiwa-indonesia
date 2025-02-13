import React from "react";

function Image({ style, imageLink, className }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageLink})`,
          ...style,
        }}
        className={`bg-center bg-cover bg-no-repeat ${className}`}
      ></div>
    </>
  );
}

export default Image;
