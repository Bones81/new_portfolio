import { useEffect } from "react";
let picIndex = 0;
const imgList = [
  "Nate_Down_Under.jpg",
  "Nate_Singing_Lincoln.jpg",
  "Nathan Waving HKDL 2016.jpg",
  "Nathan_Road.jpg"
];

const About = () => {

  useEffect(() => {
    const imgEl = document.querySelector('.about-pic')

    const changePic = () => {
      imgEl.setAttribute("src", `img/${imgList[picIndex]}`)
      if (imgList.length - 1 === picIndex) {
        picIndex = 0
      } else {
        picIndex++
      }
    } 
    const interval = setInterval(changePic, 2000);
    return () => clearInterval(interval)
  },[])


  return (
    <section id="about">
      <h2>About Nathan</h2>
      <div className="carousel-container">
        <div className="carousel">
          <img src="img/Nate_Down_Under.jpg" alt="Nathan headshot" className="about-pic" />
        </div>
      </div>
      <article id="bio-text">
        <p>I come to code from a performing arts background. After graduating from Princeton University, I pursued an acting career, with a focus on musical theatre. After many years and a variety of intertwined circumstances, the time had come to build a second career.</p>
        <p>Enter Code. While I had dabbled in code many times, I fully embraced the idea of being a developer in January 2022 when I enrolled in a General Assembly Software Engineering Immersive. There I solidified a set of full stack skills and grew in confidence as a developer.</p>
        <p>General Assembly validated my growing skills by immediately hiring me as an Instructional Associate for the April 2022 version of the same course.</p>
        <p>I was born in St. Louis, MO, grew up in Memphis, Tennessee, and currently live in New York City. I spent parts of five years living and working in Hong Kong as a Christmas season vocalist at Hong Kong Disneyland.</p>
        <p>I am a huge fan of Futurama, Star Wars, the Lord of the Rings films, <em>a cappella</em> music, traveling, nutrition, fitness, urban hikes, country hikes, video games, and sports.</p>
        <p>I hope to achieve meaningful change through my code, whether that means making your life or work easier, more productive, or more fun. Let's build the world you want to see, together.</p>
      </article>
    </section>
  )
}

export default About