import './event.css'

function event({ images }){
    return(
        <section id="courses" className="courses section">
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className={image.className || ''}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        <div className='more-container'>
          <a href="https://www.instagram.com/cfphfoundation?igsh=MTB0NmF6YjZtNXZ2Nw==">Check Out More</a>
        </div>
      </section>
    )

}
export default event