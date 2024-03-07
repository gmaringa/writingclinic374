"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AllFaqs from './faq/all'
import Faq from './faq/faq';
import './faqs.css'
import { FaChevronRight } from 'react-icons/fa';

export default function Faqs() {
  const pathname = usePathname()

    return (
      <div className="faqs">
        <div className="container">
          <div className="faqs_header">
              <h1>FAQs</h1>
                  {pathname === '/' && (
                    <div className='faqs_header_desc'>
                        <p>Have questions? Visit our FAQ section for answers to common queries. If you cannot find what you are looking for, feel free to reach out to our support team.</p>
                        <Link href='/about/#faqs'>View All <FaChevronRight /></Link>
                    </div>
                  )}
          </div>
          <div className="faqs_container">
              <div className="faqs_queries">
                  <ul>
                    {
                        pathname === '/' ? (
                          <>
                            {
                              Faq.query.map((faq) => (
                                <li key={faq.id}>
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </li>
                              ))
                            }
                          </>
                        ) : (
                          <>
                            {
                              AllFaqs.query.map((faq) => (
                                <li id='faqs' key={faq.id}>
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </li>
                              ))
                            }
                          </>
                        )
                    }
                  </ul>
              </div>
          </div>
        </div>
      </div>
    );
  }