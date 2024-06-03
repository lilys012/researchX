import OpenAI from "openai";
import { UPSTAGE_API_KEY } from "../../credentials";
import { useEffect, useState } from "react";

const apiKey = UPSTAGE_API_KEY;
const openai = new OpenAI({
  baseURL: 'https://api.upstage.ai/v1/solar',
  apiKey: apiKey,
  dangerouslyAllowBrowser: true
})

export type ChatType = {
  role: string,
  message: string,
}
interface chatProps {
  chatList: ChatType[];
}

  
  function ChatView({chatList}: chatProps) {
    const chatListItems = chatList.map((chat, i)=>
      <li key={`${i}`} className={`chat-element ${chat.role}`}>{chat.message}</li>
  )
  return <ul className="chatview-container">
    {chatListItems}
  </ul>
}

const callGPT = async(content: string) => await openai.chat.completions.create({
  model: 'solar-1-mini-chat',
  messages: [
    {
        role: 'assistant',
        content: content
    }
  ],
  stream: false
});

function GPTInteraction () {
  const [text, setText] = useState<string>('');
  const [chat, setChat] = useState<ChatType[]>([]);

  const onClickSubmit = async ()=>{
    setChat([...chat, {role: 'user', message: text}]);
    setText('');
    await callGPT(text).then(res => {
      setChat([...chat, 
        {role: 'user', message: text},
        {role: 'gpt', message: res.choices[0].message.content || 'ERROR'}
      ])
      console.log(chat)
      console.log(res)
    })
  }

  return (
    <div className="GPTInteraction">
      <div className="chat-container">
        <ChatView chatList={chat} />
      </div>
      <textarea name="gpt-input" id="gpt-input" value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
      <button className="submit" onClick={onClickSubmit}>Ask</button>
    </div>
  )
}
export default GPTInteraction;