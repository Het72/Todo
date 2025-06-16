import { todoProps } from '@/types'
import React from 'react'
import form from '../form/form'
import Input from '../input/input'
import Button from '../button/Button'
import { FaTrash } from 'react-icons/fa'

import * as actions from '@/actions';

const DeleteTodo = ({ todo }: { todo: todoProps}) => {
  return <form action={actions.deleteTodo}>
    <Input name="inputId" value={todo.id} type="hidden" ></Input>
    <Button actionButton type="submit" bgColor="bg-red-500" text={<FaTrash/>} ></Button>
  </form>
}

export default DeleteTodo;