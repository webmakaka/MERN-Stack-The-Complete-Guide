import { Segment } from 'semantic-ui-react';
import { parseCookies } from 'nookies';
import axios from 'axios';
import CartItemList from '../components/Cart/CartItemList';
import CartSummary from '../components/Cart/CartSummary';
import baseUrl from '../utils/baseUrl';

function Cart({ user, products }) {
  return (
    <Segment>
      <CartItemList user={user} products={products} />
      <CartSummary products={products} />
    </Segment>
  );
}

Cart.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);

  if (!token) {
    return { products: [] };
  }

  const url = `${baseUrl}/api/cart`;
  const payload = { headers: { Authorization: token } };
  const response = await axios.get(url, payload);
  // console.log(response.data);
  return { products: response.data };
};

export default Cart;
