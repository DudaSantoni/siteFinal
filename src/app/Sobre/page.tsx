import { Sobre } from "../components/Sobre/Sobre"; 
import { Acompanhamento } from "../components/Acompanhamento/Acompanhamento"; 
import { Cadastros } from "../components/Cadastros/Cadastros";
export default function Page() {
    return(
        <main>
            <Sobre />
            <Acompanhamento />
            <Cadastros />
        </main>
    );
}