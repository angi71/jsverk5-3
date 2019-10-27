let spurningar = [{
    spurning: "lalalal",
    val: ["a","b","c","d"],
    rettSvar: 2
}, {
    spurning: "rétt eða rangt",
    val: ["rétt","rangt"],
    rettSvar: 0
}];

function spyrja(spurn){
    document.querySelector("#spurn").innerHTML ="<h2>"+spurningar[spurn].spurning+"</h2>" ;
    for(let val in spurningar[spurn].val){
        document.querySelector("#val").innerHTML +="<h4 id='"+val+"'>"+spurningar[0].val[val]+"</h4>"
    }
    let smelt = document.getElementById("0");
    smelt.addEventListener("click", nidurstada, false);
}

function nidurstada(spurn) {
    for(let val in spurningar[spurn].val){
        let lit = document.getElementById(val.toString);
        if (lit == spurningar[spurn].rettSvar.toString) {
        lit.style.color = "green";
        } else {
        lit.style.color = "red";
        }
    }
    document.querySelector("#naest").innerHTML ="<h2>næsta spurning</h2>";

  }


spyrja(0);

