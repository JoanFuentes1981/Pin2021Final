import {useState} from "react";

import Button from './components/button.jsx';
import FormSection from './components/form_section.jsx';
import TextArea from './components/form_text_area.jsx';

const axios = require('axios');

export function Seccion5(){

    const [data, setData] = useState({"name":"", "email":"", "phone":"", "message":""});

    function handleData (event) {
        let new_data = {... data}
        new_data[event.target.name] = event.target.value;
        setData(new_data)
    }

    function handleSend (event) {
        event.preventDefault();
        if (data.name && data.message && data.email && data.phone){
            console.log(data);
            setData ({"name":"", "email":"", "phone":"", "message":""});
        } else {
            console.log('poiJ')
        }
    }


    return(    
    <div className ="contenedor-cinco">
        <div className="titulos-cinco">
            <h3 className="titulo1">Get in touch</h3>
            <h3 className="titulo2">We are hiring!</h3>
            <form action="" method="post" class="formulario">
                <FormSection text="Name" type="text" placeholder="Enter your name" id="name" handler={handleData} value={data.name}/>
                <FormSection text="Email" type="email" placeholder="name@example.com" id="email" handler={handleData} value={data.email}/>
                <FormSection text="Phone" type="tel" placeholder="Number and area's code" id="phone" handler={handleData} value={data.phone}/>
                <TextArea text="Message" id="message" handler={handleData} value={data.message}/>

                <Button text="Send" handler={handleSend}/>
            </form>
        </div>
        <div class="imagen-cinco"></div>  
    </div>
    )
}
