import { GetStaticPaths, GetStaticProps } from 'next';
// import Button from "react-bootstrap/Button";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:4000/product/men');
  const data = await res.json();

  // map data to an array of path objects with params (oneID)
  const paths = data.map((product: { idproduct: number }) => {
    return {
      params: { secondID: product.idproduct.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const secondID = context.params?.secondID;
  const res = await fetch('http://localhost:4000/product/OneProduct/' + secondID);
  const data = await res.json();

  return {
    props: { product: data }
  };
};

interface Product {
  idproduct: number;
  name_product: string;
  description_product: string;
  inStock: boolean;
  images_product: string;
  size: string;
  category: string;
  composition: string;
  model: string;
  gender: string;
  price: number;
}

const Details: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150vh' }}>
      <div style={{ width: '300px' }}>
        <MDBCard className="container">
          <MDBCardBody>
            <MDBCardTitle className="h1-responsive">{product.name_product}</MDBCardTitle>
            <MDBCardText className="lead">{product.description_product}</MDBCardText>
            <MDBCardText className={`text-${product.inStock ? 'success' : 'danger'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </MDBCardText>
            <MDBCardImage src={product.images_product} alt={product.name_product} fluid />
            <MDBRow>
              <MDBCol md="6">
                <MDBCardText className="mb-0">Size: {product.size}</MDBCardText>
                <MDBCardText className="mb-0">Category: {product.category}</MDBCardText>
                <MDBCardText className="mb-0">Composition: {product.composition}</MDBCardText>
              </MDBCol>
              <MDBCol md="6">
                <MDBCardText className="mb-0">Model: {product.model}</MDBCardText>
                <MDBCardText className="mb-0">Gender: {product.gender}</MDBCardText>
                <MDBCardText className="mb-0">Price: {product.price} DNT</MDBCardText>
              </MDBCol>
            </MDBRow>
            <button type="button"  data-mdb-ripple-color="dark">ADD TO BAG</button>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default Details;
