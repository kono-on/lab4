const remove = document.getElementById("remove");
const add = document.getElementById("add");

const colours = [];

/* fix */
remove.addEventListener("click", function () {
    if (colours == []){
        window.alert("There are no colours to remove!")
    }
});