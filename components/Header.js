import Image from "next/image";
import huluImage from '../Images/hulu-image.png'

function Header() {
    return (
        <header className="">
            <Image className="object-contain" 
            src={huluImage} 
            width={200} 
            height={100}/>
        </header>
    )
}

export default Header
