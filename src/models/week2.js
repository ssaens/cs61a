import React from 'react';
import {ViewBox, CodeBox, homework, lab, colored, project, eventDate} from '../components/common/common';

const LINKS = {
    LAB2: 'https://cs61a.org/lab/lab02/',
    LAB2_SLIDES: 'https://docs.google.com/presentation/d/1UTGQ_RkdqTvTfQ-TY9YZD_ShoO_0MZYQ1SPKbVdYejg/edit#slide=id.p',
    HW2: 'https://cs61a.org/hw/hw02/'
};

export default {
    navLabel: 'week 2: environments and recursion',
    view: {
        title: 'Week 2: Environments and Recursion',
        announcements: [
            homework(2, LINKS.HW2, 9, 5),
            lab(2, LINKS.LAB2, 9, 8),
            project(1, 'Hog', LINKS.HOG, 9, 7)
        ],
        dropdowns: [
            {
                header: {
                    type: 'Lab',
                    number: 2,
                    title: 'Lambdas and Higher Order Functions'
                },
                ctas: [
                    {
                        label: 'Instructions',
                        href: LINKS.LAB2
                    },
                    {
                        label: 'Slides',
                        href: LINKS.LAB2_SLIDES
                    }
                ],
                content: (
                    <div className="container">
                        <ViewBox>
                            This lab will gives you practice with using lambda functions and writing higher order functions.
                        </ViewBox>
                    </div>
                )
            },
            {
                hide: true,
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