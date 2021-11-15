import React, { useState } from 'react';


export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [dis, setDis] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !dis){
            alert('Title & Discription can no be blank!')
        }
        else{
            props.addTodo(title, dis);
        setTitle("");
        setDis("");
        }
    }
    return (
        <div className='container'>
            <h3 className='text-center'>
                Add a todo item
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                    {/* <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="dis" className="form-label">Task Discription</label>
                    <input type="text" value={dis} onChange={(e)=>setDis(e.target.value)} className="form-control" id="dis" />
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
