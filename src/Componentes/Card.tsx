import { useState } from 'react';
import { Icard } from '../Interfaces/ICard';

function Card(props: Icard){
    const [status, setStatus] = useState <string>(props.task.status ? props.task.status: 'TODO')

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value)
        props.changeStatus(props.task.id, e.target.value)
    } 

    return (

        <div className='card'>
            <div className='card-item'>
                <span>ID:</span> 
                <p>{ props.task.id}</p>
            </div>
            <div className='card-item'>
                <span>Tarea:</span>
                <p>{ props.task.name }</p>
            </div>
            <div className='card-item'>
                <span>Fecha Inicio:</span> 
                <p>{ props.task.startdate ? new Date(props.task.startdate).toISOString().substr(0,10).split('T')[0] : '' }</p>
            </div>
            <div className='card-item'>
                <span>Fecha Fin:</span>
                <p>{ props.task.enddate ? new Date(props.task.enddate).toISOString().substr(0,10).split('T')[0] : ''}</p>
            </div>
            <div className='card-item'>
                <span>Horas</span>
                <p>{ props.task.hours}</p>
            </div>
            <div className='card-item'>
                <span>Estado:</span>
                <p>
                    <select value={status} onChange={handleSelectChange} name='estado'>
                        <option value='TODO'>TODO</option>
                        <option value='En progeso'>En Progreso</option>
                        <option value='Completado'>Completado</option>
                    </select>
                </p>
            </div>
                <button className='delete-btn' onClick={ () => props.deleteTask(props.task.id) }>x</button>
        </div>

    )
}
 export default Card;