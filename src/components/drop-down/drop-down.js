import React, {Component} from 'react';
import './drop-down.css';

class DropDown extends Component {

    render() {
        return (
            <div className="drop-down">
                <div className="drop-down__header">
                    <h2>
                        Discussion {' '}
                        <span className="number">{this.props.number}</span>: {' '}
                        {this.props.title}
                    </h2>
                    <div className="drop-down__toggle"
                         onClick={() => this._toggle()}
                         ref={($) => this.toggleButton = $}
                    >
                        &#x25B2;
                    </div>
                </div>
                <div className="drop-down__content" ref={($) => this.contentElement = $}>
                    <a className="slides-link" href={this.props.slides} target="_blank">Slides</a>
                    <div className="drop-down__custom">
                        {this.props.custom}
                    </div>
                </div>
            </div>
        );
    }

    _toggle() {
        this.toggleButton.classList.toggle('active');
        this.contentElement.classList.toggle('open');
    }

}

export default DropDown;