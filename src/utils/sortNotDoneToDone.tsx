import { TaskState } from "../redux/slices/tasksSlice";

export function sortNotDoneToDone<TaskType extends TaskState>(
  a: TaskType,
  b: TaskType
) {
  // anterior não feito, próximo sim
  if (!a.isDone && b.isDone) {
    return -1;
  }
  // anterior feito, próximo não
  if (a.isDone && !b.isDone) {
    return 1;
  }
  return 0;
}
