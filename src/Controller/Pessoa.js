import { openDb } from "../configDB.js";

export  async function createTable() {
    openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER, email TEXT, telefone TEXT)');
    });    
}

export async function insertPessoa(pessoa) {
    openDb().then(db => {
    db.run('INSERT INTO Pessoa (nome, idade, email, telefone) VALUES (?, ?, ?, ?)', [pessoa.nome, pessoa.idade, pessoa.email, pessoa.telefone]);
    });    
}

export async function updatePessoa(pessoa) {
    openDb().then(db => {
    db.run('UPDATE Pessoa SET nome = ?, idade = ?, email = ?, telefone = ? WHERE id = ?', [pessoa.nome, pessoa.idade, pessoa.email, pessoa.telefone, pessoa.id]);
    });    
}

export async function selectPessoas() {
    return openDb().then(db => {
        return db.all('SELECT * FROM Pessoa')
        .then(res=>res)
    });    
}

export async function selectPessoa(id) {
    return openDb().then(db => {
        return db.get('SELECT * FROM Pessoa WHERE id = ?', [id])
        .then(res=>res)
    });    
}