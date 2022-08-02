function logar() {
    console.log("Estou no passo 01");
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    console.log("Login: " + login + " - senha: " + senha);   

    var settings = {
        "url": "https://www.rrpeinfo.com.br/web/APIAssociado/Validar",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Cookie": "ASP.NET_SessionId=a51olrtue31zas15hufsv3jl"
        },
        "data": JSON.stringify({
          "SAIUsuariosLogin": login,
          "SAIUsuariosSenha": senha
        }),
      };
      console.log("Estou no passo 02");
      $.ajax(settings).done(function (response) {
        console.log(response);
      },);
}
