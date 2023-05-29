import { GetStaticPaths, GetStaticProps } from 'next';
import Button from "react-bootstrap/Button";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

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

interface DetailsProps {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:4000/product/kids');
  const data = await res.json();

  // map data to an array of path objects with params (thirdID)
  const paths = data.map((product: Product) => {
    return {
      params: { thirdID: product.idproduct.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<DetailsProps> = async (context) => {
  const thirdID = context.params?.thirdID;
  const res = await fetch(`http://localhost:4000/product/OneProduct/${thirdID}`);
  const data = await res.json();

  return {
    props: { product: data }
  };
};

const Details: React.FC<DetailsProps> = ({ product }) => {
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
            <Button type="button"  data-mdb-ripple-color="dark">ADD TO BAG</Button>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default Details;
