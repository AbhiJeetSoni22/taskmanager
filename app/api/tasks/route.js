import { NextResponse } from "next/server";
import { createTask, getTasks, updateTask, deleteTask } from "@/lib/actions";

export async function GET() {
  const tasks = await getTasks();
  return NextResponse.json(tasks);
}

export async function POST(req) {
  const formData = await req.formData();
  const task = await createTask(formData);
  return NextResponse.json(task);
}

export async function PUT(req) {
  const { id, formData } = await req.json();
  const task = await updateTask(id, formData);
  return NextResponse.json(task);
}

export async function DELETE(req) {
  const { id } = await req.json();
  await deleteTask(id);
  return NextResponse.json({ success: true });
}
