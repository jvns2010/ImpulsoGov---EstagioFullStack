import React from 'react';
import ListaAlunos from './components/alunos.jsx';

const alunos = [
  { "nome" : "José Alves Dos Santos", "nota" : 37 },
  { "nome" : "Anderson Da Silva", "nota" : 49 },
  { "nome" : "Maria Ferreira", "nota" : 68 },
  { "nome" : "Ana Oliveira", "nota" : 87 }
];

function App() {
  return (
    <div>
      <ListaAlunos alunos={alunos} />
    </div>
  );
}

export default App;
