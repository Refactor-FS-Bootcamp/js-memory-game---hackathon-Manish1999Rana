function strtGame() {
    let date = new Date();
    let a = 0;
    setInterval(() => {
        document.getElementById("time").innerHTML = "time: " + a + "sec";
        a=a+1;
    }, 1000);
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
            res = res + `<td><img src="images/fruit${rand()}.jpg" style="visibility: hidden;"></td>`;
        }
        res = res + `</tr>`;
    }
    document.getElementById("box").innerHTML=res;
}