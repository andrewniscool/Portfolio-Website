/**
 * @copyright codewithsadee
 * @license Apache-2.0
 */


import React from 'react'

/**
 * Components
 */

import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: '/images/python.svg',
      label: 'Java',
      desc: 'Development',
      attributionLink: 'https://www.vectorlogo.zone/logos/java/',
      attributionText: 'Java icon by VectorLogoZone'      
    },
    {
      imgSrc: '/images/python.svg',
      label: 'Python',
      desc: 'Language',
      attributionLink: 'https://icons8.com/icon/l75OEUJkPAk4/python',
      attributionText: 'Python icon by Icon8'      

    },
    {
      imgSrc: '/images/git.svg',
      label: 'Git',
      desc: 'Version Control',
      attributionLink: 'https://icons8.com/icon/8verEw3iUvx0/git',
      attributionText: 'Git icon by Icon8'      

    },
    {
      imgSrc: '/images/google-colab.svg',
      label: 'Google Colab',
      desc: 'Code Editor',
      attributionLink: 'https://icons8.com/icon/lOqoeP2Zy02f/google-colab',
      attributionText: 'Google Colab icon by Icon8'
    },
    {
      imgSrc: '/images/intellij.svg',
      label: 'Intellij',
      desc: 'IDE',
      attributionLink: 'https://icons8.com/icon/61466/intellij-idea',
      attributionText: 'Intellij icon by Icon8'
    },



    // {
    //   imgSrc: '/images/figma.svg',
    //   label: 'Figma',
    //   desc: 'Design tool'
    // },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface',
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction',

    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server',

    },
    // {
    //   imgSrc: '/images/expressjs.svg',
    //   label: 'ExpressJS',
    //   desc: 'Node Framework'
    // },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database',

    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework',

    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface',
    },
  ];
  

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            
            <h2 className="headline-2 reveal-up">
                Essential Tools I Use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Explore the languages, tools, and technologies I use to 
                create my projects and drive my academic career.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc, attributionLink, attributionText }, key) =>
                    (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                            attributionLink={attributionLink}
                            attributionText={attributionText}
                          
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill
