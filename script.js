//your JS code here. If required.
let prev_btn=document.querySelector("#prev");
prev_btn.disabled=true;
let next_btn=document.querySelector("#next");
let hrz_line=document.querySelectorAll(".line");
let circle=document.querySelectorAll(".circle");
let line=0;
next_btn.addEventListener("click",()=>{
	prev_btn.disabled=false;
	hrz_line[line].style.border="5px solid lightblue";
	circle[line+1].style.border="5px solid lightblue";
	line++;
	if(line==4){
		next_btn.disabled=true;
	}
	
})

prev_btn.addEventListener("click",()=>{
	next_btn.disabled=false;
	hrz_line[line-1].style.border="5px solid grey";
	circle[line].style.border="5px solid grey";
	line--;
})