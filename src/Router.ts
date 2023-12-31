import express,{Application, Request, Response} from 'express'

/**
 * Clase principal de la API. Define las rutas de la API
 * 
 * @author Carolina Chico
 * @description Clase inicial de ejemplo para manejar rutas y documentación
 */
class App{

	//Atributos
	public app:Application
	private server:any


	constructor(){

		/**
         * Express es la biblioteca para definir API en el ecosistema de Node.js
         */
		this.app=express()

		this.app.use(express.json())
		this.routes()
	}

	private routes():void{
        
		this.app.get(
			'/',
			(req:Request, res:Response)=>{
				res.send('Bienvenidos a la IPS ')
			}
		)

		this.app.post(
			'/paciente',
			(req:Request, res:Response)=>{
				res.send('Bienvenidos a typescript')
			}
		)
	}

	public start():void{

		this.server=this.app.listen(
			3000,
			()=>{console.log('El servidor está escuchando en el puerto 3000')}
		)
	}

	public close():void{
		this.server.close()
	}

}

export default App