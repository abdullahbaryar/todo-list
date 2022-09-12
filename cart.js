function bgc(ac){
    document.getElementById('asd').style.background = ac;
}


let list = [];
let list2=[];
let textinputf = document.querySelector('#text-input-fild');
let addButton = document.querySelector('#add-button');
let todocontainer = document.querySelector('.todo-container');
let remove = document.querySelector('#remove');




addButton.addEventListener('click', () => {
     //list.push(list2);
     //list[0]=list2;
    showlist();
    
    textinputf.value = "";
})


function showlist() {

    if (textinputf.value.trim().length == '')
        return;
    let main = document.createElement('div');
    main.classList.add('main');
    todocontainer.appendChild(main);
    let todoitm = document.createElement('div');
    todoitm.classList.add('todo-item-cont');
    main.appendChild(todoitm);
    let todotext = document.createElement('input');
    todotext.id = 'todo-text';
    todotext.value = textinputf.value;
    todoitm.appendChild(todotext);

    let editbutton = document.createElement('button');
    editbutton.id = 'edit-button';
    editbutton.innerHTML = "Edit"
    todoitm.appendChild(editbutton);
    editbutton.addEventListener('click', () => {
        todotext.value = todotext.innerText;
    })

    let deletbutton = document.createElement('button');
    deletbutton.id = 'delet-button';
    deletbutton.innerHTML = "Delet"
    todoitm.appendChild(deletbutton);
    deletbutton.addEventListener('click', () => {
        let parent = deletbutton.parentElement;
        parent.remove(parent);
        todoitm1.remove('todo-item-cont2');
        main2.remove('main2');
    })


    /*-----------------next add --------------------*/
    list2=[];
    let todoitm1 = document.createElement('div');
    todoitm1.classList.add('todo-item-cont2');
    main.appendChild(todoitm1);
    let todotext1 = document.createElement('input');
    todotext1.id = 'todo-text1';
    todotext1.placeholder=`enter related items ${todotext.value}`
    todoitm1.appendChild(todotext1);
    
    let addbutton2 = document.createElement('button');
    addbutton2.id = 'add-button2';
    addbutton2.innerHTML = "ADD"
    todoitm1.appendChild(addbutton2);
    
    addbutton2.addEventListener('click', () => {
        list2.push(todotext1.value);
        list[0]=list2;
        //list.push(list2);
        console.log(list);
        showlist1();
        todotext1.value= "";
    })
    let main2 =document.createElement('div');
    main2.className='main2';
    main.appendChild(main2);
        function showlist1() {
        if (todotext1.value.trim().length == '')

            return;

        let todoitm2 = document.createElement('div');
        todoitm2.classList.add('todo-item-cont3');
        main2.appendChild(todoitm2);
        let todotext2 = document.createElement('input');
        todotext2.id = 'todo-text2';
        todoitm2.appendChild(todotext2);
        todotext2.value=todotext1.value;


        let editbutton1 = document.createElement('button');
        editbutton1.id = 'edit-button1';
        editbutton1.innerHTML = "Edit"
        todoitm2.appendChild(editbutton1);
        editbutton1.addEventListener('click', () => {
            todotext2.value = todotext2.innerText;
        })


        let deletbutton1 = document.createElement('button');
        deletbutton1.id = 'delet-button1';
        deletbutton1.innerHTML = "Delet"
        todoitm2.appendChild(deletbutton1);
        deletbutton1.addEventListener('click', () => {
            let parent = deletbutton1.parentElement;
            parent.remove(parent);
        })
    }
}


remove.addEventListener('click', () => {
    todocontainer.innerHTML = "";
});
