import Link from "next/link"
export default function Footer(){
    return(
        <div className="footer">
            <ul className="footer-buttons">
               
            <Link href= {"/"} >
              <li>Facebook</li></Link>
               <Link href={"/Twitter"}> <li>Twitter</li></Link>
               <Link href={"/Linkedin"}> <li>Linkedin</li></Link>
              <Link href={"/Youtube"}> <li>Youtube</li></Link>
            </ul>
        </div>
    )
}
