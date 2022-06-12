import React, { useEffect, useState } from 'react';
import { conexionAPI1} from '../api/conexionAPI';
import { CiudadResponse, Main } from '../tipos/Tipos';
import { Ciudad } from './Ciudad';



export const Ciudades = () => {

    const [ciudades, setCiudades] = useState<CiudadResponse>();
    const [temp, setTemp] = useState<CiudadResponse[]>([]);

    const getCiudades = async () =>
    {
        try{
            
            const respuesta = await conexionAPI1.get<CiudadResponse>("/weather?id=3601783&appid=3701d4404534609501e5752c7d521586");
            //setCiudades(respuesta.data);
            console.log(respuesta.data);
            setTemp(temp => [...temp,respuesta.data]);


             const respuesta1 = await conexionAPI1.get<CiudadResponse>("/weather?id=2643743&appid=3701d4404534609501e5752c7d521586");
             setTemp(temp => [...temp,respuesta1.data]);

             const respuesta2 = await conexionAPI1.get<CiudadResponse>("/weather?id=2968815&appid=3701d4404534609501e5752c7d521586");
             setTemp(temp => [...temp,respuesta2.data]);

             const respuesta3 = await conexionAPI1.get<CiudadResponse>("/weather?id=5128638&appid=3701d4404534609501e5752c7d521586");
             setTemp(temp => [...temp,respuesta3.data]);

             const respuesta4 = await conexionAPI1.get<CiudadResponse>("/weather?id=1850147&appid=3701d4404534609501e5752c7d521586");
             setTemp(temp => [...temp,respuesta4.data]);

             const respuesta5 = await conexionAPI1.get<CiudadResponse>("/weather?id=2147714&appid=3701d4404534609501e5752c7d521586");
             setTemp(temp => [respuesta5.data]);
            // const respuesta2 = await conexionAPI1.get<CiudadResponse[]>("/weather?id=3601783&appid=3701d4404534609501e5752c7d521586");
            // setCiudades(respuesta.data);
        } catch (err){
            console.log(err);
        }
    }
    
    useEffect(() =>{
        console.log("Iniciando");
        getCiudades();
    }, []);


  return (
    <div className='flexContainerCiudades'>
       {temp.map((ciudad) => (
        <Ciudad ciudad={ciudad} key={ciudad.id} />
      ))}
      
      {/* <Ciudad ciudad={ciudades} />
      <Ciudad ciudad={ciudades}/>
      <Ciudad ciudad={ciudades} />
      <Ciudad ciudad={ciudades}/>
      <Ciudad ciudad={ciudades}/> */}
    </div>
  );
};

