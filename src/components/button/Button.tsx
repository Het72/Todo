import { buttonProps } from '@/types';
import clsx from 'clsx';
import React from 'react'

const Button = ({ type, text, onClick, actionButton, bgColor, ...props }:buttonProps ) => {
  return (
    <div>
        <button onClick={onClick} type={type} 
        className={clsx(
            actionButton && "text-white hover:bg-blue-600 focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
            `${bgColor} hover:${bgColor} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`

        )}>
         {text}
        </button>
    </div>
  );
};

export default Button;