import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ListaAlunos from "./alunos";
import faker from "faker";
import "mutationobserver-shim"; // para evitar erro de MutationObserver is not a constructor

//gera um aluno aleatório usando o Faker em português
faker.setLocale('pt_BR');
const fakeAluno = () => ({
  nome: faker.name.findName(),
  nota: faker.datatype.number({ min: 0, max: 100 }),
});

//mock do fetch para simular a resposta com a lista de alunos
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ alunos: Array.from({ length: 4 }, () => fakeAluno()) }),
  })
);

//verifica se a lista de alunos está em ordem alfabética
test("renderizar a lista de alunos em ordem alfabética", async () => {
  act(() => {
    render(<ListaAlunos />);// renderizar o componente dentro do act!!!!!!!!!!!!!!!!!!!!!! evite warnings
  });
  const listaAlunos = await screen.findByTestId("lista-de-alunos");

  //verifica se a lista de alunos está em ordem alfabética
  for (let i = 0; i < listaAlunos.childNodes.length - 1; i++) {
    const nomeAlunoAtual = listaAlunos.childNodes[i].textContent;
    const nomeAlunoProximo = listaAlunos.childNodes[i + 1].textContent;
    expect(nomeAlunoProximo > nomeAlunoAtual).toBe(true);
  }
});

//verificar se as notas abaixo de 50 estão em vermelho e acima ou igual a 50 estão em verde
test("colorir os nomes dos alunos com nota abaixo de 50 em vermelho e acima ou igual a 50 em verde", async () => {
  act(() => {
    render(<ListaAlunos />); // renderizar o componente dentro do act!!!!!!!!!!!!!!!!!!!!!! evite warnings
  });

  const listaAlunos = await screen.findByTestId("lista-de-alunos");

  // Verificar se as notas abaixo de 50 estão em vermelho e as notas iguais ou acima de 50 estão em verde
  for (let i = 0; i < listaAlunos.childNodes.length - 1; i++) {
    const nota = parseInt(listaAlunos.childNodes[i].getAttribute("data-nota"));
    if (nota < 50) {
      expect(listaAlunos.childNodes[i]).toHaveStyle("color: red");
    } else {
      expect(listaAlunos.childNodes[i]).toHaveStyle("color: green");
    }
  }
});
