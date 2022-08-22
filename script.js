document.body.innerHTML=`<div class="heading-container">
<h1>Breaking Bad Characters</h1>
</div>
<div class="maincontainer" id="main">
</div>;
`
let getdata=async()=>{
    try{ 
      let data=await fetch("https://breakingbadapi.com/api/characters")
      newdata=await data.json();
      console.log(newdata);
      newdata.forEach((element)=>{
        displaydata(element);
    })
  }catch(error){
      console.log("oops!there was an error",error)
    }
  }
  getdata();
  const displaydata=(obj)=>{
    main.innerHTML +=
    `<div class="container">
      <h3>Character Name:${obj.name}</h3>
      <img  id="image" src="${obj.img}" alt="image"</img>
      <p>Status:${obj.status}</p>
      <p>Birthday:${obj.birthday}</p>
      <p>Nickname:${obj.nickname}</p>
      <p>Portrayed:${obj.portryed}</p>
     </div>`
  }