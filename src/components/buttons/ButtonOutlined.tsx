import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

type ButtonType = "button" | "submit" | "reset" | undefined;

type Props = {
  label: string;
  type?: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconType;
};

function ButtonOutlined(props: Props) {
  return (
    <button
      type={props.type}
      className="relative inline-block px-12 w-full py-4 group relative inline-block overflow-hidden border border-[#626262] px-8 py-3 focus:outline-none focus:ring text-md flex justify-center items-center font-medium text-[#626262] border border-[#626262] hover:text-white focus:outline-none focus:ring"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.icon && (
        <props.icon
          size={24}
          className="
            absolute
            left-4
            top-3
            z-20
          "
        />
      )}
      <span className="absolute inset-y-0 left-0 w-[2px] bg-[#626262] transition-all group-hover:w-full group-active:bg-indigo-500"></span>

      <span className="relative text-sm font-medium text-[#626262] transition-colors group-hover:text-white">
        {props.label}
      </span>
    </button>
  );
}

export default ButtonOutlined;
