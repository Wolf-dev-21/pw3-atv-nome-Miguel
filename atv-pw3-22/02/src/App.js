import logo from './logo.svg';
import Livro from './componets/Livro';
import './App.css';

import peregrino from './imagens/O_Peregrino.jpg';
import cthulhu from './imagens/chamado-cthulhu.jpg'

const desc ='O Peregrino, um conto cristão escrito por John Bunyan enquanto é estava preso, na qual Deus o revelará um sonho que se tornou um dos contos mais inspiradores para a vida de um cristão'

function App() {
  return ( 
    <div className="App">

      <table>
        <tr>

          <td> 
          <Livro
            titulo="O Peregrino"
            autor="John Bunyan"
            imagem={peregrino}
            descricao={desc}
          />
          </td>

          <td>
          <Livro
            titulo="O Peregrino"
            autor="John Bunyan"
            imagem={cthulhu}
            descricao={desc}
          />
          </td>
          </tr>
      </table>

    </div>
  );
}

export default App;
