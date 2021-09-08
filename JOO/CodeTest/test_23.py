def solution(weights, head2head):

    dataList = []
    
    for i in range(len(weights)):
        overWin = 0
        winRate = 0
        if (head2head[i].count('W') + head2head[i].count('L')) != 0 :
            winRate = (head2head[i].count('W') / (head2head[i].count('W') + head2head[i].count('L'))) * 100
        else : 
            winRate = 0

        overWin = len([weights[key] for key in [j for j in range(len(head2head[i])) if head2head[i][j] == 'W'] if weights[i] < weights[key] ])

        dataList.append([winRate,overWin,weights[i],i])

    dataList.sort(key=lambda x: (-x[0], -x[1], -x[2]))

    return [item[3]+1 for item in dataList]



print(solution([50,82,75,120],["NLWL","WNLL","LWNW","WWLN"])) #[3,4,1,2]
print(solution([145,92,86],	["NLW","WNL","LWN"]	)) #[2,3,1]
print(solution([60,70,60],	["NNN","NNN","NNN"]	)) #[2,1,3]
