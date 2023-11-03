for _ in range(int(input())): 
	a = [*map(int, input().split())]
	k = map(int, input().split())
	if k in a: 
		idx = a.find(k)
		print(idx)
	
	else: 
		print(-1)
