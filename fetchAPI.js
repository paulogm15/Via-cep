const showData = (data) => {
  if (data.erro) {
    alert("CEP not found.");
  } else {
    document.getElementById("logradouro").value = data.logradouro;
    document.getElementById("complemento").value = data.complemento || "";
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("localidade").value = data.localidade;
    document.getElementById("uf").value = data.uf;
  }
};

const fetchAPI = () => {
  let cep = document.getElementById("cep").value;

  // console.log(cep);

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      showData(data);
    })
    .catch((error) => {
      console.error("ERROR: ", error);
    });
};
