import { FaUser } from 'react-icons/fa';
import { FaRegImage, FaMicrophone, FaPaperPlane } from 'react-icons/fa';


const Main = () => {
    return (
        <div className='flex-1 min-h-screen pb-[15vh] relative'>
            <div className='flex items-center justify-between p-5 text-purp text-[22px]'>
                <p className='text-[25px] font-bold'>QChat</p>
                <FaUser className='m-4 rounded-full border-2 border-purp' size={40} />
            </div>

            <div className='max-w-[1000px] m-auto'>
                <div className='my-[50px] text-lightpurp text-[56px] font-bold p-5'>
                    <p>
                        <span
                            className="bg-gradient-to-r from-purp to-lightpurp bg-clip-text text-transparent"
                        >
                            YOO, Wassup??
                        </span>
                    </p>
                    <p className='font-normal'>How can I help you today?</p>
                </div>
            </div>

            <div className='absolute bottom-0 w-full mx-auto px-5'>
                <div className='flex items-center justify-between gap-4 bg-lightpurp px-8 py-3
                    rounded-[50px] max-w-[900px] m-auto'>
                    <input type="text" placeholder='Enter your prompt...'
                    className='flex-1 bg-transparent border-none p-2 outline-none text-[18px]' />
                    <div className='search-box'>
                        <div className="flex items-center gap-4">
                            <button className="">
                                <FaRegImage className="text-purp" />
                            </button>
                            <button className="">
                                <FaMicrophone className="text-purp" />
                            </button>
                            <button className="bg-purp p-2 rounded-full hover:bg-purp/80 transition-all duration-300">
                                <FaPaperPlane className="text-black text-[30px]" />
                            </button>
                        </div>
                    </div>
                </div>
                <p className='text-[13px] my-3 mx-auto text-center font-light'>
                    QChat may display HARSH and inaccurate info, please verify with reliable sources.
                </p>
                <p className='text-purp text-center italic my-2 font-light text-[14px]'>
                    Made with ❤️ by
                    <a href="https://github.com/MicrQ" className='hover:underline'> MicrQ </a>
                    &copy;2025
                </p>
            </div>
        </div>
    );
};

export default Main;
