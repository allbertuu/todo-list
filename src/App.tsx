import React, { useEffect, useState } from "react";
import rocketIcon from "./assets/rocket-icon.svg";
import { TaskCard } from "./components/TaskCard";
import clipboardIcon from "./assets/Clipboard.png";
import { useSelector } from "react-redux";
import { selectTasks } from "./redux/slices/tasksSlice";
import { CreateNewTask } from "./components/CreateNewTask";
import { CloudMoon, CloudSun } from "phosphor-react";

function App() {
  const tasks = useSelector(selectTasks);
  const [appTheme, setAppTheme] = useState(
    localStorage.getItem("theme") !== "dark" ? "light" : "dark"
  );
  const completedTasks = tasks.filter((task) => task.isDone).length;
  const totalTasks = tasks.length;

  useEffect(() => {
    const root = document.documentElement;
    const oldTheme = appTheme === "dark" ? "light" : "dark";
    root.classList.remove(oldTheme);
    root.classList.add(appTheme);
    localStorage.setItem("theme", appTheme);
  }, [appTheme]);

  return (
    <div className="h-screen text-[#808080]">
      <div
        className="h-[200px] bg-white dark:bg-[#0D0D0D] absolute top-0
        right-0 left-0 transition-colors duration-200"
      >
        {/* turn app theme row container */}
        <div>
          <button
            onClick={() => setAppTheme("dark")}
            className="dark:hidden absolute right-8 top-5"
          >
            <CloudSun className="text-gray-700 text-3xl dark:text-white/90" />
          </button>

          <button
            onClick={() => setAppTheme("light")}
            className="hidden dark:inline absolute right-8 top-5 cursor-pointer"
          >
            <CloudMoon className="text-black text-3xl dark:text-white/90" />
          </button>
        </div>

        <div className="max-w-[736px] mx-auto px-5">
          {/* logo brand row container */}
          <div className="mt-[72px] mb-[53px] flex items-center justify-center gap-3">
            <img src={rocketIcon} alt="rocket-icon" />
            <h1 className="font-black text-[40px] leading-[48px]">
              <span className="text-[#4EA8DE]">to</span>
              <span className="text-[#5E60CE]">do</span>
            </h1>
          </div>
          {/* create new task row container */}
          <CreateNewTask />

          <section className="mt-16 pb-16">
            {/* infos row container */}
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[#4EA8DE] text-base">
                  Tarefas criadas
                </h2>
                <span
                  className="font-bold py-0.5 px-2 text-xs text-gray-500 dark:text-white
                  flex items-center bg-slate-200 dark:bg-[#333333] rounded-full"
                >
                  {tasks.length}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[#8284FA] text-base">
                  Concluídas
                </h2>
                <span
                  className="font-bold py-[1px] px-2 text-xs text-gray-500 dark:text-white
                  flex items-center bg-slate-200 dark:bg-[#333333] rounded-full"
                >
                  {tasks.filter((task) => task.isDone).length}
                </span>
              </div>
            </div>
            {/* tasks col container */}
            <div className="flex flex-col gap-3 mt-6">
              {tasks.length > 0 ? (
                tasks.map((task) => <TaskCard key={task.id} task={task} />)
              ) : (
                <>
                  <hr className="border-[#808080]/20" />
                  <div className="mt-16 text-center">
                    <img
                      src={clipboardIcon}
                      alt="clipboard-icon"
                      className="mx-auto mb-4"
                    />
                    <p className="font-bold">
                      Você ainda não tem tarefas cadastradas
                    </p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
