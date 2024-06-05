import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";
import { PostType } from "../../store/slices/post";
const { removeStopwords } = require("stopword");

interface WordType {
    text: string;
    value: number;
}

function WordCloud({
    setCurKeyword,
    posts,
}: {
    setCurKeyword: React.Dispatch<React.SetStateAction<string>>;
    posts: PostType[];
}) {
    const processContent = (posts: PostType[]) => {
        const allContent = posts.map((post) => post.content).join(" ");
        let words = allContent.split(/\s+/);
        words = removeStopwords(words);
        const wordFrequencies = words.reduce<Record<string, number>>(
            (freq, word) => {
                if (!freq[word]) {
                    freq[word] = 0;
                }
                freq[word] += 1;
                return freq;
            },
            {}
        );

        return Object.keys(wordFrequencies).map((word) => ({
            text: word,
            value: wordFrequencies[word],
        }));
    };
    const [words, setWords] = useState<WordType[]>([]);
    useEffect(() => {
        setWords(processContent(posts));
    }, [posts]);

    const callbacks = {
        onWordClick: (word: { text: string; value: number }) =>
            setCurKeyword(word.text),
        // onWordMouseOut: getCallback("onWordMouseOut"),
        // onWordMouseOver: getCallback("onWordMouseOver"),
        getWordTooltip: (word: { text: string; value: number }) =>
            `${word.text} (${word.value})`,
    };

    return (
        <div style={{ height: 230, width: 500 }}>
            <ReactWordcloud callbacks={callbacks} words={words} />
        </div>
    );
}
export default WordCloud;
