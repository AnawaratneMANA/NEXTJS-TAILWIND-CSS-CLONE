import Image from "next/image";
function Header() {
    return (
        <header className="">
            <Image className="object-contain" 
            src="/../Images/hulu-image.png" 
            width={200} 
            height={100}/>
        </header>
    )
}

export default Header
