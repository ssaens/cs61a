import React from 'react';
import {ViewBox, CodeBox, homework, lab} from '../components/common/common';

const LINKS = {
    LAB0: 'https://cs61a.org/lab/lab00/',
    LAB1: 'https://cs61a.org/lab/lab01/',
    HW1: 'https://cs61a.org/hw/hw01/',
    DIS1: 'https://cs61a.org/disc/disc01.pdf'
};

export default {
    navLabel: 'week 1: expressions and control',
    view: {
        title: 'Week 1: Expressions and Control',
        announcements: [
            lab(0, LINKS.LAB0, 9, 1),
            lab(1, LINKS.LAB1, 9, 1),
            homework(1, LINKS.HW1, 8, 31),
        ],
        dropdowns: [
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
                ],
                content: (
                    <div className="container">
                        <ViewBox>
                            This lab will get you familiar with control structures in python and get you started
                            on some actual code.
                        </ViewBox>
                    </div>
                )
            },
            {
                hide: true,
                header: {
                    type: 'Discussion',
                    number: 1,
                    title: 'Expressions, Statements, and Functions'
                },
                ctas: [
                    {
                        label: 'Worksheet',
                        href: ''
                    },
                ],
                content: (
                    <div className="container">
                    </div>
                )
            }
        ]
    }
}