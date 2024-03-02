import Details from "./details";

const TeamCard = ({name,position,socialMedia,img}) => {
    return ( 
        <div className="lg:[&>*:nth-child(even)]:opacity-0 [&>*:nth-child(even)]:hover:opacity-100 lg:[&>*:nth-child(odd)]:grayscale [&>*:nth-child(odd)]:origin-bottom [&>*:nth-child(odd)]:transition-all [&>*:nth-child(odd)]:ease-in-out [&>*:nth-child(odd)]:delay-150 [&>*:nth-child(odd)]:duration-300 lg:[&>*:nth-child(odd)]:hover:scale-[120%] [&>*:nth-child(odd)]:hover:grayscale-0 ">
            <div className="w-[80%] sm:w-full shadow-lineLight sm:shadow-line flex flex-col justify-center">
                
                <div className="w-[80%] m-auto sm:w-full flex flex-col h-full items-center justify-end ">
                    <img className="w-[161px]" src={img} />
                </div>
            {/* <hr className="w-[90%] h-px " /> */}
            </div>
            <div className="transition-all ease-in-out delay-150 duration-300 w-full">
                    <Details name={name} position={position} socialMedia={socialMedia} />
            </div>
        </div>
     );
}
 
export default TeamCard;