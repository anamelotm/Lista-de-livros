const readline = require ('readline');

const livros = require ('./database');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function input(prompt) {
    console.log(prompt);
    return (await r1[Symbol.asyncIterator]().next()).value;
}

async function main(){

    const entradaInicial = await input('Deseja buscar um livro? S/N ');

    if (entradaInicial.toLocaleUpperCase() === 'S') {
        console.log('\n')
        console.log('Essas são as categorias disponíveis: ');
        const categorias = livros.map(livro => console.log(livro.categoria));
        console.log('\n')
                
        const entradaCategoria = await input('Qual categoria você escolhe? ');

        const retorno = livros.filter(livro => livro.categoria === entradaCategoria);
        console.table(retorno);
    }
    else {
        const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
        console.log('Esses são os livros disponíveis:');
        console.table(livrosOrdenados);
    }

    r1.close();
}

main();


