import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

const createTodo: RequestHandler = (req, res) => {
  const { text } = req.body as { text: string };
  const newTodo: Todo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  return res.status(201).json(newTodo);
};

const listTodos: RequestHandler = (_, res) => {
  return res.status(200).json(TODOS);
};

const getTodoById: RequestHandler = (req, res) => {
  const { id } = req.params as { id: string };
  const todo = TODOS.find((todo) => todo.id === id);

  if (!todo) {
    res.status(404);
    return;
  }

  res.status(200).json(todo);
};

const updateTodoById: RequestHandler<{ id: string }> = (req, res) => {
  const { id } = req.params;
  const { text } = req.body as { text: string };

  const todoIdx = TODOS.findIndex((todo) => todo.id === id);

  if (todoIdx < 0) {
    res.status(404);
    throw new Error("Could not find todo with this id");
  }

  TODOS[todoIdx] = new Todo(id, text);

  return res
    .status(200)
    .json({ message: "todo updated", updatedTodo: TODOS[todoIdx] });
};

const deleteTodoById: RequestHandler<{ id: string }> = (req, res) => {
  const { id } = req.params;

  const todoIdx = TODOS.findIndex((todo) => todo.id === id);

  if (todoIdx < 0) {
    res.status(404);
    throw new Error("Could not find todo with this id");
  }

  TODOS.splice(todoIdx, 1);

  res.status(204);
};

export { createTodo, listTodos, getTodoById, updateTodoById, deleteTodoById };
