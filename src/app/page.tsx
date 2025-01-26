'use client';

import { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import styles from './page.module.css';

export default function Home() {
  const [leftMessages, setLeftMessages] = useState<string[]>([]);
  const [rightMessages, setRightMessages] = useState<string[]>([]);

  // Load messages from localStorage when the component mounts
  useEffect(() => {
    const savedLeftMessages = localStorage.getItem('leftMessages');
    const savedRightMessages = localStorage.getItem('rightMessages');

    if (savedLeftMessages) {
      setLeftMessages(JSON.parse(savedLeftMessages));
    }
    if (savedRightMessages) {
      setRightMessages(JSON.parse(savedRightMessages));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('leftMessages', JSON.stringify(leftMessages));
  }, [leftMessages]);

  useEffect(() => {
    localStorage.setItem('rightMessages', JSON.stringify(rightMessages));
  }, [rightMessages]);

  const handleMessage = (sender: 'left' | 'right', message: string) => {
    if (sender === 'left') {
      setLeftMessages([...leftMessages, message]);
      setRightMessages([...rightMessages, `Response: ${message}`]);
    } else {
      setRightMessages([...rightMessages, message]);
      setLeftMessages([...leftMessages, `Response: ${message}`]);
    }
  };

  return (
    <div className={styles.container}>
      <ChatWindow
        title="Left Chat"
        messages={leftMessages}
        onSend={(message) => handleMessage('left', message)}
      />
      <ChatWindow
        title="Right Chat"
        messages={rightMessages}
        onSend={(message) => handleMessage('right', message)}
      />
    </div>
  );
}

