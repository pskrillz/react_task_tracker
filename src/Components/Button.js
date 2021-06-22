import PropTypes from 'prop-types'


const Button = ({color, text}) => {
    const onTitleBtnClick = (e) => {
        console.log(e);
    }

    return (
        <div>
             <button style={{backgroundColor: color}}
             onClick={onTitleBtnClick} 
             class="btn">
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
    text: PropTypes.string
}

export default Button
