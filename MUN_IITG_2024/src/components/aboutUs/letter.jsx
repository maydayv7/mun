import LetterContent from "./letterContent";
const Letter = () => {
    return ( 
        <div className="bg-[#E0F9EE] w-full p-9 max-letter:px-4 relative">
            <div className="flex flex-row w-full relative align-middle item-center justify-center">
            <p className="text-[#60E1A4] mobile:text-nowrap max-[350px]:text-[12px] max-mobile:text-[22px] text-[28px] sm:text-[32px] md:text-[40px] font-raleway font-bold z-1 pr-4">
                A Letter from our Secretary General
            </p>
            <hr className="border-t-[2px] opacity-100 border-[#60E1A45E] w-full text-4xl max-[350px]:mt-8px max-mobile:mt-[45px] mt-[22px] sm:mt-[26px] md:mt-[32px]" />
            </div>
            <div className="flex flex-col items-center mx-0 my-4 ">
            {/* <LetterImg img={secyImg} color={'#60E1A4'} /> */}
            <LetterContent />
            </div>
      </div>
     );
}
 
export default Letter;