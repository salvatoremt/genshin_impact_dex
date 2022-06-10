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

};

function App() {
  const[genshinState,setGenshinState] = useState({
    types:[],
  });

  const fetchGenshinApi = async(item,url="https://api.genshin.dev/") => {
    const respuesta = await fetch(url);
    const respJson =await respuesta.json();
    if (item== "types"){
      setGenshinState({
        ...genshinState,
          types: respJson.type
        });
      } else {
  
    
      setGenshinState({
        ...genshinState,
        [item]: respJson,
      });
      }
    };
       fetchGenshinApi("types");

       const handleChangeType = ({target}) =>{
         const url= 'https://api.genshin.dev/ ${target.value}';
         fetchGenshinApi(target.value,url);
         console.log(genshinState);
       };
    
    
  
  

  

  return (
    <div className="App">
      <h1>Genshin Impact Dex</h1>
      <hr />
      <select name="types" onChange={handleChangeType}>
        <option value="">seleciona un elemento</option>
        {genshinState.type.map((type)=> (
          <option key={type} value ={type}>
            {tipos[type]}
          </option>
        ))}
      </select>
    </div>
  );
  }

export default App;
