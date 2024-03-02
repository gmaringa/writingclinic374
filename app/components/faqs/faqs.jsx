import Link from 'next/link';
import Faq from './faq/faq';
import './faqs.css'
import { FaChevronRight } from 'react-icons/fa';

export default function Faqs() {
    return (
      <div className="faqs">
        <div className="container">
          <div className="faqs_header">
              <div className='faqs_header_desc'>
                  <h1>FAQs</h1>
                  <p>Have questions? Visit our FAQ section for answers to common queries. If you cannot find what you are looking for, feel free to reach out to our support team.</p>
              </div>
              <Link href='/'>View All <FaChevronRight /></Link>
          </div>
          <div className="faqs_container">
              <div className="faqs_queries">
                  <ul>
                    {
                        Faq.query.map((faq) => (
                            <li key={faq.id}>
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </li>
                        ))
                    }
                  </ul>
              </div>
          </div>
        </div>
      </div>
    );
  }