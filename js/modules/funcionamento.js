/*
Este script verifica se o local está em horário de funcionamento no tempo presente.

Para que o script funcione sem problemas,
o elemento selecionado deve contar os atributos "data-semana" e "data-horário",
caso o seja horário válido, será adicionada uma classe que deve ser especifida(padrão = "open").

Sendo que data-semana deve ter o padrão: "1,2,3,4,5"(Segunda à sexta).
0 = domingo, 1 = segunda, 2  = terça; e assim por diante.

Data horária deve seguir o padrão: "8:30, 18".
Dois itens, sendo o horário de abertura e o horário de fechamento.
Não é necessário que os minutos sejam especificados. e.g. 8, 8:30; ambos são aceitos.
*/

export default class HorarioFuncionamento {
  constructor(classe) {
    // Puxa os dados de horário de funcionamento do elemento.
    this.funcionamento = document.querySelectorAll('[data-semana]');

    if (classe === undefined) {
      this.classe = 'open';
    } else {
      this.classe = classe;
    }

    this.dataAgora = new Date();

    this.init();
  }

  result(i) {
    // Definições sobre a data desejada
    const diasSemana = i.dataset.semana.split(',').map(Number);
    const horarioSemana = i.dataset.horario.split(',');

    let horaAbre;
    let horaFecha;
    let minutoAbre;
    let minutoFecha;

    // Verificam se o horário possui minuto explicito
    if (horarioSemana[0].split(':').length === 2) {
      horaAbre = +horarioSemana[0].split(':')[0];
      minutoAbre = +horarioSemana[0].split(':')[1];
    } else {
      horaAbre = +horarioSemana[0];
      minutoAbre = 0;
    }

    if (horarioSemana[1].split(':').length === 2) {
      horaFecha = +horarioSemana[1].split(':')[0];
      minutoFecha = +horarioSemana[1].split(':')[1];
    } else {
      horaFecha = +horarioSemana[1];
      minutoFecha = 0;
    }

    // Definições sobre a data atual
    const diaAgora = this.dataAgora.getDay();
    const horarioAgora = this.dataAgora.getHours();
    const minutosAgora = this.dataAgora.getMinutes();

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

    // Verifica se o horário atual está dentro do horário de funcionamento
    let horarioAberto = false;
    if (horarioAgora >= horaAbre && horarioAgora <= horaFecha) {
      if (horaAbre === horaFecha) {
        if (minutosAgora >= minutoAbre && minutosAgora <= minutoFecha) {
          horarioAberto = true;
        }
      } else if (horarioAgora === horaAbre) {
        if (minutosAgora >= minutoAbre) {
          horarioAberto = true;
        }
      } else if (horarioAgora === horaFecha) {
        if (minutosAgora <= minutoFecha) {
          horarioAberto = true;
        }
      } else {
        horarioAberto = true;
      }
    }

    // Caso a data atual coincida com o horário de funcionamento, então o elemento recebe a classe.
    if (semanaAberto && horarioAberto) {
      i.classList.add(this.classe);
    }
  }

  init() {
    this.funcionamento.forEach((i) => this.result(i));
  }
}
