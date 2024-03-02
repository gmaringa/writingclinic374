import Link from 'next/link';
import './about.css';

export default function About() {
    return (
      <div className='about'>
        <div className="container">
            <div className="about_container">
                <div className="about_left">
                    <h1>Why choose <span>Writing</span>Clinic</h1>
                    <p>Our team of experienced writers holds advanced degrees in diverse academic fields. With backgrounds in Art, Criminology, Marketing, Education, Healthcare, Environmental Studies, Literature, Medicine, Political Science, Geography, History, Statistics, and Engineering, our writers are well-equipped to handle a wide range of academic writing tasks.</p>
                </div>
                <div className="about_right">
                    <p>Read More</p>
                    <Link href='/'>Subjects and Disciplines</Link>
                    <Link href='/'>Quality Assurance</Link>
                    <Link href='/'>Customization and Personalization</Link>
                    <Link href='/'>Pricing Structure</Link>
                    <Link href='/'>Ordering Process</Link>
                    <Link href='/'>Privacy and Confidentiality</Link>
                    <Link href='/'>Revision Policy</Link>
                    <Link href='/'>Communication Channels</Link>
                </div>
            </div>
        </div>
      </div>
    );
  }
  