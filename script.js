let title= document.createElement("div");
title.className="title"
title.innerHTML= "<h1>Harry Potter Characters</h1>"
document.body.append(title)

let container= document.createElement("div");
container.className="container";

let row=document.createElement("div");
row.className="row";
container.append(row);
document.body.append(container);

async function getdata(){
let res=await fetch("https://hp-api.onrender.com/api/characters");
let data= await res.json();
console.log(data)
try{
for(var i=0;i<25;i++){
  let card=document.createElement("div");
  card.setAttribute("class","col")

  
  card.innerHTML+=
  `
   <div class="card text-center" style="width: 18rem;">
     <img src="${data[i].image}" class="card-img-top"  alt="${data[i].name}">
     <div class="card-body">
       <h5 class="card-title">${data[i].name}</h5>
        <p class="card-text" style="font-size:15px"><i>(${data[i].actor})</i></p>
        <p class="card-text"> <b>House :</b> ${data[i].house}</p>
        <p class="card-text"><b>Ancestry :</b> ${data[i].ancestry}</p>
        <p class="card-text"><b>Wand : </b> ${data[i].wand.core}</p>
      
   </div>
</div>`
row.append(card)
}
}
catch(err){
console.log(err);
}
}

getdata();
