import { useState , useEffect } from 'react';
import { ITask, ITaskFormProps } from '../Interfaces/ITask'

function TaskForm(props: ITaskFormProps) {

    const [errores, setErrores] = useState<string[]>([])

    const validateForm = () => {
        
        let newError: string[] = [];
        

        if(!props.task.name || props.task.name === '') {            
            newError = [...newError, 'El nombre de la tarea es obligatorio']            
        }

        if(!props.task.team || props.task.team === '') {            
            newError = [...newError, 'El equipo es obligatorio']            
        }

        if(!props.task.startdate) {
            newError = [...newError, 'La fecha de inicio es obligatoria']                        
        }

        if(!props.task.enddate) {            
            newError = [...newError, 'La fecha de fin es obligatoria']
        }

        if(props.task.startdate && props.task.enddate && props.task.startdate > props.task.enddate) {            
            newError = [...newError, 'La fecha de inicio no puede ser mayor que la fecha de fin']            
        }

        if(!props.task.hours || props.task.hours === 0) {            
            newError = [...newError, 'Las horas son obligatorias']            
        }

        if( newError.length === 0 ) {
            props.onSave()
            setErrores([]) 
        }else{
            setErrores([...newError])    
        }
        
    }
  
    return (        
        <form>
            <table>
                <tr>
                    <td> <label htmlFor="taskName">Tarea</label> </td>
                    <td> <input type="text" onChange={props.onChangeInput} name="name" placeholder='Tarea' value={props.task.name} /> </td>
                </tr>
                <tr>
                    <td><label>Equipo:</label></td>
                    <td>
                        <select id="equipo" name="team" value={props.task.team} onChange={props.onChangeSelect} >
                            <option value="">Seleccione un equipo</option>
                            {props.teams.map((team) => {
                                return <option key={team} value={team} >{team} </option>
                            })}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label>Fecha Inicio:</label></td>
                    <td>
                        <input 
                            type="date"
                            id="fecha-inicio"
                            name="startdate"
                            placeholder="Fecha Inicio"
                            onChange={props.onChangeInput}
                            value={props.task.startdate ? new Date(props.task.startdate).toISOString().substr(0, 10).split('T')[0] : ''}
                        />
                    </td>
                </tr>
                <tr>
                    <td><label>Fecha Fin:</label></td>
                    <td>
                        <input 
                            type="date"
                            id="fecha-fin"
                            name="enddate"
                            placeholder="Fecha Fin"
                            onChange={props.onChangeInput}
                            value={props.task.enddate ? new Date(props.task.enddate).toISOString().substr(0, 10).split('T')[0] : ''}                            
                        />
                    </td>
                </tr>

                <tr>
                    <td><label>Horas:</label></td>
                    <td>
                        <input 
                            type="number" 
                            id="horas" 
                            name="hours" 
                            placeholder="Horas"
                            onChange={props.onChangeInput}
                            value={props.task.hours ? props.task.hours : 0}
                        />
                    </td>
                </tr>

                <tr>
                    <td></td>
                    
                        <td>
                            <button type="button" onClick={ validateForm }  >Añadir</button>
                            { errores.length > 0 && (
                            <div>
                                <h2>Errores</h2>
                                <div className="error-card">   
                                    { errores.map((error) => {
                                        return <p>{error}</p>
                                    })}                                                                 
                                </div>
                            </div>
                            ) }
                        </td>
                    
                </tr>            

            </table>        
        </form>        
    );

}

export default TaskForm;