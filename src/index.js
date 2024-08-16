


let list = []

class Todolist {


    constructor(title, description, duedate, priority) {

        this.title = title;
        this.description = description;
        this.duedate = duedate
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
    }


    let myList = new Todolist("Work", "do work", 12/11/1999, 3)



    console.log(myList.todos.push("dog", "cat"))
    myList.addTodo("lion")
    myList.removeFirstTodo()
    
    console.log(myList)

    