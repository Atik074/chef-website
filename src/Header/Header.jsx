import React, { useContext } from 'react';
import './Header.css'
import { Button, Container, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';





const Header = () => {
  const {user ,signOutUser} = useContext(AuthContext)



  const handleSignOutUser = ()=>{
     signOutUser()
     .then()
     .catch()
  }
    return (
       <Container>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">BD-Good-Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto ">
            <Nav.Link>
              <Link className='text-decoration-none text-white' to='/'>Home</Link>
                </Nav.Link>
            <Nav.Link >
              <Link className='text-decoration-none text-white' to='/blog'>Blog</Link>
                </Nav.Link>
            <Nav.Link>
              <Link className='text-decoration-none text-white' to='/about'>About</Link>
                </Nav.Link>
          </Nav>
          <Nav className='align-items-center'>
            <Nav.Link href="#img">
         {  user ? <Link> 
        
        <OverlayTrigger    placement="left" 
          overlay={ <Tooltip>
                  {user.displayName}
                </Tooltip>}>
             <Image style={{width:'50px'}} src="https://shorturl.at/aFIP5" fluid roundedCircle /> 
        </OverlayTrigger>

           </Link> : <span className='profile'><FaRegUserCircle    className='text-black' style={{fontSize:'35px', marginRight:'5px'}}></FaRegUserCircle></span>
        }
</Nav.Link>
      

        { user ? <Link className='text-decoration-none text-white' 
            to="">
              <Button onClick={handleSignOutUser} variant="dark"   >LogOut</Button>
            </Link> :
            <Link className='text-decoration-none text-white' 
            to="/login">
           <Button variant="dark"  >LogIn</Button>
            </Link> 
            
          }

          

      
          

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

   
    
      
      
       </Container>
    );
};

export default Header;