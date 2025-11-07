export const TaskStatus = {
  TODO: "todo",
  DOING: "doing",
  DONE: "done",
};

export class Task {
  constructor({ id, title, description, responsible, deadline, status }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.responsible = responsible;
    this.deadline = deadline;
    this.status = status;
  }
}