import SectionHeading from "../general/sectionHeading";
import LetterContent from "./letterContent";
const Letter = () => {
    return ( 
        <div className="bg-[#E0F9EE] w-full p-9 max-letter:px-4 relative">
            <SectionHeading title={'A Letter from our Secretary General'} color={'#60E1A4'} />
            <div className="flex flex-col items-center mx-0 my-4 ">
            {/* <LetterImg img={secyImg} color={'#60E1A4'} /> */}
            <LetterContent />
            </div>
      </div>
     );
}
 
export default Letter;