import "../CrearPanel.css"
import React, { useState } from "react";
import { IPanelProps } from '../interfaces/IPanel'
import Card from './Card'
import Panel from "./Panel";


// interface Props {}

function Crear(props: IPanelProps) {
    
    // inicializamos el inpuValue como vacio
    const [inputValue, setInputValue] = useState("");

    // el nombre del panel recibe un arreglo de strings
    const [nombrePanel, setNombrePanel] = useState<string[]>(["TODO"]);

    // si se comete un error se mostrara un string al usuario
    const [error, setError] = useState<string>("");

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setError("");
    };

    // funcion para agregar un panel
    const addPanel = () => {
        // primero al valor escrito en el input le quitamos los espacios en blanco con el metodo .trim
        const inputName = inputValue.trim();

        // si no se escribio ningun nombre, no se retornara nada
        if (inputName === "") {
            return;
        }

        // con una variable llamada existente verificamos que los nombres no se repitan
        // y con el metodo .toLowerCase convertimos los nombres a minusculas para hacer la comparacion
        const existente = nombrePanel.some((name) => name.toLowerCase() === inputName.toLowerCase());

        // si se cumple la condicion, el error sera un string donde mostrara la causa del error cometido
        if (existente) {
            setError("El nombre ya existe.");
            return;
        }

    
        setNombrePanel([...nombrePanel, inputName]);
        setInputValue("");
    };

    // creamos nuestra funcion para eliminar los paneles
    const handleDeleteClick = (nameToDelete: string) => {
        // Evitando que se elimine el panel "TODO"
        if (nameToDelete === "TODO") {
            return;
        }
        const newNames = nombrePanel.filter((name) => name !== nameToDelete);
        setNombrePanel(newNames);
    };

    return (
        <div style={{ margin: "20px", padding: "20px", borderRadius: "10px" }}>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{width:"400px", backgroundColor:"#292929", padding:"20px", marginBottom:"40px"}}>
                    <h2>Crea un panel:</h2>
                    <input type="text" placeholder="Nombre" value={inputValue} onChange={inputChange} />
                    <button style={{ backgroundColor: '#3C75B6', border: "0", borderRadius: "5px", color: "white", width: "100px", height: "40px" }} onClick={addPanel}>Add</button>
                </div>
            </div>

            <ul style={{   
	                display: 'flex',
	                flexDirection: 'row',
	                flexWrap: 'wrap',
	                justifyContent: 'flex-start',
	                alignItems: 'stretch',
	                alignContent: 'flex-start',
                    width:"960px"}}>
                {nombrePanel.map((name) => (

                    <div style={{ margin: "10px"}}>
                        <li style={{ backgroundColor: "white", color: "black", borderRadius: "5px", width: "300px", padding: "20px" }} key={name}>
                            <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                                {name}
                                {/* Mostrando el botón de eliminar solo para los nombres diferentes a TODO */}
                                {name !== "TODO" && (
                                    <button
                                        style={{height:"30px", backgroundColor: "red", color: "white", float:"right", border:"none",borderRadius:"5px", width:"100px"}}
                                        onClick={() => handleDeleteClick(name)}>Delete
                                    </button>
                                )}
                            </div>

                            <h2 style={{margin:"0px", display:"block", clear:"both", marginRight:"10px"}}> { props.title } </h2>
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
                        </li>
                    </div>
                ))}
            </ul>
            
            {error && <p>{error}</p>}
        </div>
    );
}

export default Crear;
