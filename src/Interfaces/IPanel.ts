import { ITask } from "./ITask";

export interface IPanelProps {
    title: string;
    tasks: ITask[];
    changeStatus: (id: number, status: string) => void;
    deleteTask: (id: number) => void;
}