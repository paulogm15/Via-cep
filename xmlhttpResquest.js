const loadCep = () => {
  let cep = parseInt(document.getElementById("cep").value);

  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    // this cannot be an arrow function because of the "this" statement
    // check the difference between normal and arrow functions
    console.log(this.readyState);

    if (this.readyState == 4 && this.status == 200) {
      let endereco = JSON.parse(this.responseText);

      document.getElementById("logradouro").value = endereco.logradouro;
      document.getElementById("complemento").value = endereco.complemento;
      document.getElementById("bairro").value = endereco.bairro;
      document.getElementById("localidade").value = endereco.localidade;
      document.getElementById("uf").value = endereco.uf;

      // document.getElementById("demo").innerHTML = this.responseText;
    }
  };

  console.log(`Antes do open cep: ${cep}`);
  xhttp.open("GET", `https://viacep.com.br/ws/${cep}/json`);
  console.log("antes do send");
  xhttp.send();
  console.log("depois do send");
};
