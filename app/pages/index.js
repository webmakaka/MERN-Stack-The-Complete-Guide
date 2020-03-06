import React from 'react';
import axios from 'axios';

function Home({ products }) {

  console.log(products);

  // React.useEffect(() => {
  //   getProducts()
  // }, []);

  // async function getProducts() {
  //   const url = 'http://localhost:3000/api/products';
  //   const response = await axios.get(url);
  // }

  return <>home</>;
}

Home.getInitialProps = async () => {
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return {products: response.data};
}

export default Home;
