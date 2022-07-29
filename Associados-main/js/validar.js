function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var settings = {
        "url": "https://www.rrpeinfo.com.br/web/APIAssociado/Validate",
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
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
