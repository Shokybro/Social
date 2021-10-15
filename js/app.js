// post

const postForm = document.getElementById('form');
const postsCollection = document.querySelector('.posts');
const postInput = document.getElementById('post-input');

postForm.addEventListener('submit', post);

function post(e) {
    e.preventDefault();

    let yost = document.createElement('div');
    yost.classList.add('yost');

    let flexDiv = document.createElement('div');
    flexDiv.classList.add('flex');

    let profile = document.createElement('div');
    profile.classList.add('yost--profile')
}