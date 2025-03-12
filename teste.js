import { Endereco, Telefone, Cliente, Empresa } from './atividadeDeFixacaoRJ4.js';


const enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av Andrômeda", 1000);
const empresa = new Empresa("ABC LTDA", "Mercado Online", "12345678900001", enderecoEmpresa);

empresa.adicionarTelefone(new Telefone("12", "99999999"));
empresa.adicionarTelefone(new Telefone("12", "88888888"));

const cliente1 = new Cliente("João", "11111111111", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 987));
cliente1.adicionarTelefone(new Telefone("12", "99999999"));
cliente1.adicionarTelefone(new Telefone("12", "99999998"));

const cliente2 = new Cliente("Gabriel", "22222222222", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 412));
cliente2.adicionarTelefone(new Telefone("12", "88888888"));
cliente2.adicionarTelefone(new Telefone("12", "88888887"));

const cliente3 = new Cliente("Barbara", "33333333333", new Endereco("SP", "São José dos Campos", "Av São João", 789));
cliente3.adicionarTelefone(new Telefone("12", "77777777"));
cliente3.adicionarTelefone(new Telefone("12", "77777776"));

const cliente4 = new Cliente("Márcia", "44444444444", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 452));
cliente4.adicionarTelefone(new Telefone("12", "66666666"));
cliente4.adicionarTelefone(new Telefone("12", "66666665"));

const cliente5 = new Cliente("Pedro", "55555555555", new Endereco("SP", "São José dos Campos", "Rua XV", 123));
cliente5.adicionarTelefone(new Telefone("12", "55555555"));
cliente5.adicionarTelefone(new Telefone("12", "55555554"));

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);

console.log(empresa.descricao());