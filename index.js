// code your solution here

function superbowlWin(array) {
    for (let win of array){
        if (win.result === "W") {
            return win.year
        }
    }
}
    


record.find(superbowlWin);
