import React, {Component} from 'react';
import DropDown from './components/drop-down/drop-down';
import About from './components/about/about';
import './App.css';

const MODEL = [
    {
        number: 0,
        title: 'Welcome to 61A',
        slides: 'https://docs.google.com/presentation/d/1ST8fXuae0HTHBMap2mpOtex5ovwxnfvvpV2qw-9LUGw/edit?usp=sharing',
        custom: 'Hello, In the future, this section will likely contain a brief overview of the slides covered in' +
        ' discussion. This site is still under construction so please bear with me as I try to get it set up. In the ' +
        'mean time, slides will be posted here as well as discussion solutions when they are released.'
    },
    {
        number: 1,
        title: 'Discussion 1',
        slides: '',
        custom: 'TODO',
        hidden: true
    }
];

class App extends Component {
    render() {
        const sections = [];
        for (const disc of MODEL) {
            if (disc.hidden) continue;
            const section = (
                <DropDown
                    key={sections.length}
                    number={disc.number}
                    title={disc.title}
                    slides={disc.slides}
                    custom={disc.custom}
                />
            );
            sections.push(section);
        }

        return (
            <div className="app">
                <h2>CS<span className="course">61A</span> Discussion Resources</h2>
                <About />
                <div className="element-list">
                    {sections}
                </div>
            </div>
        );
    }
}

export default App;
