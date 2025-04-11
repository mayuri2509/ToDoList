import React,{Component} from "react";
class Todoinput extends Component{
    constructor(props){
        super(props);
        this.state={
        tasks:[],
        taskInput:'',
        editIndex:null,
        editInput:''
    };
  }
  AddTask = () =>{
        const{taskInput,tasks}=this.state;
        if(taskInput.trim()){
            this.setState({
                tasks:[...tasks,taskInput],
                taskInput:''
            });
        }};
   DeleteTask = (index) =>{
        const{tasks}=this.state;
        const updatedTasks = tasks.filter((_,i) => i !== index);
        this.setState({
            tasks:updatedTasks
          })};
    EditTask =(index) =>{
        this.setState({
            editIndex:index,             
            editInput:this.state.tasks[index]
        });
    };
    Update = () =>{
        const{ editIndex,editInput,tasks}=this.state;
        if(editInput.trim())
        { const updatedTasks =[...tasks];
            updatedTasks[editIndex] =editInput;
            this.setState({
                tasks:updatedTasks,
                editIndex:null,
                editInput:''
            });
        }
    };
    InputChange = (e) =>{
        this.setState({taskInput:e.target.value});
    };
    EditInputChange = (e) => {
        this.setState({editInput:e.target.value});
    };
 
    render(){
        const{tasks,taskInput,editIndex,editInput}= this.state;
        return(
            <div className="container">
            <h1>Todo List</h1>
             <input 
             type="text"
             value={taskInput}
             onChange={this.InputChange}
             placeholder=" Add Task"/>
              
             <button onClick={this.AddTask}>Add Task </button>
             <ul>
         {tasks.map((tasks,index) =>(
            <li key={index}>
            {editIndex === index ? (
                <div>
                <input
                type="text"
                value={editInput}
                onChange={this.EditInputChange}/>
                <button onClick={this.Update}>Update</button>
               </div>
            ):(
                <div>
               {tasks}
                <button onClick={() => this.EditTask(index)}>Edit</button>
                <button onClick={() =>this.DeleteTask(index)}>Delete</button>
                </div>
            )}
            </li>
         ))}
          </ul>
         </div>
        );
    }
};
    
export default Todoinput;
