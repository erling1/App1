import useAutosize from './hooks/useAutosize';
import sendIcon from './assets/send.svg';
import './CSS/AI_Chat_input.css'

function ChatInput({ newMessage, isLoading, setNewMessage, submitNewMessage }) {
  const textareaRef = useAutosize(newMessage);

  function handleKeyDown(e) {
    if(e.keyCode === 13 && !e.shiftKey && !isLoading) {
      e.preventDefault();
      submitNewMessage();
    }
  }
  
  return(
    
    <div className='chat-input'>
      <textarea
        ref={textareaRef}
        rows='1'
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={submitNewMessage}>
        <img src={sendIcon} alt='send' />
      </button>
    </div>
  );
}

export default ChatInput;