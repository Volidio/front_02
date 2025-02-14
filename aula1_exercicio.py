altura = []
genero = []
PESSOAS = 15

for i in range(PESSOAS):
    altura_leitura = int(input(f"qual sua altura: "))
    genero_leitura = input("qual seu genero (m/f): ")

    altura.append(altura_leitura)
    genero.append(genero_leitura)


ltm = []
i = 0

for h in altura:
    if genero[i] == "m":
        ltm.append(altura[i])
    i = i+1


print (f'a maior altura é de {max(altura)} e a menor altura é de {min(altura)}')
print (f'a media da altura dos homens é de {sum(ltm)/len(ltm)}')
print (f'a quantidade de mulheres é de {PESSOAS - len(ltm)}')