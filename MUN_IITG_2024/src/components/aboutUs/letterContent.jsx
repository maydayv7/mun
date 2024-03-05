import signature from "../../assets/aboutUs/signaturefinal.jpeg";
import letterPolygon from "../../assets/aboutUs/LetterPolygon.png";
import secyImg from "../../assets/aboutUs/secy1.png";
const LetterContent = () => {
  return (
    <>
    
      <div className="relative min-w-none sm:w-[40vw] sm:min-w-[550px] max-w-[700px] h-contain min-h-740px bg-white mq400:px-4 px-8 py-10 mq400:text-[10px]  text-xs leading-5 text-[#3245A9] font-montserrat ml-[min(385px,40vw)] mq950:mx-auto  ">
        <p>Dear Delegates,</p>
        <br />
        {/* Body of letter */}
        <div className="body">
          <p>
          It is an honour to welcome you to Edition XVI of the IIT Guwahati Model United Nations
           on behalf of the Secretariat. We are thrilled to host you at our conference and promise to deliver an enriching learning experience.
          </p>
          <br />
          <p>
          Driven by our vision to grow, this year we bring forth four committees designed to shed light on 
          immediate issues that affect us in our everyday lives. Whether about the plight of the refugees, 
          the protection of our seas, the integrity of our elections, or ensuring that we learn from the 
          mistakes in our past, the agendas have been crafted with great care to allow the delegates to 
          think about and discuss every aspect of the problems and voice their opinions irrespective of 
          their background, age, or experience.
          </p>
          <br />
          <p>
          At the IITGMUN, we believe that 'No matter what anybody tells you, 
          words and ideas can change the world.' These words hold, especially when you, 
          our future leaders, put your minds together and work in collaboration, committed 
          to arrive at amicable solutions. However, this requires due research, preparation, 
          and analysis of these challenges while navigating the realms of diplomacy, foreign policy,
           alliances, and allegiances, keeping in mind the ultimate goal of ensuring a better future.
            And even though it is a competition, at the end of the day, it is these skills that you 
            should take home from an exercise such as this simulation of the institutions that play 
            such a crucial part in shaping our lives.
          </p>
          <br />
          <p>
          The team has worked tirelessly to ensure that the conference is enjoyable,
           just as it is educational. We strive to allow you to meet like-minded individuals
            who share your passion for solving problems and those who can help you grow. But 
            I would also ask you to see the upcoming three days as an opportunity to make friends 
            and memories that will last a lifetime.
          </p>
          <br />
          <p>
          I wish you all the best, and we look forward to a successful conference with all of you!
          </p>
        </div>
        <br />
        <div className="flex h-contain justify-between items-end">
          {/* Salutations */}
          <div>
            Samarth Jhunjhunwala <br />Secretary General <br />IITGMUN Ed XVI
          </div>
          {/* Signature */}
          <div className="w-[138.4px] h-[79px] flex flex-col">
            {/* <img className="z-0 h-[70.3px] w-[75px] mx-auto bg-white-200" src={signature} />
            <div className=" text-center">
              <hr className="mt-[-12px] mb-2 border-t-[0.72px] opacity-100 border-[#3245A9] z-[-1]" />
              <p className="mt-2">General Secretary</p>
            </div> */}
          </div>
          {/* Secy Image */}
          <div className="absolute mq950:hidden bottom-0 -left-[min(385px,40vw)] z-1 w-[40vw]  ">
            <img
              className="w-[40vw] max-w-[400px] min-w-[250px] drop-shadow-[10px_0px_0px_#60E1A4] "
              src={secyImg}
            />
            <img
              className="absolute left-0 bottom-0 w-[35vw] max-w-[350px] min-w-[200px]"
              src={letterPolygon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LetterContent;
