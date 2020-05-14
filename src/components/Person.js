import React from 'react'

function Person({persons}){

    const personList = persons.map(person => (
        <h2>
            I am {person.name}. I know {person.skill}.
        </h2>
    ))

    return(
        <div>
            {personList}
        </div>
    )
}

export default Person