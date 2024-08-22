import { Todolist } from "./todolist.js";
import "./styles.css";
import { add } from "lodash";

//main list to store objects
let list = []


//loads the doms
export function loadMain(){
    console.log("This comes from the DOMs")

    //main container holder
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    document.body.appendChild(container);

    //div holder per the object 
    let projectContainer = document.createElement("div");
    projectContainer.setAttribute("class", "projectContainer");
    container.appendChild(projectContainer)

    //Loads a outside single btn to make a project div at top
    let newObjectBtn = document.createElement("button");
        newObjectBtn.innerText = "Add Project";
        projectContainer.appendChild(newObjectBtn);

        newObjectBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            console.log("Add New Card Below")
            //whatever is 1st on list use it to trigger new list
            //let li = list[0]
            //li.addList()

            let title = prompt("Title?");
            let description = prompt("Description?");
            let priority = prompt("Priority");
            
            let item = new Todolist(title, description, priority)
            list.push(item)
            console.log(list)
            loadCard()
            
        })

    // I Init the list here objects here
    let list1 = new Todolist("Work", "Testing", 5)
    let list2 = new Todolist("Study", "Html", 10)

    //add to the seperate todo array in each project
    list1.todos.push("walk")
    list1.todos.push("running")
    list1.addTodo("Weights")

    //I push each project to the list holder
    list.push(list1)
    list.push(list2)

    //Loop thru list
    list.forEach((item, index) => {
        console.log(item)
        let projectDiv = document.createElement("div");
        projectDiv.setAttribute("class", "projectDiv");

        let html = "";
        
        //I can dig in each project gray item by object key
        html += "Title: " + JSON.stringify(item.title) + "\n" + 
                "Description: " + JSON.stringify(item.description) + "\n" + 
                "Due date: " + JSON.stringify(item.duedate) + "\n" + 
                "Priority: " + JSON.stringify(item.priority) + "\n"
                

        projectDiv.innerText += html
        projectContainer.appendChild(projectDiv);

        let buttonMain = document.createElement("div");
        buttonMain.setAttribute("id", "buttonMain");
        projectDiv.appendChild(buttonMain)


        let addTodoBtn = document.createElement("button");
        //addTodoBtn.setAttribute("class", "todobtn");
        addTodoBtn.innerText = "Add Todo"
        buttonMain.appendChild(addTodoBtn);

        addTodoBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            let ans = prompt()
            item.addTodo(ans)
            console.log(item)
        });

        let removeTodoBtn = document.createElement("button");
        //removeTodoBtn.setAttribute("class", "todobtn");
        removeTodoBtn.innerText = "Remove 1st Todo"
        buttonMain.appendChild(removeTodoBtn);

        removeTodoBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            item.removeFirstTodo()
            console.log(item)
            
        });

        let singleTodoBtn = document.createElement("button");
        singleTodoBtn.setAttribute("class", "viewCard");
        singleTodoBtn.innerText = "View Card"
        buttonMain.appendChild(singleTodoBtn);

        singleTodoBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            item.singleView()
        });


        let removeCard = document.createElement("button");
        //removeCard.setAttribute("class", "todobtn");
        removeCard.innerText = "Remove Card"
        buttonMain.appendChild(removeCard);

        removeCard.addEventListener("click", (e) => {
            e.stopPropagation()

            let projectDiv = document.querySelector(".projectDiv")
            console.log(projectDiv)
            projectDiv.remove()

        });

        //here i want to get index divs and remove the obj
        let allDivs = document.querySelectorAll(".projectDiv")
            //console.log(allDivs)
            allDivs.forEach((div, index) => {
                removeCard.addEventListener("click", (e) => {
                    //e.stopPropagation()
                    //console.log(index)
                    if (index > -1) {
                        list.splice(index, 1)
                        console.log(list)
                    }
                    
                })
                
            })    
    })
}



export function loadMainTwo(){
    console.log("This comes from the DOMs")

    //main container holder
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    document.body.appendChild(container);

    //div holder per the object 
    let projectContainer = document.createElement("div");
    projectContainer.setAttribute("class", "projectContainer");
    container.appendChild(projectContainer)

    //Loads a outside single btn to make a project div at top
    let newObjectBtn = document.createElement("button");
        newObjectBtn.innerText = "Add Project";
        projectContainer.appendChild(newObjectBtn);

        newObjectBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            console.log("add new project object")
        })


    //Loop thru list
    list.forEach((item, index) => {

        let html = "";  

        console.log(item)
        let projectDiv = document.createElement("div");
        projectDiv.setAttribute("class", "projectDiv");

        //I can dig in each project gray item by object key
        html += "Title: " + JSON.stringify(item.title) + "\n" + 
                "Description: " + JSON.stringify(item.description) + "\n" + 
                "Due date: " + JSON.stringify(item.duedate) + "\n" + 
                "Priority: " + JSON.stringify(item.priority) + "\n"
                

        projectDiv.innerText += html
        projectContainer.appendChild(projectDiv);

        let buttonMain = document.createElement("div");
        buttonMain.setAttribute("id", "buttonMain");
        projectDiv.appendChild(buttonMain)
        
        let addTodoBtn = document.createElement("button");
        //addTodoBtn.setAttribute("class", "todobtn");
        addTodoBtn.innerText = "Add Todo"
        buttonMain.appendChild(addTodoBtn);

        addTodoBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            let ans = prompt()
            item.addTodo(ans)
            console.log(item)
        });

        let removeTodoBtn = document.createElement("button");
        //removeTodoBtn.setAttribute("class", "todobtn");
        removeTodoBtn.innerText = "Remove 1st Todo"
        buttonMain.appendChild(removeTodoBtn);

        removeTodoBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            item.removeFirstTodo()
            console.log(item)
            
        });

        let singleTodoBtn = document.createElement("button");
        singleTodoBtn.setAttribute("class", "viewCard");
        singleTodoBtn.innerText = "View Card"
        buttonMain.appendChild(singleTodoBtn);

        singleTodoBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            item.singleView()
        });


        let removeCard = document.createElement("button");
        //removeCard.setAttribute("class", "todobtn");
        removeCard.innerText = "Remove Card"
        buttonMain.appendChild(removeCard);

        removeCard.addEventListener("click", (e) => {
            e.stopPropagation()

            let projectDiv = document.querySelector(".projectDiv")
            console.log(projectDiv)
            projectDiv.remove()

        });

        removeLastListObj()
    })
}


function loadCard(){
    console.log("I am load card")

    let projectDiv = document.createElement("div");
    projectDiv.setAttribute("class", "projectDiv");

    console.log(list)
    let item = list.pop()
    console.log(item)

    let html = "";

    //I can dig in each project gray item by object key
    html += "Title: " + JSON.stringify(item.title) + "\n" + 
    "Description: " + JSON.stringify(item.description) + "\n" + 
    "Due date: " + JSON.stringify(item.duedate) + "\n" + 
    "Priority: " + JSON.stringify(item.priority) + "\n"
    

    projectDiv.innerText += html

    let projectContainer = document.querySelector(".projectContainer")
    projectContainer.appendChild(projectDiv);


    let buttonMain = document.createElement("div");
        buttonMain.setAttribute("id", "buttonMain");
        projectDiv.appendChild(buttonMain)
        
        let addTodoBtn = document.createElement("button");
        //addTodoBtn.setAttribute("class", "todobtn");
        addTodoBtn.innerText = "Add Todo"
        buttonMain.appendChild(addTodoBtn);

        addTodoBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            let ans = prompt()
            item.addTodo(ans)
            console.log(item)
        });

        let removeTodoBtn = document.createElement("button");
        //removeTodoBtn.setAttribute("class", "todobtn");
        removeTodoBtn.innerText = "Remove 1st Todo"
        buttonMain.appendChild(removeTodoBtn);

        removeTodoBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            item.removeFirstTodo()
            console.log(item)
            
        });


        let singleTodoBtn = document.createElement("button");
        singleTodoBtn.setAttribute("class", "viewCard");
        singleTodoBtn.innerText = "View Card"
        buttonMain.appendChild(singleTodoBtn);

        singleTodoBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            item.singleView()
        });


        let removeCard = document.createElement("button");
        //removeCard.setAttribute("class", "todobtn");
        removeCard.innerText = "Remove Card"
        buttonMain.appendChild(removeCard);

        removeCard.addEventListener("click", (e) => {
            e.stopPropagation()

            let projectDiv = document.querySelector(".projectDiv")
            console.log(projectDiv)
            projectDiv.remove()

        });
}



