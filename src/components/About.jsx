/**
 * @copyright codewithsadee
 * @license Apache-2.0
 */


import { number } from 'prop-types';
import React from 'react'

/**
 * Components
 */

const aboutItems = [
    {
      label: 'Project done',
      number: 45
    },
    {
      label: 'Years of experience',
      number: 10
    }
  ];
  

const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
     <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Andrew, a student at the University of Virginia studying Computer Science. 
            I&apos;m passionate about software development, AI/ML, web development, and much more.
            I&apos;m looking for internship opportunities for the 2025 Summer. If you'd like to connect with me, please contact me through my email or webpage!
          </p>

         <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
                aboutItems.map(({ label, number }, key) => (
                    <div key={key}>
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                            <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                        </div>

                        <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                ))
            }

            <img
            src="/images/logo.svg"
            alt='Logo'
            width={30}
            height={30}
            className="ml-auto md:w-[40px] md:h-[40px]"
            />
         </div>
        </div>

      </div> 
    </section>
  )
}

export default About
