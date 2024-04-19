// import Navigo from "./node_modules/navigo";
import { showManagerProduct } from "./pages/adminProduct.js";

const box_manager = document.querySelector(".box-manager-display")


const router = () => {
    const path = window.location.hash;

    switch(path) {
        case("#/"):
        box_manager.innerHTML = "Xin chào b";
        break;
        case("#/product"): 
        box_manager.innerHTML = showManagerProduct();
        break;
        case("#/order"): 
        box_manager.innerHTML = "Hello"
    }
}

window.addEventListener("hashchange", router);

router();
console.log(box_manager);

