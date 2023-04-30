import React from "react";

export interface ITask {
    id: number;
    name?: string;
    startdate?: Date;
    enddate?: Date;
    status?: string;
    hours?: number;
    team?: string;
}

export interface ITaskFormProps {
    task: ITask;
    teams: string[];
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onSave: () => void;
}