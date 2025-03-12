class Endereco {
  constructor(estado, cidade, rua, numero) {
      this.estado = estado;
      this.cidade = cidade;
      this.rua = rua;
      this.numero = numero;
  }

  getEstadoUpperCase() { return this.estado.toUpperCase(); }
  getEstadoLowerCase() { return this.estado.toLowerCase(); }
  getCidadeUpperCase() { return this.cidade.toUpperCase(); }
  getCidadeLowerCase() { return this.cidade.toLowerCase(); }
  getRuaUpperCase() { return this.rua.toUpperCase(); }
  getRuaLowerCase() { return this.rua.toLowerCase(); }
  getNumeroUpperCase() { return this.numero.toString().toUpperCase(); }
  getNumeroLowerCase() { return this.numero.toString().toLowerCase(); }
}

class Telefone {
  constructor(ddd, numero) {
      this.ddd = ddd;
      this.numero = numero;
  }

  getDddUpperCase() { return this.ddd.toString().toUpperCase(); }
  getDddLowerCase() { return this.ddd.toString().toLowerCase(); }
  getNumeroUpperCase() { return this.numero.toString().toUpperCase(); }
  getNumeroLowerCase() { return this.numero.toString().toLowerCase(); }
}

class Cliente {
  #cpf;
  constructor(nome, cpf, endereco) {
      this.nome = nome;
      this.#cpf = cpf;
      this.endereco = endereco;
      this.telefones = new Set();
  }

  getCpf() { return this.#cpf; }

  getNomeUpperCase() { return this.nome.toUpperCase(); }
  getNomeLowerCase() { return this.nome.toLowerCase(); }
  getCpfUpperCase() { return this.#cpf.toString().toUpperCase(); }
  getCpfLowerCase() { return this.#cpf.toString().toLowerCase(); }

  adicionarTelefone(telefone) {
      this.telefones.add(telefone);
  }
}

class Empresa {
  #cnpj; // Atributo privado
  constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
      this.razaoSocial = razaoSocial;
      this.nomeFantasia = nomeFantasia;
      this.#cnpj = cnpj;
      this.endereco = endereco;
      this.clientes = new Set();
      this.telefones = new Set();
  }

  getCnpj() { return this.#cnpj; }

  getRazaoSocialUpperCase() { return this.razaoSocial.toUpperCase(); }
  getRazaoSocialLowerCase() { return this.razaoSocial.toLowerCase(); }
  getNomeFantasiaUpperCase() { return this.nomeFantasia.toUpperCase(); }
  getNomeFantasiaLowerCase() { return this.nomeFantasia.toLowerCase(); }
  getCnpjUpperCase() { return this.#cnpj.toString().toUpperCase(); }
  getCnpjLowerCase() { return this.#cnpj.toString().toLowerCase(); }

  adicionarCliente(cliente) {
      this.clientes.add(cliente);
  }

  adicionarTelefone(telefone) {
      this.telefones.add(telefone);
  }

  descricao() {
      let resultado = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n`;
      for (let cliente of this.clientes) {
          resultado += `Nome: ${cliente.nome}\n`;
          resultado += `Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;
          for (let telefone of cliente.telefones) {
              resultado += `ddd: ${telefone.ddd} numero: ${telefone.numero}\n`;
          }
      }
      return resultado;
  }
}

export { Endereco, Telefone, Cliente, Empresa };