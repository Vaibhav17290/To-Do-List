const button=document.getElementById("Addbutton");
var listContainer=document.getElementById("list-container");
var input=document.querySelector("#task");
button.addEventListener('click',function(){
   
    if(input.value=="")
      alert("You should type something");
    else
    {
       let li=document.createElement("li");
       li.innerHTML=input.value;
       listContainer.append(li);
       input.value="";
       let span=document.createElement("span");
       span.innerHTML="\u00d7";
       li.appendChild(span);
       saveData();
    }
    
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
},false)


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function getData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
getData();