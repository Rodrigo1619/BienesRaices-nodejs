import  express  from "express";
import usuarioRoute from './routes/usuarioRoute.js'

//creando la app
const app = express();

//configurando pug
app.set('view engine', 'pug') //habilitando pug
app.set('views', './views')//le decimos que todas nuestras vistas estaran en ./views

//carpeta publica
app.use(express.static('public'))

//Router
app.use('/auth', usuarioRoute)

//arrancando servidor
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server on ${port}`);
})