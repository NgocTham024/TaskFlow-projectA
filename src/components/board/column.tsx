import { use } from "react";
import type { Task } from "../../types/task";
import TaskCard from "./taskCard";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
    title: string;
    tasks: Task[];
    status: string;
}
export default function Column({ title, tasks, status }: ColumnProps) {
    const { setNodeRef } = useDroppable({
        id: status,
    });
    return (
        <div ref={setNodeRef} style={{padding: "10px"}}>
            <h3>{title}</h3>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}
