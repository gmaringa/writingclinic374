import Image from 'next/image';
import './portfolio.css'; 
import EssayImg from '../../assets/essay.png';
import PowerpointImg from '../../assets/powerpoint.png';
import ResumeImg from '../../assets/resume.png';
import ResearchImg from '../../assets/research.png';
import Link from 'next/link';

export default function Portfolio() {
    return (
      <div className='portfolio'>
        <div className="container">
          <div className="portfolio_title">
              <h3>Witness the diversity and quality of our work.</h3>
          </div>
          <div className="portfolio_items" data-aos='fade-left'>
                <Link href='/' className="portfolio_item">
                  <Image src={EssayImg} alt='Portfolio image' />
                  <p>Essays</p>
                </Link>
                <Link href='/' className="portfolio_item">
                  <Image src={PowerpointImg} alt='Portfolio image' />
                  <p>Presentation</p>
                </Link>
                <Link href='/' className="portfolio_item">
                  <Image src={ResumeImg} alt='Portfolio image' />
                  <p>Resumes</p>
                </Link>
                <Link href='/' className="portfolio_item">
                  <Image src={ResearchImg} alt='Portfolio image' />
                  <p>Research Projects</p>
                </Link>
          </div>
        </div>
      </div>
    );
  }
  