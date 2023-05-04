from fastapi import FastAPI, HTTPException
import pytz
from datetime import datetime, timedelta

app = FastAPI()

@app.get("/horarios/{fuso_horario}")
async def get_horarios(fuso_horario: str):
    if fuso_horario == "brasil":
        tz = pytz.timezone('America/Sao_Paulo')
    elif fuso_horario == "ny":
        tz = pytz.timezone('America/New_York')
    else:
        raise HTTPException(status_code=400, detail="Fuso horário não reconhecido")
    agora = datetime.now(tz)
    hora = agora.strftime("%H:%M:%S")
    return {"horario": hora, "fuso_horario": fuso_horario}