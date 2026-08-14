import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import type { Task } from "../../types/task";
interface TaskCardPros {
    task: Task;
}
export default function TaskCard({ task }: TaskCardPros) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
    });
    const style = { transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined, };
    return (
        <div ref={setNodeRef} style={style}{...listeners} {...attributes}>
            <div className="card mb-2 shadow-sm">
                <div className="card-body">
                    <p>{task.title}</p>
                    <p>{task.priority}</p>
                </div>
            </div>
        </div>
    )
}