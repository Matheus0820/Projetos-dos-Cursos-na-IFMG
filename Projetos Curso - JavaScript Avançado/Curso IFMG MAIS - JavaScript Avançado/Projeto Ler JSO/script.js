function SalvarPessoa() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let codigo = document.getElementById('codigo').value;
    
    let pessoa = nome + "-" + idade + "-" + codigo

    document.getElementById('nome').value = "";
    document.getElementById('idade').value = "";
    document.getElementById('codigo').value = "";    

    adicionar_pessoa(pessoa);


}


function adicionar_pessoa(pessoa) {
    let pessoas = document.getElementById('listaPessoas').value;

    pessoas = pessoas.split(";");
    pessoas.push(pessoa);

    mostrarPessoas(pessoas);
}

function mostrarPessoas(pessoas) {
     let dados_mostrar = ""
     let lista_web = document.getElementById("lista_web")
     lista_web.innerHTML = ""
     let pessoas_mostradas = 0

    for (let i = 0; i < pessoas.length; i++) {
        dados_mostrar += pessoas[i] + ";"
        let pessoa = pessoas[i].split("-")

        if (pessoa.length == 3) {
            let dados_view_web = '<tr> <th scope="row">' + (pessoas_mostradas + 1) + '</th> <td>' + pessoa[0] + '</td> <td>' + pessoa[1] + '</td> <td>' + pessoa[2] + '</td> </tr>';
            pessoas_mostradas++;
            lista_web.innerHTML += dados_view_web;
        }

    }

    document.getElementById('listaPessoas').value = dados_mostrar;


}

function plotarDadosArquivo() {
    let file = document.getElementById('fileDados');
    file = file.files[0];
    
    let fr = new FileReader();

    fr.onload = function(dadosDoArquivo){
        let dados_em_json = JSON.parse(dadosDoArquivo.target.result);

        nome = dados_em_json.nome;
        idade = dados_em_json.idade;
        codigo = dados_em_json.codigo;

        pessoa = nome + '-' + idade + '-' + codigo;
        adicionar_pessoa(pessoa);
    }
    fr.readAsText(file);
}

function SalvarDados() {
    let temporary_link_donwload = document.createElement("a");

    let pessoas = document.getElementById('listaPessoas').value.split(';');

    json_final = {}
    pessoas_salvas = 0

    for (let i = 0; i < pessoas.length; i++) {
        let pessoa = pessoas[i].split('-');
        if (pessoa.length == 3) {
            object_pessoa = {
                "nome": pessoa[0],
                "idade": pessoa[1],
                "codigo": pessoa[2]
            }

            json_final[("pessoa_"+ (pessoas_salvas + 1))] = object_pessoa
            pessoas_salvas++;
        }
    }

    let arquivo_json_donwload = new Blob([JSON.stringify(json_final)], {type: "text/plain"})
    temporary_link_donwload.setAttribute('href', URL.createObjectURL(arquivo_json_donwload));
    temporary_link_donwload.setAttribute('download', 'lista_pessoas_cadastradas.json')
    temporary_link_donwload.click();
}
