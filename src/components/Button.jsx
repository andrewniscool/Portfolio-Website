/**
 * @copyright codewithsadee
 * @license Apache-2.0
 */


import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/**
 * Node modules
 */

import PropTypes from 'prop-types';

/**
 * Primary Button
 */

 
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if(href){
        return(
            <a href={href}
            target={target}
            className={"btn btn-primary " + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    }else{
        return(
            <button className={"btn btn-primary " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }

            </button>
        )
    }
  
}
ButtonPrimary.PropTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary
}


/**
 * Outline Button
 */

const ButtonOutLine = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if(href){
        return(
            <a href={href}
            target={target}
            className={"btn btn-outline " + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    }else{
        return(
            <button className={"btn btn-outline " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }

            </button>
        )
    }
  
}
ButtonOutLine.PropTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


export {
    ButtonOutLine
}
