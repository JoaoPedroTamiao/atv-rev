import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica} from "./PessoaJuridica";

export class NotaFiscal{
    private numeroNotaFiscal: string;
    public pessoaF = new PessoaFisica(``,``);
    public pessoaj = new PessoaJuridica(``,``);

    constructor(_numeroNotaFiscal: string){
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }

    public setNumeroNotaFiscal(_numeroNotaFiscal: string){
        this.numeroNotaFiscal = this.numeroNotaFiscal;
    }

    public getNumeroNotaFiscal():string{
        return this.numeroNotaFiscal
    }
}

