import React, { Component } from "react";
import './index.css';

export default class AddItem extends Component {
  
    render() {
        const {addItem} = this.props;
        return (
            <div className="item-add-form">
                <button type="button" className="btn btn-link" onClick={addItem}>Add item</button>
            </div>
        )
    }
}