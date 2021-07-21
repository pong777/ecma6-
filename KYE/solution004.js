function solution(nums) {
    const getPonketmon = nums.length/2;
    const deduplication = nums.filter((item, index) => {
        return nums.indexOf(item) === index;
    });

    if (deduplication.length >= getPonketmon) {
        return getPonketmon;
    }
    else {
        return deduplication.length;
    }
}

console.log(solution([3,1,2,3]));
console.log(solution([3,3,3,2,2,4]));
console.log(solution([3,3,3,2,2,2]));

/*
getPonketmon deduplication value
[3,1,2,3]
2 3 2
[3,3,3,2,2,4]
3 3 3
[3,3,3,2,2,2]
3 2 2
[3,1,2,4,4,4,1,2,3,2]
5 4 4
[1,1,1,2]
2 2 2
[1,1,1,1]
2 1 1
[1,1,1,1,2,2,1,1,2,2]
5 2 2
*/