//classe customizada para erros de servidor diferentes do typeError que geralmente acontece quando o fetch nao consegue se comunicar com o servidor
//um exemplo seria de quando o servidor responde com um erro 400, 404, 500, etc


class serverError extends Error {
    constructor(errorCode, message) {
      super(message);
      this.errorCode = errorCode;
    }
  }
  
  export default serverError;