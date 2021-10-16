// post

const postForm = document.getElementById('form');
const postsCollection = document.querySelector('.posts');
const postInput = document.getElementById('post-input');
const postAlert = document.querySelector('.alert')

postForm.addEventListener('submit', post);

function post(e) {
    e.preventDefault();

    val = postInput.value;

    if (val.length > 0) {
        creatPost()
    }
    else {
        postAlert.classList.remove('d-none')

        setTimeout(function () {
            postAlert.classList.add('d-none')
        }, 3000)
    }
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
    yostInfo.textContent = postInput.value;

    flexDiv.appendChild(profile);
    flexDiv.appendChild(postTitle);
    
    yost.appendChild(flexDiv);
    yost.appendChild(yostInfo);

    postsCollection.appendChild(yost);

    clearInput(postInput)
}

function clearInput (input) {
    input.value = ''
}