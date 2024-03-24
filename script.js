

// How to query he DOM, select elements

document.getElementById('page-banner');
let banner = document.getElementById('page-banner');

console.log(banner);

let titles = document.getElementsByClassName('title');
console.log(titles);

let lists = document.getElementsByTagName('li');
console.log(lists);

let book = document.querySelector('#book-list li:nth-child(2)');
console.log(book);

book = document.querySelector('#book-list li:nth-child(2) .name');
console.log(book);

let books = document.querySelector('#book-list li .name');
console.log(books);
// only logged out the first li element

// let bookss = document.querySelectorAll('#book-list li .name');
// console.log(bookss);
// it logs out all the li elements within the book list with a class name of .name
// it returns some form of htlm collection, looking like an array.

// Array.from(bookss).forEach(function(book){
    // console.log(book);
// });
// it changes the nodelist returned (the bookss elememt in this case) to an array with the Array.from(bookss) code, then looped through it and print it out with theforEach(function(book{console.log(book)})) code

// How to edit the DOM
// textcontent and innerHTML.

let buks = document.querySelectorAll('#book-list li .name')
console.log(buks)

Array.from(buks).forEach(function(buks){
    console.log(buks.textContent);
});
// it logs out all the textcontent of the li elements

Array.from(buks).forEach(function(buks){
    buks.textContent = 'Mercy!'
});
// changing all the text contents of the li elements on the Dom directly, instead of just logging it out.

Array.from(buks).forEach(function(buks){
    buks.textContent += '(book title)';
});
// appending more contents to the li element. added the9book title) to the end of the textcontent

const bookList = document.querySelector('#book-list');
console.log(bookList.innerHTML);

// bookList.innerHTML = '<h2>My name is mercy</h2>' 
// changed the entire innerHTML content of the book-list div TO AN H2 TAG 

bookList.innerHTML += '<p>This is a paragraph added</p>'
// Appended a paragraph tag with contents to the end of the book-list div

// NODES
// Everything on the DOM is a node, the elements, the yextcontent, the attributes...all.

const ban = document.querySelector('#page-banner');
console.log('#page-banner node type is:', banner.nodeType);
// to check the node type, it returns a number that represents the type of node it is

console.log('#page-banner node name is:', banner.nodeName);
// to check the node name, it logs out DIV this time, cause the element with the id of page-banner ia a div

console.log('#page-banner has child nodes:', banner.hasChildNodes());
// to check if it has any child nodes. it returns either true or false

const clonedBan = banner.cloneNode(true);
console.log(clonedBan);
// This is a way of cloning an entire node, if the true is replaced by false it will only clone (return) the page-banner div without it's child nodes. we can clone a node and use it somewhere else on the DOM


// DOM Traversing
// traversing, meaning movng from one node to another, getting a parent node through the child node etc.

const bookLists = document.querySelector('#book-list');
console.log('the parent node is:', bookLists.parentNode);
// this returns the parent div. 'thr parent node is:' is just a string to add some text in this case, not a compulosry part of the code.

console.log('the parent node is:', bookLists.parentElement);
// this does the same thing as the booklists.parentNode in the above example, it returns the parent div.

console.log('the parent node is:', bookLists.parentElement.parentElement);
// This is how to grab the parent element of the parent element of a partiular node. in this case, it returns body, since body is the parent element of the wrapper div

console.log(bookLists.children);
// to traverse to the child nodes

console.log(bookLists.nextSibling);
// returns the next sibling to that node, it returns a form of library
console.log(bookLists.nextElementSibling);
// this returns the next sibling element directly

console.log(bookLists.previousSibling);
// returns the previous sibling to that node, it returns a form of library
console.log(bookLists.previousElementSibling);
// this returns the previous sibling element directly

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone!'
// we are querying the previousElementSibling, and searching for the p tag in it, then added some text content to the p tag


// DOM EVENTS/ REMOVING THINGS FROM THE DOM
let h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);
});
// added event listener to the h2 element

let btn = document.querySelectorAll('#book-list .delete');
btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = document.querySelector('#book-list li');
        li.parentNode.removeChild(li);
    });
})
// came up with this code myself, i simply targeted the li which is the parent of the delete btns and then targeted the li's parent to remove all li within it on click of the delete btn. 

// let btnn = document.querySelectorAll('#book-list .delete');
// Array.from(btnn).forEach(function(btnn){
    // btn.addEventListener('click', function(e){
        // const li = e.target.parentElement;
        // li.parentNode.removeChild(li);
    // });
// });
// here's mu tutor code, this two code do the same thing, since e.terget is pointing to the btn that's been targeted at the moment, then const li = the parent of that btn, which is an li element, and then the parent of the li is targeted to remove any li in it on click of btn.

let link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to', e.target.textContent, 'was prevented');
});

// selected an anchoe element and prevented it's default behaviour.


// EVENT BUBBLING
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(a){
    if(a.target.className == 'delete'){
        const li = a.target.parentElement;
        li.parentNode.removeChild(li)
    }
})
// can also use list.removeChild(li) for the last line of code, since the list is the parent node (ul)  we tryna target.
// i understand the code well, but still need to understand event bubbling and how it fits this task better than just adding the event listener to the delete btn directly.


// INTERACTING WITH FORMS




