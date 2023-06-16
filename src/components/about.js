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
      <h2 className="section-title">About</h2>
      <div className="carousel-container">
        <div className="carousel">
          <img src="img/Nate_Down_Under.jpg" alt="Nathan headshot" className="about-pic" />
        </div>
      </div>
      <article id="bio-text">
        <p>I am a full-stack software engineer known for my diligence, adaptability, and focus on quality. I bring discipline, craftsmanship, and creativity honed over 2 decades as a professional performer and a wealth of diverse work experiences from which to offer unique perspectives.</p>
        <p>I primarily build web applications with JavaScript/TypeScript or Python, though I will happily consider opportunites to extend myself into new tech spaces and other programming languages. I enjoy the constant learning required of a strong developer.</p>
        <p>I have a Bachelor of Arts degree from Princeton University, and a certificate in Software Engineering from General Assembly.</p>
        <p>General Assembly also hired me as an Instructional Associate, validating my growing developer skills and taking advantage of my natural willingness to help others to learn and solve problems.</p>
        <p>I hope to achieve meaningful impact through my code, whether that means making your life or work easier, more productive, or more fun. Let's build the world you want to see, together.</p>
      </article>
    </section>
  )
}

export default About