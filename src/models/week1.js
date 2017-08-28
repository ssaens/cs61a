import React from 'react';
import {ViewBox, CodeBox, homework, lab} from '../components/common/common';

const LINKS = {
    LAB0: 'https://cs61a.org/lab/lab00/',
    LAB1: 'https://cs61a.org/lab/lab01/',
    HW1: 'https://cs61a.org/hw/hw01/'
};

export default {
    navLabel: 'week 1: expressions and control',
    view: {
        title: 'Week 1: Expressions and Control',
        announcements: [
            lab(0, LINKS.LAB0, 9, 1),
            // lab(1, LINKS.LAB1, 9, 1),
            homework(1, LINKS.HW1, 8, 31),
        ],
        dropdowns: [
            {
                hide: true,
                header: {
                    type: 'Lab',
                    number: 1,
                    title: 'Stuff'
                },
                ctas: [
                    {
                        label: 'Slides',
                        href: ''
                    },
                    {
                        label: 'Lab',
                        href: ''
                    },
                ],
                content: (
                    <div className="container">
                        <ViewBox>

                        </ViewBox>
                    </div>
                )
            },
            {
                hide: true,
                header: {
                    type: 'Discussion',
                    number: 1,
                    title: ''
                },
                ctas: [
                    {
                        label: 'Worksheet 1:',
                        href: ''
                    },
                    {
                        label: 'Solution 1:',
                        href: ''
                    }
                ],
                content: (
                    <div className="container">
                    </div>
                )
            }
        ]
    }
}