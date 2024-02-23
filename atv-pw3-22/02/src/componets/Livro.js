function Livro({titulo, autor, imagem, descricao}){
    return( //Estrutura para colocar objeto ao lado
        <div className="App-card"> 
            <table>
            <tr>

                <td> 
                    <img className="img-face" src={imagem} width={150} alt="Capa do livro O Peregrino" />
                </td>

                <td>
                    <h2>{titulo}</h2>

                    <p>{autor}</p> 

                    <p>{descricao}</p> 
            
                </td>
            </tr>
            </table>
        </div>
    );
}

export default Livro;