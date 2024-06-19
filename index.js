function getValue(){
  let valor = document.getElementById("name").value;
  document.getElementById('result').innerHTML = "Bem-vindo, " + valor + "!";
  document.getElementById('name').value = "";
  document.getElementById('btn-sair').style.visibility = "visible";
}

function removeValue(){
  document.getElementById('result').innerHTML = "";
  document.getElementById('btn-sair').style.visibility = "hidden";
}