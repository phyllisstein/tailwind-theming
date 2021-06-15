export default function SharedStandardLede(props) {
    return (
        <div className={props.theme}>
            <div className="lede-container">
                <div className="lede-text">
                    <div className="lede-meta"><span className="lede-tag">Rideables</span> <span className="lede-separator">/</span> <span className="lede-date">May 27, 2021</span></div>
                    <h1 className="lede-headline">
                        Bird announces its third-generation electric scooter with automatic emergency braking
                    </h1>
                    <h2 className="lede-dek">The company says it's the safest scooter yet</h2>
                    <p className="lede-byline">By <span className="lede-byline-name">Andrew J. Hawkins</span> <span className="lede-twitter">@andyjayhawk</span></p>
                </div>
            </div>
            <div>
                <figure className="lede-image-container">
                    <img className="lede-image" src="https://cdn.vox-cdn.com/thumbor/BwFVMS2O3XJc76I8CbarlKEjUQo=/0x0:7178x4788/1820x1213/filters:focal(3015x1820:4163x2968):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69350084/B3_Press.0.jpg"></img>
                    <figcaption className="lede-image-credit">Photo: Bird</figcaption>
                </figure>
            </div>
        </div>
    )
  }