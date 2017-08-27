import React, {Component} from 'react';
import {ViewBox} from '../common/common';

import './drop-down.css';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            fullHeight: 0,
        }
    }

    render() {
        const {type, number, title} = this.props.header;
        const ctas = this._processCtas();

        const chevronStyle = {
            transform: this.state.open ? 'rotate(-180deg)' : 'rotate(0deg)'
        };

        const contentStyle = {
            maxHeight: this.state.open ? 2000 : 0,
            paddingTop: this.state.open ? 20 : 0
        };

        return (
            <div className="drop-down">
                <ViewBox>
                    <div className="drop-down__header">
                        <h3 className={`dotted dotted-${type.toLowerCase()}`}><span className="identifier">{type} {number}:</span> {title}</h3>
                        <span
                            className="drop-down__toggle"
                            style={chevronStyle}
                            onClick={() => {this._toggle()}}
                        >
                            <i className="fa fa-chevron-down" aria-hidden="true"/>
                        </span>
                    </div>
                </ViewBox>
                <div
                    className="drop-down__content"
                    style={contentStyle}
                >
                    <ViewBox>
                        <div className="drop-down__ctas">
                            {ctas}
                        </div>
                    </ViewBox>
                    {this.props.children}
                </div>
            </div>
        );
    }

    _processCtas() {
        const ctas = [];
        for (const cta of this.props.ctas) {
            ctas.push(
                <li className="cta" key={ctas.length}>
                    <a href={cta.href} target="_blank">
                        {cta.icon ? <i className={`fa ${cta.icon}`}/> : null}
                        {cta.label}
                    </a>
                </li>
            );
        }
        return ctas;
    }

    _toggle() {
        this.setState({ open: !this.state.open });
    }
}

export default DropDown;