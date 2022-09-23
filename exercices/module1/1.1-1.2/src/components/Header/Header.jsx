import image from './LOGO HE VINCI.png'


const Header = (props) => {
    const logo = image;

    return (
      <>
        <img src={logo} alt="logo" />
        <h1>{props.course}</h1>
      </>
    )
  }
  export default Header;