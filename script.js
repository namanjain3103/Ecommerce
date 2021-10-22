var menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";

function menutoggle() {
   if (menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "200px"
    }
else {
        menuItems.style.maxHeight = "0px"
    }
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}