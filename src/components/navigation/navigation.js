import React, {Component} from 'react';

import { NAV_WIDTH } from '../../common';

import './navigation.css';

class NavButton extends Component {
    render() {
        const style = {
            width: NAV_WIDTH,
            backgroundColor: this.props.active ? 'black' : null,
            borderRight: this.props.active ? '5px solid #0797EA' : null
        };

        return (
            <div className="navigation-button" onClick={() => this._onClick()} style={style}>
                <span className="label">
                    {this.props.label}
                </span>
            </div>
        );
    }

    _onClick() {
        if (!this.props.active) {
            this.props.notify(this.props.id);
        }
    }
}

class Navigation extends Component {
    render() {
        const style = {
            width: this.props.expanded ? NAV_WIDTH : 0,
        };

        const items = this._processItems();

        return (
            <div
                className="navigation-container"
                style={style}
            >
                <nav>
                    {items}
                </nav>
            </div>
        );
    }

    _processItems() {
        const items = [];

        for (const item of this.props.items) {
            items.push(<NavButton
                key={item.id}
                label={item.label}
                id={item.id}
                active={this.props.selected === item.id}
                notify={(id) => { this.props.transition(id) }}
            />);
        }
        return items;
    }
}

export default Navigation;