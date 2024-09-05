
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWinner(user, house){
    if(user == house){
        return 'tie'
    }
    else{
        if(user == 'paper'){
            if(house == 'rock'){
                return 'user'
            } 
            return 'house'
        }
        else if(user == 'rock'){
            if(house == 'scissors'){
                return 'user'
            } 
            return 'house'
        }
        else if(user == 'scissors'){
            if(house == 'paper'){
                return 'user'
            } 
            return 'house'
        }
    }
}


export function updateScoreFun(score, choice, houseChoice){
    let winner = getWinner(choice, houseChoice)
    if(winner == 'tie'){
        return [score[0], 'TIED']
    }else if(winner == 'user'){
        let newScore = score[0] + 1
        return [newScore, 'WIN']
    }else {
        let newScore = score[0] - 1
        return [newScore, 'LOSE']
    }
}