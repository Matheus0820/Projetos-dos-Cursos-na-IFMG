# Fornescido dois dados a e b, caso forem números inteiros b > a, pelo usuário,
#  faça uma divisão n vezes, sendo n = b - a, b por a. 

# Funções
def division_n_times(a, b, n):
    for i in range(n):
        b = b / a
    
    return b


# Código do problema

while True:
    div = None
    try:
        a = int(input('Digite a: '))
        b = int(input('Digite b: '))
        if a < b:
            n = b - a
            div = division_n_times(a, b, n)
            print(f"{b}/{a}^{n} = {div}")

        else:
            n = a - b
            div = division_n_times(b, a, n)
            print(f"{a}/{b}^{n} = {div}")

        break

    except ValueError as e:
        print(e)
        print("Valor digitado é invalido. Tente Novamente!")
    except ZeroDivisionError as e:
        print(e)
        print("Algum dos valores digitados é zero. Tente Novamente!")

