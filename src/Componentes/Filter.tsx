import { useState ,useEffect } from "react";
import { ITask, IFilterprops } from "../Interfaces/ITask";

function Filter(props: IFilterprops){
    return(
        <div className="filtros">
        <h2>Filtros</h2>
        <form>
            <label htmlFor="filtro-tarea">Equipo:</label>
            <select>
                <option value='TODO'>TODO</option>
                <option value='Development'>Development</option>
                <option value='QA'>QA</option>
                <option value='PMs'>PMs</option>
                <option value='BI'>BI</option>
                
            </select>


        </form>
    </div>
    )
}
export default Filter;