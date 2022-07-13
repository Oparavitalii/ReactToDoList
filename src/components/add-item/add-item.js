import React, { Component } from "react";
import './index.css';

export default class AddItem extends Component {
    state = {
        label: ""
    }
    onLabelChange = (e) => {
        this.setState ({
            label: e.target.value
        })
        
    }
    onSubmitLabel = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label)
        this.setState({
            label:""
        })
    }
    render() {
        return (
                <form onSubmit={this.onSubmitLabel}  className="item-add-form d-flex">
                    <input type="text"
                            className="form-control"
                            onChange={this.onLabelChange}
                            placeholder="add new task"
                            value = {this.state.label} />
                    <button type="submit" className="btn btn-link" >Add item</button>
                </form>
        )
    }
}