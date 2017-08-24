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
                    <div className="ctas">
                        {this._generateCtas()}
                    </div>
                    <div className="drop-down__custom">
                        {this.props.custom}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let contentHeight = 0;
        for (const child of this.contentElement.childNodes) {
            contentHeight += child.offsetHeight || 0;
        }
        this.contentHeight = `${contentHeight}px`
    }

    _toggle() {
        this.toggleButton.classList.toggle('active');
        if (!this.open) {
            this.contentElement.style.height = this.contentHeight;
        } else {
            this.contentElement.style.height = 0;
        }
        this.open = !this.open;
    }

    _generateCtas() {
        const ctas = [];
        for (const cta of this.props.ctas) {
            ctas.push(<a key={ctas.length} className="cta" href={cta.href} target="_blank">{cta.label}</a>);
        }
        return ctas;
    }

}

export default DropDown;