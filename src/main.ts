import { NotaFiscal } from "./model/NotaFiscal";


const notaF1 = new NotaFiscal (`211929020`);
notaF1.pessoaF.setNome(`José Mateus`);
notaF1.pessoaF.setCpf(`212332218931`);
console.log(`Nome: ${notaF1.pessoaF.getNome()}`);
console.log(`CPF: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n°: ${notaF1.getNumeroNotaFiscal()}`);

const notaF2v = new NotaFiscal (`44443234`);
notaF2v.pessoaF.setNome(`Mateus Jose`);
notaF2v.pessoaF.setCpf(`10201229`);
console.log(`Nome: ${notaF2v.pessoaF.getNome()}`);
console.log(`CPF: ${notaF2v.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n°: ${notaF2v.getNumeroNotaFiscal()}`);
