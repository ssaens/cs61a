import React, {Component} from 'react';

class NavButton extends Component {

    render() {
        return (
            <div className="navigation-button">
                <span className="icon">
                    {this.props.icon}
                </span>
                <span className="label">
                    {this.props.label}
                </span>
            </div>
        );
    }

}

class Navigation extends Component {

    render() {
        const buttons = this._processItems();

        return (
            <div className="navigation-container"
                ref={($) => this.$ = $}>
                <nav>
                    <ul>

                    </ul>
                </nav>
            </div>
        );
    }

    _processItems() {
        const items = [];
        for (const item of this.props.items) {
            items.push(<NavButton
                icon={item.icon}
                label={item.label}
                view={item.view}
            />)
        }
    }

}