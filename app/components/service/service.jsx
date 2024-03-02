import Image from 'next/image';

import EssayImg from '../../assets/essay.png';
import PowerpointImg from '../../assets/pics/powerpoint.png';
import ResumeImg from '../../assets/pics/resume.png';
import ResearchImg from '../../assets/pics/research.png';

import './service.css';
import '../testimonials/testimonials.css'

export default function Service() {
    return (
      <div className='service_container'>
        <div className="container">
                <div className="service">
                    <Image src={EssayImg} alt='service image' />

                    <div className='service_detail'>
                        <p>Essays</p>
                        <p>
                        Exemplifying a mastery of language and critical thinking, my professional essay writing skills are a testament to precision, depth,
                        and creativity. With a keen eye for detail and the ability to articulate complex ideas with clarity, I deliver essays that not only
                        meet academic standards but also captivate and engage readers. My expertise encompasses thorough research, impeccable 
                        structure and a commitment to delivering well-crafted, compelling narratives. Trust in my proficiency to transform ideas into
                        articulate essays that have a lasting impression.
                        </p>
                        <button className='buy_service_btn'>Buy Service</button>
                    </div>
                </div>
                <div className="service">
                    <Image src={PowerpointImg} alt='service image' />

                    <div className='service_detail'>
                        <p>Presentations</p>
                        <p>
                        Exemplifying a mastery of language and critical thinking, my professional essay writing skills are a testament to precision, depth,
                        and creativity. With a keen eye for detail and the ability to articulate complex ideas with clarity, I deliver essays that not only
                        meet academic standards but also captivate and engage readers. My expertise encompasses thorough research, impeccable 
                        structure and a commitment to delivering well-crafted, compelling narratives. Trust in my proficiency to transform ideas into
                        articulate essays that have a lasting impression.
                        </p>
                        <button className='buy_service_btn'>Buy Service</button>
                    </div>
                </div>
                <div className="service">
                    <Image src={ResumeImg} alt='service image' />

                    <div className='service_detail'>
                        <p>Resume</p>
                        <p>
                        Exemplifying a mastery of language and critical thinking, my professional essay writing skills are a testament to precision, depth,
                        and creativity. With a keen eye for detail and the ability to articulate complex ideas with clarity, I deliver essays that not only
                        meet academic standards but also captivate and engage readers. My expertise encompasses thorough research, impeccable 
                        structure and a commitment to delivering well-crafted, compelling narratives. Trust in my proficiency to transform ideas into
                        articulate essays that have a lasting impression.
                        </p>
                        <button className='buy_service_btn'>Buy Service</button>
                    </div>
                </div>
                <div className="service">
                    <Image src={ResearchImg} alt='service image' />

                    <div className='service_detail'>
                        <p>Research</p>
                        <p>
                        Exemplifying a mastery of language and critical thinking, my professional essay writing skills are a testament to precision, depth,
                        and creativity. With a keen eye for detail and the ability to articulate complex ideas with clarity, I deliver essays that not only
                        meet academic standards but also captivate and engage readers. My expertise encompasses thorough research, impeccable 
                        structure and a commitment to delivering well-crafted, compelling narratives. Trust in my proficiency to transform ideas into
                        articulate essays that have a lasting impression.
                        </p>
                        <button className='buy_service_btn'>Buy Service</button>
                    </div>
                </div>
        </div>
      </div>
    );
  }
  