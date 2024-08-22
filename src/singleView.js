
import { loadMainTwo, sendlist } from "./doms"

function updateList(){
    
}

export function singleItem(){

        let cardValues = sendlist()
        console.log(cardValues)


        let allViewBtn = document.querySelectorAll(".viewCard")
            console.log(allViewBtn)

            allViewBtn.forEach((item, index) => {

                //refers to the 2 card divs buttons
                //console.log(item)
    
                item.addEventListener("click", (e) =>{
                    //item = e.target.currentTarget.item
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


                //Create form to modal I cut modal out HERE !!!!
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
                inputTitle.setAttribute("value", cardValues[index].title)
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
                inputDescription.setAttribute("value", cardValues[index].description)
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
                inputDuedate.setAttribute("value", cardValues[index].duedate)
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
                inputPriority.setAttribute("value", cardValues[index].priority)
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
                   
                    cardValues[index].title = myForm.title.value
                    cardValues[index].description = myForm.description.value
                    cardValues[index].duedate = myForm.duedate.value
                    cardValues[index].priority = myForm.priority.value

                    console.log(cardValues[index].title)
                    console.log(inputTitle)

                    console.log(cardValues[index].description)
                    console.log(inputDescription)

                    console.log(cardValues[index].duedate)
                    console.log(inputDuedate)

                    console.log(cardValues[index].priority)
                    console.log(myForm.priority.value)


                    //ERROR this works but I added objects doubled 
                    document.body.innerText = ""
                    //I need to remove all existing objects prior to this 
                    loadMainTwo()
                    
                    
                })

                //add form to modal dialogue
                makeModal.appendChild(myForm);
                //trigger the js of modal
                makeModal.showModal()
            
            })

        })
        
    }