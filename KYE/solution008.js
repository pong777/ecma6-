function solution(arr) {
    const temp = arr;
    const result = temp.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    const avg = result / temp.length;

    return avg;
}

console.log(solution([5,3,4]));