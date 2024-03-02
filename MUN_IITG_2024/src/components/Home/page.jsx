import "./mun.css";
import "./position.css";
import logo_1 from "./resources/Group 112.png";
import logo_2 from "./resources/Group 34471.png";
import logo_3 from "./resources/Group 34473.png";
import logo_4 from "./resources/Wilson.png";
import lok_sabha from "./resources/Group 111.png";
import img_1 from "./resources/img_1.png";
import img_2 from "./resources/img_2.png";
import img_3 from "./resources/img_4.png";
import img_4 from "./resources/img_3.png";
import league from "./resources/image 19.png";
import left_point from "./resources/left_point.png";
import right_point from "./resources/right_point.png";
import rectangle_1 from "./resources/Rectangle 12.png";
import male_profile from "./resources/Male profile.png";
import green_frame from "./resources/green_frame.png";
import grey_frame from "./resources/grey_frame.png";
import blue_frame from "./resources/blue_frame.png";
import orange_frame from "./resources/orange_frame.png";
import pink_left from "./resources/pink_left.png";
import pink_right from "./resources/pink_right.png";
import Navbar from '../general/Navbar'
import { useState } from "react";

const Mun = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // Define a function to handle left arrow click
    const handleLeftArrowClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? Data.length - 1 : prevIndex - 1));
    };

    // Define a function to handle right arrow click
    const handleRightArrowClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === Data.length - 1 ? 0 : prevIndex + 1));
    };
    return (
       
    
        <div className="mun_container">
            <Navbar/>
            <div className="logo_container">
                <div className="color_logo color_logo_1"></div>
                <div className="color_logo color_logo_2"></div>
                <div className="color_logo color_logo_3"></div>
                <div className="color_logo color_logo_4"></div>
                <img src={logo_1} alt="" className="img_logo img_logo_1" />
                <img src={logo_2} alt="" className="img_logo img_logo_2" />
                <img src={logo_4} alt="" className="img_logo img_logo_4" />
                <img src={logo_3} alt="" className="img_logo img_logo_3" />
                <div className="img_logo img_logo_5">
                    <div className="rel_box">
                        <p className="font_logo cabi_font_1">IITGMUN</p>
                        <p className="font_logo cabi_font_2">2024</p>
                        <p className="font_logo mons_font_1">Edition XVI</p>
                        <p className="font_logo mons_font_2">8th - 10th March 2024</p>
                    </div>
                </div>

            </div>
            <div className="quotes_container">
                <div className="quotes_box">
                    <p className="font_cal mons_font line_1">"That the powerful play goes on, and you may contribute a verse."</p>
                    <p className="font_cal cabi_font line_2">"What verse shall be yours?"</p>
                    <p className="font_cal mons_font line_3">O me! O life!, Walt Whitman</p>
                    <p className="font_cal mons_font line_4">Dead Poets society</p>
                </div>
            </div>
            <div className="comm_title_box">
                <h1 className="cabi_font our_comm all_font">Our Committees</h1>
              
            </div>
            <div className="comm_post_container">
                <div className="comm_comp">
                    <div className="left_box">
                        <p className="comp_title cabi_font all_font cf1">Lok Sabha</p>
                        <img src={lok_sabha} className="lok_sabha" alt="" />
                    </div>
                    <div className="right_box">
                        <div className="center_box">
                            <p className="mons_font comp_lorem all_font">Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Tempora aliquid excepturi modi,
                                nesciunt veritatis facere, fugiat quas nam cum quo odio at! Hic, voluptatibus voluptatum.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, dicta!

                            </p>
                            <h1 className="cabi_font head_lorem cf1 all_font">Election Evolution</h1>
                            <p className="mons_font comp_lorem lower_para all_font">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Optio ratione accusamus, perspiciatis dolorem ipsa laborum porro
                                hic placeat aliquid? Repudiandae, iste libero. Sapiente, soluta dolore dolorem
                                distinctio nisi sequi earum tempora sunt fuga. Possimus qui, odio a hic perferendis
                                repellat nobis consequatur exercitationem incidunt necessitatibus.
                            </p>
                        </div>
                        <p className="apply_button mons_font all_font">APPLY!</p>
                        <img src={img_1} className="img_1" alt="" />
                        <img src={img_2} className="img_2" alt="" />
                    </div>
                </div>
                <div className="comm_comp">
                    <div className="left_box">
                        <p className="comp_title_2 cabi_font all_font cf2">League of Nations</p>
                        <img src={league} className="league" alt="" />
                    </div>
                    <div className="right_box">
                        <div className="center_box">
                            <p className="mons_font comp_lorem all_font">Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Tempora aliquid excepturi modi,
                                nesciunt veritatis facere, fugiat quas nam cum quo odio at! Hic, voluptatibus voluptatum.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, dicta!

                            </p>
                            <h1 className="cabi_font head_lorem cf2 all_font">Election Evolution</h1>
                            <p className="mons_font comp_lorem lower_para all_font">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Optio ratione accusamus, perspiciatis dolorem ipsa laborum porro
                                hic placeat aliquid? Repudiandae, iste libero. Sapiente, soluta dolore dolorem
                                distinctio nisi sequi earum tempora sunt fuga. Possimus qui, odio a hic perferendis
                                repellat nobis consequatur exercitationem incidunt necessitatibus.
                            </p>
                        </div>
                        <p className="apply_button mons_font all_font bg2">APPLY!</p>
                        <img src={img_3} className="img_1" alt="" />
                        <img src={img_4} className="img_2" alt="" />
                    </div>
                </div>
                <div className="comm_comp">
                    <div className="left_box">
                        <p className="comp_title_2 cabi_font all_font cf1">League of Nations</p>
                        <img src={league} className="league" alt="" />
                    </div>
                    <div className="right_box">
                        <div className="center_box">
                            <p className="mons_font comp_lorem all_font">Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Tempora aliquid excepturi modi,
                                nesciunt veritatis facere, fugiat quas nam cum quo odio at! Hic, voluptatibus voluptatum.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, dicta!

                            </p>
                            <h1 className="cabi_font head_lorem cf1 all_font">Election Evolution</h1>
                            <p className="mons_font comp_lorem lower_para all_font">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Optio ratione accusamus, perspiciatis dolorem ipsa laborum porro
                                hic placeat aliquid? Repudiandae, iste libero. Sapiente, soluta dolore dolorem
                                distinctio nisi sequi earum tempora sunt fuga. Possimus qui, odio a hic perferendis
                                repellat nobis consequatur exercitationem incidunt necessitatibus.
                            </p>
                        </div>
                        <p className="apply_button mons_font all_font">APPLY!</p>
                    </div>
                </div>
                <div className="comm_comp">
                    <div className="left_box">
                        <p className="comp_title_2 cabi_font all_font cf2">League of Nations</p>
                        <img src={league} className="league" alt="" />
                    </div>
                    <div className="right_box">
                        <div className="center_box">
                            <p className="mons_font comp_lorem all_font">Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Tempora aliquid excepturi modi,
                                nesciunt veritatis facere, fugiat quas nam cum quo odio at! Hic, voluptatibus voluptatum.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, dicta!
                            </p>
                            <h1 className="cabi_font head_lorem cf2 all_font">Beyond bork bord</h1>
                            <p className="mons_font comp_lorem lower_para all_font">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Optio ratione accusamus, perspiciatis dolorem ipsa laborum porro
                                hic placeat aliquid? Repudiandae, iste libero. Sapiente, soluta dolore dolorem
                                distinctio nisi sequi earum tempora sunt fuga. Possimus qui, odio a hic perferendis
                                repellat nobis consequatur exercitationem incidunt necessitatibus.
                            </p>
                        </div>
                        <p className="apply_button mons_font all_font bg2">APPLY!</p>
                    </div>
                </div>
            </div>
            <div className="pie_chart_container">
                <div className="align_center pie_circle_1">
                    <p className="cabi_font sep_class_1">560+</p>
                    <div className="line_box_1 line_box">
                        <div className="zero_line"></div>
                        <h2 className="heading_line mons_font all_font ff_1">Delegates</h2>
                        <p className="para_line mons_font all_font">from all over India</p>
                    </div>
                </div>
                <div className="align_center pie_circle_2">
                    <p className="cabi_font sep_class_2">35+</p>
                    <div className="line_box_2 line_box">
                        <div className="zero_line"></div>
                        <h2 className="heading_line mons_font all_font">Executives</h2>
                        <p className="para_line mons_font all_font ff_2">overall</p>
                    </div>
                </div>
                <div className="align_center pie_circle_3">
                    <p className="cabi_font sep_class_3">21+</p>
                    <div className="line_box_3 line_box">
                        <div className="zero_line"></div>
                        <h2 className="heading_line mons_font all_font ff_3">International Presses</h2>
                        <p className="para_line mons_font all_font">from country and beyond</p>
                    </div>
                </div>
            </div>
            <div className="comm_title_box">
                <h1 className="cabi_font our_comm all_font">Reviews</h1>
                
            </div>
            <div className="reviews_container">
                <img src={left_point} className="left_point pointer" alt="" onClick={handleLeftArrowClick}/>
                <div className="reviews_box">
                    <div className="review_card_cat_4 position_l3">
                        <img src={Data[currentIndex].image} className="rectangle_4" alt="" />
                        <img src={Data[currentIndex].profileImage} className="male_profile_4" alt="" />
                        <div className="bio_heading_4">
                            <h2 className="mons_font cf2 review_f_size_4 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_4 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_4">
                            <p className="mons_font cf2 review_f_size_4 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>
                    </div>
                    <div className="review_card_cat_3 position_l2">
                        <img src={Data[currentIndex+1].image} className="rectangle_3" alt="" />
                        <img src={Data[currentIndex+1].profileImage} className="male_profile_3" alt="" />
                        <div className="bio_heading_3">
                            <h2 className="mons_font cf2 review_f_size_3 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_3 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_3">
                            <p className="mons_font cf2 review_f_size_3 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>
                    </div>
                    <div className="review_card_cat_2 position_l1">
                        <img src={Data[currentIndex+2].image} className="rectangle_2" alt="" />
                        <img src={Data[currentIndex+3].profileImage} className="male_profile_2" alt="" />
                        <div className="bio_heading_2">
                            <h2 className="mons_font cf2 review_f_size_2 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_2 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_2">
                            <p className="mons_font cf2 review_f_size_2 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>     
                    </div>
                    <div className="review_card_cat_1">
                        <img src={Data[currentIndex+3].image} className="rectangle" alt="" />
                        <img src={Data[currentIndex+3].profileImage} className="male_profile" alt="" />
                        <div className="bio_heading">
                            <h2 className="mons_font cf2 review_f_size all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size all_font">Delegate</p>
                        </div>
                        <div className="comment">
                            <p className="mons_font cf2 review_f_size all_font">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>
                        <div className="stars_box"></div>
                    </div>
                    <div className="review_card_cat_2 position_r1">
                        <img src={grey_frame} className="rectangle_2" alt="" />
                        <img src={male_profile} className="male_profile_2" alt="" />      
                        <div className="bio_heading_2">
                            <h2 className="mons_font cf2 review_f_size_2 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_2 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_2">
                            <p className="mons_font cf2 review_f_size_2 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>   
                    </div>
                    <div className="review_card_cat_3 position_r2">
                        <img src={orange_frame} className="rectangle_3" alt="" />
                        <img src={male_profile} className="male_profile_3" alt="" /> 
                        <div className="bio_heading_3">
                            <h2 className="mons_font cf2 review_f_size_3 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_3 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_3">
                            <p className="mons_font cf2 review_f_size_3 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>
                    </div>
                    <div className="review_card_cat_4 position_r3">
                        <img src={pink_right} className="rectangle_4" alt="" />
                        <img src={male_profile} className="male_profile_4" alt="" />  
                        <div className="bio_heading_4">
                            <h2 className="mons_font cf2 review_f_size_4 all_font">Vishwaprasanna Hariharan</h2>
                            <p className="mons_font cf2 review_f_size_4 all_font boldness">Delegate</p>
                        </div>
                        <div className="comment_4">
                            <p className="mons_font cf2 review_f_size_4 all_font boldness">"It's a really amazing platform to learn not only about the affairs of
                                the world but also about how to articulate your thoughts and put them into words."
                            </p>
                        </div>                      
                    </div>
                </div>
                <img src={right_point} className="right_point pointer" alt="" onClick={handleRightArrowClick}/>
            </div> 
          
        </div>
    );
}


const Data = [
    {
      image: pink_right,
      profileImage: male_profile,
      title : "Vishwaprasanna Hariharan",
      role: "Delegate",
      comment: "It's a really amazing platform to learn not only about the affairs of the world but also about how to articulate your thoughts and put them into words."
    },
    // Add more review objects as needed
 
  {
    image: orange_frame,
    profileImage: male_profile,
    title: "Vishwaprasanna Hariharan",
    role: "Delegate",
    comment: "It's a really amazing platform to learn not only about the affairs of the world but also about how to articulate your thoughts and put them into words."
  },
  {
    image: green_frame,
    profileImage: male_profile,
    title: "Vishwaprasanna Hariharan",
    role: "Delegate",
    comment: "It's a really amazing platform to learn not only about the affairs of the world but also about how to articulate your thoughts and put them into words."
  },
  {
    image: grey_frame,
    profileImage: male_profile,
    title: "Vishwaprasanna Hariharan",
    role: "Delegate",
    comment: "It's a really amazing platform to learn not only about the affairs of the world but also about how to articulate your thoughts and put them into words."
  },
  {
    image: rectangle_1,
    profileImage: male_profile,
    title: "Vishwaprasanna Hariharan",
    role: "Delegate",
    comment: "It's a really amazing platform to learn not only about the affairs of the world but also about how to articulate your thoughts and put them into words."
  },
];
export default Mun;