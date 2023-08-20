import Link from 'next/link'
import {FiEdit3} from 'react-icons/fi'
import RemoveIcon from './RemoveButton'
export default function AllData() {
    return (
        <div className="w-[70%] mx-auto">
            <div className='content-main-div'>
                <div>
                    <h4 className="text-2xl">This is Title</h4>
                    <p>Description</p>
                </div>
                <div className='icons'>
                    <RemoveIcon/>
                    <Link href='/editcontent'> <FiEdit3 className='iconn'/></Link>
                </div>
            </div>
        </div>
    )
}