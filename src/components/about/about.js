import React, {Component} from 'react';
import me from './dillon-yao.jpg';
import './about.css';

class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="about-me">
                    <img src={me} alt="dillon-yao"/>
                    <div className="bio">
                        Hi there! My name is Dillon Yao and I'm a TA for 61A. I will be posting my discussion resources
                        and helpful links on this page so y'all have access for them in the future.

                        <div className="discussion-info">
                            <ul>
                                <li><span className="label">Email: </span>dillon.yao@berkeley.edu</li>
                                <li><span className="label">Office Hours: </span>Tuesday 5:00PM - 6:00PM</li>
                                <li><span className="label">Lab 119C: </span>Tuesday 6:30PM - 8:00PM</li>
                                <li><span className="label">Discussion 119B: </span>Thursday 6:30PM - 8:00PM</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default About;