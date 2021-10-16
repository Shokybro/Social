// post

const postForm = document.getElementById('form');
const postsCollection = document.querySelector('.posts');
const postInput = document.getElementById('post-input');

postForm.addEventListener('submit', post);

function post(e) {
    e.preventDefault();

    val = postInput.value;

    creatPost(val);

    clearInput(postInput)
}

function creatPost (val) {
    let yost = document.createElement('div');
    yost.className = "yost mb-4"

    let flexDiv = document.createElement('div');
    flexDiv.classList.add('flex');

    let profile = document.createElement('div');
    profile.classList.add('yost--profile');

    let postTitle = document.createElement('div');
    postTitle.classList.add('yost--title');
    postTitle.textContent = 'Shokybro'
    
    let yostInfo = document.createElement('div');
    yostInfo.classList.add('yost--info');
    yostInfo.textContent = val;

    flexDiv.appendChild(profile);
    flexDiv.appendChild(postTitle);
    
    yost.appendChild(flexDiv);
    yost.appendChild(yostInfo);

    postsCollection.appendChild(yost);
}

function clearInput (input) {
    input.value = ''
}