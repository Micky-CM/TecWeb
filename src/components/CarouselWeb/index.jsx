import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from '../Item'

function CarouselWeb(props)
{
    var items = [
    {
        "image":"https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400",
        "title":"Desarrollo Web"
        },
        {
        "image":"https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
        "title":"Maquetación"
        },
        {
        "image":"https://images.pexels.com/photos/2764993/pexels-photo-2764993.jpeg?auto=compress&cs=tinysrgb&w=400",
        "title":"Escritura de Código"
        },
        {
        "image":"https://images.pexels.com/photos/18304031/pexels-photo-18304031/free-photo-of-computadora-con-dos-pantallas-sobre-un-escritorio-en-una-habitacion-con-poca-luz.jpeg?auto=compress&cs=tinysrgb&w=400",
        "title":"Entorno de trabajo"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default CarouselWeb