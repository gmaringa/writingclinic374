import Image from 'next/image';
import { FaPhone } from "react-icons/fa";
import essayImg from '../../../assets/bannerwriting.jpeg'
import './order.css'

export default function Order() {
    return (
      <>
        <div className="order">
            <div className="container">
                <div className="order_container">
                    <div className="order_left">
                        <div className="order_title">
                            <p>I will write essays with perfection</p>
                        </div>
                        <div className="order_img">
                            <Image src={essayImg} alt="order image" />
                        </div>
                        <div className="order_description">
                            <div className="order_about_desc">
                                <p>Exemplifying a mastery of language and critical thinking, my professional essay writing skills are a testament to precision, depth, and creativity. With a keen eye for detail and the ability to articulate complex ideas with clarity, I deliver essays that not only meet academic standards but also captivate and engage readers. My expertise encompasses thorough research, impeccable structure and a commitment to delivering well-crafted, compelling narratives. Trust in my proficiency to transform ideas into articulate essays that have a lasting impression.</p>
                            </div>
                        </div>
                    </div>
                    <div className="order_right">
                        <div className="order_right_header">
                            <p>Your Order</p>
                            <p>US$120</p>
                        </div>
                        <form className="order_right_form">
                            <input type="text" placeholder="Topic/Title eg:Article Review" />
                            <input type="text" placeholder="Referencing Style eg:APA" />
                            <div className="word_count_field">
                                <input type="number" placeholder="Pages (Word Count) eg:275 words" />
                                <p>Words</p>
                            </div>
                            <input type="text" placeholder="Category (Subject Area): eg:Business" />
                            <input type="date" />
                            <textarea placeholder="Add more information, eg: Spacing, Academy..." />
                            <input type="submit" className="order_submit_btn" value="Request to Order" />
                        </form>
                        <button className="order_right_more">
                            <FaPhone style={{marginRight: "20px"}} />
                            <span>Contact me</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }