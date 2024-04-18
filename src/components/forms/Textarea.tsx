import React, { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  id: string;
  type: string;
  rows: number;
  placeholder: string;
  register: UseFormRegisterReturn;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

function Textarea(props: Props) {
  return (
    <textarea
      id={props.id}
      typeof={props.type}
      rows={props.rows}
      placeholder={props.placeholder}
      {...props.register}
      onChange={props.onChange}
      className="block w-full focus:ring-4 focus:ring-[#E6DCD5] ring-offset-0 focus:outline-none py-4 px-4"
    ></textarea>
  );
}

export default Textarea;
