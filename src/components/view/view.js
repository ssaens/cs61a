import React, {Component} from 'react';
import {ViewBox} from '../common/common';
import DropDown from "../drop-down/drop-down";

import './view.css';

let nextId = 0;

class View extends Component {
    render() {
        return (
            <div className="view">
                {this.props.children}
            </div>
        );
    }
}

function viewFromTemplate(model) {
    const {title, announcements, dropdowns} = model;
    const dropDownElements = dropdowns.map((dropdown) => {
        return (
            <DropDown
                key={nextId++}
                header={dropdown.header}
                ctas={dropdown.ctas}
            >
                {dropdown.content}
            </DropDown>
        );
    });

    let header;
    if (Array.isArray(announcements) && announcements.length) {
        header = (
            <ViewBox>
                <h2>{title}</h2>
                <h3 className="dotted dotted-ann">Announcements</h3>
                <div className="announcements">
                    {announcements}
                </div>
            </ViewBox>
        );
    } else {
        header = (
            <ViewBox>
                <h2>{title}</h2>
            </ViewBox>
        );
    }

    return (
        <View>
            {header}
            {dropDownElements}
        </View>
    );
}

export {
    viewFromTemplate,
    View
}

export default View;