
let view1 = document.getElementById('view1');
let main = document.getElementById('main');

view1.remove()

export function showHome() {
    

    main.replaceChildren(view1); // <---- is that gonna work?

    

}   

