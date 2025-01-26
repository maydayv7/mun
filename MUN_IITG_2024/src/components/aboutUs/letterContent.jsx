import signature from "../../assets/aboutUs/signaturefinal.jpeg";
import samarthletter from "../../assets/aboutUs/samarth20.png";
import letterPolygon from "../../assets/aboutUs/LetterPolygon.png";
import secyImg from "../../assets/aboutUs/secy1.png";
const LetterContent = () => {
  return (
    <>
      <div className="relative min-w-none sm:w-[40vw] sm:min-w-[550px] max-w-[700px] h-contain min-h-740px bg-white mq400:px-4 px-8 py-10 mq400:text-[10px]  text-xs leading-5 text-[#051C46] font-montserrat ml-[min(385px,40vw)] mq950:mx-auto  ">
        <p>Dear Delegates,</p>
        <br />
        {/* Body of letter */}
        <div className="body">
          <p>
            'Be yourself; everyone else is already taken', a timeless quote by
            Oscar Wilde, is something I have lived by and have truly experienced
            firsthand during my time at IITGMUN. Just as being authentic is the
            most vital part of self-growth, we at IITGMUN have always emphasized
            the importance of staying true to our core beliefs and values, while
            also showing tolerance and respect for opinions that differ from our
            own.
          </p>
          <br />
          <p>
            IITGMUN is an experience that extends beyond simulating a UN
            conference; it is a melting pot of ideas, diplomatic alliances, and
            discussions on geopolitics and foreign policies, all driven by the
            passion and belief in making the world a better place.
          </p>
          <br />
          <p>
            As the Secretary-General, it is my absolute honour to welcome each
            of you to this journey. I wish for nothing more than three glorious
            days of hearty debates and meaningful discourse, and above all, the
            weaving of indelible memories and ever-lasting friendships. This
            year, our committees shine a spotlight on issues of profound
            significance, spanning global income inequality, conflicts that have
            shaped our history and future, and the evolving question of
            secularism in India.
          </p>
          <br />
          <p>
            I invite you to immerse yourselves wholeheartedly in this
            experience: think critically, listen deeply, and act with
            compassion. Together, let us make this conference not just about
            solutions, but also about connections, growth and the shared dream
            of a brighter tomorrow.
          </p>
        </div>
        <br />
        <div className="flex h-contain justify-between items-end">
          {/* Salutations */}
          <div>
            Yoshita Banerjee <br />
            Secretary General <br />
            IITGMUN Edition XVII
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
              src={samarthletter}
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
