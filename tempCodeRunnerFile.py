t = int(input())

for _ in range(t): 
    n = int(input())
    a = *map(int, input().split())
    ans = 0
    for i in range(n - 1): 
        ans += a[i + 1] - a[i]
    print(ans)