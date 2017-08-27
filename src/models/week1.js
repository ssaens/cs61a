import React from 'react';
import {ViewBox, CodeBox} from '../components/common/common';

export default {
    navLabel: 'week 1',
    view: {
        title: 'Week 1',
        announcements: [

        ],
        dropdowns: [
            {
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