import React, { useEffect, useState } from 'react';

import Link from 'next/link'

export async function getStaticProps() {
  const products = await fetch ("http://localhost:4000/product/women").then(response => response.json())
  
  return {
      props:{
          products
      }
  }
}   
const women: React.FC = ({products}:any) => {
  


  return (
    <div
      style={{
        
        justifyContent: 'center',
        
        height: '100vh',
      }}
    >
      {products.map((product:any) => (
        <div style={{ textAlign: 'center' }} key={product.idproduct}>
            
          <img style={{ width: '800px' }} src={product.images_product} alt={product.name_product}  />
          <div>
          <Link href={`OneProduct/${product.idproduct}`}>{product.name_product}</Link>
           
          
            <div>
              
              <p style={{ fontWeight: 'bold' }} >{product.price} DNT</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default women;
