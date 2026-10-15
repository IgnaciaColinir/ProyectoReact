import React from "react";
import { Routes, Route } from "react-router-dom";
import "./global.css";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";

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
import GlowSerum from "./assets/skincare/serumforradiant/Principal.webp";
import Moisturizer from "./assets/skincare/moisturizer/Principal.webp";
import RealComplexion from "./assets/skincare/realcomplexionhyaluron/Principal.webp";
import SetStep from "./assets/skincare/set3-step/Principal.webp";

/* Productos - Make up */
import MultiStick from "./assets/makeup/multistick/Principal.jpg";
import MatteLips from "./assets/makeup/mattelips/Principal.jpg";
import BroncePowder from "./assets/makeup/broncepowder/Principal.jpg";
import GlowPlay from "./assets/makeup/glowplay/Principal.jpg";
import HighLigth from "./assets/makeup/higthlight/Principal.jpg";
import PowderKiss from "./assets/makeup/powderkiss/Principal.jpg";

/* Productos - Hair Care */
import KitWella from "./assets/haircare/kitwella/Principal.jpg";
import Ultimate from "./assets/haircare/ultimate/Principal.jpg";
import ColorMotion from "./assets/haircare/colormotion/Principal.jpg";
import OilReflection from "./assets/haircare/oilreflection/Principal.jpg";

/* Productos - Sun Care */
import SunProtection from "./assets/suncare/sunprotection/Principal.jpg";
import Anthelios from "./assets/suncare/anthelios/Principal.jpg";
import VitaminaC from "./assets/suncare/vitaminac/Principal.jpg";

/* Login -Register -Contact */
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";

function App() {
  const mockProductos = [
    {
      id: 1,
      titulo: "Real Complexion Hyaluron",
      marca: "HANSKIN",
      precio: "13990",
      image: RealHyaluron,
    },
    {
      id: 2,
      titulo: "Lactic Acid",
      marca: "THE ORDINARY",
      precio: "25990",
      image: LacticAcid,
    },
    {
      id: 3,
      titulo: "PDRN Sérum «Exosome Shot» de Pink Collagen",
      marca: "DE PINK COLLAGEN",
      precio: "7990",
      image: pdrnSerum, // 👈 Corregido: antes decía PDRNSerum y daba error
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
    }, // 👈 Corregida la imagen
    {
      id: 2,
      category: "SKIN CARE",
      titulo: "PDRN Sérum «ExosomeShot» de Pink Collagen",
      precio: "7990",
      image: pdrnSerum,
    },
    {
      id: 3,
      category: "SKIN CARE",
      titulo: "Lactic Acid The Ordinary",
      precio: "25990",
      image: LacticAcid,
    },
    {
      id: 4,
      category: "SKIN CARE",
      titulo: "Hidra Intense Gel Moisturizer",
      precio: "6500",
      image: GelMoisturizer,
    },
    {
      id: 5,
      category: "SKIN CARE",
      titulo: "Glow Serum For Radiant Skin",
      precio: "10000",
      image: GlowSerum,
    },
    {
      id: 6,
      category: "SKIN CARE",
      titulo: "Hydra Moisturizer",
      precio: "17000",
      image: Moisturizer,
    },
    {
      id: 7,
      category: "SKIN CARE",
      titulo: "Real Complexion Hyaluron HANSKIN",
      precio: "13990",
      image: RealComplexion,
    },
    {
      id: 8,
      category: "SKIN CARE",
      titulo: "Set 3-Step Skin Care",
      precio: "70000",
      image: SetStep,
    },

    {
      id: 9,
      category: "MAKE UP",
      titulo: "Monochromatic Multi-Stick",
      precio: "8990",
      image: MultiStick,
    },
    {
      id: 10,
      category: "MAKE UP",
      titulo: "Matte Lipstick Rare Beauty",
      precio: "15000",
      image: MatteLips,
    },
    {
      id: 11,
      category: "MAKE UP",
      titulo: "Broncer Powder Mac Cosmetic",
      precio: "50000",
      image: BroncePowder,
    },
    {
      id: 12,
      category: "MAKE UP",
      titulo: "Glow Play Blush Mac Cosmetic",
      precio: "25000",
      image: GlowPlay,
    },
    {
      id: 13,
      category: "MAKE UP",
      titulo: "Higth Light Powder Rare Beauty",
      precio: "17000",
      image: HighLigth,
    },
    {
      id: 14,
      category: "MAKE UP",
      titulo: "Powder Kiss Lipsticks Mac Cosmetic",
      precio: "25000",
      image: PowderKiss,
    },

    {
      id: 15,
      category: "HAIR CARE",
      titulo: "Kit Wella Professionals",
      precio: "60000",
      image: KitWella,
    },
    {
      id: 16,
      category: "HAIR CARE",
      titulo: "Ultimate Sooth Bundle Wella Professionals",
      precio: "89000",
      image: Ultimate,
    },
    {
      id: 17,
      category: "HAIR CARE",
      titulo: "Color Motion Wella Professionals",
      precio: "55990",
      image: ColorMotion,
    },
    {
      id: 18,
      category: "HAIR CARE",
      titulo: "Oil Reflections Wella Professionals",
      precio: "77990",
      image: OilReflection,
    },

    {
      id: 19,
      category: "SUN CARE",
      titulo: "Sun Protection Cream Renew",
      precio: "11990",
      image: SunProtection,
    },
    {
      id: 20,
      category: "SUN CARE",
      titulo: "Anthelios UvMune 400 La Roche-Posay",
      precio: "15990",
      image: Anthelios,
    },
    {
      id: 21,
      category: "SUN CARE",
      titulo: "Vitamin C Serum IMAGE care",
      precio: "7990",
      image: VitaminaC,
    },
    {
      id: 22,
      category: "SUN CARE",
      titulo: "Lactic Acid The Ordinary",
      precio: "25990",
      image: LacticAcid,
    },
  ];

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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
