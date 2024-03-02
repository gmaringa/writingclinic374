"use client"
import { useState } from 'react';
import './conversation.css'

export default function Conversation() {
  const [isAdmin, setIsAdmin] = useState(false);
    return (
      <div className="conversation">
        <div className="container">
            <div className="conversation_container">
              <div className="conversation_header">
                  <h1>Conversation</h1>
                  {
                    !isAdmin? (
                      <p>Talk to the seller</p>
                    ) : (
                      <p>Talk with your clients</p>
                    )
                  }
              </div>
              <main>
                <div className="conversation_left">
                      <p>Conversation Left</p>  
                </div>
                <div className="conversation_right">
                  <div className="message_area">
                      <div className="left_message">
                        <p>Left Message</p>  
                      </div>
                      <div className="right_message">
                        <p>Right Message</p>  
                      </div>
                  </div>
                  <form>
                      <input type="text" placeholder='Enter your message...' />
                      <input type="submit" value='Send' />
                  </form>
                </div>
              </main>
            </div>
        </div>
      </div>
    );
  }