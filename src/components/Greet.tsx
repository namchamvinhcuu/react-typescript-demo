import React from 'react'

type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <h1>
            {
                props.isLoggedIn
                    ? `Welcome ${props.name}. You have ${props.messageCount} un-read message(s)`
                    : `Welcome guest`
            }
        </h1>
    )
}
