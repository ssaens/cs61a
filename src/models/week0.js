import React from 'react';

const LINKS = {
    survey: 'https://docs.google.com/forms/d/e/1FAIpQLSfNld97JPsiP8NZA-W52nE6RiGd9XwUvC3pqutoXKqA8UJmiw/viewform?usp=sf_link',
    slides: 'https://docs.google.com/presentation/d/1ST8fXuae0HTHBMap2mpOtex5ovwxnfvvpV2qw-9LUGw/edit?usp=sharing',
    worksheet: 'https://cs61a.org/disc/disc00.pdf'
};

export default {
    navLabel: 'week 0: welcome',
    view: {
        title: 'Week 0',
        announcements: [
            <ann key={0}>Take the discussion survey <a href={LINKS.survey}>here</a>!</ann>
        ],
        dropdowns: [
            {
                header: {
                    type: 'Discussion',
                    number: 0,
                    title: 'Welcome to 61A'
                },
                ctas: [
                    {
                        label: 'Slides',
                        href: LINKS.slides
                    },
                    {
                        label: 'Worksheet 0: Lost on the Moon',
                        href: LINKS.worksheet
                    },
                ]
            }
        ]
    }
}