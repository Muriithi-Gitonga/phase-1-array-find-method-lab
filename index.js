//code your solution here

// function superbowlWin(array) {
//     for (let win of array){
//         if (win.result === "W") {
//             return win.year
//         }
//     }
// }

function superbowlWin(array) {
    const found = array.find(item => item.result ==='W')
    if (found) {
        return found.year
    }
    
}



