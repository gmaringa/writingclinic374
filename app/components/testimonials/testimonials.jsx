import Image from 'next/image';
import Testimonial from './testimonial/testimonial';
import './testimonials.css';

export default function Testimonials() {
    return (
      <div className='testimonials'>
        <div className="container">
          <div className="testimonials_title">
            <h1>Client Reviews</h1>
            <p>Do not just take our word for it—read what our satisfied clients have to say. Check out our testimonials to see the positive impact we have had on the academic journeys of others.</p>
          </div>
          <div className="testimonials_container">
            {
               Testimonial.testimony.map((review) => (
                    <div className='review_container' key={review.id}>
                            <div className='review'>
                                <Image src={review.img} className='review_img' alt='Review Image' width={36} height={36} />
                                <div className='review_start'>
                                    <h3 className='review_name'>{review.name}</h3>
                                    <p className='review_country'>{review.country}</p>
                                </div>
                            </div>
                            <p className='review_details'>{review.details}</p>
                            <div className="border_separator"></div>
                        </div>
               ))
            }
          </div>
        </div>
      </div>
    );
  }
  