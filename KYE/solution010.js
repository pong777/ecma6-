function solution(arr) {
    const temp = arr.filter((element) => element !== Math.min.apply(null, arr));
    if (temp.length === 0) { return [-1]; }
    return temp;
}

console.log(solution([4,3,2,1]));
console.log(solution([10]));