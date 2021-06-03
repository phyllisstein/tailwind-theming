import Byline from '../../components/Byline'
import Hed from '../../components/Hed'
import TheCutLede from '../../components/TheCutLede'

export default function TheCut() {
    return (
        <TheCutLede
            heroCaption="Photo: Bird"
            heroImage="https://cdn.vox-cdn.com/thumbor/BwFVMS2O3XJc76I8CbarlKEjUQo=/0x0:7178x4788/1820x1213/filters:focal(3015x1820:4163x2968):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69350084/B3_Press.0.jpg"
            date="May 27, 2021"
            rubric="Rideables">
            <Hed>
                Bird announces its third-generation electric scooter with automatic emergency braking
            </Hed>
            <Byline>
                By Andrew J. Hawkins
            </Byline>
        </TheCutLede>
    )
}
