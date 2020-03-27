import React, {useState} from 'react';

import Header from './Header';

// JSX (JavaScript XML)
function App() {
   /**
    * estado - toda vez que um componente precisar armazenar uma info 
    * dentro dele criaremos um estado, pois alteramos essas infos,
    * e ela reflete na interface
    * 
   */
  const [counter, setCounter] = useState(0);
  // Array [Valor, funçãoDeAtualização]

  function increment(){
    setCounter(counter+1);
  }

  return (
    //<Header title = "Semana OminiStack"/> -- Entretanto no Header o propos tem que ser props.title
    //<Header> Semana OminiStack </Header>
    <div>
    <Header>Contador: {counter}</Header>
    <button onClick = {increment}>Incrementar</button>
    </div>
  );
}

export default App;
