

document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementById('wrapper');
    const toggleModeButton = document.getElementById('toggle-mode');
    const body = document.querySelector('body')

    toggleModeButton.addEventListener('click', function() {
        wrapper.classList.toggle('light-mode');
        body.classList.toggle('light-mode')
    });


});


// DELETE MOVIES

// const btns = document.querySelectorAll('#movie-list .delete');
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         console.log(li);
//         li.parentNode.removeChild(li);
//     })
// });

const list = document.querySelector('#movie-list ul');
list.addEventListener('click', function(a){
    if(a.target.className == 'delete'){
        const li = a.target.parentElement;
        li.parentNode.removeChild(li)
    }
})

// ADD MOVIES

const addBook = document.forms['add-movie'];
addBook.addEventListener('submit', function(e){
    e.preventDefault();
    
    let input = addBook.querySelector('input[type = "text"]').value;
    
    if (input.trim() === '') {
        return; 
    }

    input = input.toLowerCase();

    input = input.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });

    const li = document.createElement('li');
    const moviename = document.createElement('span');
    const delbtn = document.createElement('span');

    moviename.textContent = input;
    delbtn.textContent = 'delete';

    moviename.classList.add('name');
    delbtn.classList.add('delete');

    li.appendChild(moviename);
    li.appendChild(delbtn);

    const ul = document.querySelector('ul');
    ul.appendChild(li);

    addBook.querySelector('input[type="text"]').value = '';
});

// HIDE MOVIES

const hideMovies = document.querySelector('#hide');
hideMovies.addEventListener('change', function(e){
    if(hideMovies.checked){
        list.style.display = 'none';
    } else{
        list.style.display = 'initial';
    }
})

// SEARCH MOVIES

const searchMovies = document.forms['search-movies'].querySelector('input');
searchMovies.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const movies = document.querySelectorAll('#movie-list li');

    Array.from(movies).forEach(function(movie){
        const title = movie.firstElementChild.textContent;

        if(title.toLowerCase().indexOf(term) != -1){
            movie.style.display ='block';
        } else{
            movie.style.display = 'none';
        }
    })
    
})

// TABS

// const tabs = document.querySelector('.tabs');
// const panels = document.querySelectorAll('.panel');

// tabs.addEventListener('click', function(e){
//     if(e.target.tagName === 'LI'){
//         const targetPanel = document.querySelector(`#${e.target.dataset.target}`);
//         panels.forEach(function(panel){
//             if(panel == targetPanel){
//                 panel.classList.add('active');
//             } else{
//                 panel.classList.remove('active');
//             }
//         });
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li');
    const panels = document.querySelectorAll('.panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.dataset.target;

            panels.forEach(panel => {
                if (panel.id === targetId) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });

            tabs.forEach(t => {
                t.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});
















