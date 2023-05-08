import React, { useState, useEffect } from "react";
import serverError from "../serverError";
function ListaAlunos() {
  
  // estado para armazenar a lista de alunos
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://temlogica.lavid.ufpb.br/alunos");
        if (!response.ok){
          //se a resposta não for ok, lançamos uma exceção com a mensagem de erro e o status code
          //nesse caso status code é arbitrário, podemos definir um outro arquivo com as possíveis mensagens de erro e status code
          console.log(response)
          throw new serverError(500, "Não foi possível buscar os dados dos alunos.");
          
        }
        const alunosResponse = await response.json();
        //ordena a lista de alunos em ordem alfabética pelo nome
        const sortedAlunos = alunosResponse.alunos.sort((a, b) => a.nome.localeCompare(b.nome));
        setAlunos(sortedAlunos);
      } catch (error) {
        if(error instanceof serverError){
          alert(error.message);
        }else if(error instanceof TypeError){ 
          //se o erro for de conexão, exibe uma mensagem de erro genérica
          //TypeError aqui é o tipo de erro que o fetch retorna quando não consegue se conectar ao servidor
          alert('Não foi possível conectar ao servidor. Tente novamente mais tarde.');
        }else{
          alert("Ocorreu um erro inesperado.");
        }
      }
    }
    fetchData();
  }, []);
  return (
    <ul data-testid="lista-de-alunos">
      {alunos.map((aluno) => { // para cada aluno verifica a nota pra aplicar o estilo e depois retorna o li com o nome do aluno e estilo aplicado
        const estiloCor = aluno.nota < 50 ? { color: 'red' } : { color: 'green' };
        return (// retorna o li com o nome do aluno, usando o nome como key 
        //lembrete justify-content = eixo x, align-items = eixo y
        //spread operator para aplicar o estilo de cor
          <li key={aluno.nome} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', ...estiloCor }}>
            {aluno.nome}
          </li>
        );
      })}
    </ul>
  );
};

export default ListaAlunos;
