import React from "react";
import Particles from "react-particles-js";

export default function ParticleScatter({ amount, color }) {
  const particles = {
    params: {
      particles: {
        number: { value: amount },
        color: { value: ["#FFFFFF", color] },
        opacity: { anim: { enable: false }, value: 1 },
        move: {
          speed: 1,
          out_mode: "out"
        },
        shape: {
          type: ["circle"],
          stroke: {
            width: 5,
            color: [color]
          }
        },
        size: {
          value: 10
        },
        line_linked: {
          color: "#ee9b51"
        }
      }
    }
  };
  return <Particles {...particles} />;
}
