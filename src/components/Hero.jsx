import styles from "../style";
import { discount, robot } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col lg:-mt-20`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[54px] text-[40px] text-white ss:leading-[50.8px] leading-[75px]">
          Custom Product & <br className="sm:block hidden" />{" "}
            <span className="text-gradient">
            Software Development</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
       
             


          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[51px] text-[40px] text-white ss:leading-[50.8px] leading-[50px] w-full">
        Focused On Your Success
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nulla distinctio aliquid quisquam, placeat autem?
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>
    </section>
  );
};

export default Hero;
