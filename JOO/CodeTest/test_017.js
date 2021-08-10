function solution(N, stages) {
	let answer = []

	for (let i = 1; i < N + 1; i++) {
		const tot = stages.filter((f) => f >= i)
		const failCnt = tot.filter((f) => f === i).length
		const rate = failCnt / tot.length

		answer.push({
			stage: i,
			rate,
		})
	}

	return answer
		.sort((a, b) => {
			if (a.rate > b.rate) {
				return -1
			}

			if (a.rate < b.rate) {
				return 1
			}

			if (a.rate === b.rate) {
				return a.stage - b.stage
			}
		})
		.map((it) => it.stage)
}
