let count=0;
let a = 0;
strtGame();
setInterval(() => {
    document.getElementById("time").innerHTML = "time: " + a + "sec";
    document.getElementById("moves").innerHTML = "Moves: " + count;
    a = a + 1;
}, 1000);
function strtGame() {
    a = 0;
    // let date = new Date();
    count = 0;
    display();
}
function rand() {
    return Math.floor(Math.random() * 5) + 1;

}
function display() {
    let res = ``;
    for (let i = 0; i < 4; i++){
        res=res+`<tr>`
        for (let j = 0; j < 4; j++){
            let s = rand();
            res = res + `<td onclick="view(${"" + s + i + j})"><img src="images/fruit${s}.jpg" style="visibility: hidden;" id=${"" + s + i + j} ></td>`;
        }
        res = res + `</tr>`;
    }
    document.getElementById("box").innerHTML=res;
}
function view(y) {
    count++;
    console.log(y)
    document.getElementById(y).removeAttribute("style")
}