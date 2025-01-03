import Markdown from 'react-markdown';
import useAutoScroll from './hooks/useAutoScroll';
import Spinner from './components/Spinner';
import userIcon from './assets/user.svg';
import errorIcon from './assets/error.svg';

function ChatMessages({ messages, isLoading }) {
    const scrollContentRef = useAutoScroll(isLoading);
    
    return (
      <div ref={scrollContentRef}>
        {messages.map(({ role, content, loading, error }, idx) => (
          <div key={idx}>
            
            <div>
              <div>
                {(loading && !content) ? <Spinner />
                  : (role === 'assistant')
                    ? <Markdown>{content}</Markdown>
                    : <div>{content}</div>
                }
              </div>
              {error && (
                <div>
                  <img src={errorIcon} alt='error icon' />
                  <span>Error generating the response</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ChatMessages;