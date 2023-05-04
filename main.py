from fastapi import FastAPI, HTTPException
import pytz
from datetime import datetime, timedelta

app = FastAPI()

@app.get("/horarios/")
async def get_horarios(fuso_horario: str = 'America/Sao_Paulo'):#fuso_horario é um parâmetro de query que será passado na url, poderia usar uma requisição post e passar o fuso horário no corpo da requisição também
    if fuso_horario not in pytz.all_timezones_set: #usando o set para melhorar a performance no lookup, já que o set é uma estrutura de dados otimizada para lookup
        raise HTTPException(status_code=400, detail="Fuso horário não reconhecido")
    else:
        timeZone = pytz.timezone(fuso_horario)
        agora = datetime.now(timeZone)
        hora = agora.strftime("%H:%M:%S")
    return {"horario": hora, "fuso_horario": fuso_horario}