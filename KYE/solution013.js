function solution(lottos, win_nums) {
    let intersection = lottos.filter(x => win_nums.includes(x));
    let difference1 = lottos.filter(x => !win_nums.includes(x));
    let difference2 = win_nums.filter(x => !lottos.includes(x));
    let topRank = lottos.filter(x => win_nums.includes(x)).length;
    let lowRank = lottos.filter(x => win_nums.includes(x)).length;
    let Rank = [];

    for (let i = 0; i < difference1.length; i++) {
        if (difference1[i] == 0) {
            topRank = intersection.push(difference1[i] = difference2[i]); 
        }
    }

    
    Rank.push(topRank, lowRank);

    for (let i = 0; i < Rank.length; i++) {
        if (Rank[i] == 6) { Rank[i] = 1; }
        else if (Rank[i] == 5) { Rank[i] = 2; }
        else if (Rank[i] == 4) { Rank[i] = 3; }
        else if (Rank[i] == 3) { Rank[i] = 4; }
        else if (Rank[i] == 2) { Rank[i] = 5; }
        else { Rank[i] = 6; }
    }

    return Rank;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));   // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));    // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));    // [1, 1]