export default function EditContent (){
    return (
        <>
            <b>Edit Content</b> <hr/>
            <form className="">
                <input placeholder="Enput Content Title" className="w-full p-4 rounded border "/> <br/>
                <textarea rows={4} placeholder="Enput Content Title" className="w-full mt-6 p-4 rounded border "/> <br/>
                <div className="md:w-[50%] mx-auto text-center"><button className="p-2 text-white font-bold w-full bg-[#47c3d1]">UpDate Content</button></div>
            </form>
        </>
    )
}