import pytest
import requests
import json

##### teste pytest #####
# lembrar de rodar o comando pytest no terminal

#testa se a rota /horarios retorna um erro 400 quando o fuso horário não é valido
def test_horarios_fuso_invalido():
    response = requests.get('http://localhost:8000/horarios/?fuso_horario=abc')
    assert response.status_code == 400


#testa se a rota /horarios retorna um horário válido para um fuso horário conhecido
#nesse caso o fuso padrao de sp
def test_horarios():
    response = requests.get('http://localhost:8000/horarios/?fuso_horario=America/Sao_Paulo')
    assert response.status_code == 200
    result = json.loads(response.content)
    ## checa pelas strings horario e fuso horario na resposta
    assert "Horário" in result
    assert "Fuso horário" in result
    assert result["Horário"] != "" ## checa se o horario nao esta vazio


# testa se a rota /alunos retorna uma lista ou set ou dict com os alunos e se o tamanho é maior que 0
## lembrete talvez exista uma forma mais elegante de fazer esse teste
def test_alunos():
    response = requests.get('http://localhost:8000/alunos')
    assert response.status_code == 200
    result = json.loads(response.content)
    assert "alunos" in result
    assert isinstance(result["alunos"], (list, set, dict))
    assert len(result["alunos"]) > 0
