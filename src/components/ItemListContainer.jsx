import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState();
  const categoria = useParams().categoria;
  console.log(categoria);

  useEffect(() => {
    
    const productosRef = collection(db, "Productos");

    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(q)
    .then((resp) => {
      
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })

      )
    })

  }, [categoria]);

  return (
    <div className="mt-5 p-4 bg-blue-100 text-center">
      <h2 className="text-2xl md:text-3xl text-blue-500 font-bold mb-4">{greeting}</h2>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
