type messageType = {
  title: string;
  icon: string;
};

function randomDoneMessageGenerator(): messageType {
  const doneMessages: messageType[] = [
    { title: "ایول تموم شد", icon: "👏" },
    { title: "هوراا", icon: "🎉" },
    { title: "دیدی کاری نداشت؟", icon: "😅" },
  ];
  const randomMessage =
    doneMessages[Math.floor(Math.random() * doneMessages.length)];

  return randomMessage;
}

export default randomDoneMessageGenerator;
