 window.onload = init;

 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             let e=document.createElement("button");
             let b=document.createElement("button");
             e.style.marginLeft="2em";
             b.style.marginLeft="2em";
             b.innerText="Sacar de lista"
             e.innerText="Hecho";
             element.innerText = task;
             element.appendChild(e);
             //MARCAR
             e.addEventListener("click", () => {
                    element.style.textDecoration="line-through";
                    element.removeChild(e);
                    element.appendChild(b);
             });

            //ELIMINAR DE LA LISTA
             b.addEventListener("click", function(){
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(form.task.value, form.important.checked);

     });
 }