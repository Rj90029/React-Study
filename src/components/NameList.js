import React from 'react'
import Person from './Person'

function NameList(){
    var persons = [
        {
            id:1,
            name:"Bruce",
            skill:"Batman"
        },
        {
            id:2,
            name:"Clark",
            skill:"Superman"
        },
        {
            id:3,
            name:"Diana",
            skill:"Wonder Woman"
        }
    ]

    return(
        <div>
            <Person persons={persons}/>
        </div>
    )
}

export default NameList