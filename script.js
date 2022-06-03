const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.prepend(wrapper);

const container = document.createElement('div');
container.classList.add('container');
wrapper.prepend(container);

const title = document.createElement('h1');
title.classList.add('title');
const titleContent = title.innerHTML = "Virtual Keyboard"
container.prepend(title);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
container.append(textarea);

const containerForKeyboard = document.createElement('div');
containerForKeyboard.classList.add('container-for-keyboard');
container.after(containerForKeyboard);