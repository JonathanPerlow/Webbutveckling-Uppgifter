    function gw2x(){

        let gw2List = ["Guild Wars 2 was released in 2012","Max level: 80","Free to play","There are 9 classes in Guild Wars 2, with 3 elite specializations for each class"];

        for (let index = 0; index < gw2List.length; index++) {
            const element = gw2List[index];
            var li = document.createElement("li")
            var item = document.createTextNode(element)
            li.appendChild(item)
            document.getElementById("gw2Here").appendChild(li)
        }
    
    }                       
    
    // gw2x()
    window.onload = function(){gw2x()}