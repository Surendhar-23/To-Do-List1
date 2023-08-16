let input=document.querySelector(".input input");
let btn=document.querySelector(".addlist");
let list=document.querySelector(".list");
let listitem=document.querySelectorAll(".list li");
let listitemspan=document.querySelectorAll(".list li span");
let uparrow=document.querySelector(".uparrow");
let downarrow=document.querySelector(".downarrow");
let listtoto=[];

window.onload=()=>{
listtoto=JSON.parse(localStorage.getItem('listtoto')) || [];
    console.log(listtoto);
    for(let i=0;i<listtoto.length;i++)
        createelement(listtoto[i]);
}

let createelement=function(valueadd){
    let newelement=document.createElement('li');
    // let text1=document.createTextNode(input.value);
    // newelement.appendChild(text1);
    newelement.textContent=valueadd;
    list.appendChild(newelement);
    let newelement1=document.createElement('span');
    newelement1.textContent="\u00d7";
    newelement.appendChild(newelement1);
    // updatelist();
    addevent(newelement,newelement1);
    console.log(listtoto);
    scrolldown();
}

let addelement=function(){
    if(input.value=='')
        alert("You must write something");
    else{
        listtoto.push(input.value);
        createelement(input.value);
        localStorage.setItem("listtoto",JSON.stringify(listtoto));
        input.value="";
}
}

btn.addEventListener('click',addelement);
document.addEventListener('keypress',(e)=>{
    if(e.key ==='Enter')
        addelement();
});

// let updatelist = function(){
//     listitem=document.querySelectorAll(".list li");
//     listitemspan=document.querySelectorAll(".list li span");
//     for(let i=0;i<listitem.length;i++){
//        addevent(listitem[i],listitemspan[i]);
// }
// }
let remove=function(li){
    let index=listtoto.indexOf(li.childNodes[0].nodeValue);
    if(index>-1)
       { listtoto.splice(index,1);
        console.log(listtoto);
        localStorage.setItem("listtoto",JSON.stringify(listtoto));
    }
}

let addevent=function(li ,lis){
    li.addEventListener('click',()=>{
        li.classList.toggle('checked');
        })
        lis.addEventListener('click',()=>{
        li.remove();
        remove(li);
        })
        
}

// updatelist();

//Scrolling
//scroll down
let scrolldown=function(){
    list.scrollTop=list.scrollHeight;
    // console.log(list.scrollHeight);
    // uparrow.style.dispaly="block";
}
//scroll up
let scrollup=function(){
    list.scrollTop=0;
    // downarrow.style.dispaly="block";
}

let displayscrollarrow=function(){
    console.log(list.scrollTop,list.scrollHeight);
    if(list.scrollTop==0){
        downarrow.style.display="block";
        uparrow.style.display="none";
    }
    // else if(list.scrollTop==list.scrollHeight)
    // {
    //     downarrow.style.display="none";
    //     uparrow.style.display="block";
    // }
    else{
        downarrow.style.display="none";
        uparrow.style.display="block";
    }
}

uparrow.addEventListener("click",scrollup);
downarrow.addEventListener("click",scrolldown);
list.addEventListener("scroll",displayscrollarrow);