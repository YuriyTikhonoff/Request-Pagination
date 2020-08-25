

//console.log(listItems)

const listElement = document.getElementById('list')
const paginationElement = document.getElementById('pagination')

let currentPage = 1;
let rows = 5;

function displayNewPost(){
    let post  = document.querySelector('h2');
    console.log(post)
    post.innerHTML = `Here is your id ${e.target.dataset.id}`;
    const queryString = window.location.search;

    console.log(queryString);
 

}



function openNewPost(e){
    //alert(`Here is your id ${e.target.dataset.id}`);
    let newWindow = window.open(`single-post.html?data=${e.target.dataset.id}`,'_blank')
    newWindow.document.write(`<p>This is a totally custom function</p>`)

    //newWindow.alert('Ahtung')
    newWindow.console.log("We are at the new window ")
    let post  = newWindow.document.createElement('div');
    post.classList.add('new')
    post.innerHTML = `Here is your id ${e.target.dataset.id}`;
    newWindow.console.log(post)
    let body = newWindow.document.querySelector('body');
    newWindow.console.log(body)
    //Почему body показывается уже с добавленным постом, хотя эта операция идет позже
    body.appendChild(post)

    // let newURL = 'https://jsonplaceholder.typicode.com/posts?_limit=1'
    // .then(data => {return data.json()})
    // .then(res => {() => {
    //     newWindow.console.log(res)
    //     let node = newWindow.document.createElement('div');
    //     node.innerHTML = `Here is your id ${res.body}`;
    //     let body = newWindow.document.querySelector('body');
    //     body.appendChild(node)
    // }

    // })

    // newWindow.document.addEventListener("DOMContentLoaded", () => {
    //     newWindow.alert('hello')
    // })


    // displayNewPost()
    // alert('Here you are')
    // let post  = document.querySelector('h2');
    // console.log(post)
    // post.innerHTML = `Here is your id ${e.target.dataset.id}`;
    // const queryString = window.location.search;

    // console.log(queryString);
 
    //window.location = 'New single post';
    //Сверстать страницу со стилями
    //Открыть ее по URL с get параметром id
    //Сделать fetch запрос по id

    //Альтернативный вариант - записывать id в localStorage, а потом считать
}

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
                itemElement.dataset.id = item.id;
        itemElement.addEventListener('click', openNewPost)
        wrapper.appendChild(itemElement);

    }
}
//document.querySelectorAll('.item').addEventListener('click', openNewPost());
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

const Url = 'https://jsonplaceholder.typicode.com/posts?_limit=100   '
let listItems = []

fetch(Url)

.then(data => {return data.json()})
.then(res => {
    displayElements(res, listElement, rows, 1)
    setupPagination(res, paginationElement, rows)
})


