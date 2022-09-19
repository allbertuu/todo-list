import React from "react";
import { useState } from "react";

export const TaskCard = () => {
  // id - useId
  const [isDone, setIsDone] = useState(false);

  return (
    <div>
      <input type="checkbox" name="" id="" />
      <h1>Title</h1>
      <button>Icon</button>
    </div>
  );
};
