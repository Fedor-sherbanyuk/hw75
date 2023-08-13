const POSTS = 'https://jsonplaceholder.typicode.com/posts/';
const COMMENTS = 'https://jsonplaceholder.typicode.com/comments/';

function getOpenJson(event) {
    const data = document.querySelector('#formJson');
    event.preventDefault();
    if (event.submitter.closest('.openJsonPosts')) {
        const numberId = +data.numberId.value;
        getElement(numberId, POSTS);
    }
    if (event.submitter.closest('.openJsonComments')) {
        const numberId = +data.numberId.value;
        getElement(numberId, COMMENTS);
    }
}

function getElement(id, http) {
    if (id >= 0 && id <= 100) {
        fetch(http + id)
            .then((response) => response.json())
            .then((info) => {
                if (http === POSTS) {
                    document.querySelector('#posts').innerHTML =
                        `<div><h3>${info.title}</h3>
                     <p>${info.body}</p></div> `;
                } else {
                    document.querySelector('#comments').innerHTML =
                        `<div>    
                         <h3>${info.name}</h3>
                     <p>${info.email}</p>
                     <p>${info.body}</p>
                        </div>`;
                }
            })
            .catch((err) => {
                console.log(`Error id`, err)
                throw(`Error id`);
            });
    }
    else {
        throw new Error('Write 0 do 100');
    }
}

document
    .querySelector('#formJson')
    .addEventListener('submit', getOpenJson);
