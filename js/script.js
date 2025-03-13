function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value) / 100;

    let generoSelecionado = document.querySelector('input[name="genero"]:checked');
    
    if (!generoSelecionado) {
        alert("Por favor, selecione um gênero.");
        return;
    }

    if (!peso || !altura || altura <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let imc = peso / (altura * altura);

    document.getElementById("imc-valor").textContent = imc.toFixed(2);
}