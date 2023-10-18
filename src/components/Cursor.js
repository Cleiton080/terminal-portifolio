import React, { useState, useEffect } from "react";

export default function Cursor({ color }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span style={{ display: "inline-block", color }}>{visible ? "|" : ""}</span>
  );
}
