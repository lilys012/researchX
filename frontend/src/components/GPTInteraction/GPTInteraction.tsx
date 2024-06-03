import OpenAI from "openai";
import { UPSTAGE_API_KEY } from "../../credentials";
import { useEffect, useState } from "react";
import { ChatCompletionMessageParam } from "openai/resources/chat";

const apiKey = UPSTAGE_API_KEY;
const openai = new OpenAI({
    baseURL: "https://api.upstage.ai/v1/solar",
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
});

// export type ChatType = {
//     role: string;
//     content: string;
// };
interface chatProps {
    chatList: ChatCompletionMessageParam[];
}

function ChatView({ chatList }: chatProps) {
    const chatListItems = chatList.map((chat, i) => (
        <li key={`${i}`} className={`chat-element ${chat.role}`}>
            {String(chat.content)}
        </li>
    ));
    return <ul className="chatview-container">{chatListItems}</ul>;
}

const callGPT = async (content: string, chat: ChatCompletionMessageParam[]) =>
    await openai.chat.completions.create({
        model: "solar-1-mini-chat",
        // messages: [
        //     {
        //         role: "assistant",
        //         content: content,
        //     },
        // ],
        messages: [...chat, { role: "user", content: content }],
        stream: false,
    });

function GPTInteraction() {
    const [text, setText] = useState<string>("");
    const [chat, setChat] = useState<ChatCompletionMessageParam[]>([
        { role: "system", content: "You are a helpful assistant." },
    ]);

    const onClickSubmit = async () => {
        // setChat((prevChat) => {
        //     return [...prevChat, { role: "user", content: text }];
        // });
        // setText("");
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
            console.log(chat);
            console.log(res);
            setText("");
        });
    };

    return (
        <div className="GPTInteraction">
            <div className="chat-container">
                <ChatView chatList={chat} />
            </div>
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
    );
}
export default GPTInteraction;
