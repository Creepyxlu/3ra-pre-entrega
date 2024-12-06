let campeonSeleccionado = null
let oro = 10000
let campeonEncontrado = null
const seleccionCampeon = document.querySelector("#seleccionCampeon")

const renderizarSelectorCampeones = (error) =>{
    if(!campeonSeleccionado){
        seleccionCampeon.innerHTML = `
            <p>Selecciona un campeón de los que se encuentran disponibles</p>
            <div>    
                <div id="slider"></div>
                    <hr>
                    <p>Escribe el ID del campeón que vas a seleccionar</p>
                    <form action="" id="formulario">
                        <input type="text" id="campeon" name="campeon" placeholder="Escribir ID">
                        <input type="button" value="Seleccionar" id="boton">
                        ${error?`<p id="mensaje-error" style="color: red;" >${error}</p>`:""}
                        <br>
                    </form>
                    <hr>
            </div>
        `
    }
    const botonSeleccionar = document.querySelector('#boton');
    const inputCampeon = document.querySelector('#campeon');
    
    botonSeleccionar.addEventListener("click", ()=>{
        campeonEncontrado = campeones.find(campeon => campeon.id === +inputCampeon.value); //Si pongo el "+" al costadito me tranforma el ID a número
        if(campeonEncontrado) {
            renderizarInterfazCampeonSeleccionado(campeonEncontrado, inventario, itemsDisponibles)
        }
        else{
            renderizarSelectorCampeones("ID inválido. Por favor, intenta nuevamente.")
        }   
        inputCampeon.value=""
    })
}

renderizarSelectorCampeones()

//Datos 
const campeones = [
    {nombre: "Dr. Mundo",
        video: "./assets/videos/mundo.mp4",
        image: "./assets/dr.mundo-profile.png",
        id: 1,
        vida: 623,
        mana: -1, //usaremos -1 cuando el campeón no acceda al uso de este recurso 
        regeneracion_vida: 9,
        poder_curaciones_y_escudos: 0,
        letalidad: 0,
        penetracion_de_magia: 0,
        penetracion_de_armadura: 0,
        robo_de_vida: 0,
        omnivampirismo: 0,
        alcance_de_ataque: 125,
        tenacidad: 0,
        dmg_AD: 68,
        dmg_AP: 0,
        armadura: 32,
        resistencia_magica: 29,
        velocidad_ataque: 0.73,
        aceleracion_habilidad: 0,
        golpe_critico: 0,
        velocidad_movimiento: 345,
        rol_usual: "Top",
        tipo_de_recurso:{
            nombre: "ninguno",
        }
    },
    {nombre: "Karthus",
        video: "PENDIENTE",
        image: "./assets/dr.mundo-profile.png",
        id: 2,
        vida: 630,
        regeneracion_vida: 7,
        poder_curaciones_y_escudos: 0,
        letalidad: 0,
        penetracion_de_magia: 0,
        penetracion_de_armadura: 0,
        robo_de_vida: 0,
        omnivampirismo: 0,
        alcance_de_ataque: 450,
        tenacidad: 0,
        dmg_AD: 46,
        dmg_AP: 18,
        armadura: 21,
        resistencia_magica: 30,
        velocidad_ataque: 0.63,
        aceleracion_habilidad: 0,
        golpe_critico: 0,
        velocidad_movimiento: 335,
        rol_usual: "Mid, Jg",

        tipo_de_recurso:{//Corregir como se ve esto en HTML en caso de ser mana :(
            nombre: "mana",
            cantidad: 467,
            regeneracion_mana: 8,
        }
    },
    {nombre: "Samira",
        video: "./assets/videos/samira.mp4",
        image: "./assets/samira-profile.png",
        id: 3,
        vida: 640,
        regeneracion_vida: 3,
        poder_curaciones_y_escudos: 0,
        letalidad: 0,
        penetracion_de_magia: 0,
        penetracion_de_armadura: 0,
        robo_de_vida: 0,
        omnivampirismo: 0,
        alcance_de_ataque: 500,
        tenacidad: 0,
        dmg_AD: 64,
        dmg_AP: 0,
        armadura: 26,
        resistencia_magica: 30,
        velocidad_ataque: 0.66,
        aceleracion_habilidad: 8,
        golpe_critico: 0,
        velocidad_movimiento: 345,
        rol_usual: "ADC",

        tipo_de_recurso:{
            nombre: "mana",
            cantidad: 349,
            regeneracion_mana: 8,
        } 
    }
]
const inventario = [
    {posicion: 1,
        item: "ninguno",
    },
    {posicion: 2,
        item: "ninguno",    
    },
    {posicion: 3,
        item: "ninguno",
    },
    {posicion: 4,
        item: "ninguno",
    },
    {posicion: 5,
        item: "ninguno",    
    },
    {posicion: 6,
        item: "ninguno",
    },
    {posicion: 7,
        item: "ninguno",
    }
]
const itemsDisponibles = [
    // Items de tipo ward
    { nombre: "Centinela Invisible",
        tipo: "ward",
        id: 4,
        precio: 0,
        habilidad: "Provee visión en el mapa durante un tiempo limitado.",
        url:"./assets/items/centinela-invisible.png"
    },
    { nombre: "Lente de Oráculo",
        tipo: "ward",
        id: 5,
        precio: 0,
        habilidad: "Revela los wards enemigos y otras unidades invisibles.",
        url:"./assets/items/lente-de-oraculo.png"
    },
    { nombre: "Alteración de Visión Lejana",
        tipo: "ward",
        id: 6,
        precio: 0,
        habilidad: "Ofrece visión en una amplia área alrededor del área seleccionada.",
        url:"./assets/items/alteracion-de-vision-lejana.png"
    },

    // Items normales
    { nombre: "Escarcha Eterna",
        tipo: "normal",
        id: 1,
        precio: 3400,
        habilidad: "Aumenta el poder de habilidad y ofrece un bono de vida.",
        url:"./assets/items/escarcha-eterna.png",
        estadisticas: {
            dmg_AP: 80,
            vida: 250,
            mana: 600,
            aceleracion_habilidad: 20,
        }
        
    },
    { nombre: "Armadura Petrea",
        tipo: "normal",
        id: 2,
        precio: 3300,
        habilidad: "Aumenta la armadura y la resistencia mágica.",
        url:"./assets/items/armadura-petrea.png",
        estadisticas: {
            armadura: 60,
            resistencia_magica: 40
        }
    },
    { nombre: "Fuerza del Viento",
        tipo: "normal",
        id: 3,
        precio: 2900,
        habilidad: "Mejora el daño de ataque y la velocidad de ataque.",
        url:"./assets/items/fuerza-del-viento.png",
        estadisticas:{
            dmg_AD: 55,
            velocidad_ataque: 20, // Se puede aplicar la fórmula de aumento de velocidad de ataque
            golpe_critico: 20,
        }
    }
];


//Funciones de renderizado HTML
const renderizarHUD = (campeon)=>{
    return `
        <div class="estadisticas">
            <div class="cuadros">
                <div class="top-stats">
                    <div class="left">
                        <div title="Regeneración de vida | Regeneración de maná">
                            <img src="./assets/stats/regeneracion-recursos.png" alt="">
                            <span>
                                ${campeon.regeneracion_vida}
                                |
                                ${campeon.regeneracion_mana
                                ?`<span>${campeon.tipo_de_recurso.regeneracion_mana}</span>`
                                :`<span>-</span>`
                                }
                            </span>
                        </div>
                        <div title="Letalidad | Penetración de armadura">
                            <img src="./assets/stats/penetracion-armadura.png" alt="">
                            <span>${campeon.letalidad} | ${campeon.penetracion_de_armadura}</span>
                        </div>
                        <div title="Robo de vida">
                            <img src="./assets/stats/robo-de-vida.png" alt="">
                            <span>${campeon.robo_de_vida}</span>
                        </div>
                        <div title="Alcance de ataque">
                            <img src="./assets/stats/alcance-de-ataque.png" alt="">
                            <span>${campeon.alcance_de_ataque}</span>
                        </div>
                    </div>
                    <div class="right">
                        <div title="Poder de curaciones y escudos">
                            <img src="./assets/stats/poder-curaciones-escudos.png" alt="">
                            <span>${campeon.poder_curaciones_y_escudos}</span>
                        </div>
                        <div title="Penetración de magia">
                            <img src="./assets/stats/penetracion-de-magia.png" alt="">
                            <span>${campeon.penetracion_de_magia}</span>
                        </div>
                        <div title="Omnnivampirismo">
                            <img src="./assets/stats/omnivampirismo.png" alt="">
                            <span>${campeon.omnivampirismo}</span>
                        </div>
                        <div title="Tenacidad">
                            <img src="./assets/stats/tenacidad.png" alt="">
                            <span>${campeon.tenacidad}</span>
                        </div>
                    </div>
                </div>

                                    <div class="bottom-stats">
                        <div class="left">
                            <div title="Daño de ataque">
                                <img src="./assets/stats/AD.png" alt="">
                                <span>${campeon.dmg_AD}</span>
                            </div>

                            <div title="Armadura">
                                <img src="./assets/stats/armadura.png" alt="">
                                <span>${campeon.armadura}</span>
                            </div>

                            <div title="Velocidad de ataque"">
                        <img src=" ./assets/stats/velocidad-de-ataque.png" alt="">
                                <span>${campeon.velocidad_ataque}</span>
                            </div>

                            <div title="Probabilidad de golpe crítico">
                                <img src="./assets/stats/critico.png" alt="">
                                <span>${campeon.golpe_critico}</span>
                            </div>

                        </div>

                        <div class="right">

                            <div title="Poder de habilidad">
                                <img src="./assets/stats/AP.png" alt="">
                                <span>${campeon.dmg_AP}</span>
                            </div>

                            <div title="Resistencia mágica">
                                <img src="./assets/stats/resistencia-magica.png" alt="">
                                <span>${campeon.resistencia_magica}</span>
                            </div>

                            <div title="Aceleración de habilidad">
                                <img src="./assets/stats/aceleracion-habilidad.png" alt="">
                                <span>${campeon.aceleracion_habilidad}</span>
                            </div>

                            <div title="Velocidad de movimiento">
                                <img src="./assets/stats/velocidad-movimiento.png" alt="">
                                <span>${campeon.velocidad_movimiento}</span>
                            </div>
                        </div>
                    </div>
            </div>
            
            <div class="campeon-img">
                <img src="${campeon.image}" alt="campeon">
            </div>
            
            <div class="vida-mana">
                <div class="vida" title="Vida"><span>${campeon.vida}</span></div>
                <div class="mana" title="Maná">
                    ${campeon.tipo_de_recurso.nombre === "mana"
                    ?`<span>${campeon.tipo_de_recurso.cantidad}</span>`
                    :`<span>-</span>`
                    }
                </div>
            </div>

        </div>
    `
}

const renderizarInventarioHTML = (inventario) => {
    console.log(inventario)
    return `
        <div class="inventario">
                <div class="items">
                    ${inventario.map((posicion) => {//pasar esto a allá arriba
                        return `
                            <div class="item" style="background-image: url(${posicion.item.url})"></div>
                        `;
                        
                    }).join('')}
                </div>
                <div class="oro">
                <img src="./assets/gold.png" alt="oro">
                <p id="oro"> ${oro}</p>
                </div>
        </div>
    `;
};
const agregarAlInventario = (itemID) => { 
    const item = itemsDisponibles.find(item => item.id === +itemID);
    //Si item es trully y tiene oro suficiente
    if(item && oro > item.precio){
        if (item.tipo === "ward") {
            inventario[3].item = item;
            renderizarInterfazCampeonSeleccionado(campeonEncontrado, inventario, itemsDisponibles)
        }else{
            const posicionVacia = inventario.find(inventarioItem => inventarioItem.item === "ninguno") //verificamos si la posición está o no vacia
            if(posicionVacia){//si la posición está vacía
                posicionVacia.item = item;
                oro = oro - item.precio;
                const oroHTML = document.querySelector('#oro');
                oroHTML.innerHTML = `Oro disponible: $ ${oro}`
                for (let estadistica in item.estadisticas) {
                    campeonEncontrado[estadistica] = campeonEncontrado[estadistica] +  item.estadisticas[estadistica] 
                    //Uso los corchetes para entrar, a lo que se le diría, la "key", no al valor de la estadistica, sino a su nombre
                }renderizarInterfazCampeonSeleccionado(campeonEncontrado, inventario, itemsDisponibles)
            }
            else{
                alert("No tienes más espacio en el inventario")
            }
        }
    }
    else{
        alert("No tienes suficiente oro para comprar este item")
    }
}

const CampeonesHTML = document.querySelector('#slider');

const renderizarInterfazCampeonSeleccionado = (campeon, inventario, itemsDisponibles) => {
    console.log(campeon)
    seleccionCampeon.innerHTML = `
    <div>
        <div class="campeon_seleccionado">
            ${renderizarHUD(campeon)}
                ${renderizarInventarioHTML(inventario)}
            </div>
        </div>
    </div>
    ${renderizarTiendaHTML(itemsDisponibles)}
    `
}

const renderizarListaCampeones = (campeones) => {
    CampeonesHTML.innerHTML = campeones.map(campeon => `
            <div class="slider" style="display: flex; justify-content: space-between; width: 170px;">  
                <div class="slide">${campeon.nombre}</div>  
                <div class="slide">ID: ${campeon.id}</div>  
            </div>  
    `).join('');//Con el join quito las comas segun parece
};

renderizarListaCampeones(campeones)




/* Tienda */

let itemsTienda= [
    {tipo: "Ward",
        items: [
            { nombre: "Centinela Invisible",
                tipo: "ward",
                id: 4,
                precio: 0,
                habilidad: "Provee visión en el mapa durante un tiempo limitado.",
                url:"./assets/items/centinela-invisible.png"
            },
            { nombre: "Lente de Oráculo",
                tipo: "ward",
                id: 5,
                precio: 0,
                habilidad: "Revela los wards enemigos y otras unidades invisibles.",
                url:"./assets/items/lente-de-oraculo.png"
            },
            { nombre: "Alteración de Visión Lejana",
                tipo: "ward",
                id: 6,
                precio: 0,
                habilidad: "Ofrece visión en una amplia área alrededor del área seleccionada.",
                url:"./assets/items/alteracion-de-vision-lejana.png"
            }
        ],
    },
    {tipo: "Normales",
        items: [
            { nombre: "Escarcha Eterna",
                tipo: "normal",
                id: 1,
                precio: 3400,
                habilidad: "Aumenta el poder de habilidad y ofrece un bono de vida.",
                url:"./assets/items/escarcha-eterna.png",
                estadisticas: {
                    dmg_AP: 80,
                    vida: 250,
                    mana: 600,
                    aceleracion_habilidad: 20,
                }
                
            },
            { nombre: "Armadura Petrea",
                tipo: "normal",
                id: 2,
                precio: 3300,
                habilidad: "Aumenta la armadura y la resistencia mágica.",
                url:"./assets/items/armadura-petrea.png",
                estadisticas: {
                    armadura: 60,
                    resistencia_magica: 40
                }
            },
            { nombre: "Fuerza del Viento",
                tipo: "normal",
                id: 3,
                precio: 2900,
                habilidad: "Mejora el daño de ataque y la velocidad de ataque.",
                url:"./assets/items/fuerza-del-viento.png",
                estadisticas:{
                    dmg_AD: 55,
                    velocidad_ataque: 20, // Se puede aplicar la fórmula de aumento de velocidad de ataque
                    golpe_critico: 20,
                }
            }
        ]
    }
]



const tienda = document.getElementById('tienda');
const wardSection = document.getElementById('wards');
const itemsSection = document.getElementById('itemsNormales');
tienda.style.display = 'none';
const renderizarTiendaHTML = (items) => {







    let itemsTiendaHTML = "";  // Variable para acumular todas las filas
    for (const item of items) {
        itemsTiendaHTML += `
                    ${ item.tipo === "ward" ?
                        wardSection.innerHTML =
                        `<img class="item-img" src="${item.url}"  ondblclick="agregarAlInventario(${item.id})">`
                        : itemsSection.innerHTML =
                        ` <h2>wards</h2><img class="item-img"p src="${item.url}"  ondblclick="agregarAlInventario(${item.id})">`
                    }
        `
    }
    // Insertamos la tabla completa con las filas acumuladas
    tienda.innerHTML = `${itemsTiendaHTML}`
};

document.addEventListener('keydown', function(event) {
    if (event.key === "p" || event.key === "P") {
        tienda.style.display === 'none'
        ? tienda.style.display = 'block'
        : tienda.style.display = 'none'
    }
});  