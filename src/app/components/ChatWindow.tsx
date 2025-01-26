'use client';

import { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import styles from '../page.module.css';

interface ChatWindowProps {
  title: string;
  messages: string[];
  onSend: (message: string) => void;
}

export default function ChatWindow({
  title,
  messages,
  onSend,
}: ChatWindowProps) {
  const [isFlashing, setIsFlashing] = useState(false);

  const handleSend = (message: string) => {
    onSend(message);
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 500);
  };

  return (
    <div
      className={`${styles.chatWindow} ${isFlashing ? styles.flash : ''}`}
    >
      <h2>{title}</h2>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}


