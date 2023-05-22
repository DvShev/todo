import { Task } from "@/store/reducer";

const sortByDateDescending = (tasks: Task[]): Task[] => {
  const sortedTasks = [...tasks];

  sortedTasks.sort((a, b) => {
    return new Date(b.dateSort).getTime() - new Date(a.dateSort).getTime();
  });

  return sortedTasks;
};
export const sortTasks = (tasks: Task[]): Task[] => {
  return sortByDateDescending(tasks).sort((a, b) => {
    if (!a.done && b.done) {
      return -1;
    }
    if (a.done && !b.done) {
      return 1;
    }
    return 0;
  });
};
