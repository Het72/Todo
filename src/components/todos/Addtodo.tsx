import * as actions from "@/actions";
import Button from "../button/Button";
import Form from "../form/form";
import Input from "../input/input";

const Addtodo = () => {
  return (
    <div>
        <form action={actions.createTodo}>
        <div className="flex gap-4 mb-1 items-center">
            <Input name="input" type="text" placeholder="Add Task here..." />
            <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </form>
    </div>
  );
};

export default Addtodo;