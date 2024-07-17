import { Router } from "express";
import {
  createTodo,
  getTodoById,
  listTodos,
  updateTodoById,
  deleteTodoById,
} from "../controllers/todos";

const router = Router();

router.get("/", listTodos);

router.post("/", createTodo);

router.get("/:id", getTodoById);

router.patch("/:id", updateTodoById);

router.delete("/:id", deleteTodoById);

export default router;
