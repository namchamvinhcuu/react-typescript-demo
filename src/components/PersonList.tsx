

type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
}

export const PersonList = (personList: PersonListProps) => {
    return (
        <>
            {
                personList.names.map((person) => {
                    return (
                        <h2 key={person.last}>
                            {person.last} {person.first}
                        </h2>
                    )
                })
            }
        </>
    )
}
