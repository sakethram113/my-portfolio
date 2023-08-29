import React from 'react'

const About = () => {
  return (
    <div name='about' className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>

            <p className="text-xl">
            Welcome to my portfolio! I'm Saketh Ram, a passionate and dedicated full stack developer with a knack for building robust and innovative web applications. With a strong foundation in both front-end and back-end development, I strive to create seamless user experiences that blend functionality, aesthetics, and performance. My passion for problem-solving and attention to detail drive me to deliver high-quality code that not only meets but exceeds client expectations. I am experienced in working collaboratively as part of a team, but I also thrive when working independently, taking ownership of projects from concept to deployment.
            </p>
            <br />

            <p className="text-xl">
            Continual learning is a crucial aspect of my professional growth, and I am always eager to explore emerging technologies and frameworks that can enhance my development capabilities. I stay up to date with the latest trends and industry best practices to ensure that the solutions I provide are efficient, secure, and scalable.
            Thank you for visiting my portfolio website. Feel free to explore my projects and don't hesitate to reach out if you have any questions or potential collaboration opportunities. I look forward to working together to bring your ideas to life!
            </p>

        </div>
    </div>
  )
}

export default About