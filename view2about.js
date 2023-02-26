let view2 = document.getElementById('view2');
let main = document.getElementById('main');

view2.remove()

export function showAbout() {

    
    main.replaceChildren(view2); // <---- is that gonna work?

    

}   
