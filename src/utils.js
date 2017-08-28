function classNames(bindings) {
    const classes = [];
    for (const [prop, value] of Object.entries(bindings)) {
        if (value) {
            classes.push(prop);
        }
    }
    return classes.join(' ');
}

export {
    classNames
}