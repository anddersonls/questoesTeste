string = input('Digte uma palavra: ')
stringInversa = ''

for i in range(len(string), 0, -1):
    stringInversa += string[i-1]

print(f'String inversa: {stringInversa}')
