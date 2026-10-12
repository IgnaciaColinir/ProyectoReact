import React from 'react';
import './global.css';
import { HomePage } from './pages/HomePage';
import RealHyaluron from './assets/SkinCare/RealHyaluron/Principal.webp';
import LacticAcid from './assets/SkinCare/LacticAcid/Principal.jpg';
import PDRNSerum from './assets/SkinCare/PDRNSerum/Principal.jpg';
import GelMoisturizer from './assets/SkinCare/GelMoisturizer/Principal.jpg';
import SkinCT from './assets/SkinCare/AnuaSerum/Principal.webp';
import MakeUpCT from './assets/MakeUp/Categoria.jpg';
import HairCareCT from './assets/HairCare/Categoria.jpg';
import SunCareCT from './assets/SunCare/Categoria.jpg';
function App() {
  const mockProductos = [
    { 
      id: 1, 
      title: 'Real Complexion Hyaluron', 
      brand: 'HANSKIN', 
      price: '13990', 
      image: RealHyaluron 
    },
    { 
      id: 2, 
      title: 'Lactic Acid', 
      brand: 'THE ORDINARY', 
      price: '25990', 
      image: LacticAcid
    },
    { 
      id: 3, 
      title: 'PDRN Sérum «Exosome Shot» de Pink Collagen', 
      brand: 'DE PINK COLLAGEN', 
      price: '7990', 
      image: PDRNSerum 
    },
    { 
      id: 4, 
      title: 'Hidra Intense Gel Moisturizer', 
      brand: 'SKINTIFIC', 
      price: '6500', 
      image: GelMoisturizer
    },
  ];

  const mockCategorias = [
    { id: 1, title: 'SKIN CARE', image: SkinCT },
    { id: 2, title: 'MAKE UP', image: MakeUpCT },
    { id: 3, title: 'HAIR CARE', image: HairCareCT },
    { id: 4, title: 'SUN CARE', image: SunCareCT },
  ];
  
  return <HomePage productos={mockProductos} categorias={mockCategorias}/>;
}

export default App;