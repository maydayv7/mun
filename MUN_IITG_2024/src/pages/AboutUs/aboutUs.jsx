import Letter from "../../components/Letter/letter";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader/pageHeader";
import styles from "./aboutUsStyles.module.css";

const AboutUs = () => {
  return (
    <div className="w-full">
      <Navbar />
      <PageHeader title={"About Us"} color={"#A0EDC9"} />
      {/* <div className={styles.titleContainer}>Hello</div> */}
      <div className={styles.description}>
        <p className={styles.content}>
          The MUN, or the Model United Nations, is a simulation of the actual
          UN. The participants pretend to represent a nation, and come to
          together to discuss the very same issues being debated upon in the UN.
          This gives a normal person the opportunity to know what’s its like to
          stand for something more than himself/herself, and to experience the
          complicated the verbal dance and that politicians and delegates take
          part in everyday. The MUN is a conclave for ideation by the fresh
          minds of our nation, to brainstorm solutions to problems plaguing our
          world. Participants work through the tenuous relationships between
          nations as they deliberate towards a resolution – and they get to look
          nice in a suit and tie while they do it!
        </p>
      </div>
      <div className="bg-[#E0F9EE] p-9 max-[400px]:p-2 w-full relative">
        <div className="flex flex-row w-full relative">
          <p className="text-[#60E1A4] bg-[#E0F9EE] max-[350px]:text-[20px] text-[28px] sm:text-[32px] md:text-[40px] font-bold z-1 pr-4">
            A Letter from our Secretary General
          </p>
          <hr className=" border-t-[2px] opacity-100 border-[#60E1A45E] w-[95%] absolute text-4xl mt-[22px] sm:mt-[26px] md:mt-[32px]" />
        </div>
        <div className="flex flex-col items-center mx-0 my-4">
          {/* <LetterImg img={secyImg} color={'#60E1A4'} /> */}
          <Letter />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
