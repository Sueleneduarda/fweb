fetch("./exer2.json")
    .then(response => response.json())
    .then(pessoas => {
        for (const pessoa in pessoas) {
            let newName = document.createElement("p");
            newName.innerHTML = pessoas[pessoa].nome;
            document.querySelector('h1').appendChild(newName);

            let newIdade = document.createElement("p");
            newIdade.innerHTML = pessoas[pessoa].idade;
            document.querySelector('h1').appendChild(newIdade);

            let newCpf = document.createElement("p");
            newCpf.innerHTML = pessoas[pessoa].cpf;
            document.querySelector('h1').appendChild(newCpf);


            let newTelefone = document.createElement("p");
            newTelefone.innerHTML = pessoas[pessoa].telefone;
            document.querySelector('h1').appendChild(newTelefone);
        }
    }

    )