import React from "react";
import ReactDOM from "react-dom";
import Anime from "react-anime";
import uuid from "uuid";

export default function Main() {
  const [list, setList] = React.useState(["Iphone", "Google", "XBox One"]);

  let animeProps = {
    opacity: [0, 1],
    translate: [-64, 0]
  };

  return (
    <div>
      <Anime {...animeProps} key={uuid()}>
        {list.map((v, i) => (
          <div key={i}>
            <button onClick={() => setList(list.filter(item => item !== v))}>
              {v}
            </button>
          </div>
        ))}
      </Anime>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
