const fs = require('fs');
const path = require('path');


//Variable que contiene los productos
let detalleProductos = [
    {
        id: 0,
        url: "de-pies-a-cabeza",
        nombre: "De pies a cabeza",
        category: "Paquetes de Spa",
        descripción: "Combo de nuestros servicios: Masaje Cuello, hombros y espalda, Tratamiento facial Piel Sensible y Tratamiento corporal de Drenaje Linfático.",
        precio: "Precio : $2.800,-",
        duration: 120,
        foto: "/images/tatamientos/01-de-pies-a-cabeza.jpg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 18:00 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 1,
        url: "relajante",
        nombre: "Relajante",
        category: "Paquetes de Spa",
        descripción: "Combo de nuestros servicios: Masaje Cuello, hombros y cabeza, Masaje de Aromaterapia y Tratamiento corporal de Maderoterapia.",
        precio: "Precio : $2.800,-",
        duration: 120,
        foto: "/images/tatamientos/02-relajante.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 18:00 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 2,
        url: "anti-age",
        nombre: "Anti Age",
        category: "Paquetes de Spa",
        descripción: "Combo de nuestros servicios: Masaje de Piedras Calientes, Tratamiento facial Anti Age, Tratamiento corporal de Drenaje Linfático.",
        precio: "Precio : $3.000,-",
        duration: 120,
        foto: "/images/tatamientos/03-anti-age.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 18:00 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 3,
        url: "aromaterapia",
        nombre: "Aromaterapia",
        category: "Masajes",
        descripción: "En nuestro spa, un masajista licenciado personalizará su masaje de aromaterapia con aceites vegetales altamente concentrados, llamados aceites esenciales, agregados al aceite o loción de masaje. Este masaje es particularmente adecuado para quienes sufran de estrés o quieran mejorar las condiciones anímicas. Cada aceite esencial tiene diferentes propiedades curativas.",
        precio: "Precio : $2.000,-",
        duration: 60,
        foto: "/images/tatamientos/04-aromaterapia.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 17:00 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 4,
        url: "piedras-calientes",
        nombre: "Piedras Calientes",
        category: "Masajes",
        descripción: "En nuestro spa, un masajista licenciado personalizará su masaje con piedras calientes. Las piedras calientes se colocan en puntos específicos y otras piedras serán utilizadas por el masajista para trabajar el músculo.",
        precio: "Precio $2.000,-",
        duration: 60,
        foto: "/images/tatamientos/05-piedras-calientes.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 17:00 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 5,
        url: "cuello-hombros-y-espalda",
        nombre: "Cuello, hombros y espalda",
        category: "Masajes",
        descripción: "En nuestro spa, un masajista licenciado adaptará el masaje enfocándose en el cuello, los hombros y la espalda para aliviar la tensión, la incomodidad o la fuente del dolor y ayudarlo lograr una mejor relajación.",
        precio: "Precio: $1.600,-",
        duration: 30,
        foto: "/images/tatamientos/06-cuello-hombros-y-espalda.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 16:30 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 6,
        url: "cuello-hombros-y-cabeza",
        nombre: "Cuello, hombros y cabeza",
        category: "Masajes",
        descripción: "En nuestro spa, un masajista licenciado adaptará el masaje enfocándose en el cuello, los hombros y el cuero cabelludo para aliviar la tensión, la incomodidad o la fuente del dolor y ayudarlo lograr una mejor relajación.",
        precio: "Precio: $1.600,-",
        duration: 30,
        foto: "/images/tatamientos/07-cuello-hombros-y-cabeza.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 16:30 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 7,
        url: "reflexologia",
        nombre: "Reflexología",
        category: "Masajes",
        descripción: "En nuestro spa, un masajista licenciado personalizará su reflexología aplicando presión a áreas específicas del pie o la mano para trabajar en el músculo. Masajear estos puntos de presión ayuda a reducir el estrés y las migrañas.",
        precio: "Precio : $ 1.800,-",
        duration: 60,
        foto: "/images/tatamientos/08-reflexologia.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 17:00 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 8,
        url: "anti-acne",
        nombre: "Anti Acne",
        category: "Faciales",
        descripción: "Usando un sistema de oxigenoterapia diseñado para tratar problemas de piel grasa o acné, este tratamiento facial incluye limpieza profunda, extractos herbales de curación personalizados y una exfoliación glicólica o alfa-hidroxi para combatir las imperfecciones de la piel. La mayor mejora proviene de estimular las propiedades de autocuración del cuerpo para que se pueda lograr una piel clara y duradera. Se incluirá un régimen de cuidado de la piel personalizado para el cuidado en el hogar.",
        precio: "Precio : $1.000,-",
        duration: 40,
        foto: "/images/tatamientos/09-anti-acne.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 16:40 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 9,
        url: "piel-sensible",
        nombre: "Piel Sensible",
        category: "Faciales",
        descripción: "Un tratamiento facial personalizado con vitamina C que repara y previene signos visibles de vejez y daños en la piel. Beneficiando a todos los tipos de piel, se utilizan cantidades concentradas de vitamina C junto con un tónico, una máscara y un humectante especiales para mejorar la vitalidad de la piel, crear células nuevas y aumentar la humectación y la oxigenación.",
        precio: "Precio : $1.000,-",
        duration: 40,
        foto: "/images/tatamientos/10-piel-sensible.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 16:40 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"

    },
    {
        id: 10,
        url: "anti-age",
        nombre: "Anti Age",
        category: "Faciales",
        descripción: "Después de evaluar sus necesidades individuales de cuidado de la piel, la cara se limpia, tonifica, trata con enzimas naturales totalmente especiales, se vaporiza y se purga de impurezas. Usando aceites de aromaterapia, se masajean la cara, el cuello y las manos, llevándote a kilómetros de distancia a un mar de tranquilidad. Luego se prodiga la cara con una máscara combinada personalizada y, finalmente, una crema hidratante rejuvenecedora. La piel queda con más elasticidad y vitalidad, brillando por dentro y por fuera.",
        precio: "Precio : $1.000,-",
        duration: 40,
        foto: "/images/tatamientos/11-anti-age.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 16:40 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 11,
        url: "tratamiento-piel-de-espalda",
        nombre: "Tratamiento piel de espalda",
        category: "Corporales",
        descripción: "Un tratamiento de espalda personalizado y efectivo para aquellos que son propensos al acné de espalda y problemas de la piel. Este tratamiento especial comienza con una exfoliación suave y una limpieza profunda de los poros. Usando un gel refrescante especialmente formulado a partir de hierbas curativas naturales, la espalda se limpiará y tonificará, y se tratará con una mascarilla mezclada personalizada. Su piel emergerá notablemente más clara y más vibrante.",
        precio: "Precio : $1.200,-",
        duration: 40,
        foto: "/images/tatamientos/12-tratamiento-piel-de-espalda.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 16:40 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 12,
        url: "drenaje-linfatico",
        nombre: "Drenaje linfático",
        category: "Corporales",
        descripción: "Delicado y placentero, con grandes beneficios, esta técnica de drenaje linfático ayuda a mejorar la circulación para reducir la retención de liquidos, sintiéndote más ligero y libre de toxinas.",
        precio: "Precio : $1.600,-",
        duration: 60,
        foto: "/images/tatamientos/13-drenaje-linfatico.jpg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 17:00 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 13,
        url: "maderoterapia",
        nombre: "Maderoterapia",
        category: "Corporales",
        descripción: "Es un tratamiento que se basa en un masaje realizado a través del uso de instrumentos de madera de diferentes formas, tamaños y diseños. Estos instrumentos se adaptan a distintas partes del cuerpo consiguiendo la estimulación corporal.Mediante este método natural se puede ayudar a reducir los niveles de estrés, activar la renovación celular, reafirmar, tonificar el cuerpo, tratar la celulitis reduciendo los depósitos de grasa, modelar el contorno corporal y combatir diferentes dolores como el de espalda o cuello.",
        precio: "Precio : $1.200,-",
        duration: 60,
        foto: "/images/tatamientos/14-maderoterapia.jpg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 17:00 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 14,
        url: "manicure-classic",
        nombre: "Manicure classic",
        category: "Uñas",
        descripción: "Manicure + Color + Humectación + Fortalecedor",
        precio: "Precio : $500,-",
        duration: 40,
        foto: "/images/tatamientos/15-manicure-classic.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 16:40 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 15,
        url: "manicure-premium",
        nombre: "Manicure premium",
        category: "Uñas",
        descripción: "Manicure + Color + Humectación + Fortalecedor + Baño de Parafina",
        precio: "Precio : $700,-",
        duration: 40,
        foto: "/images/tatamientos/16-manicure-premium.png",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 16:40 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    },
    {
        id: 16,
        url: "spa-pies",
        nombre: "Spa pies",
        category: "Uñas",
        descripción: "Pedicure + Hidromasaje + Color",
        precio: "Precio : $700,-",
        duration: 40,
        foto: "/images/tatamientos/17-spa-pies.jpeg",
        dia: "Lunes 02/12/2019",
        hora: "16:00 - 16:40 hs.",
        fotoProfesional: "/images/user-2.svg",
        nombreProfesional: "Luciana García"
    }
];


// ************ Function to Read an HTML File ************

function readHTML (fileName) {
    let filePath = path.join(__dirname, `/../views/${fileName}.html`);
    let htmlFile = fs.readFileSync(filePath, 'utf-8');
    return htmlFile;
}

const productController = {
    list: (req, res) => {
        res.render('productList', {detalleProducto: detalleProductos});
    },

    detailId: (req, res) => {
        
        let id = req.params.idProduct;
        res.render('productDetail', {detalleProducto: detalleProductos[id]});
    },
};

module.exports = productController