import {useState} from 'react'

import {IPanelProps} from '../Interfaces/IPanel'
import Card from './Card'

function Panel(props: IPanelProps){

    return (
        <div className='columna'>
            <h2> {props.title}</h2>
            {
                props.tasks.map((task) => {
                    return (
                        <Card 
                            task={task}
                            changeStatus={props.changeStatus}
                            deleteTask={props.deleteTask}
                        />
                    )
                })
            }
        </div>
    )
}

export default Panel;