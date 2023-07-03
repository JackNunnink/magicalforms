import React from "react";

export default function Form({action, redirect, children}: {
    action: string,
    redirect: string,
    children: React.ReactNode,
}) {
    return(
        <form 
            action={action}
            target={redirect}
        >
            {children}
        </form>
    )
}