const countEl = document.getElementById("count");

updateVisitCount();

function updateVisitCount(){

    fetch("https://api.countapi.xyz/update/mycv2/git2/?amount=1").then(res => res.json()).then(res => {

    countEl.innerHTML = res.value;    

});

//resource doc: https://countapi.xyz/
//use this to countdown: https://api.countapi.xyz/update/mycv2/git2/?amount=-1

}