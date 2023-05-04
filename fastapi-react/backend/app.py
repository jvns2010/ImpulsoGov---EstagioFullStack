from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pytz
from datetime import datetime, timedelta
from alunos import alunos

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)



@app.get("/", tags=["root"])
def read_root() -> dict:
    return {"React and FastAPI": "Hello World! This is the root of the API"}

@app.get("/horarios/")#sao paulo como fuso padrão
async def get_horarios(fuso_horario: str = 'America/Sao_Paulo'):#fuso_horario é um parâmetro de query que será passado na url, poderia usar uma requisição post e passar o fuso horário no corpo da requisição também
    if fuso_horario not in pytz.all_timezones_set: #usando o set para melhorar a performance no lookup, já que o set é uma estrutura de dados otimizada para lookup
        raise HTTPException(status_code=400, detail="Fuso horário não reconhecido") #400 = bad request
    else:
        timeZone = pytz.timezone(fuso_horario)
        agora = datetime.now(timeZone)
        hora = agora.strftime("%H:%M:%S")
    return {"Horário": hora, "Fuso horário": fuso_horario}

@app.get("/alunos", tags=["alunos"])
async def get_alunos() -> dict:
    return { "alunos": alunos }    