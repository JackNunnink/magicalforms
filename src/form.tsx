import React from "react";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export default function Form({ children, ...rest } : { 
    children: React.ReactNode
    rest: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
} ) {
     return (
        <form {...rest}>
            {children}
        </form>
    );
 }