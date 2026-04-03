import { openDb } from "../configDB.js";

export  async function createTable() {
    openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER, email TEXT, telefone TEXT)');
    });    
}

export  async function insertPessoa(pessoa) {
    openDb().then(db => {
    db.run('INSERT INTO pessoa (nome, idade, email, telefone) VALUES (?, ?, ?, ?)', [pessoa.nome, pessoa.idade, pessoa.email, pessoa.telefone]);
    });    
}