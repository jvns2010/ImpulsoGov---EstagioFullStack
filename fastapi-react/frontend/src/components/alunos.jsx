import React, { useEffect, useState } from "react";
const ListaAlunos = ({ alunos }) => { // Recebe os alunos como props depois ordena em ordem alfabetica
  const sortedAlunos = alunos.sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <ul>
      {sortedAlunos.map((aluno) => { // para cada aluno verifica a nota pra aplicar o estilo e depois retorna o li com o nome do aluno e estilo aplicado
        const estiloCor = aluno.nota < 50 ? { color: 'red' } : { color: 'green' };
        return (// retorna o li com o nome do aluno, usando o nome como key 
          <li key={aluno.nome} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', ...estiloCor }}>
            {aluno.nome}
          </li>
        );
      })}
    </ul>
  );
};

export default ListaAlunos;
