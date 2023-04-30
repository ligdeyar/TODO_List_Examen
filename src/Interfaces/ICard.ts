import { ITask } from "./ITask";

export interface ICard {
    task: ITask;
    changeStatus: (id: number, status: string) => void;
    deleteTask: (id: number) => void;
}