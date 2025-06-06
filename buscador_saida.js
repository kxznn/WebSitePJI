const searchInput = document.getElementById('searchInput');
const lista = document.getElementById('listaSaida');

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const itens = lista.getElementsByClassName('item');

    for (let i = 0; i < itens.length; i++) {
        const textoItem = itens[i].textContent.toLowerCase();
        itens[i].style.display = textoItem.includes(searchText) ? 'block' : 'none';
    };
});