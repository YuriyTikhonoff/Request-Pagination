
const Url = 'https://jsonplaceholder.typicode.com/posts?_limit=5'

fetch(Url)

.then(data => {return data.json()})
.then(res => {console.log(res)})


function displayPost(post) {
    let title = post.title
    let body = post.body

}
