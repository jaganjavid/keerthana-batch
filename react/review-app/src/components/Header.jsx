import PropTypes from "prop-types";

const Header = ({text, bgColor, textColor}) => {

  const headerStyle = {
    backgroundColor: bgColor,
    color:textColor,
  }

  return (
    <header style={headerStyle}>
        <div>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Review App",
    bgColor: "rgba(0,0,0,0.2)",
    textColor:"#ffffff"
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header