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

export {
    ViewBox,
    CodeBox
}