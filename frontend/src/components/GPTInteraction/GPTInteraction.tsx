import OpenAI from "openai";
import { UPSTAGE_API_KEY } from "../../credentials";
import { useEffect, useState } from "react";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import './GPTInteraction.scss';

const apiKey = UPSTAGE_API_KEY;
const openai = new OpenAI({
    baseURL: "https://api.upstage.ai/v1/solar",
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
});

interface chatProps {
    chatList: ChatCompletionMessageParam[];
}

function ChatView({ chatList }: chatProps) {
    const chatListItems = chatList.slice(1).map((chat, i) => (
        <li key={`${i}`} className={`chat-element ${chat.role}`}>
            {String(chat.content)}
        </li>
    ));
    return <ul className="chatview-container">{chatListItems}</ul>;
}

const callGPT = async (content: string, chat: ChatCompletionMessageParam[]) =>
    await openai.chat.completions.create({
        model: "solar-1-mini-chat",
        messages: [...chat, { role: "user", content: content }],
        stream: false,
    });

function GPTInteraction({ tweet } : {tweet: string|null}) {
        
    const [text, setText] = useState<string>("");
    const instruction = `${tweet} \n\n This is a tweet that I'm reading. I'm going to ask questions related to this.`
    const [chat, setChat] = useState<ChatCompletionMessageParam[]>([
        {role: "user", content: instruction},
    ]);
    // const messages = [{role: "user", content: instruction}]

    const onClickSubmit = async () => {

        await callGPT(text, chat).then((res) => {
            setChat((prevChat) => {
                return [
                    ...prevChat,
                    { role: "user", content: text },
                    {
                        role: "assistant",
                        content: res.choices[0].message.content || "ERROR",
                    },
                ];
            });
            setText("");
        });
    };

    return (
        <div className="GPTInteraction">
            <div className="chat-container">
                <ChatView chatList={chat} />
            </div>
            <div className="chat-input">
                <textarea
                    name="gpt-input"
                    id="gpt-input"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                ></textarea>
                <button className="submit" onClick={onClickSubmit}>
                    Ask
                </button>
            </div>
        </div>
    );
}
export default GPTInteraction;
