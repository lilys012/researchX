import json
from dotenv import load_dotenv
load_dotenv()
from langchain_upstage import ChatUpstage
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from tqdm import tqdm

llm = ChatUpstage()

with open('postDataRealAnnotated.json', 'r') as dataFile: data = json.load(dataFile)

ret_list = []
for d in tqdm(data):
    # keywords
    if len(d['keywords']) == 0: 
        prompt_template = PromptTemplate.from_template(
"""
Provide 5~10 AI keywords from the following text, each seperated by comma. Some examples are GPT, Diffusion, CLIP, NLP, Lanugage Model, 3D Vision, VAE.
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

    if len(d['keywords']) == 1: d['keywords'] = d['keywords'][0].split("\n")

    # summary
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

    # opinion
#     prompt_template = PromptTemplate.from_template(
# """
# Does the following text talks about an academic paper? Answer in 'yes' or 'no' only.
# ---
# """+d["content"]
# )
#     chain = prompt_template | llm | StrOutputParser()
#     res = chain.invoke({})
#     if len(d['urls']):
#         if ((not d['isOpinion'] and 'yes' in res.lower()) or (d['isOpinion'] and 'no' in res.lower())) == False: 
#             print(d['id'], res, d["isOpinion"])

    user_list = []
    for u in d["users"]:
        if "url" not in u: u["url"] = None
        user_list.append(u)
    d["users"] = user_list

    ret_list.append(d)

with open("postDataRealAnnotated.json", "w") as f1: json.dump(ret_list, f1, indent=4)