import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatus } from './task-status.model';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
    constructor (
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) {}

    // getAllTasks(): Task[] {
    //     return this.tasks;
    // };

    // getTasksWithFilters(filterDTO: GetTasksFilterDTO): Task[] {
    //     const { status, search } = filterDTO;
    //     let tasks = this.getAllTasks();

    //     if (status) {
    //         tasks = tasks.filter(t => t.status === status);
    //     };

    //     if (search) {
    //         tasks = tasks.filter(t =>
    //             t.title.includes(search) ||
    //             t.description.includes(search)
    //         );
    //     };

    //     return tasks;
    // };

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Task with ID={${id}} not found`);
        }

        return found;
    }

    async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
        return this.taskRepository.createTask(createTaskDTO);
    }

    async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = status;
        await this.taskRepository.update(task.id, task);

        return task;
    }

    async deleteTask(id: number): Promise<void> {
        const result = await this.taskRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID={${id}} not found`);
        }
    }
}
