import Link from "next/link";

export default function Navbar (){
    return (
        <nav className="navbar">
            <Link href='/'>
            <h3 className="text-2xl"><span className="text-cyan-200 font-bold">Next</span> Crud</h3>
            </Link>
            <ul>
                <li><Link className="font-bold mx-6 text-blue-950" href='/newcontent'>Add New Content</Link></li>
            </ul>
        </nav>
    )
}