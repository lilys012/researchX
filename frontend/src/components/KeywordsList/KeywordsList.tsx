import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { KeywordType, selectKeyword } from "../../store/slices/keyword";
import { useSelector } from "react-redux";
import "./KeywordsList.scss";

function KeywordsList({
    keywordId,
    keywords,
    setCurKeyword,
}: {
    keywordId: number;
    keywords: KeywordType[];
    setCurKeyword: React.Dispatch<React.SetStateAction<string>> | null;
}) {
    const [slicedKeywords, setSlicedKeywords] = useState<KeywordType[]>([]);

    const updateSlicedArray = () => {
        const slicedArray: KeywordType[] = [];
        for (let i = 0; i < 3; i++) {
            const index = (keywordId + i) % keywords.length;
            slicedArray.push(keywords[index]);
        }
        setSlicedKeywords(slicedArray);
    };

    useEffect(() => {
        updateSlicedArray();
    }, [keywordId]);

    return (
        <div id="KeywordsList">
            <span className="keyword-title">Trending Keywords</span>
            <div id="keywords-container">
                {slicedKeywords.map((k) => {
                    return (
                        <div
                            key={k.id}
                            className="col-4"
                            id="keyword-container"
                            onClick={() =>
                                setCurKeyword == null
                                    ? {}
                                    : setCurKeyword(k.content)
                            }
                        >
                            {k.id + 1}. {k.content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default KeywordsList;
