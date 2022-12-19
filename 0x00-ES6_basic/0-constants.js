export function taskFirst() {
    const task = 'I prefer const when I can.'; // declare variable task using `const`
    return task;
}

export function getLast() {
    return ' is okay';
}

export function taskNext() {
    let combination = 'But sometimes let'; // declare variable combination using `let`
    combination += getLast();

    return combination;
}