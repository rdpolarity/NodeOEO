import React from "react";
import Anime from "../components/Anime";
import "../styles/graphics.scss";

const Swipe = props => {
  const { children, delay, ...adds } = props;
  const child = React.useRef(0);
  const [childWidth, setChildWidth] = React.useState(0);
  const [childHeight, setChildHeight] = React.useState(0);

  const properties = {
    easing: "easeOutExpo",
    opacity: [0, 1],
    duration: 1000
  };

  React.useEffect(() => {
    setChildWidth(child.current.offsetWidth);
    setChildHeight(child.current.offsetHeight);
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <div className="behind">
        <Anime {...properties} timeout={1} delay={delay} scaleX={[0, 1]}>
          <div
            style={{
              backgroundColor: "#111111",
              width: childWidth,
              height: childHeight
            }}
          />
        </Anime>
      </div>
      <div className="behind">
        <Anime {...properties} timeout={1} delay={delay + 250} scaleX={[0, 1]}>
          <div
            style={{
              backgroundColor: "#ee9b51",
              width: childWidth,
              height: childHeight
            }}
          />
        </Anime>
      </div>
      <div className="behind">
        <Anime {...properties} timeout={1} delay={delay + 500} scaleX={[0, 1]}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              width: childWidth,
              height: childHeight
            }}
          />
        </Anime>
      </div>
      <div>
        <Anime {...properties} {...adds} delay={delay + 750} scaleX={[0, 1]}>
          <div ref={child}>{children}</div>
        </Anime>
      </div>
    </div>
  );
};

Swipe.defaultProps = {
  delay: 0
};

export default Swipe;
