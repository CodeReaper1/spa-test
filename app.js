import { showHome } from "/view1home.js";
import { showAbout } from "/view2about.js";
import { showServices } from "/view3services.js";
import { showTestemonials } from "/view4testimonials.js";
import { showContact } from "/view5contact.js";

//let buttons = Array.from(document.querySelectorAll("header > div > button"));

// let ids = {
//     showHome : buttons[0].id,
//     showAbout : buttons[1].id,
//     showTestemonials : buttons[2].id,
//     showContact : buttons[3].id
// }

let functions = {
    showHome,
    showAbout,
    showServices,
    showTestemonials,
    showContact

}

let dude = Array.from(document.querySelectorAll("button"))

  dude.forEach(x => x.addEventListener("click", functions[x.classList[0]]));

console.log(dude[0].classList[0]);

  showHome();
  