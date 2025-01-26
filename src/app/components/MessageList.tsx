'use client';

import styles from '../page.module.css';

interface MessageListProps {
  messages: string[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className={styles.messageList}>
      {messages.map((msg, index) => (
        <p key={index} className={styles.message}>
          {msg}
        </p>
      ))}
    </div>
  );
}
