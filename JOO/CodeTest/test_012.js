function getRow(num, n = 0) {
	const binary = (val, arr = []) => {
		if (val > 1) {
			const remainer = val % 2
			return binary(Math.floor(val / 2), [ remainer, ...arr ])
		}

		return [ val, ...arr ]
	}

	const bi = binary(num)

	let arr = []
	if (n - bi.length > 0) {
		arr = new Array(n - bi.length)
		for (let i = 0; i < n - bi.length; i++) {
			arr[i] = 0
		}
	}
	return [ ...arr, ...bi ]
}

function solution(n, arr1, arr2) {
	let map1 = [],
		map2 = []

	let resultMap = []

	// 맵 만들기.
	for (let i = 0; i < n; i++) {
		map1 = [ ...map1, getRow(arr1[i], n) ]
		map2 = [ ...map2, getRow(arr2[i], n) ]
	}

	// 맵 합치기.
	for (let i = 0; i < map1.length; i++) {
		for (let j = 0; j < n; j++) {
			let marked = ' '
			if (map1[i][j] + map2[i][j] >= 1) {
				marked = '#'
			}

			if (j === 0) {
				resultMap[i] = marked
			} else {
				resultMap[i] += marked
			}
		}
	}

	/*
	console.log(map1)
	console.log(map2)
	console.log(resultMap)
    */

	return resultMap
}


//solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]) //["#####","# # #", "### #", "# ##", "#####"]

//solution(6,[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10]) //["######", "### #", "## ##", " #### ", " #####", "### # "]
