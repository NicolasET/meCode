let p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    nSignos: 0,
};

let m = {
    inicio: () =>{
        for (let i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla);
        }
    },

    oprimirTecla: (boton) =>{
        p.accion = boton.target.getAttribute("class");
        p.digito = boton.target.innerHTML;
        m.calculadora(p.accion, p.digito);
    },

    calculadora: (accion, digito) =>{
        switch (accion) {
            case "numero":
                if (p.operaciones.innerHTML == 0) {
                    p.operaciones.innerHTML = digito;
                }else{
                    p.operaciones.innerHTML += digito;
                }
                break;
            case "signo":
                
                break;
            case "decimal":
                
                break;
            case "igual":
                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                break;   
        
            default:
                break;
        }
    }
};

m.inicio();