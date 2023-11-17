import React from "react";
import type { MetaFunction } from "@remix-run/node";
import HomeIcons from "~/components/HomeIcons";

type MouseProps = React.MouseEvent<HTMLDivElement, MouseEvent>;

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [mousePos, setMousePos] = React.useState({ left: 0, top: 0 });

  const mouseMove = (e: MouseProps) => {
    setMousePos({ left: e.clientX, top: e.clientY });
  };

  return (
    <main id="content" className="main" onMouseMove={mouseMove}>
      <HomeIcons
        initialPos={{ left: 50, top: 100 }}
        mousePos={mousePos}
        alt={"home"}
        onClick={() => console.log("clicked")}
      />
      <HomeIcons
        initialPos={{ left: 150, top: 100 }}
        mousePos={mousePos}
        alt={"print"}
      />

      <HomeIcons
        initialPos={{ left: 250, top: 100 }}
        mousePos={mousePos}
        alt={"game"}
      />

      <HomeIcons
        initialPos={{ left: 350, top: 100 }}
        mousePos={mousePos}
        alt={"clock"}
      />
    </main>
  );
}
