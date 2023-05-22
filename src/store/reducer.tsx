import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  date: string;
  dateSort: Date;
  text: string;
  time: string;
  done: boolean;
  important: boolean;
}

export interface TasksState {
  tasks: Task[];
  filter: "all" | "done" | "active";
  search: string;
}

const initialState: TasksState = {
  tasks: [],
  filter: "all",
  search: "",
};

const tasksSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ task: string }>) => {
      const date = new Date();
      const setDataDayNow = (num: string) => {
        if (num.length === 1) {
          return "0" + num;
        } else {
          return num;
        }
      };
      let day: string = setDataDayNow(date.getDate() + "");
      let month: string = setDataDayNow(date.getMonth() + 1 + "");
      let hours: string = setDataDayNow(date.getHours() + "");
      let minute: string = setDataDayNow(date.getMinutes() + "");
      let year: number = date.getFullYear();

      const newTask: Task = {
        id: date.toISOString(),
        dateSort: date,
        date: `${day}.${month}.${year}`,
        text: action.payload.task,
        time: `${hours}:${minute}`,
        done: false,
        important: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },
    doneTask: (state, action: PayloadAction<{ id: string }>) => {
      const task = state.tasks.find((item) => item.id === action.payload.id);
      if (task) {
        task.done = !task.done;
      }
    },
    editTask: (
      state,
      action: PayloadAction<{ id: string; newText: string }>
    ) => {
      const task = state.tasks.find((item) => item.id === action.payload.id);
      if (task) {
        task.text = action.payload.newText;
      }
    },
    searchTask: (state, action: PayloadAction<{ req: string }>) => {
      console.log(action.payload.req, "action.payload.req");
      state.search = action.payload.req;
    },
  },
});

export const { addTask, deleteTask, searchTask, doneTask, editTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
