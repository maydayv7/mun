const TeamCard = ({name,img}) => {
    return ( 
        <div className="w-[80%] sm:w-full shadow-line flex flex-col justify-center">
        <div className="w-[80%] m-auto sm:w-full grayscale flex flex-col h-full items-center justify-end origin-bottom transition-all ease-in-out delay-150 duration-300 cursor-pointer hover:scale-[120%] hover:grayscale-0">
            <img className="w-[161px]" src={img} />
            
        </div>
        {/* <hr className="w-[90%] h-px " /> */}
        </div>
     );
}
 
export default TeamCard;