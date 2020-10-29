import React from "react";

const withWindowSize = (Component) => {
  const isMobile = window.innerWidth < 768;

  return (props) => {
    return (
      <section>
        <Component isMobile={isMobile} {...props} />
      </section>
    );
  };
};

export default withWindowSize;
