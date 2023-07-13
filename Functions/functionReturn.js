function calculateScore(sub1,sub2,sub3){
    return (sub1+sub2+sub3)/3
}



function grades(score){
    if(score >=90 && score <=100){
        console.log("Grade is A")
    }
    else if(score >=70 && score <=89){
        console.log("Grade is B")
    }
    else if(score >=50 && score <=69){
        console.log("Grade is C")
    }
    else if(score >=30 && score <=49){
        console.log("Grade is D")
    }
    else{
        console.log("Grade is F")
    }
    return score;
}


grades(90);
grades(70);

score1 = calculateScore(92,96,98);
score2 = calculateScore(88,72,76);
console.log(score1);
console.log(score2);
grades(score1);
grades(score2);