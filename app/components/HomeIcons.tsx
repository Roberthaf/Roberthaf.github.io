import React, { useEffect } from "react";
import homeIcon from "~/images/home.png";
import clockIcon from "~/images/clock.png";
import gameIcon from "~/images/game.png";
import printIcon from "~/images/print.png";
import homeIconsStyles from "./homeIcons.css";
import { DialogBox } from "./DialogBox";

type altProp = "home" | "print" | "game" | "clock";
type MouseProps = React.MouseEvent<HTMLDivElement, MouseEvent>;

interface HomeIconsProps {
  initialPos: { left: number; top: number };
  alt: altProp;
  mousePos: { left: number; top: number };
  onClick?: () => void;
}

enum IconType {
  home = "home",
  print = "print",
  game = "game",
  clock = "clock",
}

function Icon(iconType: altProp) {
  switch (iconType) {
    case IconType.home:
      return homeIcon;
    case IconType.print:
      return printIcon;
    case IconType.game:
      return gameIcon;
    case IconType.clock:
      return clockIcon;
    default:
      return homeIcon;
  }
}

export default function HomeIcons({
  initialPos,
  alt,
  mousePos,
}: HomeIconsProps) {
  const [pos, setPos] = React.useState({
    left: initialPos.left,
    top: initialPos.top,
  });
  const [isDragging, setIsdragging] = React.useState(false);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const name = alt[0].toLocaleUpperCase() + alt.slice(1);
  const [open, setOpen] = React.useState(false);

  const mouseDown = (e: MouseProps) => {
    setIsdragging(true);

    const el = e.target as HTMLDivElement;

    setOffset({
      x: e.clientX - el.getBoundingClientRect().left,
      y: e.clientY - el.getBoundingClientRect().top,
    });
  };

  const mouseUp = () => {
    setIsdragging(false);
  };
  const onClickIcon = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (isDragging) {
      const posLeft = mousePos.left - offset.x;
      const posTop = mousePos.top - offset.y;
      setPos({ left: posLeft, top: posTop });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mousePos.left, mousePos.top]);

  return (
    <div
      style={{
        position: "absolute",
        left: pos.left,
        top: pos.top,
        width: 60,
        height: 60,
        backgroundImage: `url(${Icon(alt)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        cursor: "pointer",
      }}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onClick={onClickIcon}
    >
      <p style={{ position: "relative", top: 60, textAlign: "center" }}>
        {name}
      </p>
      <DialogBox open={open} onClose={onClose}></DialogBox>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeIconsStyles }];
}
