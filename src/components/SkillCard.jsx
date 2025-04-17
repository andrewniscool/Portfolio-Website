/**
 * @copyright codewithsadee
 * @license Apache-2.0
 */

import React from 'react'
import PropTypes from 'prop-types';

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes,
    attributionLink, // New prop for the attribution link
    attributionText  // New prop for the attribution text
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ' + classes}>
        <figure className="flex-shrink-0 bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
            <img 
            src={imgSrc}
            width={32}
            height={32} 
            alt={label} 
            />
        </figure>

        <div>
            <h3>{label}</h3>
            <p className="text-zinc-400 text-sm">
                {desc}
            </p>
        </div>

        {attributionLink && attributionText && (
          <div className="mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={attributionLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300">
              {attributionText}
            </a>
          </div>
        )}
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
    attributionLink: PropTypes.string,  // Optional prop for attribution link
    attributionText: PropTypes.string   // Optional prop for attribution text
}

export default SkillCard
