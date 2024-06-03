import json
from dotenv import load_dotenv
load_dotenv()
from langchain_upstage import ChatUpstage
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from tqdm import tqdm

llm = ChatUpstage()

with open('postDataReal.json', 'r') as dataFile: data = json.load(dataFile)

ret_list = []
for d in tqdm(data):
    if len(d['keywords']) == 0: 
        prompt_template = PromptTemplate.from_template(
"""
Provide ten AI keywords from the following text, each seperated by comma. Some examples are AlphaFold 3, GPT, Diffusion, CLIP, NLP, Lanugage Model, 3D Vision, VAE.
---
"""+d["content"]
)
        chain = prompt_template | llm | StrOutputParser()
        keywords = chain.invoke({}).split(',')
        for i in range(len(keywords)):
            keywords[i] = keywords[i].strip()
            if keywords[i][-1] == '.': keywords[i] = keywords[i][:-1]
        d['keywords'] = keywords
        # print(chain.invoke({}))

    if len(d['summary']) == 0:
        prompt_template = PromptTemplate.from_template(
"""
Summarize the topic of following text. You must use less than 10 words.
---
"""+d["content"]
)
        chain = prompt_template | llm | StrOutputParser()
        d['summary'] = chain.invoke({})
        # print(chain.invoke({}))

    user_list = []
    for u in d["users"]:
        if "url" not in u: u["url"] = None
        user_list.append(u)
    d["users"] = user_list

    ret_list.append(d)

with open("postDataRealAnnotated.json", "w") as f1: json.dump(ret_list, f1, indent=4)

# ---
# Can LMs correctly distinguish🔎 confusing entity mentions in multiple documents?\n\nWe study how current LMs perform QA task when provided ambiguous questions and a document set📚 that requires challenging entity disambiguation.\n\nWork done at @UTCompSci✨ w/ @xiye_nlp, @eunsolc\n\n(2/6) We establish an ontology of five types of LM generated answers💬 (complete, partial, no, ambiguous, merged), in response to questions containing ambiguous entities. LM should generate a complete answer, pairing each disambiguated entity with each answer.\n\n(3/6) Major obstacle in ambiguous QA has been the lack of annotated documents containing gold disambiguated entity-answer pairs. We build AmbigDocs💫, a synthetic dataset that pairs a question and a set of documents that suggests multiple answers based on entity disambiguation.\n\n(4/6) We identify such documents by leveraging Wikipedia's disambiguation pages. Then, we generate a question and answers from the documents, ensuring full annotation of gold document for each answer. We obtain a total of 36K examples that covers 2.92 answers on average.\n\n(5/6) In addition to standard QA metrics, we develop an automatic classification heuristic, characterizing distinct behaviours of LMs. Our analysis reveals that current models often yield ambiguous answers or incorrectly merge information belonging to different entities.\n\n(6/6) Check our paper and website here!👇\n\nPaper: https://arxiv.org/abs/2404.12447\n\nWebsite: http://ambigdocs.github.io
# 1. Natural Language Processing
# 2. Question Answering
# 3. Large Language Models
# Please summarize the following text in a single sentence using less than 10 words: