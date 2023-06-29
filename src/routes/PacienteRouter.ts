import { Router, Response, Request } from "express"
import PacienteController from "../controllers/PacienteController"



class PacienteRouter{
    router :Router
    pacienteController: PacienteController
    
    constructor(){
        this.router= Router()
        this.pacienteController=new PacienteController()
       // this.routes()

    }

    private routes():void{
            this.router.get(//Devueleve todos lso apcientes que se encuentran en la base de datos
			'/pacientes',
            (req:Request, res:Response)=>{
                this.pacienteController.obtenerPacientes(req,res)
            }
		    )

		    this.router.post(
			'/crear_paciente',
            (req:Request, res:Response)=>{
                this.pacienteController.crearPaciente(req,res)
            }
		    )
    }

}

export default PacienteRouter