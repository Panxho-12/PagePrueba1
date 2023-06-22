var contraste = ()=>{
    let btn = document.getElementById('btnContraste')

    if(btn.value =='0'){
        let elements = document.getElementsByClassName('blanco')
        elements[0].classList.add('negro');
        elements[0].classList.remove('blanco');
        btn.value ='1';
    }
    else if(btn.value =='1'){
        let elements = document.getElementsByClassName('negro')
        elements[0].classList.add('blanco');
        elements[0].classList.remove('negro');
        btn.value = '0';
    }
}

var fuente = ()=>{
    let btn = document.getElementById('btnFuente')
    if(btn.value =='0'){
        let elements = document.getElementsByClassName("small-letras");
        const largo = elements.length;
        for (let i = 0; i < largo; i++) {
            const element = elements[0];
            element.classList.add("medium-letras")
            element.classList.remove("small-letras")    
        }
        btn.value ='1';
    }

    else if(btn.value =='1'){
        let elements = document.getElementsByClassName("medium-letras");
        const largo = elements.length;
        for (let i = 0; i < largo; i++) {
            const element = elements[0];
            element.classList.add("large-letras")
            element.classList.remove("medium-letras")    
        }
        btn.value = '2';
    }

    else if(btn.value == '2'){
        let elements = document.getElementsByClassName("large-letras");
        const largo  = elements.length;
        for (let i = 0; i < largo; i++) {
            const element = elements[0];
            element.classList.add("small-letras")
            element.classList.remove("large-letras")    
        }
        btn.value = '0';
    }
}

var modificar = (listadoNuevo)=>{
    let eNombre= document.getElementById("nombre");
    let eMail= document.getElementById("email");
    let ePhono= document.getElementById("telefono");
    let ePwd= document.getElementById("pwd")
    let eDate= document.getElementById("fecha")
    let eHombre= document.getElementById("hombre")
    let eMujer= document.getElementById("mujer")
    let eBinario= document.getElementById("nobinario")
    let eBtnEditarUp = document.getElementById('btnEditar')


    let nombre= eNombre.value;
    let mail= eMail.value;
    let phono= ePhono.value;
    let pdw= ePwd.value;
    let date= eDate.value;
    let hombre= eHombre.checked;
    let mujer= eMujer.checked;
    let binario= eBinario.checked;
    let indice = eBtnEditarUp.value;

    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].email = mail;
    listadoNuevo[indice].telefono = phono;
    listadoNuevo[indice].password = pdw;
    listadoNuevo[indice].fecha = date;
    listadoNuevo[indice].hombre = hombre;
    listadoNuevo[indice].mujer = mujer;
    listadoNuevo[indice].binario = binario;
    localStorage.setItem('personas',JSON.stringify(listadoNuevo));
    cargarTabla(listadoNuevo)
}


var eliminar = (listadoNuevo)=>{
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    lista = listadoNuevo.filter((p)=>p.id!=indice)
    lista = lista.map((p,index)=>{return{...p,'id':index}})
    localStorage.setItem('personas',JSON.stringify(lista));
    cargarTabla(lista)
}


var cargarTabla = (listadoNuevo)=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre= document.getElementById("nombre");
    let eMail= document.getElementById("email");
    let ePhono= document.getElementById("telefono");
    let ePwd= document.getElementById("pwd")
    let eDate= document.getElementById("fecha")
    let eHombre= document.getElementById("hombre")
    let eMujer= document.getElementById("mujer")
    let eBinario= document.getElementById("nobinario")

    render = "<table>"
    render+= "<tr><th>Nombre</th><th>Email</th><th>Telefono</th><th>Contraseña</th><th>Fecha</th><th>Genero</th><th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo [i];
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.email+"</td>"
        render+="<td>"+element.telefono+"</td>"
        render+="<td>"+element.password+"</td>"
        render+="<td>"+element.fecha+"</td>"
        render+="<td>"+element.genero+"</td>"
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render+= "</table>";
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        var eBtn = document.getElementById("btnEditar"+i);
        var eBtn2 = document.getElementById("btnEliminar"+i);
        let element = listadoNuevo[i]
        eBtn.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eMail.value = element.email;
            ePhono.value = element.telefono;
            ePwd.value = element.password;
            eDate.value = element.fecha;
            eHombre.checked = element.hombre
            eMujer.checked = element.mujer
            eBinario.checked = element.binario
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";

            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar
            let eBtnEditarUp = document.getElementById('btnEditar');
            eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo))
        })
        eBtn2.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eMail.value = element.email;
            ePhono.value = element.telefono;
            ePwd.value = element.password;
            eDate.value = element.fecha;
            eHombre.checked = element.hombre
            eMujer.checked = element.mujer
            eBinario.checked = element.binario
            let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";

            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEliminar
            let eBtnEliminarUp = document.getElementById('btnEliminar');
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadoNuevo))
        })     
    }
}



var  datos = ()=> {
    let eNombre= document.getElementById("nombre");
    let nombre= eNombre.value;
    console.log(nombre)

    let eMail= document.getElementById("email");
    let mail= eMail.value;
    console.log(mail)

    let ePhono= document.getElementById("telefono");
    let phono= ePhono.value;
    console.log(phono)

    let ePwd= document.getElementById("pwd")
    let pdw= ePwd.value;
    console.log(pdw)

    let eDate= document.getElementById("fecha")
    let date= eDate.value;
    console.log(date)

    let eHombre= document.getElementById("hombre")
    let hombre= eHombre.checked;
    console.log(hombre)

    let eMujer= document.getElementById("mujer")
    let mujer= eMujer.checked;
    console.log(mujer)

    let eBinario= document.getElementById("nobinario")
    let binario= eBinario.checked
    console.log(binario)
}


var registro = () =>{
    let eNombre = document.getElementById("nombre")
    let nombre = eNombre.value;

    let eMail = document.getElementById("email")
    let mail = eMail.value;

    let ePhono = document.getElementById("telefono")
    let phono = ePhono.value;

    let ePwd = document.getElementById("pwd")
    let pwd = ePwd.value;

    let eDate = document.getElementById("fecha")
    let date = eDate.value;

    let eHombre = document.getElementById("hombre")
    let hombre = eHombre.checked;

    let eMujer = document.getElementById("mujer")
    let mujer = eMujer.checked;

    let eBinario = document.getElementById("nobinario")
    let binario = eBinario.checked;

      // Contiene el genero 
      var sexo = ""
    
      if (hombre==true){
          sexo= "Hombre"
      }
      else if(mujer==true){
          sexo = "Mujer"
      }
      else{sexo = "No Binario"}


    let listadoIngreso = localStorage.getItem('personas')
    let listadoAntiguo = JSON.parse(listadoIngreso);
    if (listadoAntiguo==null){
        let ingreso = {"id":0,"nombre":nombre,"email":mail,"telefono":phono,"password":pwd,"fecha":date,"genero":sexo}
        listadoNuevo = [ingreso]
    }else{
        let ingreso = {"id":listadoAntiguo.length,"nombre":nombre,"email":mail,"telefono":phono,"password":pwd,"fecha":date,"genero":sexo}
        listadoNuevo = [...listadoAntiguo,ingreso]
    }
    localStorage.setItem('personas',JSON.stringify(listadoNuevo))

    cargarTabla(listadoNuevo)
}

var cargarDatos = ()=>{
    let listadoPersonas = localStorage.getItem('personas');
    let listadoAntiguo = JSON.parse(listadoPersonas);
    cargarTabla(listadoAntiguo)
}

document.getElementById("btn").addEventListener("click",registro)
addEventListener('load',cargarDatos)

document.getElementById('btnContraste').addEventListener('click',contraste)
document.getElementById('btnFuente').addEventListener('click',fuente)