import React from "react";
import plusIcon from "../assets/plus-icon.svg";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { ChangeEvent, useState } from "react";

export const CreateNewTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (!inputValue) {
      alert("Escreva algo no campo.");
      return;
    }
    dispatch(
      addTask({
        id: nanoid(),
        taskText: inputValue.trim(),
        isDone: false,
      })
    );
    setInputValue("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex h-[52px] gap-2">
      <input
        type="text"
        value={inputValue}
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => handleInputChange(e)}
        className="text-sm sm:text-base flex-1 w-full dark:text-white/80 dark:bg-[#262626]
        bg-slate-100 outline-gray-200 text-black/80
        dark:placeholder:text-[#808080] rounded-lg p-4 outline outline-1
        dark:outline-[#0D0D0D] focus:outline-[#2895d4] dark:focus:outline-[#1E6F9F]
        transition-all duration-300"
      />
      <button
        type="button"
        onClick={handleAddTask}
        className="bg-[#268cc7] hover:bg-[#2a9cdd] active:bg-[#217baf]
        dark:bg-[#1E6F9F] dark:hover:bg-[#2284bd] dark:active:bg-[#19608a]
        text-white rounded-lg w-[90px] font-bold flex items-center
        justify-center gap-2 text-xs sm:text-sm p-4"
      >
        Criar
        <img src={plusIcon} alt="plus-icon" />
      </button>
    </div>
  );
};
