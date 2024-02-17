import signature from "../../assets/aboutUs/sign.svg";
const Letter = () => {
    return ( 
        <div className='w-[40vw] min-w-[509px] h-contain min-h-740px bg-white px-8 py-10 text-xs leading-5 text-[#3245A9] font-montserrat'>
            <p className=''>Dear Delegates,</p><br />
            {/* Body of letter */}
            <div className="body">
                <p>As the Secretary General of the IITG Model United Nations, Edition XVI, I am pleased to be hosting you at the IIT Guwahati, during Alcheringa 2024, after two virtual years.</p>
                <br />
                <p>The past two years have been nothing if not a testimony to what type of leadership our world needs. Hearing again and again, “the youth is the future,” we at the IITG Model United Nations strive to provide a platform for these minds of tomorrow to exercise their skills in situations that we face on an international and national level. Given that IITGMUN is organized solely by a team of passionate students from IIT, Guwahati, from different ethnic and academic backgrounds, we strive to bring pressing topics to the table for discussion. Over the years, we have successfully delivered thought-intensive conferences to novice as well as seasoned delegates.</p>
                <br /><p>This year, as we prepare to host our 15th Edition, the contemporary world is plagued by recession, war, and insecurity for the sustenance of mere humanity. Building upon these pressing issues, our team, after intense scrutiny, has come up with namely three agendas, Canvassing Crisis: Getting ahead of economic recession, Deliberating Disarmament: Encouraging non-proliferation of Weapons of Mass destruction, and Redefining Family Laws: Dissecting Matrimonial Laws in India.</p>
                <br /><p>We, as a generation, are not void of opportunities; however, we are often hampered by crises beyond our control. Choices made by the world's leaders usually define the trajectory of the lives of millions of people. May it be a struggle to overcome oppression, war, recession, or pandemic, our world is put to the test time and time again. These leaders guide us through these crises, and we at IITGMUN work hard to provide a platform to build more such leaders to lead us into the future.</p>
                <br /><p>The past two years have been closed within the box of our virtual screens. Today we have the privilege to step out of that box into the world and shake hands with our comrades in our march to the best tomorrow possible. With this thought, I shall leave you, an esteemed group of delegates to deliberate, debate, and draft what you would want our world to look like. Looking forward to seeing you at the IITG campus, “What verse shall yours be?”.</p>
            </div>
            <br />
            <div className='flex h-contain justify-between items-end'>
                {/* Salutations */}
                <div className='flex flex-col h-full'>
                    <p>Suhayl Mahek</p>
                    <p>Secretary General</p>
                    <p>IITGMUN Ed XVI</p>
                </div>
                {/* Signature */}
                <div className='w-[138.4px] h-[79px] flex flex-col'>
                    <img className='z-0 h-[70.3px] w-[75px] mx-auto' src={signature} alt="" />
                    <div className=' text-center'>
                        <hr className='mt-[-12px] mb-2 border-t-[0.72px] opacity-100 border-[#3245A9] z-[-1]'/>
                        <p className='mt-2'>General Secretary</p>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Letter;