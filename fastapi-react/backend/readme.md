# ImpulsoGov---EstagioFullStack 

Essa api foi feita para atender aos requisitos do desafio 2 do processo seletivo: 
Crie uma API em FastAPI com um endpoint que retorne o horario atual dos fusos horários (-3 GMT) e (GMT – 5).
Além disso a API também retorna a lista de alunos necessária para o desafio 1.

## Visão Geral

A API ImpulsoGov---EstagioFullStack é uma aplicação desenvolvida com FastAPI que fornece recursos para obter horários em diferentes fusos horários e informações sobre alunos.

## Funcionalidades Principais

- **Obter Horários:** A rota `/horarios/` permite obter o horário atual em um determinado fuso horário. É possível passar o parâmetro `fuso_horario` para especificar o fuso horário desejado.

- **Obter Alunos:** A rota `/alunos` retorna uma lista de alunos.

## Requisitos do Sistema

- Python 3.9 ou superior
- Dependências do projeto listadas em requirements.txt

## Configuração

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
3. Execute o servidor da API:
    ```bash
    uvicorn main:app --reload

4. Acesse a API em http://localhost:8000.

## Uso
1. Obter Horários
Endpoint: /horarios/

Método: GET

Parâmetros:

fuso_horario (opcional): O fuso horário desejado para obter o horário atual. Se não for especificado, o fuso horário padrão é "America/Sao_Paulo".
Exemplo de Requisição:
   ```bash
GET /horarios/?fuso_horario=America/New_York
```

Exemplo de Resposta:
```json
{
  "Horário": "10:30:45",
  "Fuso horário": "America/New_York"
}
```
2. Obter Alunos
Endpoint: /alunos

Método: GET

Exemplo de Requisição:

    ```bash
GET /alunos
```
Exemplo de Resposta:
```json
{
  "alunos": [
    {
      "nome": "João",
      "idade": 20
    },
    {
      "nome": "Maria",
      "idade": 22
    }
  ]
}
```
## Testes
A API ImpulsoGov---EstagioFullStack possui testes automatizados implementados usando a biblioteca pytest. Antes de executar os testes, certifique-se de ter instalado as dependências de desenvolvimento listadas no arquivo `requirements.txt`.

Para executar os testes, siga as etapas abaixo:

1. Navegue até o diretório raiz do projeto.
2. Execute o seguinte comando para instalar as dependências de desenvolvimento:
   ```bash
   pytest
```
   