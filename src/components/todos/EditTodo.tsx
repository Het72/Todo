"use client";

import { useState } from 'react'
import Button from '../button/Button';
import { MdEdit } from 'react-icons/md';
import form from '../form/form';
import Input from '../input/input';
import { todo } from 'node:test';
import { todoProps } from '@/types';

import * as action from '@/actions';

const EditTodo = ({todo} : {todo: todoProps}) => {
  const [editTodoState, setEditTodoState] = useState(false);

  const handleEdit = () => {
    if (todo.iscompleted){
      return;
    }
    setEditTodoState(!editTodoState);
  };

  const handleSubmit = () => {
    setEditTodoState(false);
  }
    return (
    <div className="flex gap-5 items-center " >
    <Button onClick={handleEdit} text={<MdEdit />} actionButton />
    {editTodoState ? (
        <form action={action.editTodo} onSubmit={handleSubmit}> 
        <Input name="inputId" value={todo.id} type="hidden"></Input>
        <div className="flex justify-center">
        <Input name="newTitle"  type="text" placeholder="Edit Todo" ></Input>
        <Button type="submit" text="Save" ></Button>
        </div>
        
        </form>
    ) : null}
    </div>
  )
}

export default EditTodo