# Funções
def LerDadosFuncionario():
    nome = input("Nome do funcionário: ")

    while True:
        try:
            salario = float(input(f"Salário do funcionário {nome}: "))
            break

        except ValueError as e:
            print(e, "Valor informado incorretamente. Tente novamente!", sep="/n")
    
    return (nome, salario)

def Create_Funcionario(nome, salario):
    novo_funcionario = {}
    novo_funcionario['nome'] = nome
    novo_funcionario['salario'] = salario

    return novo_funcionario

def RecalcularSalario(salario):
    if salario < 2000:
        salario = salario*1.2 # = salario*(1 + 0.2) = salario + salario*0.2 -> Aumento de 20%
    
    elif salario >= 2000 and salario <= 5000:
        salario = salario*1.15 # = salario*(1 + 0.15) = salario + salario*0.15 -> Aumento de 15%

    else:
        salario = salario*1.05 # = salario*(1 + 0.05) = salario + salario*0.05 -> Aumento de 5%

    return salario
        

def main():
    list_funcionarios = []
    old_total = 0
    new_total = 0

    while True:
        nome, salario = LerDadosFuncionario()
        old_total += salario
        list_funcionarios.append(Create_Funcionario(nome, salario))


        resp = input("Quer ler outro funcionário (Sim - s / Não - n): ")
        if 'n' in resp or 'não' in resp or 'Não' in resp: 
            break

    list_menor_2000 = []
    for i in range(len(list_funcionarios)):
        new_total += RecalcularSalario(list_funcionarios[i]['salario'])

        if list_funcionarios[i]['salario'] < 2000:
            list_menor_2000.append(list_funcionarios[i]['nome'])

    print(f"Aumento: R$ {(new_total - old_total):,.2f}")
    print(f"Funcionários com salários menores que 2 mil: ")
    print(*list_menor_2000, sep="\n")


if __name__ == "__main__":
    main()