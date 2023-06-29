import {Response, Request} from "express"
import {PrismaClient} from "@prisma/client"

class PAcienteController{

    private prismaClient:PrismaClient

    constructor(){
        this.prismaClient=new PrismaClient()
    }

    async crearPaciente(req:Request, res:Response){
        try{
            const{
                cedula,
                nombre,
                apellido,
                fecha,
                telefono
            }=req.body//los va  a sacar desde el cuerpo de la peticion, los datos
            const fechaNacimiento = new Date(fecha) 
            //pasar datos de prisma para que los guarde en la base de datos
            const paciente= await this.prismaClient.paciente.create(
                {
                    data:{//datos que quiero guardar en el paciente
                    cedula,
                    nombre,
                    apellido,
                    fechaNacimiento,
                    telefono
                        }	
                }
            )
            res.json(paciente)
        }catch(e:any){
            res.status(400)
            res.json({error:e.message})
        }
        }

        async obtenerPacientes(req:Request, res:Response){
			const pacientes=await this.prismaClient.paciente.findMany()
			res.json(pacientes)
			}




}

export default PAcienteController