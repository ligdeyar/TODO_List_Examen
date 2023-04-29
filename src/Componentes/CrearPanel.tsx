import React, { useState } from "react";
import { IPanelProps } from '../Interfaces/IPanel'
import Card from './Card'
import Panel from "./Panel";

interface Props {}

const Crear: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState("");
  
  const [nombrePanel, setNombrePanel] = useState<string[]>(["TODO"]);
  
  const [error, setError] = useState<string>("");

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setError("");
  };

  const addPanel = () => {
    const inputName = inputValue.trim();

    if (inputName === "") {
      return;
    }

    const existente = nombrePanel.some((name) => name.toLowerCase() === inputName.toLowerCase());

    if (existente) {
      setError("El nombre ya existe.");
      return;
    }

    setNombrePanel([...nombrePanel, inputName]);
    setInputValue("");
  };

  const handleDeleteClick = (nameToDelete: string) => {
    // Evitando que se elimine TODO
    if (nameToDelete === "TODO") {
      return;
    }
    const newNames = nombrePanel.filter((name) => name !== nameToDelete);
    setNombrePanel(newNames);
  };

  return (
    <div>
       <h2>Crea un panel:</h2> 
      <input type="text" placeholder="Nombre" value={inputValue} onChange={inputChange} />
      <button  onClick={addPanel}>Add</button>
      <ul>
        {nombrePanel.map((name) => (
          <li key={name}>
            {name}
            {/* Mostrando el botón de eliminar solo para los nombres diferentes a TODO */}
            {name !== "TODO" && (
              <button onClick={() => handleDeleteClick(name)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Crear;