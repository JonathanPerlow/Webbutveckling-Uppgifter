
function wowList(){
    let wowList = ["Max level: 80", "There exists 10 classes in wotlk", "1x Experience rate", "11 primary professions and 3 secondary professions"];
    let list = document.getElementById("wowList");
    
    wowList.forEach((item) =>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
    

}



wowList()

// let data = ["Ram", "Shyam", "Sita", "Gita"];
     
//     let list = document.getElementById("myList");
     
//     data.forEach((item) => {
//       let li = document.createElement("li");
//       li.innerText = item;
//       list.appendChild(li);
//     });




















