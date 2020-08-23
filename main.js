

//console.log(listItems)

const listElement = document.getElementById('list')
const paginationElement = document.getElementById('pagination')

let currentPage = 1;
let rows = 5;

function displayElements(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = "";
    page--;

    let loopStart = rowsPerPage * page;
    let loopEnd = loopStart + rowsPerPage; 
    let paginatedItems = items.slice(loopStart, loopEnd)
    console.log(paginatedItems)

    for(let i = 0; i < paginatedItems.length; i++){
        console.log(paginatedItems[i])

        let item = paginatedItems[i]
        let itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `id = ${item.id}, text: ${item.body}` ;
        wrapper.appendChild(itemElement)
    }
}

function setupPagination(items, wrapper, rowsPerPage){
    wrapper.innerHTML = '';

    let pageCount = Math.ceil(items.length/rowsPerPage);

    for(let i = 1; i <= pageCount; i++){
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function paginationButton(page, items){
    let button = document.createElement('button');
    button.innerText = page;

    if(currentPage === page) button.classList.add('active');

    button.addEventListener('click', () => {
        currentPage = page;
        displayElements(items, listElement, rows, currentPage);

        let currentBtn = document.querySelector('button.active')
        currentBtn.classList.remove('active');
        button.classList.add('active');
    })
    return button;
}

const Url = 'https://jsonplaceholder.typicode.com/posts?_limit=31   '
let listItems = []

fetch(Url)

.then(data => {return data.json()})
.then(res => {
    displayElements(res, listElement, rows, 1)
    setupPagination(res, paginationElement, rows)
})


