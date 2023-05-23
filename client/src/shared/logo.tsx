import React from "react";

type LogoProps = {
  width: string;
};

export default function Logo({ width }: LogoProps) {
  return (
    <img
      className="m-auto"
      style={{ width }}
      src="https://www.svgrepo.com/show/120899/weightlifting.svg"
      alt="Logo"
    />
  );
}