document.getElementById('bb').addEventListener('click',ale);

//function to add text in list and create list..
function ale(){
    let li=document.createElement("li");
    let content=document.getElementById("te").value;
    li.setAttribute('class',"listi");
    li.innerText=content;
    document.getElementById('te').value="";
    document.getElementById("todo").appendChild(li);

    buttons(li);

    //to delete the list
var del=document.getElementsByClassName("bd");
for(let i=0;i<del.length;i++){
    del[i].addEventListener('click',dele);
}

//function to checked
var lisi=document.getElementsByClassName("listi");
for(let i=0;i<lisi.length;i++){
    lisi[i].addEventListener('click',replace);
}


}



//function to add button to list
function buttons(li){
        button=document.createElement("button");
        button.setAttribute('class','bd');
        button.innerHTML="del";
        li.appendChild(button);     
    }

function dele(){
    let delet=this.parentElement;
    delet.style.display='none';
}

function replace(){
    var l=this.setAttribute("class",'listi1');
}