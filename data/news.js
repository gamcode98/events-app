const news = [
  {
    title: 'Carnaval de Jujuy 2023: cuándo es el desentierro del diablo, qué días son feriados y cómo comprar las entradas para el show de Los Tekis',
    content: ['El Ministerio de Cultura y Turismo de la provincia de Jujuy publicó el cronograma de actividades a desarrollarse en el marco de las celebraciones por carnaval 2023.', 'Con el anticipo más resonante pautado para el 16 de febrero, fecha en la que se dará paso al "Jueves de Comadres", el sábado 18 será turno del clásico "Desentierro del Diablo", llamado Coludo o Pujllay.', '"La tradición tiene reminiscencias indígenas, españolas y criollas. Además, por ser la Quebrada de Humahuaca paso obligado hacia el Perú y Bolivia, ha asimilado la música y algunas características de esos países", destaca la cartera de turismo provincial en su sitio web.'],
    images: ['carnaval-1.png', 'carnaval-2.png'],
    date: '15 de Febrero de 2023 - 10:39',
    author: 'Federico Franco',
    category: ['Cultura', 'Turismo'],
    url: ''
  },
  {
    title: 'Día de la Pachamama: ¿Dónde y cómo se celebra?',
    content: ['Una costumbre ancestral cargada de creencias, desafíos y rituales comienza este lunes 1° de agosto, y los jujeños ya se preparan para agradecer y pedir.', 'En el noroeste argentino, especialmente en Jujuy y Salta, tradicionalmente se celebra el Día de la Pachamama y a nivel latinoamericano en Bolivia, Perú y el norte de Chile. Esta fecha simboliza un nuevo comienzo para muchos, la oportunidad de agradecer y la de pedir buenos augurios.', 'La palabra Pachamama surge de la unión de dos vocablos quechuas: "pacha" - espacio/tiempo -, que significa universo, mundo, lugar; y de "mama", que quiere decir madre. Para los pueblos originarios quechuas, la Madre Tierra era la deidad máxima de los cerros peruanos, bolivianos y del noroeste Argentino.'],
    date: '29 de julio de 2022 - 07:20',
    author: 'Federico Franco',
    images: ['pachamama-1.webp', 'pachamama-2.webp'],
    category: ['Cultura'],
    url: ''
  },
  {
    title: 'Fiesta Nacional de los Estudiantes 2023: 20 al 30 de septiembre',
    content: ['El Ministerio de Educación difundió el Anuario Escolar 2023, donde se confirma la fecha de la Fiesta Nacional de los Estudiantes.', 'Finalmente se conoció el Anuario Escolar 2023 del Ministerio de Educación de la provincia de Jujuy, donde se confirma que la Fiesta Nacional de los Estudiantes será del 20 al 30 de septiembre.', 'Según indica el escrito, las actividades áulicas durante esa semana se ajustarán al cronograma que establezca la cartera educativa para tal fecha y se conocerá una vez que se acerque la celebración de los chicos.'],
    date: '10 de enero de 2023 - 15:34',
    author: 'Ramiro Menacho',
    images: ['fne-1.webp', 'fne-2.webp'],
    category: ['Entretenimiento', 'Cultura'],
    url: ''
  },
  {
    title: 'Hoy se realizará la Expo Educativa Provincial 2022 en Jujuy',
    content: ['Los Institutos de Educación Superior de la provincia promocionarán su oferta académica a alumnos de quinto año del secundario.', 'Este viernes en el Instituto de Educación Superior N°11 (calle Alvear N°1145) de 9 a 20 horas se llevará a cabo la Expo Educativa Provincial 2022 informó el Ministerio de Educación.', 'El evento tiene como objetivo principal proporcionar una información completa y actualizada sobre la oferta educativa de los Institutos de Educación Superior de gestión estatal y privada de la provincia, teniendo en cuenta que en los últimos años se ha modificado la oferta tanto de formación docente como de formación técnica, adaptándose a los nuevos contextos.'],
    date: '11 de noviembre de 2022 - 07:05',
    author: 'Federico Franco',
    images: ['expo-educativa-1.webp', 'expo-educativa-2.webp'],
    category: ['Educación'],
    url: ''
  },
  {
    title: 'Palpalá: realizarán la feria del libro "Artes en Letras"',
    content: ['Desde el 19 hasta el 23 de abril se llevará a cabo esta propuesta en la Casa de la Historia y Cultura de la localidad de Palpalá. La entrada será gratuita.', 'El martes desde las 19 en la Casa de la Historia y Cultura de la ciudad de Palpalá iniciará una nueva edición de la feria del libro llamada "Artes en Letras". El evento será hasta el sábado 23 de abril con entrada libre y gratuita, y se planificaron diversas actividades para esa semana.', 'El día de apertura contará con la presencia de varios escritores reconocidos de Jujuy informaron desde la Municipalidad de Palpalá que organiza el evento. La Casa de la Historia y Cultura está ubicada en avenida Congreso esquina Río Chubut.'],
    date: '14 de abril de 2022 - 21:42',
    author: 'Federico Franco',
    images: ['feria-del-libro-1.webp', 'feria-del-libro-2.webp'],
    category: ['Educación', 'Cultura'],
    url: ''
  },
  {
    title: 'Ciudad Cultural: realizarán la Expo Policial',
    content: ['El 27, 28 y 29 de julio de 2022 se realizará la Expo Policial en la Ciudad Cultural. Será de 10 a 20 con entrada libre y gratuita.', 'En el marco de la celebración por el 177° aniversario de la Policía de la Provincia, este miércoles 27, jueves 28 y viernes 29 de julio se realizará la 11° edición de la Expo Policial con entrada libre y gratuita. El evento tendrá lugar en la Ciudad Cultural en horario corrido desde las 10 de la mañana hasta las 8 de la noche e invitan a toda la gente a participar.', 'En el lugar habrá diversos espectáculos, exhibición del grupo especial K9, bici policías, motorizados, retreta de la banda de música Tacita de Plata y varios grupos invitados para todos los gustos.'],
    date: '26 de julio de 2022 - 16:58',
    author: 'Ramiro Menacho',
    images: ['expo-policial-ciudad-cultural-1.webp', 'expo-policial-ciudad-cultural-2.webp'],
    category: ['Entretenimiento'],
    url: 'https://www.todojujuy.com/jujuy/ciudad-cultural-realizaran-la-expo-policial-n222664'
  },
  {
    title: 'Inició la Expo Productiva 2021 en San Salvador de Jujuy',
    content: ['Hoy y mañana a partir de las 9 se realiza la Expo productiva 2021 en Ciudad Cultural. Habrá más de 400 productores, emprendedores y floricultores de Jujuy.', 'Desde las 9 y hasta las 23hs en el predio de Ciudad Cultural se realizará una nueva edición de la Expo Productiva. El encuentro será hoy y mañana a partir de las 12hs en el cual participarán más de 400 productores, emprendedores y floricultores de la provincia de Jujuy.'],
    date: '11 de diciembre de 2021 - 10:14',
    author: 'Ramiro Castillo',
    images: ['expo-productiva-1.webp', 'expo-productiva-2.webp'],
    category: ['Entretenimiento'],
    url: 'https://www.todojujuy.com/jujuy/inicio-la-expo-productiva-2021-san-salvador-jujuy-n212905'
  },
  {
    title: 'Expo Tattoo Jujuy: será este finde y tendrá un fin solidario',
    content: ['Para ingresar a la Expo Tattoo se deberá llevar un alimento no perecedero que irá destinado a comedores jujeños que ayudan a pulmón a los que menos tienen.', 'Este viernes, sábado y domingo de 13 a 21 horas se llevará a cabo la Expo Tattoo "Inkoya" en la provincia de Jujuy y tendrá una propuesta de solidaridad, debido a que para ingresar al evento se le pedirá al público en general que lleve un alimento no perecedero.', 'Todo lo recaudado será donado a comedores comunitarios que trabajan en barrios carenciados y asentamientos conteniendo a niños, jóvenes y adultos que se encuentran en situación de vulnerabilidad y sufren de pobreza.'],
    date: '15 de diciembre de 2021 - 18:13',
    author: 'Raul Gonzales',
    images: ['expo-tattoo-1.webp', 'expo-tattoo-2.jpg'],
    category: ['Entretenimiento'],
    url: 'https://www.todojujuy.com/jujuy/expo-tattoo-jujuy-sera-este-finde-y-tendra-un-fin-solidario-n213087'
  },
  {
    title: 'Abra Pampa: realizarán la tradicional feria de Pascua',
    content: ['El sábado 16 y domingo 17 realizarán las tradicional feria de pascua en Abra Pampa que congrega a una gran cantidad de comerciantes.', 'Abra Pampa tendrá su tradicional Feria de las Pascuas este sábado 16 y domingo 17 de abril.', 'Desde el municipio Abra pampeño adelantaron que si se realizará la tradicional feria de la Pascua edición 2022 esta vez en su lugar tradicional cercano al colegio polimodal N°2.'],
    date: '04 de abril de 2022 - 08:56',
    author: 'Carlos Sanchez',
    images: ['huevos-pascua-2.jpg', 'tradicional-feria-pascua-1.webp'],
    category: ['Entretenimiento'],
    url: 'https://www.todojujuy.com/jujuy/abra-pampa-realizaran-la-tradicional-feria-pascua-n217546'
  },
  {
    title: 'San Salvador de Jujuy: exitosa feria de invierno',
    content: ['Miles de turistas visitan diariamente la Vieja Estación de San Salvador de Jujuy para disfrutar de la Feria de Invierno en vacaciones.', 'En medio del receso escolar, la Municipalidad de San Salvador de Jujuy habilitó una Feria de Invierno en las inmediaciones de la Vieja Estación de trenes de la ciudad, donde miles de personas circulan diariamente.', 'Estamos con las expectativas cumplidas, por la mañana no sale tanta gente pero por la tarde se mueve mucho con gente que se acerca a conocer, ver y comprar, explicó a TodoJujuy.com el director de Espacios Culturales, Sergio Chacón.'],
    date: '21 de julio de 2022 - 20:37',
    author: 'Ramiro Menacho',
    images: ['feria-invierno-1.webp', 'feria-invierno-2.webp'],
    category: ['Entretenimiento'],
    url: 'https://www.todojujuy.com/jujuy/san-salvador-jujuy-exitosa-feria-invierno-n222480'
  },
  {
    title: 'Día del Niño: Hoy inicia la feria en Av. 19 de Abril',
    content: ['El domingo es un día especial, porque celebramos el “Día del Niño” y todos seguramente vamos a tratar de darle un presente a nuestros pequeños, aunque los precios están carísimos, pero haremos el esfuerzo.', 'Hablamos en lo que se ha transformado en una costumbre para ésta y otras fechas en la zona de la Terminal de Omnibus y en la playa de estacionamiento de Avenida 19 de Abril. Juguetes y juguetes para los más chicos y también para los más grandes. Los precios más baratos que en una juguetería del centro pero no así la calidad. Cientos de vendedores ambulantes hicieron una inversión para poder ganar algunos pesos, pero tendrán que estar todo el fin de semana en esta feria propuesta por el municipio capitalino.'],
    date: '10 de agosto de 2012 - 13:55',
    author: 'Facundo Estrada',
    images: ['la-feria-del-dia-del-nino-1.webp', 'la-feria-del-dia-del-nino-2.jpeg'],
    category: ['Entretenimiento'],
    url: 'https://www.todojujuy.com/jujuy/dia-del-nino-hoy-inicia-la-feria-av-19-abril-n724'
  },
  {
    title: 'Feria de Ofrendas hasta el 1° de noviembre',
    content: ['La tradicional Feria de Ofrendas se realiza desde ayer y hasta el 1° de noviembre en el Centro Cultural Manuel Belgrano con más de 120 puestos.', 'Inició la tradicional Feria de Ofrendas en el Centro Cultural Manuel Belgrano, ex Vieja Estación de Trenes en San Salvador de Jujuy con más de 120 puestos de productos y alimentos.'],
    date: '30 de octubre de 2022 - 09:59',
    author: 'Maria Eugenia Burgos',
    images: ['feria-ofrendas-1.webp', 'feria-ofrendas-2.jpeg'],
    category: ['Tradición', 'Cultura'],
    url: 'https://www.todojujuy.com/jujuy/feria-ofrendas-el-1-noviembre-n226919'
  }
]

module.exports = news
