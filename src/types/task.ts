export type TaskStatus = "todo" | "doing" | "done";

export type TaskPriority = "High" | "Medium" | "Low";

export interface Task {
  id: number;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
}