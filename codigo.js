
function contar(){
    inicio = document.getElementById("inicio").value;
    fim = document.getElementById("fim").value;
    passo = document.getElementById("passo").value;
    texto = document.getElementById("texto")
    while (inicio <= fim) {
        if (inicio % passo == 0) {
            texto.innerHTML += `${inicio}<br>`
        }
        inicio++
    }
}