let amigos = [];
let sorteados = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nome);
    console.log(`Amigo adicionado: ${nome}`);
    console.log("Lista atualizada:", amigos);
    document.getElementById("amigo").value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
    console.log("Lista de amigos atualizada na interface");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }
    if (sorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados.");
        return;
    }
    let amigoSorteado;
    do {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceSorteado];
    } while (sorteados.includes(amigoSorteado));
    
    sorteados.push(amigoSorteado);
    console.log(`Amigo sorteado: ${amigoSorteado}`);
    console.log("Lista de sorteados:", sorteados);
    document.getElementById("resultado").innerText = `Amigo sorteado: ${amigoSorteado}`;
}