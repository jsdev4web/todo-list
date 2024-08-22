import { format, par } from "date-fns"
import { loadMain, loadMainTwo, loadCard, updatedList} from "./doms";
import { singleItem } from "./singleView";

let list = []

export class Todolist {

    constructor(title, description, priority) {

        
        let date = "2024-8-17";

        this.title = title;
        this.description = description;
        this.duedate = date;
        this.priority = priority;
        this.todos = []
    }
        

         /*addList() {
           list = []
            
            let title = prompt("Title?");
            let description = prompt("Description?");
            let priority = prompt("Priority");
            
            let item = new Todolist(title, description, priority)
            list.push(item)
            //list.push(new Todolist(this.title, this.description, this.duedate, this.priority))
            console.log(list);
            loadCard()
            return list 
        }*/

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
            singleItem()
        
        }

        removeLastListObj(){
            //here i want to get index divs and remove the obj
            let allDivs = document.querySelectorAll(".projectDiv")
                //console.log(allDivs)
                allDivs.forEach((div, index) => {
                    div.addEventListener("click", (e) => {
                        //e.stopPropagation()
                        //console.log(index)
                        if (index > -1) {
                            list.splice(index, 1)
                            console.log(list)
                            }
                        
                    })
                    
                })
    
        }
    
}
