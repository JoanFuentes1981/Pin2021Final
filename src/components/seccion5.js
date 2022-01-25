export function Seccion5(){
    return(    
    <div className ="contenedor-cinco">
        <div className="titulos-cinco">
            <h1 className="titulo1">Get in touch</h1>
            <h1 className="titulo2">We are hiring!</h1>
            <form action="" method="post" class="formulario">
                <label for="" >Name:</label>
                <input type="text" className="formulario__input-txt" name="nombre"/>
                <label for="" >E-mail:</label>
                <input type="text" className="formulario__input-txt" name="correo"/>
                <label for="" >Phone:</label>
                <input type="text" className="formulario__input-txt"  name="telefono"/>
                <label for="" >Mesagge:</label>
                <textarea name="mensaje" id="" cols="30" rows="10" className="formulario__textarea"></textarea>
                <input type="submit" className="button-cinco formulario_btn" value="Send"/>
            </form>
        </div>
        <div class="imagen-cinco"></div>  
    </div>
    )
}

