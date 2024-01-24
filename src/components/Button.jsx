import { useContext } from 'react';
import ThemeContext from '../context/Theme';

export default function Button({text, className, ...props}) {

    const theme = useContext(ThemeContext);

    return(
        <button {...props}
        className={`btn btn-${theme} m-20 ${className ? className : ''}`}>
            {text}
        </button>
    );
}