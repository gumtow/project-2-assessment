const React = require('react');

// Import Default
const Default = require('./Default');

// Extend Index
class Index extends React.Component{
    render(){
        const {todos} = this.props;
        let display= "block";
        if (todos.length > 0){
            display = "none";
        } else {
            display = "block";
        };
        console.log(display);
        console.log(todos);
        return(
            <Default title="To Do List">
                <h1>To Do List</h1>
                <h3 style={{display:display}}>There are no to dos yet!</h3>
                <ul>
                    {
                        todos.map((task, i)=>{
                            return(
                                <li>
                                    {task.task} - Not Done - &nbsp;
                                    <form style={{display:'inline'}} className="form-inline" action={`/todo/${task.id}?_method=DELETE`} method="POST">
                                        <input className="btn btn-outline-info btn-sm" type="submit" value="DONE"/>
                                    </form>
                            </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                    <form className="form-inline" action="/todo" method="POST">
                            <input className="form-control" type="text" name="task" />&nbsp;
                            <input className="btn btn-primary" type="submit" name="" value="Add To Do"/>
                    </form>   

            </Default>
        )
    } 
}
// Export
module.exports = Index;