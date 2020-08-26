const queryString = window.location.search;
console.log(queryString)
const url = new URL(window.location.href)
const idPost = url.searchParams.get('id')
const urlRequest  = 'https://jsonplaceholder.typicode.com/posts?id=' + idPost;
console.log(urlRequest)
const listElement = document.getElementById('list')

console.log(`The id parsed from url is ${idPost}`)


function displaySinglePost(post, wrapper){
    wrapper.innerHTML = "";
    let itemElement = document.createElement('div');

    itemElement.classList.add('item');
    itemElement.innerHTML = `id = ${post.id}, <br><hr> title: ${post.title}, <br><hr> text: ${post.body}`;
    wrapper.appendChild(itemElement);
}

fetch(urlRequest)

.then(data => {return data.json()})
.then(res => {
    displaySinglePost(res[0], listElement)
})

function displayComments(items, wrapper) {
    wrapper.innerHTML = "";

    for(let i = 0; i < items.length; i++){
        console.log(items[i])

        let item = items[i]
        let itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `postId = ${item.postId},  id = ${item.id},<br> email: ${item.email} <br> text: ${item.body}`;
        wrapper.appendChild(itemElement);
    }
}




let urlComments = 'https://jsonplaceholder.typicode.com/comments?postId=' + idPost;
let comments = document.getElementById('listComments')

fetch(urlComments)

.then(data => {return data.json()})
.then(res => {
    displayComments(res, comments)

})