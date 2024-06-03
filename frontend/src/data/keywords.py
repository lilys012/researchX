import json
from collections import Counter

with open("postDataRealAnnotated.json", "r") as f1: data = json.load(f1)
keywords = []
for d in data:
    for k in d["keywords"]:
        keywords.append(k)

ret_list = []
i = 0
for k, v in Counter(keywords).most_common(9):
    ret_list.append({"id":i, "content":k})
    i += 1
with open("keywordsReal.json", "w") as f1: json.dump(ret_list, f1)