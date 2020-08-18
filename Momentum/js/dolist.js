(function(){
    const formelm = document.querySelector(".js-form2"),
    inputelm = formelm.querySelector("input[type='text']"),
    dolist = document.querySelector(".js-dolist");
    
    const Lstorage = "TODOS";
    

    let todos =[];

    function deletebtn(e){
        const target = e.target;
        const li = target.parentNode;
        dolist.removeChild(li);
        const deltodos = todos.filter(function(todo){
            return todo.id!==parseInt(li.id)
        })
        todos = deltodos
        savelist();
        
    }

    function painttodo(text){
        dolist.classList.remove("hide");
        const li = document.createElement("li");
        const delbtn = document.createElement("button");
        const span = document.createElement("span");
        const newid =todos.length +1
        delbtn.innerHTML="Ⅹ"
        delbtn.addEventListener("click",deletebtn)
        span.innerHTML=text;
        li.appendChild(span);
        li.appendChild(delbtn);
        li.id=newid;
        dolist.appendChild(li);
        const todoobj = {
            text : text,
            id:newid
        }
        todos.push(todoobj);
        savelist();
    }

    function savelist(){
        localStorage.setItem(Lstorage,JSON.stringify(todos))
    }

    function addLI(e){
        e.preventDefault();

        const dolist_value=inputelm.value;

        painttodo(dolist_value);
        inputelm.value="";

    }





    function load(){
        const currentList = localStorage.getItem(Lstorage);

        if(currentList !== null){
            const parsedTodos = JSON.parse(currentList)
            parsedTodos.forEach(function(todo){ 
                painttodo(todo.text)
                
            })
        }
    }

    function active(){
        load();
        formelm.addEventListener("submit",addLI)
    }
    active()
})()

