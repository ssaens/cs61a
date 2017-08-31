import React from 'react';
import {ViewBox, CodeBox, homework, lab, colored, project, eventDate} from '../components/common/common';

const LINKS = {
    LAB0: 'https://cs61a.org/lab/lab00/',
    LAB1: 'https://cs61a.org/lab/lab01/',
    HW1: 'https://cs61a.org/hw/hw01/',
    DISC1: 'https://cs61a.org/disc/disc01.pdf',
    DISC1_SLIDES: 'https://docs.google.com/presentation/d/1R2CWHhPIcOHPXAytLA8LuBmAIQQDUriRBgz9nTthEkg/edit?usp=sharing',
    TERM_GUIDE: 'https://www.davidbaumgold.com/tutorials/command-line/',
    LAB1_SLIDES: 'https://docs.google.com/presentation/d/1GJLAPjldqWkT-qvCbmUxNRGGwIIxaVSuccVgLpCLeKc/edit?usp=sharing',
    HOG: 'https://cs61a.org/proj/hog/'
};

export default {
    navLabel: 'week 1: expressions and control',
    view: {
        title: 'Week 1: Expressions and Control',
        announcements: [
            lab(0, LINKS.LAB0, 9, 1),
            lab(1, LINKS.LAB1, 9, 1),
            homework(1, LINKS.HW1, 8, 31),
            // homework(2, LINKS.HW2, 9, 5),
            project(1, 'Hog', LINKS.HOG, 9, 7)
        ],
        dropdowns: [
            {
                header: {
                    type: 'Lab',
                    number: 0,
                    title: 'Setting Up a Productive Workflow'
                },
                ctas: [
                    {
                        label: 'Instructions',
                        href: LINKS.LAB0
                    }
                ],
                content: (
                    <div className="container">
                        <ViewBox>
                            This lab will setup your python environment and teach you how to submit assignments to OK.

                            <h4>Additional Resources</h4>
                            <li><a href={LINKS.TERM_GUIDE} target="_blank">Getting to Know the Command Line</a></li>
                        </ViewBox>
                    </div>
                )
            },
            {
                header: {
                    type: 'Lab',
                    number: 1,
                    title: 'Expressions and Control Structures'
                },
                ctas: [
                    {
                        label: 'Instructions',
                        href: LINKS.LAB1
                    },
                    {
                        label: 'Slides',
                        href: LINKS.LAB1_SLIDES
                    }
                ],
                content: (
                    <div className="container">
                        <ViewBox>
                            This lab will get you familiar with control structures in python and get you started
                            writing some actual code.

                            <h3>Main Ideas</h3>
                            <h4>1. Conditional Expressions</h4>
                            <p>Conditional Expressions evaluate to a trueth-y or false-y value. They often contain boolean
                            operators, listed in order or priority below:</p>
                            <li><code>not</code>: inverts the truth value of it's operand</li>
                            <li><code>and</code>: <code>True</code> only if both operands are <code>True</code>. Short circuits on first <code>False</code> value and returns it</li>
                            <li><code>or</code>: <code>True</code> if at least one operand is <code>True</code>. Short circuits on first <code>True</code> value and returns it</li>

                            <p>
                                Other values in python have truth values
                                besides <code>True</code> and <code>False</code>.
                            </p>
                            <p>
                                <code>0</code>, <code>None</code>, <code>[]</code>, <code>()</code>, <code>{'{}'}</code>, and <code>''</code> are false-y values.
                                They act like <code>False</code> in conditionals.
                                All other values in Python are truth-y and act like <code>True</code> in conditionals.
                            </p>

                            <h4>2. Return and Print</h4>
                            <p>These are different concepts, so try not to link them to closely in your minds</p>
                            <li><code>return</code>: a <b>statement</b> that exits the current function and passes the result of
                            computation to the function caller. All functions return, even if no return is explicitly written
                            in the body. Functions without a return statement return <code>None</code> at the end of execution.</li>
                            <li><code>print</code>: a <b>function</b> that prints its argument(s) to standard out (the terminal in
                            most cases).</li>

                            <h4>3. <tele>if</tele> Statements</h4>
                            <p><code>if</code> statements allow branching based on a conditional. Only one branch is taken.</p>
                        </ViewBox>
                        <CodeBox>
                            {colored('orange', 'if')} {colored('lightblue', '<if conditional>')}:<br/>
                            {'    '}execute if block<br/>
                            {colored('orange', 'elif')} {colored('lightblue', '<elif condiional 1>')}:     {colored('grey', '# This block is optional')}<br/>
                            {'    '}execute elif block 1<br/>
                            {colored('orange', 'elif')} {colored('lightblue', '<elif condiional 2>')}:     {colored('grey', '# There can be multiple elif blocks')}<br/>
                            {'    '}execute elif block 2<br/>
                            {colored('orange', 'else')}:                         {colored('grey', '# This block is also optional')}<br/>
                            {'    '}execute else block
                        </CodeBox>

                        <ViewBox>
                            <h4>4. <tele>while</tele> Statements</h4>
                            <p><code>while</code> statements allow repetition of a block until a conditional is <code>False</code>.
                            The conditional is evaluated before the block is executed on each iteration.</p>
                            on some actual code.
                        </ViewBox>
                        <CodeBox>
                            {colored('orange', 'while')} {colored('lightblue', '<conditional>')}:<br/>
                            {'    '}repeated code block
                        </CodeBox>
                    </div>
                )
            },
            {
                header: {
                    type: 'Discussion',
                    number: 1,
                    title: 'Control and Environments'
                },
                ctas: [
                    {
                        label: "Slides",
                        href: LINKS.DISC1_SLIDES
                    },
                    {
                        label: 'Worksheet',
                        href: LINKS.DISC1
                    }
                ],
                // content: (
                //     <div className="container">
                //         <ViewBox>
                //             <p>
                //                 This discussion goes over many of the most fundamental concepts of computation in any
                //                 programming language. The concepts touched over here will help you understand how
                //                 the Python interpreter (and the computer in general) sees and executes code. Really
                //                 try and have a solid understanding of these concepts as they will persist through the
                //                 entire course.
                //             </p>
                //             <h3>Main Ideas</h3>
                //             <h4>How to Evaluate Function Calls</h4>
                //             <p>
                //                 Evaluation of functions calls is a very very mechanical process in python, and it's rules
                //                 are relatively simple. Let's take a look at an example:
                //             </p>

                //             <h4>Environment Diagrams</h4>
                //             <p>
                //                 Environment diagrams show the memory structure of our program as it's running. They provide
                //                 insights into why our code does certain things or how the interpretor figures out which variables
                //                 to read or wrtie to. Again, the rules involved in creating one are very mechanical, but if
                //                 followed carefully, will greatly aid your understanding of the language and other concepts in
                //                 the course.
                //             </p>

                //             <h4>Higher Order Functions (HOF)</h4>
                //             <p>Remember, function names are variables like anything other! They may be returned or assigned
                //             as desired.</p>

                //             <p>
                //                 It is necessary to remember when working with both Environment Diagrams and Functions
                //                 the difference between a variable and the object it represents, but this will be covered in
                //                 greater detail later in the course.
                //             </p>
                //         </ViewBox>
                //     </div>
                // )
            }
        ]
    }
}