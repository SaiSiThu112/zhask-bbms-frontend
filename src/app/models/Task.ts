import { Board } from "./board";
import { TaskList } from "./TaskList";
import { User } from "./user";

export class Task {
  id!: number;
  description !: string;
  createdBy!:string;
  taskList!:TaskList;
  board!:Board;
  users:Array<User>=[];
}
