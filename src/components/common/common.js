import React, {Component} from 'react';
import './common.css';

class ViewBox extends Component {
    render() {
        return (
            <div className="view-box">
                {this.props.children}
            </div>
        );
    }
}

class CodeBox extends Component {
    render() {
        return (
            <div className="code-box">
                {this.props.children}
            </div>
        );
    }
}

const days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];

function dueDate(month, day) {
    const date = new Date(2017, month - 1, day);
    return <span className="dotted dotted-due">{`${days[date.getDay()]} ${month} / ${day}`}</span>;
}

function eventDate(month, day) {
    const date = new Date(2017, month - 1, day);
    return <span className="dotted dotted-event">{`${days[date.getDay()]} ${month} / ${day}`}</span>;
}

function homework(number, link, m, d) {
    return (
        <ann>
            <a href={link} target="_blank">Homework {number}</a> has been released
            {dueDate(m, d)}
        </ann>
    );
}

function lab(number, link, m, d) {
    return (
        <ann>
            <a href={link} target="_blank">Lab {number}</a> has been released
            {dueDate(m, d)}
        </ann>
    );
}

function project(number, name, link, m, d) {
    return (
        <ann>
            <a href={link} target="_blank">Project {number}: {name}</a> has been released
            {dueDate(m, d)}
        </ann>
    );
}

export {
    ViewBox,
    CodeBox,
    dueDate,
    homework,
    lab,
    project,
}