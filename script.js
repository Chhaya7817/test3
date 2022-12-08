var add=document.getElementById("add");
var popup=document.querySelector("#popup")
var box=document.querySelector("#box")

tickets=[];
function create(e) {
    e.preventDefault();
    console.log(document.querySelector(".popup"));

    popup.style.display = "block";
    box.style.display = "none";
    var keypress=document.querySelector(".text");
    console.log(keypress)
    if(keypress!=null){
    keypress.addEventListener("keydown",function(e){
       if(e.keyCode==13)
       {
        // tickets.pop();
        

       var data=document.querySelector(".text");
       text=JSON.stringify(data.value);
       tickets.push(text);
       localStorage.setItem("ticket",(tickets));
       data.value="";
       popup.style.display="none";

       box.style.display = "block";
       
       }
    });
}
}
 window.onload=display();
 function display()
 {
    
    if(localStorage.getItem('ticket')!=null){
        var t=localStorage.getItem("ticket");
        // var ticket=document.querySelector("box");
        for(let i=0 ; i<t.length ; i++) {
            if(t[i]!="")
                displayData(t[i]);
            console.log(t[i]);
          }
    // var box=document.createElement("div");
    
    // ticket.appendChild(box);
      
 

}
 }

 function displayData(data)
 {
    var newDiv = document.createElement("div");
    newDiv.classList.add("box");


    newDiv.innerHTML='<div class="head"></div><div class="banner">$G%JTR</div><div class="content"></div>';
    newli=document.querySelector(".content");
    newli.innerText=data;
    
    newDiv.appendChild(newli);
    box.appendChild(newDiv);

    
 }

 add.onclick=create;