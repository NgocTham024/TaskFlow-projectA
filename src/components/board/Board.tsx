import { useState } from "react";
import type { Task } from "../../types/task";
import Column from "./column";
import { DndContext, type DragOverlay, type DragEndEvent, type useSensors, type useSensor, type PointerSensor } from "@dnd-kit/core";

export default function Board() {
    const [task, setTask] = useState<Task[]>([
        {
            id: 1,
            title: "demo1",
            priority: "High",
            status: "todo"
        },
        {
            id: 2,
            title: "test1",
            priority: "Low",
            status: "done"
        },
        {
            id: 3,
            title: "demo2",
            priority: "Medium",
            status: "doing"
        },
        {
            id: 4,
            title: "UI ",
            priority: "High",
            status: "todo"
        },
    ]);
    // lọc status = todo
    const todoTask = task.filter((tasks) => tasks.status === "todo");
    // lọc status = doing
    const doingTask = task.filter((tasks) => tasks.status === "doing");
    // lọc status == done
    const doneTask = task.filter((tasks) => tasks.status === "done");
    // hiển thị 

    function handleDragEnd(event: DragEndEvent) {
        // card đc kéo
        const active = event.active;
        // đc thả
        const over = event.over;
        if (over === null) return;
        // lấy id của task
        const taskId = active.id;
        // status mới theo id
        const newStatus = over.id;
        if (newStatus !== "todo" && newStatus !== "doing" && newStatus !== "done") return;
        setTask(function (oldTask) {
            return oldTask.map(function (e) {
                if (e.id === taskId) {
                    return {
                        ...e, status: newStatus
                    };
                }
                return e;
            });
        });
    };
    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="row container-sm">
                <div className="col my-2">
                    <Column title="ToDo" tasks={todoTask} status={"todo"}></Column>
                </div>
                <div className="col my-2">
                    <Column title="Doing" tasks={doingTask} status={"doing"}></Column>
                </div>
                <div className="col my-2">
                    <Column title="Done" tasks={doneTask} status={"done"}></Column>
                </div>
            </div>
        </DndContext>

    );
}