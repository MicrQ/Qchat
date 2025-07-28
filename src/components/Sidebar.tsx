import { useState} from 'react'
import { FaBars, FaPlus, FaRegCommentDots,
    FaQuestion, FaHistory, FaCog } from 'react-icons/fa';


const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    const toggleSidebar = () => {
        setExtended(!extended);
    };

    return (
        <div className='sidebar h-screen inline-flex flex-col justify-between bg-whitepurp py-10 px-3'>
            {/* top */}
            <div>
                <FaBars className='ml-3 cursor-pointer text-purp' onClick={toggleSidebar} />
                <div className='mt-20 inline-flex items-center gap-3 px-5 py-3 text-white
                bg-purp rounded-[50px] cursor-pointer hover:bg-purp/80 transition-all duration-300'>
                    <FaPlus />
                    {extended &&<p>New Chat</p>}
                </div>
                {extended && <div className='flex flex-col'>
                    <p className='mt-10 mb-8'>Recent</p>
                    <div className='option'>
                        <FaRegCommentDots />
                        <p>What is recent...</p>
                    </div>
                </div>
                }
            </div>

            {/* bottom */}
            <div className='flex flex-col gap-2'>
                <div className='option pr-4'>
                    <FaQuestion />
                    {extended && <p>Help</p>}
                </div>
                <div className='option'>
                    <FaHistory />
                    {extended && <p>Activity</p>}
                </div>
                <div className='option'>
                    <FaCog />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;