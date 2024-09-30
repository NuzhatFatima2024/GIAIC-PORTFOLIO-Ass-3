import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            <ul className="header-buttons">
               
            <Link href= {"/"} >
              <li>Home</li></Link>
               <Link href={"/about"}> <li>About Us</li></Link>
               <Link href={"/portfolio"}> <li>Portfolio</li></Link>
               <Link href={"/contact"}> <li>Contact</li></Link>
            </ul>
        </div>
    )
}
