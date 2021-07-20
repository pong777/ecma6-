function solution(s) {
    var answer = '';
    
    if (s.length % 2 === 0) {
        // return s.charAt(s.length/2-1) + s.charAt(s.length/2);
        return s.substr(s.length/2-1, 2);
    } else {
        return s.charAt(s.length/2);
    }
}