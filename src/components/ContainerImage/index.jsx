import './style.css'
import Image from '../Image'
import JoyceAndHoper from '../../assets/JoyceAndHoper.jpg'
import LucasAndMax from '../../assets/LucasAndMax.jpg'
import NacyAndJonathan from '../../assets/NacyAndJonathan.jpg'
import NacyAndSteve from '../../assets/NacyAndSteve.jpg'
import OnzeAndWill from '../../assets/OnzeAndWill.jpg'
import WillAndOnze from '../../assets/WillAndOnze.jpg'
import I1 from '../../assets/1.jpeg'
import I2 from '../../assets/2.jpeg'
import I3 from '../../assets/3.jpeg'
import I4 from '../../assets/4.jpeg'
import I5 from '../../assets/5.jpeg'
import I6 from '../../assets/6.jpeg'
import I8 from '../../assets/8.jpeg'
import I9 from '../../assets/9.jpeg'
import I10 from '../../assets/10.jpeg'
import SteveAndNancy from '../../assets/SteveAndNancy.jpg'
function ContainerImage(){
    return (
        <div className='container-cards'>
            <Image img={JoyceAndHoper}/>
            <Image img={I1}/>
            <Image img={I2}/>
            <Image img={LucasAndMax}/>
            <Image img={NacyAndJonathan}/>
            <Image img={I3}/>
            <Image img={I4}/>
            <Image img={NacyAndSteve}/>
            <Image img={SteveAndNancy}/>
            <Image img={I5}/>
            <Image img={I6}/>
            <Image img={I8}/>
            <Image img={I9}/>
            <Image img={I10}/>
            <Image img={OnzeAndWill}/>
            <Image img={WillAndOnze}/>
        </div>
    )
}

export default ContainerImage;