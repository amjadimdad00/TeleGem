type Messages = {
  SorryMessages: string[];
};

export const getRandomMessage = (messages: Messages): string => {
  const sorryMessages = messages.SorryMessages;
  const randomIndex = Math.floor(Math.random() * sorryMessages.length);
  return sorryMessages[randomIndex];
};
