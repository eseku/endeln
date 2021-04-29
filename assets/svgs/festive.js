import React from "react";
import { SvgXml } from "react-native-svg";
import svgstring from "./festive-svg";

export default function festivesvg() {
  const svgmarkup = svgstring;

  const SvgImage = () => <SvgXml xml={svgmarkup} width="301px" />;

  return <SvgImage />;
}
