import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {
    // const onTestClick = (e) => {
    //     console.log(e);
    // }

    return (
        <div>
             <button style={{backgroundColor: color}}
             onClick={onClick} 
             className="btn">
                 { text }
             </button>
        </div>
    )
}


Button.defaultProps = {
    color: 'steelblue',
    text: 'default'

}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string, 
    onClick: PropTypes.func.isRequired
}

export default Button
