var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");
myHeaders.append("Cookie", "ASP.NET_SessionId=a51olrtue31zas15hufsv3jl");

var raw = JSON.stringify({
  "SAIUsuariosLogin": "muraiel",
  "SAIUsuariosNome": "Murael da Silva",
  "SAIUsuariosCelular": "11988888888",
  "SAIUsuariosDataNascimento": "1991-07-22",
  "SAIUsuariosEmail": "murael@uol.com.br",
  "SAIUsuariosSenha": "murael",
  "SAIUsuariosFoto": ""
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://www.rrpeinfo.com.br/web/APIAssociado/Inserir", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));