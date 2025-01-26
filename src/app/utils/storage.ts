export const saveMessages = (key: string, messages: string[]) => {
    localStorage.setItem(key, JSON.stringify(messages));
  };
  
  export const getMessages = (key: string): string[] => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  };
  