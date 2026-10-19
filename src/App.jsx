import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import "./global.css";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import {DetallePage} from "./pages/detalleProduct/DetallePage"


/* Categorías y Destacados principales */
import RealHyaluron from "./assets/skincare/realhyaluron/Principal.webp";
import LacticAcid from "./assets/skincare/lacticacid/Principal.jpg";
import pdrnSerum from "./assets/skincare/pdrnserum/Principal.jpg";
import GelMoisturizer from "./assets/skincare/gelmoisturizer/Principal.jpg";
import SkinCT from "./assets/skincare/anuaserum/Principal.webp";
import MakeUpCT from "./assets/makeup/Categoria.jpg";
import HairCareCT from "./assets/haircare/Categoria.jpg";
import SunCareCT from "./assets/suncare/Categoria.jpg";

/* Productos - Skin Care */
import AnuaSecond from "./assets/skincare/anuaserum/Secundaria.webp"
import AnuaTercia from "./assets/skincare/anuaserum/Terciaria.webp"

import pdrnSecond from "./assets/skincare/pdrnserum/Secundaria.webp"
import pdrnTercia from "./assets/skincare/pdrnserum/Terciaria.webp"

import LacticSecond from "./assets/skincare/lacticacid/Secundaria.webp"
import LacticTercia from "./assets/skincare/lacticacid/Terciaria.webp"

import GelSecond from "./assets/skincare/gelmoisturizer/Secundaria.webp"
import GelTercia from "./assets/skincare/gelmoisturizer/Terciaria.webp"

import GlowSerum from "./assets/skincare/serumforradiant/Principal.webp";
import GlowSecond from "./assets/skincare/serumforradiant/Secundaria.webp"
import GlowTercia from "./assets/skincare/serumforradiant/Terciaria.webp"

import Moisturizer from "./assets/skincare/moisturizer/Principal.webp";
import MoisSecond from "./assets/skincare/moisturizer/Secundaria.jpeg"
import MoisTercia from "./assets/skincare/moisturizer/Terciaria.jpeg"

import RealComplexion from "./assets/skincare/realcomplexionhyaluron/Principal.webp";
import RealSecond from "./assets/skincare/realcomplexionhyaluron/Secundaria.webp"
import RealTercia from "./assets/skincare/realcomplexionhyaluron/Terciaria.webp"

import SetStep from "./assets/skincare/set3-step/Principal.webp";
import SetSecond from "./assets/skincare/set3-step/Secundaria.webp"
import SetTercia from "./assets/skincare/set3-step/Terciaria.avif"

/* Productos - Make up */
import MultiStick from "./assets/makeup/multistick/Principal.jpg";
import MultiSecond from "./assets/makeup/multistick/Secundaria.jpg";
import MultiTercia from "./assets/makeup/multistick/Terciaria.jpeg";


import MatteLips from "./assets/makeup/mattelips/Principal.jpg";
import MatteTercia from "./assets/makeup/mattelips/Terciaria.webp";

import BroncePowder from "./assets/makeup/broncepowder/Principal.jpg";
import BronceSecond from "./assets/makeup/broncepowder/Secundaria.webp";
import BronceTercia from "./assets/makeup/broncepowder/Terciaria.webp";

import GlowPlay from "./assets/makeup/glowplay/Principal.jpg";
import GlowPlaySecond from "./assets/makeup/glowplay/Secundaria.webp";
import GlowPlayTercia from "./assets/makeup/glowplay/Terciaria.webp"

import HighLigth from "./assets/makeup/higthlight/Principal.jpg";
import HightSecond from "./assets/makeup/higthlight/Secundaria.avif";
import HightTercia from "./assets/makeup/higthlight/Terciaria.avif";

import PowderKiss from "./assets/makeup/powderkiss/Principal.jpg";
import PowerSecond from "./assets/makeup/powderkiss/Secundaria.webp";
import PowerTercia from "./assets/makeup/powderkiss/Terciaria.webp";

/* Productos - Hair Care */
import KitWella from "./assets/haircare/kitwella/Principal.jpg";
import KitSecond from "./assets/haircare/kitwella/Secundaria.webp";
import KitTercia from "./assets/haircare/kitwella/Terciaria.webp";

import Ultimate from "./assets/haircare/ultimate/Principal.jpg";
import UltimateSecond from "./assets/haircare/ultimate/Secundaria.webp";
import UltimateTercia from "./assets/haircare/ultimate/Terciaria.webp";

import ColorMotion from "./assets/haircare/colormotion/Principal.jpg";
import ColorSecond from "./assets/haircare/colormotion/Secundaria.png";
import ColorTercia from "./assets/haircare/colormotion/Terciaria.png";

import OilReflection from "./assets/haircare/oilreflection/Principal.jpg";
import OilSecond from "./assets/haircare/oilreflection/Secundaria.webp";
import OilTercia from "./assets/haircare/oilreflection/Terciaria.webp";

/* Productos - Sun Care */
import SunProtection from "./assets/suncare/sunprotection/Principal.jpg";
import SunSecond from "./assets/suncare/sunprotection/Secundaria.webp";
import SunTercia from "./assets/suncare/sunprotection/Terciaria.webp";

import Anthelios from "./assets/suncare/anthelios/Principal.jpg";
import AntheSecond from "./assets/suncare/anthelios/Secundaria.png";
import AntheTercia from "./assets/suncare/anthelios/Terciaria.png";

import VitaminaC from "./assets/suncare/vitaminac/Principal.jpg";
import VitaminSecond from "./assets/suncare/vitaminac/Secundaria.avif";
import VitaminTercia from "./assets/suncare/vitaminac/Terciaria.avif";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import { CarritoPage } from "./pages/Carrito/CarritoPage";

function App() {
  const mockProductos = [
    {
      id: 7,
      titulo: "Real Complexion Hyaluron",
      marca: "HANSKIN",
      precio: "13990",
      image: RealHyaluron,
    },
    {
      id: 3,
      titulo: "Lactic Acid",
      marca: "THE ORDINARY",
      precio: "25990",
      image: LacticAcid,
    },
    {
      id: 2,
      titulo: "PDRN Sérum «Exosome Shot» de Pink Collagen",
      marca: "DE PINK COLLAGEN",
      precio: "7990",
      image: pdrnSerum, 
    },
    {
      id: 4,
      titulo: "Hidra Intense Gel Moisturizer",
      marca: "SKINTIFIC",
      precio: "6500",
      image: GelMoisturizer,
    },
  ];

  const mockCategorias = [
    { id: 1, title: "SKIN CARE", image: SkinCT },
    { id: 2, title: "MAKE UP", image: MakeUpCT },
    { id: 3, title: "HAIR CARE", image: HairCareCT },
    { id: 4, title: "SUN CARE", image: SunCareCT },
  ];

  const TodosLosProductos = [
    {
      id: 1,
      category: "SKIN CARE",
      titulo: "Anua Serum in Peach Water",
      precio: "4990",
      image: SkinCT,
      imagenes:[SkinCT,AnuaSecond, AnuaTercia],
      descripcion: 'Sérum facial iluminador y perfeccionador de tono con 70% de extracto de melocotón y niacinamida El Peach 70 Niacin Serum de Anua es un tratamiento iluminador de fórmula fluida diseñado para transformar la piel apagada, unificar el tono y suavizar la textura del rostro. Formulado con un 70% de extracto de melocotón fermentado y potenciado con niacinamida, este sérum ayuda a reducir visiblemente las manchas oscuras, las marcas de hiperpigmentación y las irregularidades de tono. Su textura ligera y de rápida absorción aporta una hidratación profunda y constante, revelando un rostro suave, radiante, terso y con un acabado natural de luminosidad saludable ("glass skin")'
    }, 
    {
      id: 2,
      category: "SKIN CARE",
      titulo: "PDRN Sérum «ExosomeShot» de Pink Collagen",
      precio: "7990",
      image: pdrnSerum,
      imagenes: [pdrnSerum, pdrnSecond, pdrnTercia ],
      descripcion: "Medicube PDRN El sérum facial «Exosome Shot» de Pink Collagen es un sérum de última generación diseñado para mejorar su rutina de cuidado de la piel, aportando elasticidad y un brillo radiante. ¡Para una tez visiblemente más luminosa y suave!"
                    +"/nBeneficios principales:"
                    +"/nApto para todo tipo de pieles, incluidas las sensibles, grasas y secas Mejora la textura y el tono de la piel Aumenta significativamente los niveles de hidratación Ingredientes activos: PDRN de salmón: favorece la regeneración de la piel Colágeno de peso molecular ultrabajo: mejora la elasticidad de la piel Niacinamida: Ilumina y unifica el tono de la piel Medicube PDRN El sérum facial Pink Exosome Shot Collagen ofrece una lujosa experiencia de cuidado de la piel que proporciona resultados visibles. Gracias a su fórmula única, penetra profundamente en la piel, mejorando la hidratación y la elasticidad, al tiempo que reduce la aparición de líneas de expresión y la textura irregular. Podrá observar una notable transformación en la salud de su piel, logrando un aspecto luminoso y juvenil."
    },
    {
      id: 3,
      category: "SKIN CARE",
      titulo: "Lactic Acid The Ordinary",
      precio: "25990",
      image: LacticAcid,
      imagenes: [LacticAcid, LacticSecond, LacticTercia],
      descripcion: "Un suero exfoliante con Ácido Láctico al 10% que aporta una exfoliación suave para que la piel se vea y se sienta más suave, saludable y luminosa. Ayuda a mejorar el tono desigual, la textura irregular y las líneas de expresión. El Ácido Láctico es un alfa hidroxiácido que exfolia la piel. Está presente de forma natural en la piel y contribuye a mantener su hidratación. También contiene Pimienta de Tasmania purificada, conocida por reducir los signos de inflamación y sensibilidad que puede llegar a causar la exfoliación. El derivado de la Pimienta de Tasmania es de origen vegetal y varía en color según la estación y el clima, lo que puede alterar el tono del producto. Este suero tiene una textura ligera similar a la de un gel y un pH de 3.6 - 3.8."
    },
    {
      id: 4,
      category: "SKIN CARE",
      titulo: "Hidra Intense Gel Moisturizer",
      precio: "6500",
      image: GelMoisturizer,
      imagenes:[GelMoisturizer, GelSecond, GelTercia],
      descripcion:"Hidratante con 5% de Pantenol como ingrediente principal y textura ligera en gel que calma la piel al aplicarse. Se absorbe 3 veces más rápido gracias a su textura tipo “burst de agua” con INSKIN Permeability Technology. Formulado específicamente para piel grasa y con tendencia acneica, ayudando a reducir inflamación e irritación rápidamente. También contiene Ectoin y Ceramidas que mantienen la piel hidratada, suave y protegida. El 5% de Pantenol calma notablemente la piel y reduce el enrojecimiento."
    },
    {
      id: 5,
      category: "SKIN CARE",
      titulo: "Glow Serum For Radiant Skin",
      precio: "10000",
      image: GlowSerum,
      imagenes: [GlowSerum, GlowSecond, GlowTercia],
      descripcion:"Serum Vitamina C, formula con un cóctel multivitaminico revitalizante y antiedad que protege la piel del estrés oxidativo, infundiendo nueva vitalidad a las células epidérmicas. Mejora visiblemente la luminosidad e hidratacion, a la vez que mejora el tono y la textura de la piel apagada o fatigada"
    },
    {
      id: 6,
      category: "SKIN CARE",
      titulo: "Hydra Moisturizer",
      precio: "17000",
      image: Moisturizer,
      imagenes: [Moisturizer, MoisSecond, MoisTercia],
      descripcion: "Hidratante con 5% de Pantenol como ingrediente principal y textura ligera en gel que calma la piel al aplicarse. Se absorbe 3 veces más rápido gracias a su textura tipo “burst de agua” con INSKIN Permeability Technology. Formulado específicamente para piel grasa y con tendencia acneica, ayudando a reducir inflamación e irritación rápidamente. También contiene Ectoin y Ceramidas que mantienen la piel hidratada, suave y protegida. El 5% de Pantenol calma notablemente la piel y reduce el enrojecimiento."
    },
    {
      id: 7,
      category: "SKIN CARE",
      titulo: "Real Complexion Hyaluron HANSKIN",
      precio: "13990",
      image: RealComplexion,
      imagenes: [RealComplexion, RealSecond, RealTercia],
      descripcion: "HANSKIN Real Complexion Hyaluron El suero de cápsulas rosas es un suero ultrahidratante. Rebosante de cápsulas de aceite rosa, este sérum proporciona una nutrición intensa para un cutis radiante y aterciopelado. ¡Libere el poder de la hidratación!"
                    +"Beneficios clave:"
                    +"Hidratación intensa: Las cápsulas de aceite rosa estallan liberando nutrientes para una hidratación profunda. Resplandor radiante: El extracto de caña de azúcar aporta hidratación y luminosidad. Acondicionamiento de la piel: La vitamina B12 favorece la renovación celular de la piel para un acabado suave. Aumento de volumen y luminosidad: El ácido hialurónico hidrolizado rejuvenece e ilumina. Ingredientes activos: Vitamina B12 Extracto de caña de azúcar Hialuronato sódico Ácido hialurónico hidrolizado Infundido con potentes ingredientes como la vitamina B12 y derivados del ácido hialurónico, HANSKIN Real Complexion Hyaluron El suero de cápsulas rosa proporciona una hidratación sin igual. Dejando su piel radiante, tersa e irresistiblemente suave. No se pierda la oportunidad de conseguir el cutis de sus sueños: ¡haga de este suero un básico en su régimen de belleza hoy mismo!"
    },
    {
      id: 8,
      category: "SKIN CARE",
      titulo: "Set 3-Step Skin Care",
      precio: "70000",
      image: SetStep,
      imagenes: [SetStep, SetSecond, SetTercia],
      descripcion: "Clinique 3‑Step Skin Care Mini Set 2 Locion Exfoliante Clarificadora Clarifying Lotion 2: Fórmula desarrollada por dermatólogos. Nuestra loción exfoliante más vendida para piel Seca y Mixta Seca elimina las células muertas que opacan la piel. Probado dermatológicamente. Sometido a pruebas de alergia. 100% libre de fragancias. Limpiador Facial Líquido All About Clean: El jabón facial líquido desarrollado por dermatólogos es el primer paso para una piel saludable. Suave limpiadora de rápido aclarado y no reseca. Deja la piel fresca. Dermatológicamente probado. Oftalmológicamente probado. Sometido a pruebas de alergia. 100% libre de fragancias Crema Hidratante Ligera Dramatically Different: Loción desarrollada por dermatólogos. Una loción hidratante sedosa y de rápida absorción con urea pura y glicerina pura que fortalece rápidamente la barrera de la piel. Probada dermatológicamente. Sometida a pruebas de alergia. 100% libre de fragancias."
    },

    {
      id: 9,
      category: "MAKE UP",
      titulo: "Monochromatic Multi-Stick",
      precio: "8990",
      image: MultiStick,
      imagenes: [MultiStick,MultiSecond, MultiTercia],
      descripcion:"Una barra, toda la versatilidad. Este maquillaje multistick de crema a polvo funciona horas extras como sombra de ojos, lápiz labial y rubor, brindando un hermoso toque de color donde lo desee. La fórmula nutritiva se desliza y se funde a la perfección, derritiéndose en su piel para un acabado fresco y favorecedor."
    },
    {
      id: 10,
      category: "MAKE UP",
      titulo: "Matte Lipstick Rare Beauty",
      precio: "15000",
      image: MatteLips,
      imagenes: [MatteLips, MatteTercia],
      descripcion: "Consiente tus labios con este gel único que se transforma al contacto en un aceite con color para una experiencia de color y brillo inigualable. Una sola pasada para un toque sutil de color o varias capas para un color intenso y vibrante. Elaborado con aceite de jojoba y de girasol, hidrata y nutre al instante para unos labios suaves y tersos que se sienten hidratados todo el día. Rellena suavemente los labios para una apariencia más voluminosa y saludable en segundos. Aplicador plano y angulado para una aplicación fácil y rápida."
    },
    {
      id: 11,
      category: "MAKE UP",
      titulo: "Broncer Powder Mac Cosmetic",
      precio: "50000",
      image: BroncePowder,
      imagenes: [BroncePowder,BronceSecond,BronceTercia],
      descripcion: "POLVO M∙A∙C MINERALIZE SKINFINISH NATURAL Un lujoso polvo facial, suavemente refinado, con sutiles pigmentos perlados que otorgan un acabado dimensional y natural a satinado a la vez. Se puede usar para fijar la base o retocar el maquillaje a lo largo del día. Incluye nuestro 77-Mineral Complex y vitamina E."
    },
    {
      id: 12,
      category: "MAKE UP",
      titulo: "Glow Play Blush Mac Cosmetic",
      precio: "25000",
      image: GlowPlay,
      imagenes: [GlowPlay,GlowPlaySecond,GlowPlayTercia],
      descripcion: "¡Dale un toque de color y luminosidad a tu rostro con el Glow Play Cushiony Blush de MAC Cosmetics! Este innovador rubor en barra redefine la experiencia del maquillaje, ofreciendo un brillo saludable y una textura suave que se funde perfectamente con tu piel. Su fórmula ligera, enriquecida con aceites de jojoba y de semilla de uva, junto con vitamina E, proporciona una hidratación y nutrición excepcionales, dejando tus mejillas y labios con un aspecto revitalizado y radiante."
    },
    {
      id: 13,
      category: "MAKE UP",
      titulo: "Higth Light Powder Rare Beauty",
      precio: "17000",
      image: HighLigth,
      imagenes: [HighLigth,HightSecond,HightTercia],
      descripcion: "Amplia gama de colores para todos los tonos Disponible en múltiples tonos como 01-Believe blush, 03-Enchant GGY y 05-Exhilarate GGFB, permite personalizar el look según el tono de piel y el estilo deseado. Formula segura sin químicos preocupantes Libre de químicos preocupantes, este iluminador es seguro para el uso diario, ideal para pieles sensibles que buscan un acabado brillante sin riesgos."
    },
    {
      id: 14,
      category: "MAKE UP",
      titulo: "Powder Kiss Lipsticks Mac Cosmetic",
      precio: "25000",
      image: PowderKiss,
      imagenes:[PowderKiss,PowerSecond,PowerTercia],
      descripcion: "Preséntale a tus labios la icónica fórmula de M·A·C que transformó la técnica de difuminado de varios pasos a una sola pasada, suave como el polvo. Formulado con cuatro polvos, este labial te da el toque perfecto de color mate con una cobertura ajustable de ligera a media. Diseñado para dar a los labios hidratación instantánea y a largo plazo, este labial cómodo aumenta la humedad en un +54% al instante, dura por 10 horas y mejora la hidratación de los labios después de una semana gracias al extracto de Salicornia herbácea." 
    },

    {
      id: 15,
      category: "HAIR CARE",
      titulo: "Kit Wella Professionals",
      precio: "60000",
      image: KitWella,
      imagenes: [KitWella,KitSecond,KitTercia],
      descripcion: "Contenido total en peso: 2.5 kg. Contenido total en volumen: 2.5 L. Shampoo y acondicionador en formato crema para una aplicación suave. Hipoalergénico, ideal para pieles sensibles. Libre de gluten y crueldad, respetando el bienestar animal. Dermatológicamente testeado para mayor seguridad. Nutre y revitaliza todos los tipos de cabello. Proporciona suavidad y manejabilidad en pocos pasos."
    },
    {
      id: 16,
      category: "HAIR CARE",
      titulo: "Ultimate Sooth Bundle Wella Professionals",
      precio: "89000",
      image: Ultimate,
      imagenes:[Ultimate,UltimateSecond,UltimateTercia],
      descripcion: "Transforma tu rutina de cuidado capilar con el Pack Ultimate Smooth de WELLA PROFESSIONAL. Este conjunto incluye un shampoo, un acondicionador y una máscara, diseñados para ofrecer un tratamiento integral a tu cabello. Cada producto está formulado para combatir el frizz y revitalizar cabellos secos, ondulados, rizados, dañados y lisos"
    },
    {
      id: 17,
      category: "HAIR CARE",
      titulo: "Color Motion Wella Professionals",
      precio: "55990",
      image: ColorMotion,
      imagenes: [ColorMotion,ColorSecond,ColorTercia],
      descripcion:"Color Motion es una línea profesional de Wella Professionals diseñada para el cuidado del cabello teñido, que ayuda a proteger el color y mantener su intensidad por más tiempo. Formulada para uso en salón y cuidado en casa, contribuye a lograr un cabello más fuerte, brillante y con color vibrante desde la primera aplicación, preservando la calidad de la fibra capilar lavado tras lavado."
    },
    {
      id: 18,
      category: "HAIR CARE",
      titulo: "Oil Reflections Wella Professionals",
      precio: "77990",
      image: OilReflection,
      imagenes:[OilReflection,OilSecond,OilTercia],
      descripcion: "Formato de venta: Unidad. Volumen neto: 100 mL. Unidades por pack: 1. Aceite capilar luminoso para una hidratación profunda y duradera. Apto para todo tipo de cabello. Dermatológicamente testeado para mayor seguridad. Libre de parabenos y sulfatos, ideal para pieles sensibles. Aplicaciones recomendadas en cabello húmedo o seco. Producto libre de crueldad, respetuoso con los animales."
    },

    {
      id: 19,
      category: "SUN CARE",
      titulo: "Sun Protection Cream Renew",
      precio: "11990",
      image: SunProtection,
      imagenes:[SunProtection,SunSecond,SunTercia],
      descripcion: "Ofrece protección solar contra los rayos UVA y UVB, previene el envejecimiento prematuro de la piel y aporta una hidratación intensa para mantener su elasticidad. La crema hidratante con protección solar previene la hiperpigmentación y la aparición de manchas en la piel. Modo de empleo: aplicar una pequeña cantidad de crema sobre el rostro limpio y seco."
    },
    {
      id: 20,
      category: "SUN CARE",
      titulo: "Anthelios UvMune 400 La Roche-Posay",
      precio: "15990",
      image: Anthelios,
      imagenes:[Anthelios,AntheSecond,AntheTercia],
      descripcion:"Anthelios UVMUNE 400 Crema Hidratante SPF50+ : con MEXORYL400, el filtro UV más eficaz contra los rayos UV más insidiosos*: ULTRA-LARGOS**. Una protección avanzada de amplio espectro (UVB + UVA incluso hasta los UVA ULTRA-LARGOS). Testado en piel sensible y reactiva. Testado en todo tipo de pieles y fototipos.x"
    },
    {
      id: 21,
      category: "SUN CARE",
      titulo: "Vitamin C Serum IMAGE care",
      precio: "7990",
      image: VitaminaC,
      imagenes:[VitaminaC,VitaminSecond,VitaminTercia],
      descripcion: "IMAGE Skincare limpiador facial hidratante VITAL C gel de limpieza facial suave con vitaminas C E y A 6 onzas líquidas cuidado de la piel Image el empaque puede variar producto de belleza limpiador facial y corporal universal"
    },
    {
      id: 22,
      category: "SUN CARE",
      titulo: "Lactic Acid The Ordinary",
      precio: "25990",
      image: LacticAcid,
      imagenes:[LacticAcid,LacticSecond,LacticTercia],
      descripcion:"Aplicar una vez al día, idealmente por la noche. La fórmula se puede diluir con otros productos para reducir su potencia hasta que la piel desarrolle tolerancia. El contacto del producto con la piel debe ser de frecuencia o duración limitadas."
    },

  ];



  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('velvetique_carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('velvetique_carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto, cantidadSeleccionada) => {
    setCarrito((prevCarrito) => {
      // Verificamos si el producto ya está en el carrito
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);

      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + Number(cantidadSeleccionada) }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: Number(cantidadSeleccionada) }];
      }
    });
    alert('¡Producto añadido al carrito con éxito!');
  };


  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            productos={mockProductos}
            categorias={mockCategorias}
            todosLosProductos={TodosLosProductos}
          />
        }
      />
      <Route
        path="/shop"
        element={<ShopPage todosLosProductos={TodosLosProductos} />}
      />
      <Route
        path= "/producto/:id"
        element = {<DetallePage 
          todosLosProductos={TodosLosProductos}
          agregarAlCarrito={agregarAlCarrito}/>}
      />
      <Route path ="/carrito" element= {<CarritoPage carrito={carrito} setCarrito={setCarrito}/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
