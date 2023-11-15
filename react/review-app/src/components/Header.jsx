import PropTypes from "prop-types";

const Header = ({text}) => {

  return (
    <header>
        <div>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Review App"
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header