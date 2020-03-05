import { Menu, Container, Image, Icon } from 'semantic-ui-react';
import Link from 'next/link';

function Header() {

  const user = false;

  return (
    <Menu fluid id="menu" inverted >
      <Container text> 
        <Link href="/">
          <Menu.Item header>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRigth: '1em'}}
             />
             ReactReserve
          </Menu.Item>
        </Link>

        <Link href="/cart">
          <Menu.Item header>
            <Icon
              name="cart"
              size="large"
            />
             Cart
          </Menu.Item>
        </Link>   

        {user && (<Link href="/create">
          <Menu.Item header>
            <Icon
              name="add square"
              size="large"
            />
             Create
          </Menu.Item>
        </Link>)} 

        { user ? (<>

          <Link href="/account">
            <Menu.Item header>
              <Icon
                name="user"
                size="large"
              />
              Account
            </Menu.Item>
          </Link>

            <Menu.Item header>
              <Icon
                name="sign out"
                size="large"
              />
              Logout
            </Menu.Item> 

        </>) 
        
        :

        (<>    

          <Link href="/login">
            <Menu.Item header>
              <Icon
                name="sign in"
                size="large"
              />
              Login
            </Menu.Item>
          </Link>

          <Link href="/signup">
            <Menu.Item header>
              <Icon
                name="signup"
                size="large"
              />
              Sign Up
            </Menu.Item>
          </Link>  

        </>)}

      </Container>
    </Menu>
  )
}

export default Header;
