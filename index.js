//code your solution here


function superbowlWin(array) {
    const found = array.find(item => item.result ==='W')
    if (found) {
        return found.year
    }
    
}





