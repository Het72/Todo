import {ReactNode} from "react";

export interface inputProps{
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
}

export interface formProps {
    childrean: ReactNode;
    action: (fromData :FormData) => void;
    className?: string;
    onSubmit?: () => void;
}

export interface buttonProps {
    type?: 'button' | 'submit' | 'reset';
    text:string | ReactNode;
    onClick?: () => void;
    actionButton?: boolean;
    bgColor?: String;

}

export interface todoProps{
    id: string;
    title?: string | null;
    iscompleted: boolean;
    createdAt?: Date;
}