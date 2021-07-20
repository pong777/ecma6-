function solution(a, b) {
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let year = 2016;
    let month = a;
    let day = b;
    
    let today = new Date(year + '-' + a + '-' + b).getDay();
    let todayWeek = week[today];
    
    return todayWeek;
}

console.log(solution(7, 20));