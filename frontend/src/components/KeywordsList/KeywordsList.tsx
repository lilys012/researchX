import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { KeywordType, selectKeyword } from "../../store/slices/keyword";
import { useSelector } from "react-redux";
import "./KeywordsList.scss";

function KeywordsList({
    keywordId,
    keywords,
}: {
    keywordId: number;
    keywords: KeywordType[];
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
        <Container fluid id="KeywordsList">
            <Row id="keywords-container">
                {slicedKeywords.map((k) => {
                    return (
                        <Col
                            key={k.id}
                            className="col-4"
                            id="keyword-container"
                        >
                            {k.id + 1}. {k.content}
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default KeywordsList;
