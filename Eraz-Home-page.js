function input() {
    document.getElementById("input").classList.toggle("show");
}
function hide_lang() {
    document.getElementById("hidelang").classList.toggle("show");
}

function open_menu() {
    document.getElementById("burger").classList.toggle("none");
    document.getElementById("body").classList.toggle("scroll");
}
function secondary_block3() {
    document.getElementById("menu_item3").classList.add("active_menu_item");
    document.getElementById("menu_item3").classList.remove("menu_items");
    let items = document.getElementsByClassName("menu_items");
    while(items.length > 0) {
        items[0].parentNode.removeChild(items[0]);
    }
    document.getElementById("log_in_btn").style.display = "none";
}
function secondary_block() {
    document.getElementById("menu_item").classList.add("active_menu_item");
    document.getElementById("menu_item").classList.remove("menu_items");
    let items = document.getElementsByClassName("menu_items");
    while(items.length > 0) {
        items[0].parentNode.removeChild(items[0]);
    }
    document.getElementById("log_in_btn").style.display = "none";
}
function secondary_block12() {
    document.getElementById("menu_item12").classList.add("active_menu_item");
    document.getElementById("menu_item12").classList.remove("menu_items");
    let items = document.getElementsByClassName("menu_items");
    while(items.length > 0) {
        items[0].parentNode.removeChild(items[0]);
    }
    document.getElementById("log_in_btn").style.display = "none";
}
function log() {
    document.getElementById("burger_menu").classList.add("none");
    document.getElementById("logged_bg_menu").classList.remove("none");
    document.getElementById("log_in").style.display = "none";
}