import pytest
import requests
import json

##### teste pytest #####
# lembrar de rodar o comando pytest no terminal

#testa se a rota /horarios retorna um erro 400 quando o fuso horário não é valido
def test_horarios_fuso_invalido():
    response = requests.get('http://localhost:8000/horarios/?fuso_horario=abc')
    assert response.status_code == 400


