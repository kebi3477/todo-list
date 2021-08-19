const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
let arr = JSON.parse(localStorage.getItem('todo'));

if(localStorage.getItem('todo') === null) {
    arr = [];
    localStorage.setItem('todo', '[]');
}

btn.addEventListener('click', function() {
    const name = document.querySelector('.name');
    const tel = document.querySelector('.tel');
    const json = {
        name: name.value,
        tel: tel.value
    }
    
    arr.push(json);
    localStorage.setItem('todo', JSON.stringify(arr));
    addTodo();
})

addTodo();

function addTodo() {
    removeTodo();
    arr.forEach(json => {
        const name = document.createElement('div');
        const tel = document.createElement('div');
        
        name.innerText = json.name;
        tel.innerText = json.tel;
        
        list.append(name, tel);
    })
}

function removeTodo() {
    // divs는 dom으로 이루어진 배열
    const divs = document.querySelectorAll('.list > div:not(.list__title)');
    divs.forEach(el => el.remove());
}