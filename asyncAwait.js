const showDataAsync = (data) => {
  if (data.erro) {
    alert("CEP não encontrado!");
  } else {
    document.getElementById("logradouro").value = data.logradouro;
    document.getElementById("complemento").value = data.complemento || "";
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("localidade").value = data.localidade;
    document.getElementById("uf").value = data.uf;
  }
};

async function loadAsync() {
  const cep = document.getElementById("cep").value;
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const dados = await response.json();
    showDataAsync(dados);
  } catch (error) {
    console.error("Erro na busca do CEP:", error);
  }
}
