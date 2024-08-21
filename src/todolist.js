import { format, par } from "date-fns"
import { loadMain } from "./doms";


export class Todolist {

    constructor(title, description, priority) {

        
        let date = "2024-8-17";

        this.title = title;
        this.description = description;
        this.duedate = date;
        this.priority = priority;
        this.todos = []
    }
        

        addList() {
            list.push(new Todolist(this.title, this.description, this.duedate, this.priority))
            console.log(list)
            return list
        }

        addTodo(ans) {
            this.todos.push(ans)
        }

        removeLastTodo(){
            console.log("this removes last added todo")
            this.todos.pop()
        }

        removeFirstTodo(){
            console.log("this removes last first todo")
            this.todos.shift()
        }

        singleView(){
            console.log("shows a single card")
            //let btn = document.getElementById("singleCard");
            let allViewBtn = document.querySelectorAll(".viewCard")
            console.log(allViewBtn)
            allViewBtn.forEach((item) => {
                item.addEventListener("click", (e) =>{
                    e.stopPropagation()
                    

                    //create modal elements and append to body
                    let makeModal = document.createElement("dialog")
                    document.body.appendChild(makeModal);

                    //close btn modal on click
                    let closeBtn = document.createElement("button");
                    closeBtn.setAttribute("autofocus", "autofocus")
                    closeBtn.innerText = "Close"
                    makeModal.appendChild(closeBtn);

                closeBtn.addEventListener("click", (e) => {
                    
                    makeModal.close();
                })

                /*I created some editable text right here 
                let modText = document.createElement("p");
                modText.setAttribute("contenteditable", true)
                modText.innerText += this.title + "\n" +
                                     this.description + "\n" + 
                                     this.duedate + "\n" + 
                                     this.priority + "\n" 
                
                makeModal.appendChild(modText);*/


                //Create form to modal
                let myForm = document.createElement("form")
                myForm.setAttribute("id", "myForm");
                myForm.setAttribute("method", "post");

                //This div holds all the input divs
                let inputDivMain = document.createElement("div");
                inputDivMain.setAttribute("id", "inputDivMain")
                myForm.appendChild(inputDivMain)
                
                //create title div and append to main
                let titleDiv = document.createElement("div");
                inputDivMain.appendChild(titleDiv)
                //create label & input for div & append title div
                let titleLabel = document.createElement("label");
                titleLabel.innerText = "Title: "
                titleDiv.appendChild(titleLabel)
                let inputTitle = document.createElement("input");
                inputTitle.setAttribute("type", "text");
                inputTitle.setAttribute("name", "title");
                inputTitle.setAttribute("value", this.title)
                titleDiv.appendChild(inputTitle)


                //create descr. div & add main
                let descriptionDiv = document.createElement("div");
                inputDivMain.appendChild(descriptionDiv)
                //make label, input & add descrip div
                let descriptionLabel = document.createElement("label");
                descriptionLabel.innerText = "Description: "
                descriptionDiv.appendChild(descriptionLabel)
                let inputDescription = document.createElement("input");
                inputDescription.setAttribute("type", "text");
                inputDescription.setAttribute("name", "description");
                inputDescription.setAttribute("value", this.description)
                descriptionDiv.appendChild(inputDescription)

                //create date div & add main
                let duedateDiv = document.createElement("div");
                inputDivMain.appendChild(duedateDiv)
                //make label, input & add duedate div
                let duedateLabel = document.createElement("label");
                duedateLabel.innerText = "Due date: "
                duedateDiv.appendChild(duedateLabel)
                let inputDuedate = document.createElement("input");
                inputDuedate.setAttribute("type", "text");
                inputDuedate.setAttribute("name", "duedate");
                inputDuedate.setAttribute("value", this.duedate)
                duedateDiv.appendChild(inputDuedate)

                //create pri div and add to main
                let priorityDiv = document.createElement("div");
                inputDivMain.appendChild(priorityDiv)
                //create label, input & add pri div
                let priorityLabel = document.createElement("label");
                priorityLabel.innerText = "Priority: "
                priorityDiv.appendChild(priorityLabel)
                let inputPriority = document.createElement("input");
                inputPriority.setAttribute("type", "text");
                inputPriority.setAttribute("name", "priority");
                inputPriority.setAttribute("value", this.priority)
                priorityDiv.appendChild(inputPriority)

                //create submit button and add to form below
                let submitBtn = document.createElement("input")
                submitBtn.setAttribute("type", "submit")
                submitBtn.setAttribute("value", "Submit")
                submitBtn.setAttribute("post", "true")
                inputDivMain.appendChild(submitBtn)


                //Error Only the top card opens 1st clicked..weird
                submitBtn.addEventListener("click", (e) => {
                    e.preventDefault()
                   
                    //HERE **** I change the object text
                    this.title = myForm.title.value
                    this.description = myForm.description.value
                    this.duedate = myForm.duedate.value
                    this.priority = myForm.priority.value

                    console.log(this.title)
                    console.log(inputTitle)

                    console.log(this.description)
                    console.log(inputDescription)

                    console.log(this.duedate)
                    console.log(inputDuedate)

                    console.log(this.priority)
                    console.log(myForm.priority.value)


                    //ERROR this works but I added objects doubled */
                    document.body.innerText = ""
                    loadMain()
                    
                    
                })

                //add form to modal dialogue
                makeModal.appendChild(myForm);
                //trigger the js of modal
                makeModal.showModal()
            })

        })

    }
    

}
