import React from 'react'

type person = {
    name: {
        first: string,
        last: string
    }
}

export const Person = (person: person) => {
    return (
        <h1>Person is : {person.name.last} {person.name.first}</h1>
    )
}
