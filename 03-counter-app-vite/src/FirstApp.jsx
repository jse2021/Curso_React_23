import PropTypes from "prop-types";
export const FirstApp =({tittle,subtitle})=>{
    return(
        <>
            <div data-testid="test-title">{tittle}</div>
            <p>{subtitle}</p>

        </>
        
    );
}

// FirstApp.propTypes = {
//     tittle:PropTypes.string.isRequired,
//     subtitle:PropTypes.number.isRequired
// }

// FirstApp.defaultProps = {
//     name:'hola jo',
//     tittle:'no hay titulo',
//     subtitle: 'no hay subtitulos'
// }