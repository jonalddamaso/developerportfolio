import Link from "next/link";
import React from "react";

function Button({ text, link, target }: { text: string; link: string; target: string; }) {
  return (
    <Link className="btn" href={link} target="_blank">
      {text}
    </Link>
  );
}

export default Button;
