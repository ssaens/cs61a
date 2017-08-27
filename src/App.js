import React, {Component} from 'react';
import Navigation from './components/navigation/navigation';
import {ViewBox} from './components/common/common';
import {View, viewFromTemplate} from './components/view/view';
import { NAV_WIDTH } from './common';

import Model from './models/model';
import me from './dillon-yao.jpg';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this._initializeMaps();
        this._processModel();
        this.transitioning = false;
        this.state = {
            navExpanded: false,
            view: 'home',
            viewHeight: window.innerHeight - 64
        };
        window.addEventListener('resize', () => {
            this.setState({height: window.innerHeight - 64});
        });
    }

    render() {
        const isNavExpanded = this.state.navExpanded;
        const contentStyle = {
            marginLeft: isNavExpanded ? NAV_WIDTH : 0
        };

        const viewStyle = {
            height: this.state.viewHeight,
        };

        return (
            <div className="app">
                <Navigation
                    items={this.navItems}
                    expanded={isNavExpanded}
                    selected={this.state.view}
                    transition={(id) => this._transitionTo(id)}
                />
                <div
                    className="content"
                    style={contentStyle}
                >
                    <header>
                        <span
                            className="menu-toggle"
                            style={{color: isNavExpanded ? '#0797EA' : null}}
                            onClick={() => this._toggleNav()}
                        >
                            <i className="fa fa-bars" aria-hidden="true"/>
                        </span>
                        <h1>CS <span className="course">61A</span> Discussion Resources</h1>
                    </header>
                    <div
                        className="view-container"
                        style={viewStyle}
                        ref={($) => this.viewContainer = $}>
                        {this.viewMap[this.state.view] ? this.viewMap[this.state.view] : this.state.view}
                    </div>
                </div>
            </div>
        );
    }

    _toggleNav() {
        const curretNavState = this.state.navExpanded;
        this.setState({navExpanded: !curretNavState});
    }

    _transitionTo(id) {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        let start;
        const duration = 250;
        const fadeOut = (timestamp) => {
            if (start === undefined) {
                start = timestamp;
            }
            const elapsed = timestamp - start;
            if (elapsed > duration) {
                this.viewContainer.style.opacity = `0`;
                this.setState({ view: id });
                start = undefined;
                this.animationFrame = requestAnimationFrame(fadeIn);
            } else {
                const x = elapsed / duration;
                this.viewContainer.style.opacity = `${1 - x}`;
                this.animationFrame = requestAnimationFrame(fadeOut);
            }
        };
        const fadeIn = (timestamp) => {
            if (start === undefined) {
                start = timestamp;
            }
            const elapsed = timestamp - start;
            if (elapsed > duration) {
                this.viewContainer.style.opacity = `1`;
                this.animationFrame = null;
            } else {
                const x = elapsed / duration;
                this.viewContainer.style.opacity = `${x}`;
                this.animationFrame = requestAnimationFrame(fadeIn);
            }
        };
        this.animationFrame = requestAnimationFrame(fadeOut);
    }

    _initializeMaps() {
        const currentWeek = Model[Model.length - 1];
        this.navItems = [];
        this.viewMap = {};

        const currentView = currentWeek.view;
        let announcements = null;
        if (currentView.announcements && currentView.announcements.length) {
            announcements = (
                <ViewBox>
                    <h3 className="dotted dotted-ann">Recent Announcements</h3>
                    <div className="announcements">
                        {currentView.announcements}
                    </div>
                </ViewBox>
            );
        } else {
            announcements = (
                <ViewBox>
                    <h3 className="dotted dotted-ann">Recent Announcements</h3>
                    <div className="announcements">
                        <li>No Announcements Right Now!</li>
                    </div>
                </ViewBox>
            );
        }

        const home = (
            <View>
                <ViewBox>
                    <div className="welcome-header">
                        <h2 className="dotted dotted-title welcome-header-text">
                            Welcome to Discussion 119!
                        </h2>
                    </div>
                    <div className="discussion-info">
                        <li><span className="emp">OH:</span> Tu 5:00-6:00, 109 Morgan</li>
                        <li><span className="emp">Lab:</span> Tu 6:30-8:00, 271 Soda</li>
                        <li><span className="emp">Discussion:</span> Th 6:30-8:00, 310 Soda</li>
                    </div>
                </ViewBox>
                {announcements}
                <div className="extra container">
                    <ViewBox>
                        <h3 className="dotted dotted-question">Questions or Concerns? Just Wanna Chat?</h3>
                        <li><span className="emp">Email me:</span> dillon.yao@berkeley.edu</li>
                    </ViewBox>
                    <ViewBox>
                        <div className="about-me">
                            <h3 className="dotted dotted-about">About Me</h3>
                            <div className="prof-pic" style={{backgroundImage: `url(${me})`}}/>
                            <p>
                                Hi there! My name is Dillon Yao and I'm the TA for this discussion and lab. I'm a
                                third year EECS major here at Berkeley and front end intern at Playstation, working on the PS4.
                                When I have free time, I like making random things (like this site for instance), listening
                                to music, or just learning useless skills. Feel free to contact me whenever if you ever want
                                to chat. I'm always happy to get to know new students or just listen to what y'all have to say!
                                Sorry in advance if I forget your name, I'm pretty scatterbrained, but worry not! I remember faces well!
                            </p>
                        </div>
                    </ViewBox>
                </div>
            </View>
        );

        this.navItems.push({
            label: 'home',
            id: 'home'
        });
        this.viewMap['home'] = home;
    }

    _processModel() {
        const navItems = this.navItems;
        for (const item of Model) {
            const id = navItems.length;
            const navItem = {
                id,
                label: item.navLabel
            };
            this.viewMap[id] = viewFromTemplate(item.view);
            navItems.push(navItem);
        }
    }
}

export default App;
