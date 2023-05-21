const products_data = [
    {
        id: 1,
        images: ["http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff", "http://dummyimage.com/120x100.png/dddddd/000000"],
        category: "notebooks",
        title: "Notebook 1 Enova Tigerlake 14 Intel Core i5 8GB de RAM 480GB SSD Wind10 Home Gris",
        price: 129999,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu. Mauris augue neque gravida in fermentum et.",
        stock: 10
    },
    {
        id: 2,
        images: ["http://dummyimage.com/146x100.png/5fa2dd/ffffff", "http://dummyimage.com/120x100.png/dddddd/000000", "http://dummyimage.com/120x100.png/dddddd/000000"],
        category: "notebooks",
        title: "Notebook 2 Iqual Nq1 Intel Celeron N4020 4gb 128gb Ssd Windows",
        price: 110990,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu. Mauris augue neque gravida in fermentum et.",
        stock: 10
    },
    {
        id: 3,
        images: ["http://dummyimage.com/120x100.png/dddddd/000000", "http://dummyimage.com/232x100.png/5fa2dd/ffffff", "http://dummyimage.com/232x100.png/5fa2dd/ffffff"],
        category: "notebooks",
        title: "Notebook 3 Dell Latitude 3410 Intel Core i3 10ma Gen 4GB 500GB Windows 10",
        price: 119999,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu. Mauris augue neque gravida in fermentum et.",
        stock: 10
    },
    {
        id: 4,
        images: ["http://dummyimage.com/244x100.png/dddddd/000000", "http://dummyimage.com/232x100.png/5fa2dd/ffffff", "http://dummyimage.com/177x100.png/cc0000/ffffff"],
        category: "notebooks",
        title: "Notebook 4 Enova 14 Ci3 1005g1 Ram 8gb Ssd 240gb Win 10pro",
        price: 159999,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu. Mauris augue neque gravida in fermentum et.",
        stock: 10
    },
    {
        id: 5,
        images: ["http://dummyimage.com/232x100.png/5fa2dd/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff", "http://dummyimage.com/120x100.png/dddddd/000000"],
        category: "notebooks",
        title: "Notebook 5 Noblex 15.6” Full HD Intel Core i3 4GB/256GB SSD",
        price: 249999,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu. Mauris augue neque gravida in fermentum et.",
        stock: 10
    },
    {
        id: 6,
        images: ["http://dummyimage.com/177x100.png/cc0000/ffffff", "http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff"],
        category: "notebooks",
        title: "Notebook 6 Acer Swift 5 Core I5 14 Full Hd 8gb 512gb Ssd Win10",
        price: 339999,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu. Mauris augue neque gravida in fermentum et.",
        stock: 10
    },
    {
        id: 7,
        images: ["http://dummyimage.com/177x100.png/cc0000/ffffff", "http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff"],
        category: "tablets",
        title: "Tablet 7 Pc 7 Pulgadas Iqual T07w1 2gb Ram Quad Core 16gb Bt",
        price: 18299,
        description: "Tablet Pc 7 Pulgadas Iqual 2gb Ram 16gb Bluetooth Quad Core T07w1 • Disfrutá de tus películas y apps en esta nueva tablet iQual de 7 pulgadas. • Las mejores funciones con el sistema operativo Android 8.1 • Pantalla de alta resolución multitouch, potenciada por 4 núcleos. • Con cámaras tanto en el frente como atrás, captura toda tu vida. • Ranura para memoria microSD para almacenamiento extra. • Incluye funda de silicona para protegerla de golpes y polvo. - Pantalla: 7 pulgadas LED 1024 x 600 px - Procesador: Quad-Core Cortex 1.2 GHz - Sistema operativo: Android 8.1 - Memoria RAM: 2 GB - Almacenamiento: 16 GB Flash - Expansión de almacenamiento: microSD de hasta 128 GB - Cámaras: -- Trasera: 2 MPx -- Frontal: 0,3 MPx - Conectividad: WiFi 802.11 b/g/n, Bluetooth v4.0 - Puertos: -- Conector micro USB de carga -- Conector miniplug 3.5 mm audio/micrófono - Batería: Ion de litio 2200 mAh integrada - Contenido de la caja: -- Tablet iQual T07w1 -- Cargador USB -- Cable USB a microUSB -- Funda de silicona -- Film protector de pantalla",
        stock: 10
    },
    {
        id: 8,
        images: ["http://dummyimage.com/177x100.png/cc0000/ffffff", "http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff"],
        category: "tablets",
        title: "Tablet 8 Wifi 7 PuLG Iqual T7w 16gb Android + Auriculares E92v",
        price: 29999,
        description: "TABLET PC WIFI 7 pulgadas IQUAL T7W 1GB 16GB ANDROID + AURICULARES DE VINCHA IQUAL E92V CON MICRÓFONO T7W+E92V TABLET • Disfrutá de tus películas y apps en esta nueva tablet iQual de 7. • Las mejores funciones con el sistema operativo Android 8.0 Oreo. • Pantalla de alta resolución multitouch, potenciada por 4 núcleos. • Con cámaras tanto en el frente como atrás, captura toda tu vida. • Ranura para memoria microSD para almacenamiento extra. • Incluye funda de silicona para protegerla de golpes y polvo. - Pantalla: 7 LED 1024 x 600 px - Procesador: Quad-Core Cortex A7 1.2 GHz - Sistema operativo: Android 8.0 Oreo - Memoria RAM: 1 GB - Almacenamiento: 16 GB Flash - Expansión de almacenamiento: microSD de hasta 128 GB - Cámaras: -- Trasera: 2 MPx -- Frontal: 0,3 MPx - Conectividad: WiFi 802.11 b/g/n, Bluetooth v4.0 - Puertos: -- Conector microUSB de carga -- Conector miniplug 3.5 mm audio/micrófono - Batería: Ion de litio 2200 mAh integrada - Contenido de la caja: -- Tablet iQual T7W -- Cargador USB -- Cable USB a microUSB -- Funda de silicona",
        stock: 10
    },
    {
        id: 9,
        images: ["http://dummyimage.com/177x100.png/cc0000/ffffff", "http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff"],
        category: "tablets",
        title: "Tablet 9 Pcbox Flash Pcb-t104+ 10.1 32gb Azul Y 2gb De Memoria Ram",
        price: 56249,
        description: "PCBOX 10 FLASH PLUS 2GB RAM 32GB ANDROID 10 (PCB-T104+) Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, compacto y portátil es la combinación perfecta de rendimiento y versatilidad. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones bluetooth, wi-fi, micro-usb te permiten potenciar sus funciones al máximo. Modelo PCB-T104+ Sistema Operativo Android 10 Procesador Mediatek MTK8167B Quad Core 1,3 GHz ARM Cortex-A35, 64bit Memoria 2GB Almacenamiento 32GB Pantalla multi touch 10.1” 1280×800 IPS Cámara frontal 0,3MP Cámara trasera 2 MP Puerto Micro USB Audio Jack 3,5mm Bluetooth 4.1 Wi Fi 802.11 b/g/n Batería 3.7 / de 5.000mAh Lector de Tarjetas Micro SD hasta 128GB Dimensiones 243.2 x 172.2 x 10 mm Color: azul oscuro",
        stock: 10
    },
    {
        id: 10,
        images: ["http://dummyimage.com/177x100.png/cc0000/ffffff", "http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff"],
        category: "tablets",
        title: "Tablet 10 Alcatel 1T7 7 16Gb 1Gb De Memoria Ram Negra",
        price: 23999,
        description: "TABLET 1T7 U3A7 7P ALCATEL - Pantalla TN 7 (1024x600 pixels) 16:9 - Procesador MT8167 QuadCore 4xCortex-A7@ 1.3GHz - Memoria RAM 1GB - Almacenamiento interno 16GB ROM - Expandible hasta 128GB con Micro SD - Android 10 (Go edition) - Cámara Trasera 2MP, FF - Cámara Frontal VGA, FF - Reproducción de video 720P - Wi-Fi 802.11 b/g/n - Bluetooth 4.2 - Micro USB 2.0 high speed - 3.5mm jack - Sensor: Accelerometer (G sensor) - Formatos reproducción de audio: AAC, AMR, AWB, MP3, OGG, WAV - Google Assistant - Batería 2580mAh - Medidas: 189.5x111x9.15mm - Peso: 245gr - Color Negro - Modelo 1T7 U3A7 - Garantía fabricante 12 meses - Origen China",
        stock: 10
    },
    {
        id: 11,
        images: ["http://dummyimage.com/177x100.png/cc0000/ffffff", "http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff"],
        category: "tablets",
        title: "Tablet 11 Telefono 3g Ips 7 Pulgadas Iqual T7g 1gb 16gb + Funda",
        price: 22999,
        description: "TABLET + TELÉFONO 3G DE 7 IQUAL T7G CON SISTEMA ANDROID 8.0 OREO IQT7G • Disfrutá de tus películas y apps en esta nueva tablet iQual de 7. • Con su conectividad 3G puede utilizarse como tablet o smartphone. • También puedes disfrutar de acceso a internet aún sin redes WiFi. • Las mejores funciones con el sistema operativo Android 8.0 Oreo. • Pantalla IPS de alta resolución multitouch, con los más vivos colores. • Con cámaras tanto en el frente como atrás, captura toda tu vida. • Incluye funda de silicona para protegerla de golpes y polvo. - Pantalla: 7 LED IPS 1024 x 600 px - Procesador: Quad-Core Cortex A7 1.3 GHz - Sistema operativo: Android 8.0 Oreo - Memoria RAM: 1 GB - Almacenamiento: 16 GB Flash - Expansión de almacenamiento: microSD de hasta 128 GB - Cámaras: -- Trasera: 2 MPx -- Frontal: 0,3 MPx - Conectividad: -- Redes 3G GSM (Dual SIM) -- WiFi 802.11 b/g/n -- Bluetooth v4.0 - Puertos: -- Conector microUSB de carga -- Conector miniplug 3.5 mm audio/micrófono - Batería: Ion de litio 2500 mAh integrada - Contenido de la caja: -- Tablet iQual T7G -- Cargador USB -- Cable USB a microUSB -- Funda de silicona -- Film protector de pantalla",
        stock: 10
    },
    {
        id: 12,
        images: ["http://dummyimage.com/177x100.png/cc0000/ffffff", "http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff"],
        category: "tablets",
        title: "Tablet 12 Infantil INNJOO 1GB RAM/16GB/7 Blanca con Marco Protector Verde K701",
        price: 36019,
        description: "La tablet K701 tiene un sistema operativo Android 7.1, un procesador RK3126C Quad-core 1.3GHZ, el almacenamiento es de 1GB + 16GB, memoria ampliable a 16-128GB, el almacenamiento satisface sus requisitos diarios. ¡Aviso! No es adecuado para juegos grandes. -?Carcasa de silicona y pantalla G+P?: el toque de la cubierta posterior de plástico ABS, para brindarle la mejor experiencia. La pantalla 7” con resolución de 1024 * 600 que permanece clara bajo cualquier luz. Cámara delantera de 0.3mpx, posterior de 2mpx. Además añade una funda de silicona verde para la protección de la Tablet contra golpes o caídas. -?Manténgase conectado?: 2.4G WiFi garantiza que puede acceder a la red en cualquier momento donde haya una señal de red. Bluetooth admite una variedad de conexiones. Múltiples métodos de conexión aseguran la versatilidad de la tableta. -?Batería de alta capacidad?: batería incorporada de alta capacidad de 2,500 mAh, duración de la batería de hasta 5-6 horas, proporciona una vida útil de la batería de larga duración, evite cargarse todo el tiempo. La mejor opción para que los niños vean videos, los estudiantes aprendan, trabajen en familia o jueguen",
        stock: 10
    },
    {
        id: 13,
        images: ["http://dummyimage.com/177x100.png/cc0000/ffffff", "http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff"],
        category: "homeoffice",
        title: "ESCRITORIO PLEGABLE - TINY DESK",
        price: 42690,
        description: "Es portátil, dado que es liviano y además el diseño incluye una manija para agarrarlo de manera segura (Sólo en la versión Guatambú). Posee un compartimento universal para poder poner el celu mientras lo usas o haces una videollamada (Sólo en la versión Guatambú). Hecho en madera de Guatambú (madera de reforestación sustentable) y terminado con un satinado en pintura transparente para su protección. Posee una estructura de hierro diseñada con un dispositivo de trabas super resistente (aguanta el mismo peso que cualquier escritorio estándar. Estructura de hierro sistema de trabas super resistente.",
        stock: 10
    },
    {
        id: 14,
        images: ["http://dummyimage.com/177x100.png/cc0000/ffffff", "http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff"],
        category: "homeoffice",
        title: "STANDING DESK",
        price: 25790,
        description: "Estar sentado tantas horas, no solo afecta tu salud, sino que también genera bajos niveles de rendimiento y afecta el mood en el cuál trabajas. Está comprobado que alternar entre trabajar sentado y parado a lo largo de la jornada laboral ayuda a mejorar la productividad y la creatividad. El Standing desk de WooX permite tranformar cualquier escritorio o mesa en un escritorio para trabajar parado. Luego de usarlo, podes desarmarlo y guardarlo.",
        stock: 10
    },
    {
        id: 15,
        images: ["http://dummyimage.com/177x100.png/cc0000/ffffff", "http://dummyimage.com/154x100.png/cc0000/ffffff", "http://dummyimage.com/146x100.png/5fa2dd/ffffff"],
        category: "homeoffice",
        title: "MESA RATONA PLEGABLE",
        price: 41690,
        description: "La mesa ratona plegable de WooX te ayuda a optimizar el espacio de tu casa, dado que se puede guardar debajo de la cama o del sillón cuando lo necesites (ej. Para liberar espacio en el living para hacer una clase virtual de gym/yoga). Es portátil, dado que es liviana y además el diseño incluye una manija para agarrarla de manera segura. Hecha en madera de Guatambú (madera de reforestación sustentable) y terminada con un satinado en pintura transparente para su protección. Posee una estructura de hierro diseñada con un dispositivo de trabas super resistente. ",
        stock: 10
    },
]


export default products_data