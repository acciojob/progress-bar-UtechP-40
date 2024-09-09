let allBar = document.querySelectorAll(".bar");

let tillIndex = 0;
// let color = "blue";

function updateProgressBar() {
    for (let i = 0; i < allBar.length; i++) {
        
        let s = allBar[i].querySelector(".circle");
        let r = allBar[i].querySelector(".rect");
        if (i < tillIndex) {
            s.style.borderColor = "blue";
            s.style.color = "blue";
            if(r){
                r.style.backgroundColor = "blue";
            }
        } else {
            s.style.borderColor = "#4e4e4e";
            s.style.color = "#4e4e4e";
            if(r){
                r.style.backgroundColor = "#4e4e4e";
            }
        }
    }

    if(tillIndex == 0){
        prev.disabled = true;
    }else{
        prev.disabled = false;
    }
    if(tillIndex == allBar.length){
        next.disabled = true;
    }else{
        next.disabled = false;
    }
}

let next = document.querySelector("#next");
let prev = document.querySelector("#prev");

next.addEventListener("click", () => {
    if (tillIndex < allBar.length) {
        tillIndex++;
        updateProgressBar();
    }
    console.log(allBar);
console.log(tillIndex);
});

prev.addEventListener("click", () => {
    if (tillIndex > 0) {
        tillIndex--;
        updateProgressBar();
    }
    
    console.log(allBar);
console.log(tillIndex);
});

// Initial update
updateProgressBar();
