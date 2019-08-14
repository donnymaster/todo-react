import React from 'react';
import style from './todo.module.css';
import List from '../List/list.js';


export default class ToDo extends React.Component{

    state = {
       list: getToDo(),
       value: ''
    }

    deleteItem = (_i) => {
        let newList = this.state.list.filter((item, i) => i != _i);
        this.setState({list: newList});
    }
    addItem = () => {
        if(this.state.value !== ""){
            let newList = [...this.state.list];
            newList.unshift({title: this.state.value});
            this.setState({list: newList});
            this.state.value = "";
        }
    }

    setValue = (event) => {
        this.setState({value: event.target.value});
    }

    deleteAll = () =>{
        this.setState({list: []});
    }

    render(){
        const list = this.state.list.map((item, i) => {
            return <List 
            title={item.title}
            key={Math.random()*100}
            onDelete={() => this.deleteItem(i)}
            />
        });
        return(
            <div className={style.wrapped}>
                <div>
                    <input type="text" value={this.state.value} onChange={this.setValue}/>
                    <button onClick={this.addItem}>Add</button>
                    <button onClick={this.deleteAll}>Delete All</button>
                </div>
                <div className={style.wrapList}>
                    {list}
                </div>
            </div>
        );
    }
}

function getToDo(){
    return [
        {
            title: "to do 1"
        },
        {
            title: "to do 2"
        },
        {
            title: "to do 3"
        }
    ]
}