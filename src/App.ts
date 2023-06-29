import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import express,{Application, Request, Response} from 'express'

import PacienteRouter from './routes/PacienteRouter'
/**
 * Clase principal de la API. Define las rutas de la API
 * 
 * @author Carolina Chico
 * @description Clase inicial de ejemplo para manejar rutas y documentación
 */
class App{

	//Atributos
	public app:any
	private server:any
	


	constructor(){

		/**
         * Express es la biblioteca para definir API en el ecosistema de Node.js
         */
		this.app=express()

		this.app.use(express.json())
        this.app.use(
			'/api-docs',
			swaggerUi.serve,
			swaggerUi.setup(swaggerSpec)
		)
		
		this.routes()
	}
/**
 * Definir y agregar las rutas de la API con express
 */
	private routes():void{
        
	this.app.use('/', PacienteRouter)		
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