const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById('adicionar-item');
let contador = 0;

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (inputItem.value === "") {
        alert('Por favor, insira um item!');
        return;
    }
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    checkboxDinamico(inputCheckbox);
    const nomeItem = document.createElement('p');
    nomeItem.innerText = inputItem.value;

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    const diaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"});
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    });

    const dataCompleta = `${diaSemana} (${data}) às ${hora}`;
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;

    itemData.classList.add("texto-data")

    itemDaLista.appendChild(itemData); // Adiciona a data e hora ao item da lista

    listaDeCompras.appendChild(itemDaLista); // Adiciona o item completo à lista

    inputItem.value = ""; // Limpa o campo de entrada após adicionar o item
});

const h1 = document.querySelector('h1'); // Corrigido para selecionar o elemento h1
h1.innerHTML = 'Ração de Cachorro';

function checkboxDinamico(checkbox) {
    checkbox.type = "checkbox";
    checkbox.id = "checkbox-" + contador++;
}
