import React, { ChangeEventHandler } from "react";
import { UseFormRegisterReturn, useForm } from "react-hook-form";

type Props = {
  id: string;
  type: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

function Input(props: Props) {
  return (
    <input
      id={props.id}
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      className="block w-full shadow-sm focus:ring-4 focus:ring-[#E6DCD5] ring-offset-0 focus:outline-none py-4 px-2"
      onChange={props.onChange}
    />
  );
}

export default Input;
