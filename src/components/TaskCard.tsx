import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import checkIcon from "../assets/check-icon.svg";
import trashIcon from "../assets/trash-icon.svg";
import { TaskState, updateTask } from "../redux/slices/tasksSlice";
import { useDispatch } from "react-redux";
import { removeTask } from "../redux/slices/tasksSlice";

interface TaskCardProps {
  task: TaskState;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const dispatch = useDispatch();

  const handleUpdateTask = () => {
    dispatch(updateTask(task));
  };

  const justFirstLetterToUppercase = (string: string) =>
    string[0].toUpperCase() + string.slice(1);

  return (
    <div
      onClick={handleUpdateTask}
      className={`rounded-lg min-h-[56px] flex p-5
      bg-[#262626] cursor-pointer items-start ${
        task.isDone ? "" : "outline outline-1 outline-[#333333] shadow-md"
      }`}
    >
      <Checkbox.Root
        value={`${task.isDone}`}
        checked={task.isDone}
        className={`bg-[#262626] w-[17px] h-[17px] p-1 ${
          task.isDone ? "bg-[#5E60CE]" : "border-2 border-[#4EA8DE]"
        }
        rounded-full mr-4`}
      >
        <Checkbox.Indicator>
          <img src={checkIcon} alt="" className="w-full" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p
        className={`text-xs sm:text-sm overflow-auto break-words flex-1 ${
          task.isDone ? "text-[#808080] line-through" : "text-white"
        }`}
      >
        {justFirstLetterToUppercase(task.taskText)}
      </p>
      <button type="button" onClick={() => dispatch(removeTask(task))}>
        <img src={trashIcon} alt="trash-icon" />
      </button>
    </div>
  );
};
