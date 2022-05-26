import{useState} from "react";

const tipos ={
  artifacts:"Artefactos",
  boss: "Jefe",
  characters:"Personajes",
  consumables:"Consumidores",
  elements:"Elementos",
  enemies:"Enemigos",
  materials:"Materiales",
  nations:"Naciones",
  weapons:"Armas",

}

function App() {
  const[genshinState,setGenshinState] = useState({
    types:[],
  });

  const opciones = async() => {
    const respuesta = await fetch("https://api.genshin.dev/");
    const {types}=await respuesta.json();
    setGenshinState({
      types
    }); 
  };

  opciones();

  return (
    <div className="App">
      <h1>Genshin Impact Dex</h1>
      <hr />
      <select>
        <option value="">seleciona un elemento</option>
        {genshinState.type.map((type)=> (
          <option rey={type} value ={type}>
            {tipos[type]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
