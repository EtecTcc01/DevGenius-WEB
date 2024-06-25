import AddTeoria from "../../components/Teoria.js/AdicionarTeoria";
import UpTeoria from "../../components/Teoria.js/AtulalizarTeoria";
import DelTeoria from "../../components/Teoria.js/DeletarTeoria";

export default function Teoria(){
    return (
        <div>

            <AddTeoria/>
            <UpTeoria/>
            <DelTeoria/>
        </div>
    );

}