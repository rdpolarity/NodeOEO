import React, { useState, useEffect, useRef, createContext } from "react";
import anime from "animejs";

export default function Anime(props) {
  const { render, children, ...properties } = props;
  delete properties.targets;
  let parent = useRef();
  const [mount, setMount] = useState(true);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (rerender && render) anime({ ...properties, targets: parent.current });
  });

  useEffect(() => {
    if (render) {
      anime({
        ...properties,
        targets: parent.current,
        complete: e => {
          props.timeout &&
            setTimeout(() => {
              anime({
                ...properties,
                targets: parent.current,
                direction: "reverse",
                complete: e => e.complete && setMount(false)
              });
            }, props.timeout + props.delay);
        }
      });
      setMount(true);
    }

    if (!render) {
      setRerender(true);
      anime({
        ...properties,
        targets: parent.current,
        direction: "reverse",
        complete: e => e.complete && setMount(false)
      });
    }
  }, [render]);

  const progress = createContext("test");

  return (
    mount && (
      <div style={{ opacity: 0 }} ref={parent}>
        {children}
      </div>
    )
  );
}

Anime.defaultProps = {
  render: true,
  delay: 0
};
