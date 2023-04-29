import {ITask} from './ITask';

export interface Icard {
    task: ITask;
    changeStatus: (id: number ,status: string) => void;
    deleteTask: (id: number) =>void;
}