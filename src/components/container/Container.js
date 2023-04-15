import './Container.css'

function Container({ pic, title, content }) {
    return (
        <div className='container' style={{
            backgroundImage: `url("./../../../images/${pic}.jpg")`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
        }}>
    <div className="content">
        <h1>{title}</h1>
        <p>
            {content}
        </p>
    </div>
    </div >
  )
}

export default Container