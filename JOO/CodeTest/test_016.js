function solution(board, moves) {
	let bucket = []
	let answer = 0

	moves.forEach((move) => {
		for (let i = 0; i < board.length; i++) {
			const val = board[i][move - 1]

			// 뽑음
			if (val > 0) {
				// 뽑았으니 board값 0으로 변경
				board[i][move - 1] = 0

				// 비어 있을 때
				if (bucket.length === 0) {
					bucket = [ val ]
				} else if (bucket[bucket.length - 1] === val) {
					bucket.splice(bucket.length - 1, 1) // 마지막 인자 제거
					answer = answer + 2
				} else {
					// 바구니 마지막 값이랑 다르면 담자.
					bucket = [ ...bucket, val ]
				}

				break
			}
		}
	})

	return answer
}
