function solution(a, b)
{   const year = "2016"
    const month = a
    const day = b    
    const days = [
        "SUN",
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT"
    ];
    const week = new Date(year, month - 1, day).getDay();
    return days[week];
}

//console.log(solution("2" , "28"))


