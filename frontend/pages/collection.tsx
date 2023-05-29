import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/product/collection');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (

     
    
      
    <>
      {products.map((product) => (
        <MDBCard className="container" key={product.idproduct} style={{ width: '400px' }}>
          <MDBCardImage src={product.images_product} alt={product.name_product} fluid />
          <MDBCardBody>
            <MDBCardText>{product.name_product}</MDBCardText>
            <div className="flex">
              <p style={{ textAlign: 'center' }}>{product.price} DNT</p>
             
            </div>
          </MDBCardBody>
        </MDBCard>
      ))}
    </>
  
  );
};

export default AllProducts;