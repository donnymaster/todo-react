import React from 'react';
import style from './list.module.css';

export default class List extends React.Component{
    
    state = {
        butActive: false
    }

    changeStateBut = () =>{
        this.setState({butActive: !this.state.butActive})
    }

    render(){

        return(
            <div onClick={this.changeStateBut} className={style.listText}>
                <p>{this.props.title}</p>
                <button disabled={ !this.state.butActive ? 'disabled' : null} onClick={this.props.onDelete}>x</button>
                </div>
        );
    }
}