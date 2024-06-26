export const postData = [
    {
        id: 0,
        keywords: [
            "Contextual Self-Supervised Learning (ContextSSL)",
            "Vision",
            "General representation",
            "Task-specific symmetries",
            "Invariance",
            "Equivariance",
            "Contextual World Models",
            "Image World Models",
            "Transformations",
            "Shortcuts and collapse to invariance",
        ],
        summary:
            "Introducing Contextual SSL (ContextSSL) for vision, a method that learns to adapt to task-specific symmetries using context.",
        isOpinion: false,
        content:
            "Excited to introduce Contextual Self-Supervised Learning (ContextSSL) for vision, an approach to learning a general representation that can adapt to be invariant or equivariant to task-specific symmetries given a few examples as the context.\n\nPaper: https://arxiv.org/pdf/2405.18193\n\n2/ SSL methods enforce invariance or equivariance to specific augmentations, introducing strong priors. While useful for some tasks, these can hurt others. E.g., invariance to flipping aids classification but harms segmentation, requiring retraining with task-specific symmetries.\n\n3/ Unlike SSL methods, human perception is highly adaptive, tuning into relevant features based on the task's context. This raises a key question: Can we incorporate context into SSL to eliminate augmentation-based priors and enable dynamic adaptation to varying task symmetries?\n\n4/ Our answer is a resounding yes! ContextSSL uses transformers to adapt to selective invariance/equivariance to transformations by attending to task-specific context. It does so by introducing Contextual World Models, a module to enhance existing Image World Models with context.\n\n5/ We show that in the absence of context, ContextSSL learns a general representation by encoding all relevant features. As the context increases, the model tailors its symmetries to a task, encouraging equivariance to a subset of transformations and invariance to the rest.\n\n6/ We show that learning with context in SSL is prone to identifying shortcuts and subsequently propose two simple modules to address it: a context mask and an auxiliary predictor. As shown experimentally, each plays a key role in avoiding shortcuts and collapse to invariance.\n\n7/ For additional results and ablations, refer to our paper. Shoutout to my wonderful collaborators! @ChenyuW64562111 @yifeiwang77 Tommi Jaakkola @StefanieJegelka",
        imgs: [
            "https://pbs.twimg.com/media/GO1bzH8WYAAZ4np.jpg",
            "https://pbs.twimg.com/media/GO1bzfEWsAAp5pI.jpg",
            "https://pbs.twimg.com/media/GO1bz5tW4AEEGTZ.jpg",
            "https://pbs.twimg.com/media/GO1b0LsWsAAfP7E.jpg",
            "https://pbs.twimg.com/media/GO1b0LzXYAEkAel.jpg",
            "https://pbs.twimg.com/media/GO1b0h5WoAACk0i.jpg",
            "https://pbs.twimg.com/media/GO1b0h3XsAAue4-.jpg",
            "https://pbs.twimg.com/media/GO1b01lXkAEDG8d.jpg",
        ],
        urls: ["https://arxiv.org/pdf/2405.18193"],
        author_id: "1297440922032955398",
        created_at: "2024-05-30T14:51:48.000Z",
        postId: "1796192764121555411",
        users: [
            {
                url: "https://t.co/fiNLBwvU4A",
                username: "sharut_gupta",
                created_at: "2020-08-23T07:50:03.000Z",
                id: "1297440922032955398",
                name: "Sharut Gupta",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1785875331389243393/jyRDNDOu_normal.jpg",
            },
            {
                url: "https://t.co/1i3H9W7R1e",
                username: "ChenyuW64562111",
                created_at: "2022-09-23T19:43:56.000Z",
                id: "1573397733297176576",
                name: "Chenyu Wang",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1669553092025565186/Lc6DN9EX_normal.jpg",
            },
            {
                url: "https://t.co/LfDQrIl73y",
                username: "yifeiwang77",
                created_at: "2016-03-28T04:08:17.000Z",
                id: "714303068070752256",
                name: "Yifei Wang",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1593948812489289729/7a4Cg2I0_normal.jpg",
            },
            {
                username: "StefanieJegelka",
                created_at: "2020-12-30T19:45:40.000Z",
                id: "1344368956312846336",
                name: "Stefanie Jegelka",
                profile_image_url:
                    "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                url: null,
            },
        ],
    },
    {
        id: 1,
        keywords: [
            "Randomized benchmarking",
            "Bosonic modes",
            "Noise characterization",
            "Error rate",
            "Noise source identification",
            "Dephasing",
            "Heating",
            "Analytical error models",
            "Trapped ion experiment",
            "Quantum error correction",
        ],
        summary:
            "Developed a benchmarking protocol to characterize noise in bosonic modes, examining error rates, source, and correlation; validated using trapped ion experiment.",
        isOpinion: false,
        content:
            "Excited to share our new preprint: https://arxiv.org/abs/2405.15237\n\nWe adapt a randomized benchmarking-like protocol to bosonic modes to efficiently characterize a noise source, its strength and its correlation.\n\nPing @SydneyNano, @MJBiercuk\n\nOur goal is to characterize bosonic modes in a driven setting. To do this, we apply randomized displacements in phase space, followed by an inversion step and measure a fidelity. Similar to traditional RB, the decay of mean fidelity gives us the error rate.\n\nWith our protocol, we can also determine the noise source (heating vs dephasing) and the correlation of the noise. We built analytical error models to describe these and validated everything on our trapped ion experiment.\n\n",
        imgs: [
            "https://pbs.twimg.com/media/GOkGql3a8AAN337.jpg",
            "https://pbs.twimg.com/media/GOkL1iEb0AAypPT.png",
        ],
        urls: ["arxiv.org/abs/2405.15237"],
        created_at: "2024-05-27T06:08:58.000Z",
        author_id: "1199015844757614594",
        postId: "1794973628867432473",
        users: [
            {
                name: "Christophe Valahu",
                username: "CValahu",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1265933623913590784/iC9A735y_normal.jpg",
                created_at: "2019-11-25T17:23:54.000Z",
                id: "1199015844757614594",
                url: null,
            },
            {
                name: "Sydney Nano",
                username: "SydneyNano",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1117705983533256704/xCCSvRq7_normal.jpg",
                url: "https://t.co/F4Ipqb8YgV",
                created_at: "2015-07-15T23:18:05.000Z",
                id: "3281043038",
            },
            {
                name: "Michael J. Biercuk",
                username: "MJBiercuk",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1075900386160963584/k1js5SzM_normal.jpg",
                url: "https://t.co/2TjiCWiwt2",
                created_at: "2016-05-30T04:35:02.000Z",
                id: "737140237948715008",
            },
        ],
    },
    {
        id: 2,
        keywords: [
            "AI: fMRI",
            "DBSCAN",
            "NSD",
            "CLIP",
            "Decoding",
            "Semantic",
            "Contrastive Learning",
            "Visual Cortex",
            "Proximity",
            "Offsembles",
        ],
        summary:
            "The text presents a novel fMRI clustering method based on DBSCAN to understand shared sensitivity to visual semantic concepts and their negations in the brain.",
        isOpinion: false,
        content:
            "\ud83d\udea8PAPER ALERT\ud83d\udea8What\u2019s the opposite of a face?\n\nWe developed a novel fMRI clustering method based on DBSCAN to understand shared sensitivity to visual semantic concepts (and their negations!) in the brain\ud83e\udde0\ud83e\uddf5(1/7). https://arxiv.org/abs/2405.17663\n\nOur adapted clustering algorithm clusters the parameters of an NSD -> CLIP decoding model learned via contrastive learning of fMRI inputs.  Clusters are constrained to contain voxels from multiple participants but aren't required to be adjacent (yet clusters emerge!)\n\nTo better understand the semantic properties in brain-decoded CLIP embeddings, we identified images most associated with the cluster centroid (& negation). Food images are confounded with color/shape information in NSD; our method allows us to identify and decouple these factors.\n\nWe identified semantic categories reported in prior work (e.g. faces, bodies, places, orientation), but also novel fine-grained categories (e.g. body motion, legs, hands, general & body-specific numerosity) in fine-grained subsets of brain regions (e.g. EBA, rIPS, early visual).\n\nOur method allows for interpretability of semantic sensitivity in visual cortex, allowing us to discern further semantic categories related to proximity (close / far), lighting conditions, indoors / outdoors location and words in native fMRI space via our adaptation of DBSCAN.\n\nWe find that, according to visual cortex, \u201cthe opposite of a face\u201d is images of people whose faces are obscured but otherwise EXPECTED (e.g. people looking away from the camera, wearing a ski mask).\n\nWe note this similarity to the concept of \u201coffsembles\u201d in recent work (P\u00e9rez-Ortega et al., 2024). Check out our preprint for more figures and to read the full set of results. Work led by the amazing @cory_efird alongside myself, @JoelZylber16090 & @alonamarie.",
        imgs: [
            "https://pbs.twimg.com/media/GOydug2XsAAlrN9.jpg",
            "https://pbs.twimg.com/media/GOyeyq1WsAAtPHY.jpg",
            "https://pbs.twimg.com/media/GOygA6CXsAAAE5i.jpg",
            "https://pbs.twimg.com/media/GOygkWAXkAANgpX.jpg",
            "https://pbs.twimg.com/media/GOygs16WkAAhar-.jpg",
        ],
        urls: ["https://arxiv.org/abs/2405.17663"],
        postId: "1795990406095651033",
        created_at: "2024-05-30T01:27:35.000Z",
        author_id: "358445498",
        users: [
            {
                url: "https://t.co/qufhY5kQOR",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1574422622128988160/zFiNZ8CI_normal.jpg",
                id: "358445498",
                username: "Alxmrphi",
                name: "Alex Murphy",
                created_at: "2011-08-19T23:06:59.000Z",
            },
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1668821301291806720/MfebU8IC_normal.jpg",
                id: "987372083863670784",
                username: "cory_efird",
                name: "Cory Efird",
                created_at: "2018-04-20T16:47:04.000Z",
                url: null,
            },
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1722006665854078976/s4aDzQYd_normal.jpg",
                id: "1722006581758341122",
                username: "JoelZylber16090",
                name: "Joel Zylberberg",
                created_at: "2023-11-07T21:42:36.000Z",
                url: null,
            },
            {
                url: "https://t.co/qr9IfI1LHz",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1616577281874620416/zS3r9CGu_normal.jpg",
                id: "47992614",
                username: "alonamarie",
                name: "Alona Fyshe (she/her)",
                created_at: "2009-06-17T15:17:48.000Z",
            },
        ],
    },
    {
        id: 3,
        keywords: [
            "Language Models",
            "Common-sense Knowledge",
            "Non-linguistic Tasks",
            "LaMPP",
            "Probabilistic Models",
            "Image Segmentation",
            "Perceptual Ambiguity",
            "Rare Inputs",
            "Out-of-Distribution Inputs",
            "Grounded Perception and Control",
        ],
        summary:
            "Introducing LaMPP, a generic approach that uses language models as priors over probabilistic models of tasks to improve performance on rare, out-of-distribution, or structurally novel inputs without hurting in-distribution accuracy.",
        isOpinion: false,
        content:
            "\ud83c\udf89New Paper\ud83c\udf89\n\nLanguage models possess a great deal of common-sense knowledge about real-world environments.\ud83c\udf0e\n\nHow can we take advantage of this for *non-linguistic* tasks?\n\n\ud83d\udd17: https://arxiv.org/abs/2302.02801\n\n\ud83e\uddf51/\n\nWe introduce LaMPP, a generic approach that treats LMs as priors over probabilistic models of tasks. We do this by decomposing problems p(Y|X) into p(Y)p(X|Y), then using the LM to induce a prior over the label space p(Y). 2/\n\nFor example, in image segmentation, we use  LMs to provide priors over (latent) rooms and object labels. This information can then be used to resolve perceptual ambiguity: if we see a bed, we are likely in a bedroom, and thus the nearby table is likely a nightstand. 3/\n\nOverall, we find that LaMPP improves model performance on rare, out-of-distributions, or structurally novel inputs---sometimes by a very wide margin---without hurting in-distribution accuracy. 4/\n\nWe anticipate it can benefit grounded perception and control tasks where training datasets can be sparse, biased, or hard to collect. 5/\n\nThis work is related to other works that have explored prompting LMs to generate plausible plans and actions for robotics tasks (https://aclanthology.org/2022.acl-long.120/, https://say-can.github.io) or chaining multimodal LMs to perform language-and-X tasks (https://socraticmodels.github.io). 6/\n\nUnlike model chaining approaches however, our framework enables models to perform structured reasoning under uncertainty, rather than purely passing messages in string space. 7/\n\nThere's much more in the paper, including applications to two other tasks (navigation and video-action segmentation) and ways of using LMs as a prior over *parameters* as well as labels. See links below! \ud83d\udcc4: https://arxiv.org/abs/2302.02801 \ud83d\udcbb: https://github.com/belindal/LaMPP 8/\n\nMuch thanks to amazing collaborators  @verityw_, @pratyusha_PS, @jacobandreas! (PS: PhD programs take notice -- Will is applying this cycle, and would be a fantastic asset to any lab!)9/9\n\n",
        imgs: [
            "https://pbs.twimg.com/media/Foo216TaMAAPbpK.jpg",
            "https://pbs.twimg.com/media/Foo3jF-aUAAgjst.jpg",
            "https://pbs.twimg.com/media/Foo4kR7aUAE1yO0.png",
        ],
        urls: [
            "https://arxiv.org/abs/2302.02801",
            "https://github.com/belindal/LaMPP",
        ],
        postId: "1624191746438762497",
        created_at: "2023-02-10T23:41:03.000Z",
        author_id: "1188224435364327424",
        users: [
            {
                name: "Belinda Li",
                id: "1188224435364327424",
                username: "belindazli",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1702138871801327616/JceLRTOD_normal.jpg",
                url: "https://t.co/XlLO0oDGAi",
                created_at: "2019-10-26T22:42:43.000Z",
            },
            {
                name: "Will C.",
                id: "1456768728364892161",
                username: "verityw_",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1456768979326939146/g8vD1lux_normal.jpg",
                created_at: "2021-11-05T23:41:53.000Z",
                url: null,
            },
            {
                name: "Pratyusha Sharma",
                id: "1889071470",
                username: "pratyusha_PS",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1646666667668439041/CtTAN7GD_normal.jpg",
                url: "https://t.co/z0yY80goM3",
                created_at: "2013-09-21T06:16:47.000Z",
            },
            {
                name: "Jacob Andreas",
                id: "2210861",
                username: "jacobandreas",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1644019382560112641/9vanbL8k_normal.jpg",
                created_at: "2007-03-25T21:44:59.000Z",
                url: null,
            },
        ],
    },
    {
        id: 4,
        keywords: [
            "GPT",
            "Language Model",
            "Task",
            "Benchmark",
            "Diffusion",
            "CLIP",
            "NLP",
            "Evaluation",
            "Gemini",
            "Community Contributions",
        ],
        summary:
            "Google DeepMind introduces DOLOMITES, a long-form generation benchmark for evaluating language models on realistic domain-specific tasks.",
        isOpinion: false,
        content:
            "Excited to share new work done @GoogleDeepMind: \ud83c\udfd4\ufe0f DOLOMITES: Domain-Specific Long-Form Methodical Tasks, a new long-form generation benchmark for evaluating language models on **realistic** domain-specific tasks. Website: https://dolomites-benchmark.github.io Paper: https://arxiv.org/abs/2405.05938\n\nExperts in various fields use writing to organize & report their work. From a clinician writing a plan of treatment to a teacher writing a lesson plan, these tasks are pervasive across fields. Crucially, these tasks all require producing some structured output given some input.\n\nWe generalize these tasks as **methodical tasks** because of their structured format and methodical nature of execution. Through DOLOMITES, we study the capabilities of LMs to assist experts with these tasks.\n\nFirst, we collect descriptions of 519 such tasks from experts across 25 fields. Each task has a standard format and contains a task objective, procedure, input & output sections.\n\nTasks are validated for being representative tasks from each field, most are medium-high complexity and take a significant amount of time to complete. Further, we study the societal implications of using LMs for these tasks by consulting an independent group of experts.\n\nWe then instantiate these tasks with plausible inputs and outputs by sampling relevant documents from the web and synthesizing examples (input and output pairs) of these tasks, which are further post-edited by  the same experts who provided the tasks.\n\nEvaluation is conducted through 1) factual consistency with the reference and 2) LM-based evaluation of pairs of generations. Find results for several LMs in our paper! We propose two evaluation modes, reference-based and reference-less, described here:https://dolomites-benchmark.github.io/evaluation/index.html\n\nWe are excited that this benchmark has already been adapted to evaluate models in the new Gemini-1.5 report released recently: http://goo.gle/GeminiV1-5\n\nWe are really excited to expand DOLOMITES with community contributions (more tasks, multi-turn conversations, multi-modal expansion). If you have a task of your own that you'd like to see included, please head to https://docs.google.com/forms/d/e/1FAIpQLSdMaLnT6VC9conVPK-e3LbtDF-YteOaum7_aCdOsNgdb4pk7g/viewform?usp=sf_link or just reach out if you'd like to chat. We are really excited to expand DOLOMITES with community contributions (more tasks, multi-turn conversations, multi-modal expansion). If you have a task of your own that you'd like to see included, please head to https://docs.google.com/forms/d/e/1FAIpQLSdMaLnT6VC9conVPK-e3LbtDF-YteOaum7_aCdOsNgdb4pk7g/viewform?usp=sf_link or just reach out if you'd like to chat.\n\nWork done in collaboration with @priyanka_17, @kuzman, @spranesh, @fantinehuot, @JonathanBerant, @yatskar, @dipanjand, @mlapata, @chris_alberti.",
        imgs: [
            "https://pbs.twimg.com/media/GOwOKFrbQAA4mzd.jpg",
            "https://pbs.twimg.com/media/GOwOMVya0AIj-En.jpg",
            "https://pbs.twimg.com/media/GOwOOtXbwAE3QGD.jpg",
            "https://pbs.twimg.com/media/GOwOQotaMAA9I9B.jpg",
            "https://pbs.twimg.com/media/GOwOTz0agAAG724.jpg",
        ],
        urls: [
            "https://arxiv.org/abs/2405.05938",
            "https://dolomites-benchmark.github.io",
        ],
        author_id: "1701476430100463616",
        postId: "1795825935692034270",
        created_at: "2024-05-29T14:34:02.000Z",
        users: [
            {
                username: "cmalaviya11",
                created_at: "2023-09-12T06:03:01.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1701481208486440960/33GVk-v8_normal.jpg",
                id: "1701476430100463616",
                name: "Chaitanya Malaviya",
                url: "https://t.co/P1lda8UU0x",
            },
            {
                username: "priyanka_17",
                created_at: "2009-07-30T19:04:42.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1480838720416894978/168KujHw_normal.jpg",
                id: "61569101",
                name: "Priyanka Agrawal",
                url: null,
            },
            {
                username: "Kuzman",
                created_at: "2008-04-09T15:30:35.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/52598637/9EKra0QE0j350hAjSwQSnMFW6Nc_2KfGMKU8sqJ4_wat0JM1g_qJ2uQmukMX9sw8_normal.jpeg",
                id: "14342583",
                name: "Kuzman",
                url: null,
            },
            {
                username: "spranesh",
                created_at: "2007-11-17T20:54:38.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/994647127841062912/YxTcKLpu_normal.jpg",
                id: "10340642",
                name: "Pranesh Srinivasan",
                url: "https://t.co/A4kvS9bz0v",
            },
            {
                username: "fantinehuot",
                created_at: "2023-04-28T09:34:50.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1733183675083165696/b6D8Huef_normal.jpg",
                id: "1651882565362491392",
                name: "Fantine Huot",
                url: null,
            },
            {
                username: "JonathanBerant",
                created_at: "2011-06-23T14:12:47.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/900646207617466369/TZnvWwPX_normal.jpg",
                id: "322636963",
                name: "Jonathan Berant",
                url: "https://t.co/aOdcLmpM2F",
            },
            {
                username: "yatskar",
                created_at: "2011-04-23T08:03:00.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/984499994580303872/5Iy3g_Mv_normal.jpg",
                id: "286574498",
                name: "Mark Yatskar",
                url: "https://t.co/LGhg8bZ0nb",
            },
            {
                username: "dipanjand",
                created_at: "2009-04-21T22:57:22.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/151444939/n16317802_7774_normal.jpg",
                id: "34078684",
                name: "Dipanjan Das",
                url: "https://t.co/3C8Z9lmDHH",
            },
            {
                username: "mlapata",
                created_at: "2009-10-29T22:07:09.000Z",
                profile_image_url:
                    "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                id: "86174188",
                name: "Mirella Lapata",
                url: null,
            },
            {
                username: "chris_alberti",
                created_at: "2011-07-21T01:45:32.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1157151361630273536/ZsEdvXpW_normal.jpg",
                id: "339399933",
                name: "Chris Alberti",
                url: null,
            },
        ],
    },
    {
        id: 5,
        keywords: [
            "LLM",
            "MemoryLLM",
            "Self-updatable parameters",
            "Long-term information retention",
            "Benchmarks",
            "MEMORYLLM",
            "Github",
            "Research",
            "Collaboration",
        ],
        summary:
            "MemoryLLM: Self-updatable parameters for seamless integration of new knowledge, retaining long-term info without performance drops.",
        isOpinion: false,
        content:
            "\ud83d\ude80 Introducing MEMORYLLM! Our latest research presents a model with self-updatable parameters, enabling seamless integration of new knowledge. MEMORYLLM retains long-term info without performance drops, validated through extensive benchmarks. \ud83c\udf1f@icmlconf\n\n\ud83d\udd0d Read the full paper: https://arxiv.org/abs/2402.04624 \ud83d\udcbb Check out the code on GitHub: https://github.com/wangyu-ustc/MemoryLLM\n\nGreat collaboration with @Yifan__Gao @XtremSup @ShiyangLi6 @JingfengY @YinQingyu @jiang_haoming! Thank Everyone for the generous help and it really helped push this project a lot!",
        imgs: [],
        urls: [
            "https://arxiv.org/abs/2402.04624",
            "https://github.com/wangyu-ustc/MemoryLLM",
        ],
        author_id: "1443782607573958657",
        postId: "1797180286264070439",
        created_at: "2024-06-02T08:15:44.000Z",
        users: [
            {
                username: "__YuWang__",
                name: "Yu Wang",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1729088812910080000/y0EoHEOM_normal.jpg",
                id: "1443782607573958657",
                created_at: "2021-10-01T03:39:46.000Z",
                url: null,
            },
            {
                username: "Yifan__Gao",
                name: "Yifan Gao",
                url: "https://t.co/2d9dHdSg1U",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1634759841993592832/9WS928OC_normal.jpg",
                id: "1067747085179510784",
                created_at: "2018-11-28T11:48:37.000Z",
            },
            {
                username: "XtremSup",
                name: "Xiusi Chen",
                url: "https://t.co/wuLcgmsgXP",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1793548384898588672/y4tgUtTK_normal.jpg",
                id: "600784965",
                created_at: "2012-06-06T05:26:34.000Z",
            },
            {
                username: "ShiyangLi6",
                name: "Shiyang Li",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1164073275149828097/iGdzPdR8_normal.jpg",
                id: "1076190941986189312",
                created_at: "2018-12-21T19:01:30.000Z",
                url: null,
            },
            {
                username: "JingfengY",
                name: "Jingfeng Yang",
                url: "https://t.co/E9eb9x1apn",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1781380244827713536/6rNJifzW_normal.jpg",
                id: "1122055448729755650",
                created_at: "2019-04-27T08:30:40.000Z",
            },
            {
                username: "YinQingyu",
                name: "Qingyu Yin",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/934907612071575552/hiyIgT7r_normal.jpg",
                id: "2575914218",
                created_at: "2014-06-19T02:23:23.000Z",
                url: null,
            },
            {
                username: "jiang_haoming",
                name: "Haoming Jiang",
                url: "https://t.co/wIPLGxb30P",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1743534201302114304/PKZd4lvq_normal.jpg",
                id: "939241999516958722",
                created_at: "2017-12-08T21:15:17.000Z",
            },
        ],
    },
    {
        id: 6,
        keywords: [
            "Long-context language models",
            "Understanding long contexts",
            "LooGLE",
            "ACL 2024",
            "Long-dependency understanding",
            "Post-2022 long documents",
            "Language models",
            "Benchmark",
            "Post-2022 language models",
            "Long-document understanding",
        ],
        summary:
            "LooGLE benchmark for long-dependency understanding in post-2022 long documents.",
        isOpinion: false,
        content:
            "\ud83e\uddd0Can long-context language models really understand long contexts? \ud83d\udce2Excited to introduce LooGLE (#acl2024  main), a new benchmark targeting long-dependency understanding in post-2022 long documents. \ud83d\udc49Paper: http://arxiv.org/abs/2311.04939 \ud83d\udc49HF Data: http://hf.co/datasets/bigainlco/LooGLE",
        author_id: "2556242232",
        postId: "1796458866903073234",
        created_at: "2024-05-31T08:29:05.000Z",
        imgs: ["https://pbs.twimg.com/media/GO5M_S4boAAwR96.jpg"],
        urls: [
            "http://arxiv.org/abs/2311.04939",
            "http://hf.co/datasets/bigainlco/LooGLE",
        ],
        users: [
            {
                url: "https://t.co/NfBHWITnIE",
                id: "2556242232",
                username: "ZilongZheng",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1548954219176030209/OU7squuj_normal.jpg",
                created_at: "2014-06-09T06:34:42.000Z",
                name: "Zilong Zheng",
            },
        ],
    },
    {
        id: 7,
        keywords: [
            "LLM",
            "personalization",
            "alignment",
            "system message",
            "RLHF",
            "preference",
            "Janus 7B",
            "Mistral 7B",
            "LLaMA 3",
            "safety",
            "toxicity",
        ],
        summary:
            "New zero-shot alignment method for personalizable LLMs using system messages, achieving high win rates and surpassing other models in alignment and diversity.",
        isOpinion: false,
        content:
            "\ud83d\udea8 New LLM personalization/alignment paper \ud83d\udea8 \ud83e\udd14 How can we obtain personalizable LLMs without explicitly re-training reward models/LLMs for each user? \u2714 We introduce a new zero-shot alignment method to control LLM responses via the system message \ud83d\ude80\n\nAligning LLMs with human preferences is crucial for building reliable AI systems. A vast majority of alignment methods focus mostly on simple binary schemes\u2014helpfulness or harmlessness. \ud83c\udf08 However, human preferences aren't just binary; they're multifaceted and diverse! Recent works suggest a new paradigm called personalized RLHF to consider individual preferences during alignment. \ud83d\udcb8 However, current personalization methods require collecting fine-grained preference data for each individual. This approach may not be scalable in terms of time, storage, and cost. \ud83d\udd0d We focus on the role of the system message to guide an LLM to adopt specific behaviors or roles, crafting responses that resonate on a personal level with users. Traditionally, LLMs operate under a default system message like 'You are a helpful assistant\u2026' But what if we could do more?\n\nWe introduce the Multifaceted Collection, a dataset with 196k unique system messages for aligning LLMs to diverse human preferences, enhancing our approach that trains LLMs to adapt to new and unseen preferences, boosting personalization! It consists of 65k unique instructions, each accompanied by 3 synthetic system messages, along with respective personalized responses. Through a set of quantitative analyses, it encompasses a variety of preferences. We also train Mistral 7B v0.2 on the dataset, enabling our resulting LLM, Janus 7B \ud83c\udfad, to generate personalized responses tailored to user preferences.\n\nWe tested Janus on 921 instructions across 5 benchmarks to see if it aligns with human verified diverse system messages. In a pairwise ranking human evaluation setting, Janus 7B achieves win rates of 74.8% vs Mistral 7B Instruct v0.2, 70.8% vs GPT-3.5-Turbo-0125, and 57.9% vs GPT-4-Turbo-0125! Results in direct assessment with GPT-4 evaluation show similar trends, where Janus 7B scores 4.24 out of 5, surpassing LLaMA 3 8B Instruct (4.1) and other similar sized models, and nearly matching bigger sized LLM, LLaMA 3 Instruct 70B (4.39) and proprietary LLM, GPT-4-Turbo-0125 (4.35)!\n\nSurprisingly, when assessing the helpfulness of the response on 3 benchmarks (AlpacaEval 2.0, MT-Bench, Arena Hard Auto v0.1), Janus outperforms LLaMA 3 8B Instruct by a +4.0%, +0.1%, and +0.3% margin. Janus is also designed to reflect a broad range of individual values while prioritizing safety by maintaining consistent standards for harmlessness. Janus 7B shows an average maximum toxicity of 0.256 and a toxicity probability of 0.061, significantly lower than other instruction-tuned models maintaining diversity score on RealToxicityPrompts. \ud83c\udf1fTraining models with various system messages not only boosts diversity but also efficiently enhances alignment with the general public\u2019s preferences, without compromising safety! \u2705 This confirms the powerful impact of system message generalization!\n\n To learn more about our work, please check out our paper, code, datasets and models! Paper: https://arxiv.org/abs/2405.17977 Code: https://github.com/kaistAI/Janus Datasets and models: https://t.co/QIOVRkjyiA\n\nI'd like to thank all my co-authors for their valuable comments & advice throughout the project! And a special thanks to @suehpark, who co-led this project with me! @seungonekim @seo_minjoon",
        imgs: [
            "https://pbs.twimg.com/media/GO6Xi-UbcAAYVxn.jpg",
            "https://pbs.twimg.com/media/GO6Xw65aUAEO3H3.png",
            "https://pbs.twimg.com/media/GO6X4qobgAA3IkU.jpg",
            "https://pbs.twimg.com/media/GO6YG_6aAAAEpNt.jpg",
            "https://pbs.twimg.com/media/GO6YG_6bYAIdW94.png",
            "https://pbs.twimg.com/media/GO6YOJzaIAEAjaY.jpg",
            "https://pbs.twimg.com/media/GO6YOJzbsAA-wR7.jpg",
        ],
        urls: [
            "https://arxiv.org/abs/2405.17977",
            "https://github.com/kaistAI/Janus",
            "https://t.co/QIOVRkjyiA",
        ],
        postId: "1796539962780979478",
        author_id: "1695420388384366594",
        created_at: "2024-05-31T13:51:19.000Z",
        users: [
            {
                name: "Seongyun Lee",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1695420452259483648/kokYS11J_normal.jpg",
                id: "1695420388384366594",
                created_at: "2023-08-26T12:58:29.000Z",
                username: "sylee_ai",
                url: null,
            },
            {
                name: "Sue Hyun Park",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1742371323341582336/H9EJd4wi_normal.jpg",
                id: "1503630478057762817",
                created_at: "2022-03-15T07:13:46.000Z",
                url: "https://t.co/wUBd1H3IMX",
                username: "suehpark",
            },
            {
                name: "Seungone Kim",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1796926278840578048/ddoJE-wu_normal.jpg",
                id: "1455179335548035074",
                created_at: "2021-11-01T14:26:25.000Z",
                url: "https://t.co/8zfgAGKCcS",
                username: "seungonekim",
            },
            {
                name: "Minjoon Seo",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1571813331178225664/IeJVnHUh_normal.jpg",
                id: "715563582",
                created_at: "2012-07-25T05:56:10.000Z",
                url: "https://t.co/0tS9XiCa8b",
                username: "seo_minjoon",
            },
        ],
    },
    {
        id: 8,
        keywords: [
            "RLHF",
            "DPO",
            "Ranking Accuracy",
            "Alignment Gap",
            "Reference Model",
            "Preference Learning",
            "On-Policy Behavior",
            "Off-Policy Behavior",
            "Preference-Tuned Models",
            "Idealized Ranking Accuracy",
        ],
        summary:
            "RLHF/DPO does not produce policies that mostly assign higher likelihood to preferred responses than to less preferred ones, resulting in an alignment gap between idealized and actual ranking accuracy.",
        isOpinion: false,
        content:
            "New work w/ @sadhikamalladi, @lilyhzhang, @xinyichen2, @QiuyiRichardZ, Rajesh Ranganath, @kchonyc: Contrary to conventional wisdom, RLHF/DPO does *not* produce policies that mostly assign higher likelihood to preferred responses than to less preferred ones.\n\nBut should RLHF/DPO actually induce high ranking accuracy in theory? We derive and compute the *idealized ranking accuracy*: what the ranking accuracy would be after perfectly optimizing RLHF/DPO on ideal preference data.\n\nYet this is not what actually happens! Popular preference-tuned models exhibit a large *alignment gap* between the idealized ranking accuracy and their actual ranking accuracy.\n\nSo why does this alignment gap exist? It turns out that if the ref. model is even *slightly* incorrect at ranking a pair (as is the case for many pairs of outputs!), then DPO must optimize the loss on that example to a dramatically small value in order to flip the ranking.\n\nIn fact, most of the time DPO simply increases reward margins instead of flipping the ranking on examples.\n\nBut we know that DPO does increase win rates despite making only modest improvements on ranking accuracy, so what gives? We show that loss, win rate, and ranking acc. are all non-monotonically related to each other!\n\nWhen the policy is close to the reference model, ranking acc. and win rate increase together. But eventually win rate starts to decline again, even though the loss and ranking acc. continue to improve.\n\nFor more about how our results relate to the divergence of off-policy and on-policy behaviors, check out our paper! Paper: https://github.com/angie-chen55/pref-learning-ranking-acc/blob/main/pref_learning_algs_do_not_learn_pref_rankings.pdf Code: https://github.com/angie-chen55/pref-learning-ranking-acc/tree/main",
        created_at: "2024-05-30T16:41:36.000Z",
        postId: "1796220428345573399",
        author_id: "703274475576541189",
        imgs: [
            "https://pbs.twimg.com/media/GO109W3WgAseSDL.jpg",
            "https://pbs.twimg.com/media/GO1t_mdXEAAc5N0.jpg",
            "https://pbs.twimg.com/media/GO1uY6-WIAAXEX8.jpg",
            "https://pbs.twimg.com/media/GO1y1xGXEAQtmDb.jpg",
            "https://pbs.twimg.com/media/GO1zomEXEAIYsXR.jpg",
            "https://pbs.twimg.com/media/GO12b-1WEAAQBJm.png",
        ],
        urls: [
            "https://github.com/angie-chen55/pref-learning-ranking-acc/blob/main/pref_learning_algs_do_not_learn_pref_rankings.pdf",
            "https://github.com/angie-chen55/pref-learning-ranking-acc/tree/main",
        ],
        users: [
            {
                username: "_angie_chen",
                created_at: "2016-02-26T17:44:36.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1229974551595012096/xoMzwV-Y_normal.jpg",
                id: "703274475576541189",
                name: "Angelica Chen",
                url: "https://t.co/m2jOsZftx9",
            },
            {
                username: "SadhikaMalladi",
                created_at: "2022-06-02T01:07:52.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1659185286876889095/178-09x1_normal.jpg",
                id: "1532167008074227713",
                name: "Sadhika Malladi",
                url: "https://t.co/A6mBpawymH",
            },
            {
                username: "lilyhzhang",
                created_at: "2021-06-30T21:59:13.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1410358552624046080/ljILMIHD_normal.jpg",
                id: "1410356960956981250",
                name: "Lily Zhang",
                url: "https://t.co/bB5P1mZXMk",
            },
            {
                username: "XinyiChen2",
                created_at: "2012-09-05T12:42:04.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1175053017676226561/EytkpNC__normal.jpg",
                id: "804520470",
                name: "Xinyi Chen",
                url: null,
            },
            {
                username: "QiuyiRichardZ",
                created_at: "2021-04-28T19:12:35.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1387485011134357505/45NnYr2U_normal.jpg",
                id: "1387484851901812736",
                name: "Richard Zhang",
                url: "https://t.co/Gvec27a3a6",
            },
            {
                username: "kchonyc",
                created_at: "2009-06-19T07:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1594801711884935189/ztAJPx0b_normal.jpg",
                id: "48642190",
                name: "Kyunghyun Cho",
                url: "https://t.co/GFET1Wumg1",
            },
        ],
    },
    {
        id: 9,
        keywords: [
            "ICML2024",
            "Neural Networks",
            "Mechanistic Interpretability",
            "Low-Dimensional Representations",
            "Nuclear Physics",
            "Machine Learning",
            "MIT Physics",
            "IAIFI",
            "AI at Meta",
        ],
        summary:
            "Mechanistic interpretability reveals low-dimensional representations in neural networks aligned with human knowledge in nuclear physics case study.",
        isOpinion: false,
        content:
            "Very excited to share that our paper has been accepted at #ICML2024 and is now out! I was incredibly fortunate to collaborate with amazing scientists from @MIT_Physics, @iaifi_news, and @AIatMeta. This is my second paper and my first in a ML venue!\n\nIn this paper, we argue that mechanistic interpretability can reveal low-dimensional representations in neural networks that align with human knowledge, as shown through a case study on nuclear physics. Check it out!",
        postId: "1797074412073558477",
        author_id: "2633759965",
        created_at: "2024-06-02T01:15:02.000Z",
        imgs: ["https://pbs.twimg.com/media/GPB6IsaWcAAVc50.jpg"],
        urls: ["https://t.co/MWPWxqkTsc"],
        users: [
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1749893493902749696/xH3he7d0_normal.jpg",
                url: "https://t.co/qXmoO0fUnG",
                id: "2633759965",
                name: "Samuel P\u00e9rez D\u00edaz",
                created_at: "2014-07-13T00:11:28.000Z",
                username: "samuelperezdi",
            },
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1778107545606905856/BIFcfn3h_normal.jpg",
                url: "https://t.co/30B8DFYQ8R",
                id: "216080074",
                name: "MIT Physics",
                created_at: "2010-11-15T19:01:04.000Z",
                username: "MIT_Physics",
            },
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1353779127296405504/73ppmjrv_normal.jpg",
                url: "https://t.co/aFU8hdko9s",
                id: "1352697117547130884",
                name: "IAIFI",
                created_at: "2021-01-22T19:18:44.000Z",
                username: "iaifi_news",
            },
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1454145678075117568/2qXqM_Cu_normal.png",
                url: "https://t.co/tB9HtThT7D",
                id: "1034844617261248512",
                name: "AI at Meta",
                created_at: "2018-08-29T16:45:58.000Z",
                username: "AIatMeta",
            },
        ],
    },
    {
        id: 10,
        keywords: [
            "AI",
            "LLM",
            "backbone",
            "language model",
            "generation",
            "steer",
            "Word Embeddings",
            "ACL2024",
            "preprint",
            "NLP",
        ],
        isOpinion: false,
        summary:
            "Efficiently controlling language model generation style through word embeddings.",
        content:
            "\ud83d\udca1In the era of pretrained LLM backbones, what are fundamental mechanisms behind effectively & efficiently controlling LM generation style? \ud83d\ude80 Introducing \u201cWord Embeddings Are Steers for Language Models\u201d, which we'll present at #ACL2024! \ud83d\udcdc Preprint: https://arxiv.org/pdf/2305.12798\n\nThis is work led by my amazing labmate, Chi, and many thanks to our amazing team of collaborators @uiuc_nlp for all of the thoughtful discussion & contributions! Happy to discuss more in \ud83c\uddf9\ud83c\udded ACL main venue. \ud83e\udd17",
        imgs: [
            "https://pbs.twimg.com/media/GOCiHhUXwAAK-PI.jpg",
            "https://pbs.twimg.com/media/GOCiHhUXEAAUyNd.png",
            "https://pbs.twimg.com/media/GOCiHhbXEAAsNlF.png",
        ],
        urls: ["https://t.co/SyOKkZUf9h"],
        author_id: "1188626449911160834",
        created_at: "2024-05-20T17:38:39.000Z",
        postId: "1792610904892387519",
        users: [
            {
                name: "Yi R. Fung",
                id: "1188626449911160834",
                username: "YiFung10",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1772235832625131520/o8Lf5ctt_normal.jpg",
                created_at: "2019-10-28T01:20:38.000Z",
                url: null,
            },
        ],
    },
    {
        id: 11,
        keywords: [
            "AI",
            "Mark Zuckerberg",
            "Silicon Valley",
            "Meta",
            "Open-source",
            "Artificial Intelligence",
            "Open Source AI Strategy",
            "Industry Ecosystem",
            "Positive Force",
        ],
        summary:
            "Zuckerberg's popularity in Silicon Valley rises due to Meta's open source AI strategy.",
        isOpinion: true,
        content:
            "NYT: 'How A.I. Made Mark Zuckerberg Popular Again in Silicon Valley' 'After some trying years during which Mr. Zuckerberg could do little right, many developers and technologists have embraced the Meta chief as their champion of 'open-source' artificial intelligence.' Nice piece about Meta's open source AI strategy, how it came about, how it's enabling a whole new industry ecosystem, and how it makes the tech see Meta as a positive force. https://nytimes.com/2024/05/29/technology/mark-zuckerberg-meta-ai.html?smid=url-share",
        imgs: [],
        urls: [
            "https://nytimes.com/2024/05/29/technology/mark-zuckerberg-meta-ai.html?smid=url-share",
        ],
        author_id: "48008938",
        postId: "1797022009810985316",
        created_at: "2024-06-01T21:46:48.000Z",
        users: [
            {
                id: "48008938",
                created_at: "2009-06-17T16:05:51.000Z",
                url: "https://t.co/POp7IBHfXy",
                username: "ylecun",
                name: "Yann LeCun",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1483577865056702469/rWA-3_T7_normal.jpg",
            },
        ],
    },
    {
        id: 12,
        keywords: [
            "AI",
            "OpenAI",
            "Google",
            "Aesthetic",
            "Competitors",
            "Language Model",
            "3D Vision",
            "Diffusion",
            "CLIP",
            "NLP",
        ],
        summary: "Comparing aesthetics of OpenAI and Google.",
        isOpinion: true,
        content:
            "i try not to think about competitors too much, but i cannot stop thinking about the aesthetic difference between openai and google",
        imgs: [
            "https://pbs.twimg.com/media/GNuEQohbUAAOfIo.jpg",
            "https://pbs.twimg.com/media/GNuERQ_aAAIlLSQ.jpg",
        ],
        urls: [],
        created_at: "2024-05-16T19:06:05.000Z",
        postId: "1791183356274921568",
        author_id: "1605",
        users: [
            {
                created_at: "2006-07-16T22:01:55.000Z",
                name: "Sam Altman",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/804990434455887872/BG0Xh7Oa_normal.jpg",
                id: "1605",
                url: "https://t.co/teHmy8EFSH",
                username: "sama",
            },
        ],
    },
    {
        id: 13,
        keywords: [
            "LLM RAG",
            "Hallucinated Facts",
            "AI-Assisted Research",
            "Westlaw",
            "Legal RAG",
            "Legal Research",
            "AI in Law",
            "Machine Learning in Law",
            "Natural Language Processing",
            "Legal Technology",
        ],
        summary: 'Legal AI-generated "facts" hallucinations and examples.',
        isOpinion: false,
        content:
            "Even as a non-lawyer on this team, I find fascinating the concrete examples of hallucinated & wrong LLM RAG \u201cfacts\u201d we see. Some examples from v2 of the paper\u2014now including Westlaw\u2019s AI-Assisted Research, which we were given access to after posting v1. https://dho.stanford.edu/wp-content/uploads/Legal_RAG_Hallucinations.pdf",
        imgs: [
            "https://pbs.twimg.com/media/GO7IWkyb0AAPHum.jpg",
            "https://pbs.twimg.com/media/GO7IWkzb0AAtCTT.jpg",
        ],
        urls: [
            "https://dho.stanford.edu/wp-content/uploads/Legal_RAG_Hallucinations.pdf",
        ],
        postId: "1796593594654130230",
        created_at: "2024-05-31T17:24:26.000Z",
        author_id: "2815077014",
        users: [
            {
                url: "https://t.co/mkzg9826Hu",
                id: "2815077014",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/512256295542333440/8Jo4w8kV_normal.jpeg",
                created_at: "2014-09-17T14:58:03.000Z",
                name: "Christopher Manning",
                username: "chrmanning",
            },
            {
                url: "https://t.co/px6fpS9QFq",
                id: "10834752",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1650881612756942850/bZYjMyFU_normal.jpg",
                created_at: "2007-12-04T11:14:14.000Z",
                name: "Arvind Narayanan",
                username: "random_walker",
            },
        ],
    },
    {
        id: 14,
        keywords: [
            "AI alignment",
            "human goals",
            "values",
            "AI alignment paradox",
            "perspective piece",
            "model tinkering",
            "neural net",
            "latent state",
            "AI's real-world impact",
            "beneficial use",
            "community of researchers",
            "early feedback",
            "format constraint",
        ],
        summary:
            "AI alignment paradox: well-aligned models can become easily misaligned, emphasizing the need for a broad research community to find solutions.",
        isOpinion: false,
        content:
            "AI alignment steers AI toward human goals & values. In a recent perspective piece, we draw attention to a fundamental challenge with all such endeavors: the \u201cAI alignment paradox\u201d\u2014better-aligned models are more easily misaligned. \ud83d\udcddhttps://arxiv.org/pdf/2405.20806 \ud83d\udc47Example below\ud83d\udc47\n\nWe illustrate the paradox w/ 3 incarnations (borrowed from @AnthropicAI @NinaRimsky @AmnonShashua @YotamWolf et al.). E.g., in \u201cmodel tinkering\u201d\ud83d\udc47, a better-aligned model can be more easily made to generate misaligned text by adding a \u201csteering vector\u201d to neural net latent state.\n\nMore examples in the paper.With AI\u2019s increasing real-world impact, it\u2019s imperative that a broad community of researchers be aware of the AI alignment paradox and work to find ways to break out of it, in order to ensure the beneficial use of AI for the good of humanity.\n\nThanks to Tim Davidson, Valentin Hartmann, @manoelribeiro, @erichorvitz, @zachary_horvitz, @wendlerch, @john_orders, and others for early feedback.(Also, there's much more relevant work than what is cited in the paper. The dearth of citations stems from a format constraint.)",
        imgs: ["https://pbs.twimg.com/media/GPI9bYIX0AAxuWd.jpg"],
        urls: ["https://arxiv.org/pdf/2405.20806"],
        postId: "1797568321853825162",
        author_id: "193115103",
        created_at: "2024-06-03T09:57:39.000Z",
        users: [
            {
                username: "cervisiarius",
                name: "Bob West",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/847511340935757824/7zTrlT8R_normal.jpg",
                id: "193115103",
                created_at: "2010-09-21T00:38:50.000Z",
                url: "https://t.co/ZHOgVp2eis",
            },
            {
                username: "manoelribeiro",
                name: "Manoel",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1746269848546512896/UKZTgskb_normal.jpg",
                id: "19815998",
                created_at: "2009-01-31T14:08:10.000Z",
                url: "https://t.co/ilY2hf7sjP",
            },
            {
                username: "erichorvitz",
                name: "Eric Horvitz",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1768116206983143424/t7_FyyQy_normal.jpg",
                id: "264501255",
                created_at: "2011-03-12T00:54:56.000Z",
                url: "https://t.co/8JQYl6wyXw",
            },
            {
                username: "zachary_horvitz",
                name: "Zachary Horvitz",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1555633221446123521/nGySKXCR_normal.jpg",
                id: "1425384838635327499",
                created_at: "2021-08-11T09:13:38.000Z",
                url: null,
            },
            {
                username: "wendlerch",
                name: "Chris Wendler",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1749523141209075712/RMww2JBM_normal.jpg",
                id: "1419080222637494281",
                created_at: "2021-07-24T23:41:13.000Z",
                url: null,
            },
            {
                username: "john_orders",
                name: "Ivan Zakazov",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1723742826201071617/7lR3pm0O_normal.jpg",
                id: "1723742064074948608",
                created_at: "2023-11-12T16:39:19.000Z",
                url: null,
            },
        ],
    },
    {
        id: 15,
        keywords: [
            "GlueGen",
            "Efficient Adapters",
            "Diffusion Models",
            "Multimodal Controls",
            "Multilingual Texts",
            "Sound",
            "X-to-Image Generation",
            "GlueNet",
            "Arbitrary Multimodal Control Signals",
            "Offline Training",
        ],
        summary:
            "GlueGen: Efficient adapters for diffusion models that achieve X-to-image generation by multimodal controls.",
        isOpinion: false,
        content:
            "We present \u270d\ufe0fGlueGen\u270d\ufe0f, efficient adapters for diffusion models, that achieves X-to-image generation by multimodal controls: multilingual texts,  sounds, and their mixes. arXiv: https://arxiv.org/pdf/2303.10056.pdf Web: https://canqin001.github.io/GlueGen-Page/ Code: https://github.com/salesforce/GlueGen (1/n)\n\nWe learn a light-weighted GlueNet to align arbitrary multimodal control signals to the original text embedding space of well-trained diffusion models. GlueNet is trained offline, agnostic to diffusion models, and does not require image-text paired data. (2/n)\n\nMixed multilingual text-to-image generation. With our GlueNet alignment, XLM-Roberta text encoder can guide Stable Diffusion to generate accurate visual results while the original generator fails. More languages are supported: Japanese, Italian, Chinese, French, and Spanish(3/n)\n\nBeyond text signals, GlueGen also achieves accurate sound-to-image generation and even image generation via sound-text-mix signals. (4/n)\n\nGreat work from @SFResearch, @Northeastern, and @Stanford: @RobertNewLif, @realNingYu, @LynetteSohn, @shugerdou, Zeyuan Chen, @StefanoErmon, Yun Fu, @CaimingXiong, and @stanleyran (5/n)",
        urls: [
            "https://arxiv.org/pdf/2303.10056.pdf",
            "https://canqin001.github.io/GlueGen-Page/",
            "https://github.com/salesforce/GlueGen",
        ],
        imgs: [
            "https://pbs.twimg.com/media/F1CAlcPakAE26vF.jpg",
            "https://pbs.twimg.com/media/F1CA49naQAIotsC.jpg",
            "https://pbs.twimg.com/media/F1CBEVjakAAl1sW.jpg",
            "https://pbs.twimg.com/media/F1CBQTNaYAAFo4O.jpg",
        ],
        created_at: "2023-07-14T22:43:13.000Z",
        author_id: "325839895",
        postId: "1679984926882660353",
        users: [
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/620325010444423168/rPerKdzU_normal.jpg",
                name: "Caiming Xiong",
                id: "325839895",
                created_at: "2011-06-28T23:30:21.000Z",
                url: "https://t.co/dsr4YJz7Ca",
                username: "CaimingXiong",
            },
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1642661754575507459/7459tsdo_normal.jpg",
                name: "Can Q.",
                id: "1149062165174734849",
                created_at: "2019-07-10T21:05:43.000Z",
                username: "RobertNewLif",
                url: null,
            },
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1772144570492669952/NuhgdtLz_normal.png",
                name: "Ning Yu",
                id: "1204845487263752198",
                created_at: "2019-12-11T19:31:13.000Z",
                url: "https://t.co/bKnlJQyGGO",
                username: "realNingYu",
            },
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1610388211607678976/vkyE3dNt_normal.jpg",
                name: "Chen Xing",
                id: "1249988244558606336",
                created_at: "2020-04-14T09:10:06.000Z",
                url: "https://t.co/sBzIOIj56Q",
                username: "LynetteSohn",
            },
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1662252244828581890/IeTleQXu_normal.jpg",
                name: "Shu Zhang",
                id: "4265363234",
                created_at: "2015-11-17T07:33:11.000Z",
                username: "shugerdou",
                url: null,
            },
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/901161218655756288/46jLcLIc_normal.jpg",
                name: "Stefano Ermon",
                id: "1145851147",
                created_at: "2013-02-03T18:16:08.000Z",
                url: "https://t.co/x9qzlWn3F5",
                username: "StefanoErmon",
            },
            {
                profile_image_url:
                    "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                name: "xu ran",
                id: "181065428",
                created_at: "2010-08-21T05:11:08.000Z",
                username: "stanleyran",
                url: null,
            },
        ],
    },
    {
        id: 16,
        keywords: [
            "AI",
            "Instruction Tuning",
            "LLM",
            "LESS",
            "Adam Optimization",
            "QA",
            "Bengali Language",
            "Collaboration",
            "Princeton NLP",
            "Princeton PLI",
            "UW NLP",
        ],
        summary:
            "LESS, a new method using less data to adapt LLMs for specific queries, outperforms baselines and identifies reasoning type datapoints.",
        content:
            "Lots of instruction tuning data out there...but how to best adapt LLMs for specific queries? Don\u2019t use ALL of the data, use LESS! 5% beats the full dataset. Can even use one small model to select data for others! Paper: https://arxiv.org/abs/2402.04333 Code: https://github.com/princeton-nlp/LESS [1/n]\n\n4 easy and efficient steps. Crucial component: theoretically motivated influence formulation, specialized to instruction tuning with Adam. [2/n]\n\nLESS outperforms baselines! [3/n]\n\nLESS doesn\u2019t rely on heuristics, so it doesn\u2019t fall for superficial similarities! It identifies datapoints with the same reasoning type as the provided examples. Given a Bengali QA example: LESS selects an English QA example! (Others select Bengali examples in other tasks) [4/n]\n\nJoint work with my awesome collaborators @SadhikaMalladi (equal contribution) @ssgrn @prfsanjeevarora @danqi_chen at @princeton_nlp, @PrincetonPLI, and @uwnlp! [5/n]",
        isOpinion: false,
        postId: "1757832742903943215",
        created_at: "2024-02-14T18:22:39.000Z",
        author_id: "3220471982",
        urls: [
            "https://arxiv.org/abs/2402.04333",
            "https://github.com/princeton-nlp/LESS",
        ],
        imgs: [
            "https://pbs.twimg.com/media/GGURQLBXYAAZF3k.jpg",
            "https://pbs.twimg.com/media/GGURo9pWMAAKUF4.jpg",
            "https://pbs.twimg.com/media/GGUSH14XcAAP8tr.png",
            "https://pbs.twimg.com/media/GGUStHgWIAEk7hw.png",
        ],
        users: [
            {
                name: "Mengzhou Xia",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1521157153410588674/DxP-WxKK_normal.jpg",
                id: "3220471982",
                created_at: "2015-05-19T15:04:49.000Z",
                url: "https://t.co/GS8YZWvBA7",
                username: "xiamengzhou",
            },
            {
                name: "Sadhika Malladi",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1659185286876889095/178-09x1_normal.jpg",
                id: "1532167008074227713",
                created_at: "2022-06-02T01:07:52.000Z",
                url: "https://t.co/A6mBpawymH",
                username: "SadhikaMalladi",
            },
            {
                name: "Suchin Gururangan",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1615607033805561856/H8pzaDX5_normal.jpg",
                id: "416861161",
                created_at: "2011-11-20T07:00:02.000Z",
                url: "https://t.co/hwZl0wUtdt",
                username: "ssgrn",
            },
            {
                name: "Sanjeev Arora",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/882261017434230784/KXMjeabA_normal.jpg",
                id: "882257115863187457",
                created_at: "2017-07-04T15:17:42.000Z",
                url: "https://t.co/IKHQnFbrwQ",
                username: "prfsanjeevarora",
            },
            {
                name: "Danqi Chen",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1275061287899316224/RI7q6kTb_normal.jpg",
                id: "96570221",
                created_at: "2009-12-13T15:38:10.000Z",
                url: "https://t.co/6mlm8X3pOv",
                username: "danqi_chen",
            },
        ],
    },
    {
        id: 17,
        keywords: [
            "Instruction fine-tuning",
            "LLM alignment",
            "GPT-4-based evaluation",
            "Llama-2-7B",
            "AlpacaEval 2.0",
            "NEFTune",
            "Open LLM datasets",
            "Response length",
            "Superficial alignment hypothesis",
            "AI model evaluation",
        ],
        summary:
            "The topic of the text is about fine-tuning large language models (LLMs) by using the longest examples as a strong baseline for alignment, and the effectiveness of this approach in various evaluations.",
        isOpinion: false,
        content:
            "So, what really matters for instruction fine-tuning? Surprisingly, simply fine-tuning on the *longest* examples is an extremely strong baseline for alignment of LLMs. Really excited to share our new work: https://arxiv.org/abs/2402.04833. Full story below! \ud83e\uddf51/n\n\nDetailed breakdown of the GPT-4-based evaluation on different evaluation sets (LIMA, Vicuna, Koala, WizardLM, Self-Instruct) for models trained on different sets of instructions (Alpaca-52k, Evol-Instruct-70k). The naive longest-1k baseline looks pretty good! \ud83e\uddf52/n\n\nA lightweight refinement of the 1k longest responses with GPT-3.5 can further boost the generation quality of the fine-tuned LLMs. \ud83e\uddf53/n\n\nThe refinement + NEFTune allows us to obtain a top-2 Llama-2-7B-based model on AlpacaEval 2.0 while training on *only 1,000 examples* and no extra preference data. Also, there are many examples in the table with the same response length but totally different win rate (!). \ud83e\uddf54/n\n\nNow if you are still skeptical and think that we are just overfitting to GPT-4/PALM-2-based evaluation via long responses, we perform further analysis. Here is an evaluation on Open LLM datasets: ARC, MMLU, Winogrande. Our 1k-longest models look pretty good here as well! \ud83e\uddf55/n\n\nHere we control for the response length at test time: our 1k-longest models are again preferred by GPT-4 and PALM-2 as judges. \ud83e\uddf56/n\n\nHere is the win rate against GPT-4-Turbo and response length over the training epochs for one of our 1k-longest models. Surprisingly, the average response length _decreases_ after the 2nd epoch, while the win rate keeps increasing. \ud83e\uddf57/n\n\nFinally, some examples of open-ended generations \u2013 our Alpaca-1k-longest model is pretty fluent & answers the question well! This supports the superficial alignment hypothesis: we don\u2019t need lots of instructions to turn a pre-trained LLM into a useful conversational model \ud83e\uddf58/n\n\nFor more details, check out our paper https://arxiv.org/abs/2402.04833. Instruction FT is (still) very counter-intuitive :-) We believe we need simple baselines to really understand what\u2019s going on! Joint work with @H_aoZhao (in fact, it was his master thesis!), @fra__31, @tml_lab \ud83e\uddf5n/n",
        imgs: [
            "https://pbs.twimg.com/media/GF1EPSCXAAAt-ZQ.jpg",
            "https://pbs.twimg.com/media/GF1EiNrXMAAMjGX.jpg",
            "https://pbs.twimg.com/media/GF1EoD8XoAAqWfJ.jpg",
            "https://pbs.twimg.com/media/GF1ExCaWMAAliq0.png",
            "https://pbs.twimg.com/media/GF1E8vkX0AAmpiV.jpg",
            "https://pbs.twimg.com/media/GF1FAU4WgAAJeCg.jpg",
            "https://pbs.twimg.com/media/GF1FE47WcAAB-KP.jpg",
            "https://pbs.twimg.com/media/GF1FI9-XcAE3Yv-.jpg",
        ],
        urls: ["https://arxiv.org/abs/2402.04833"],
        created_at: "2024-02-08T16:54:59.000Z",
        author_id: "987061319378587649",
        postId: "1755636355537715564",
        users: [
            {
                id: "987061319378587649",
                created_at: "2018-04-19T20:12:12.000Z",
                url: "https://t.co/0hRTO21fIx",
                username: "maksym_andr",
                name: "Maksym Andriushchenko \ud83c\uddfa\ud83c\udde6",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1601583305710866434/f4H38Erl_normal.jpg",
            },
            {
                id: "1639743653689139206",
                created_at: "2023-03-25T21:40:27.000Z",
                url: "https://t.co/Gz8r7i8elu",
                username: "H_aoZhao",
                name: "Hao Zhao",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1639744075728404480/AWGKwPSf_normal.png",
            },
            {
                id: "1133088397273313282",
                created_at: "2019-05-27T19:11:40.000Z",
                url: "https://t.co/nHA5xjIeJ2",
                username: "fra__31",
                name: "francesco croce",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1135267295264235520/vWoEDA3k_normal.png",
            },
        ],
    },
    {
        id: 18,
        keywords: [
            "Apple",
            "Internship",
            "SAM-CLIP",
            "Continual Learning",
            "Distillation",
            "Vision Foundation Models",
            "Semantic Segmentation",
            "Zero-Shot Learning",
            "Text-Prompted Learning",
            "SAM",
            "CLIP",
        ],
        summary:
            "This text summarizes a new method called SAM-CLIP that merges two vision foundation models, SAM and CLIP, using continual learning and distillation techniques. The result is improved zero-shot semantic segmentation capabilities, and the method requires less data than pretraining.",
        isOpinion: false,
        content:
            "\ud83d\udce2 Excited to share my Apple internship work: SAM-CLIP: Merging Vision Foundation Models Towards Semantic and Spatial Understanding https://arxiv.org/abs/2310.15308 We propose a simple & efficient method to merge vision foundation models, by which we merged SAM & CLIP into SAM-CLIP! \ud83e\uddf51/6\n\n\ud83d\udca1Our merging approach is based on continual learning and distillation techniques. It transfers skills from multiple models to a single backbone with minimal forgetting of original capabilities. With this, we merge SAM & CLIP into SAM-CLIP with 10x less data than pretraining. 2/6\n\nSAM-CLIP inherits original skills from both SAM & CLIP with negligible drop. \ud83d\ude80Moreover, the merging of SAM & CLIP also enables extraordinary (text-prompted) Zero-Shot Semantic Segmentation abilities!\ud83c\udfafSAM-CLIP outperforms previous models by a large margin over 5 benchmarks\ud83c\udfc6 3/6\n\nThis SoTA zero-shot semantic segmentation was obtained by using only the CLIP-head of SAM-CLIP. \ud83e\udd2fYou can compose the SAM & CLIP heads of SAM-CLIP together to obtain better segmentation! Only needs text prompts for objects! The last 2 columns below show the difference\ud83d\udc47 4/6\n\n\ud83c\udf1fFurther, we conduct head-probing experiments (i.e., train new head w/ frozen backbone) for classification & segmentation, to examine the learned features. See results below\ud83d\udc47 We believe SAM-CLIP's improvement over SAM & CLIP here implies it learns richer visual features. 5/6\n\nThank @HPouransari for hosting my internship! Also many thanks to @OncelTuzel @FartashFg @MFarajtabar @litemax for their guidance! \ud83c\udf93I will graduate in Aug 2024 and am looking for full-time industry jobs. Contact me if you are interested! My website: https://haoxiang-wang.github.io 6/6",
        urls: [
            "https://arxiv.org/abs/2310.15308",
            "https://haoxiang-wang.github.io",
        ],
        imgs: [
            "https://pbs.twimg.com/media/F9QLrK1WUAEggFI.png",
            "https://pbs.twimg.com/media/F9QK4UcWgAAtR4Z.jpg",
            "https://pbs.twimg.com/media/F9QMg6lWMAA_anB.jpg",
            "https://pbs.twimg.com/media/F9QODb4WEAA9zvM.jpg",
            "https://pbs.twimg.com/media/F9QPd6hXEAEVmrL.jpg",
        ],
        author_id: "2777901043",
        created_at: "2023-10-25T03:39:08.000Z",
        postId: "1717022959003459693",
        users: [
            {
                name: "Haoxiang Wang",
                username: "Haoxiang__Wang",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/579073846243815424/dKpU1kLU_normal.jpg",
                url: "https://t.co/qCjt4IbTKG",
                created_at: "2014-08-29T05:49:40.000Z",
                id: "2777901043",
            },
            {
                name: "Hadi Pouransari",
                username: "HPouransari",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1150495495992668161/ayA_DrkA_normal.jpg",
                created_at: "2019-07-14T19:59:19.000Z",
                id: "1150495006521585664",
                url: null,
            },
            {
                name: "Oncel Tuzel",
                username: "OncelTuzel",
                profile_image_url:
                    "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                url: "https://t.co/uvVvC5XOKu",
                created_at: "2011-08-05T22:42:04.000Z",
                id: "349321075",
            },
            {
                name: "Fartash Faghri",
                username: "FartashFg",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1717600982123618304/sjoWdPFI_normal.jpg",
                created_at: "2013-11-12T22:37:44.000Z",
                id: "2178806734",
                url: null,
            },
            {
                name: "Mehrdad Farajtabar",
                username: "MFarajtabar",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1346668915301126144/G8kiuqen_normal.jpg",
                url: "https://t.co/Z39ZU7S9Zt",
                created_at: "2021-01-06T04:03:06.000Z",
                id: "1346668532210176000",
            },
            {
                name: "PUBG LITE Mr Max",
                username: "LiteMax",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1744003328080769024/e6YBZOgu_normal.jpg",
                created_at: "2024-01-07T14:29:29.000Z",
                id: "1744003237160894464",
                url: null,
            },
        ],
    },
    {
        id: 19,
        keywords: [
            "Citation",
            "Peer Review",
            "Arxiv",
            "Academic Integrity",
            "Scientific Publication",
            "Bibliographic Records",
            "Scholarly Communication",
            "Citation Analysis",
        ],
        summary: "Arxiv and peer-reviewed version citation loop.",
        isOpinion: true,
        content:
            "When my paper cites a paper from arxiv and then that paper's peer reviewed version cites the arxiv version of my paper",
        imgs: ["https://pbs.twimg.com/media/GPHHHiTbgAEH3ZB.png"],
        urls: [],
        postId: "1797437259308007594",
        created_at: "2024-06-03T01:16:52.000Z",
        author_id: "861417356756533248",
        users: [
            {
                username: "lucy3_li",
                name: "Lucy Li",
                url: "https://t.co/ldY65Mfjb5",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1658676396712132613/xPnCHE_a_normal.jpg",
                created_at: "2017-05-08T03:07:57.000Z",
                id: "861417356756533248",
            },
        ],
    },
    {
        id: 20,
        keywords: [
            "AI",
            "Research",
            "Scientist",
            "RLHF",
            "DbrxMosaicAI",
            "Machine Learning",
            "AI Research",
            "AI Careers",
            "Artificial Intelligence",
        ],
        summary:
            "Career change to Research Scientist in RLHF team at DbrxMosaicAI in SF.",
        isOpinion: true,
        content:
            "\ud83d\udce3 Exciting life update!! I am starting the next chapter of my career at @DbrxMosaicAI as a Research Scientist in the RLHF team! To all my friends in SF, let's catch up!",
        imgs: [],
        urls: [],
        postId: "1797799348702753272",
        created_at: "2024-06-04T01:15:40.000Z",
        author_id: "3083528599",
        users: [
            {
                username: "wat_the_fun",
                created_at: "2015-03-15T04:48:22.000Z",
                url: "https://t.co/stWHxpLnCv",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1319653524838428675/bmWBMfam_normal.jpg",
                name: "Ashutosh Baheti",
                id: "3083528599",
            },
        ],
    },
    {
        id: 21,
        keywords: [
            "LLM-powered agents",
            "closed-loop design",
            "BioDiscoveryAgent",
            "genetic perturbation experiments",
            "prompt construction",
            "long-term strategy",
            "Bayesian optimization",
            "2-gene perturbations",
            "interpretable decision-making",
            "ICLR MLGenX Workshop",
        ],
        summary:
            "The text discusses the development of a BioDiscoveryAgent using LLM-powered agents to enhance the effectiveness and interpretability of genetic perturbation experiments.",
        isOpinion: false,
        content:
            "Amid growing interest in closed-loop design for biological experiments, we demonstrate how LLM-powered agents can enhance both effectiveness and interpretability. We develop BioDiscoveryAgent to design genetic perturbation experiments \ud83e\uddf51/6 @JianVora1 @qhwang3 @percyliang @jure\n\nBioDiscoveryAgent designs experiments using only an LLM + tools In each round, the agent constructs a prompt that combines task description + experimental results The LLM response identifies genes to perturb in the next round and provides reasoning and long-term strategy\n\nLLMs add value through prior knowledge + reasoning over experimental results In addition, the agent uses tools to search/read papers, execute code to analyze data, and critique predictions Its decision-making is interpretable at each step, enabling effective scientist feedback\n\nBioDiscoveryAgent detects 18% more hits in 1-gene perturbation screens, 29% more non-essential hit genes This is *without* being specifically trained for this task, unlike Bayesian optimization baselines It also shows 2x improvement over random baseline in 2-gene perturbations\n\nBioDiscoveryAgent uses both prior knowledge + experimental results for decision-making Early rounds rely more on prior knowledge (Prompt Only performs better) while later rounds focus on experimental results (Observation Only) Agent with access to both consistently outperforms\n\nThanks to the organizers of ICLR @MLGenX Workshop for recognizing our work with the Best Poster award! \ud83c\udfc6 Preprint: https://arxiv.org/abs/2405.17631 Github: https://github.com/snap-stanford/BioDiscoveryAgent We have more exciting work ongoing in this direction, please reach out if interested in collaborating!",
        imgs: [
            "https://pbs.twimg.com/tweet_video_thumb/GPIkYo0bAAAnHLT.jpg",
            "https://pbs.twimg.com/media/GPIl1J5agAAXBJi.jpg",
            "https://pbs.twimg.com/media/GPIv97Ta8AAw6Bi.jpg",
            "https://pbs.twimg.com/media/GPImy-8aQAERzFI.jpg",
            "https://pbs.twimg.com/media/GPIswy9acAA9MJp.jpg",
        ],
        urls: [
            "https://arxiv.org/abs/2405.17631",
            "https://github.com/snap-stanford/BioDiscoveryAgent",
        ],
        created_at: "2024-06-03T09:27:55.000Z",
        postId: "1797560838695666049",
        author_id: "40564990",
        users: [
            {
                url: "https://t.co/1yaT76Lrfu",
                created_at: "2009-05-16T23:29:54.000Z",
                username: "yusufroohani",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1002261313135890432/Mqv6WVRB_normal.jpg",
                name: "Yusuf Roohani",
                id: "40564990",
            },
            {
                created_at: "2022-06-25T18:31:49.000Z",
                username: "JianVora1",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1540764718482083842/a13Bv0mP_normal.jpg",
                name: "Jian Vora",
                id: "1540764671346475008",
                url: null,
            },
            {
                url: "https://t.co/GBHngkDLMs",
                created_at: "2017-03-30T01:44:04.000Z",
                username: "qhwang3",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1337167619816710149/Ydk4Ti_M_normal.jpg",
                name: "Qian Huang",
                id: "847263121865441281",
            },
            {
                url: "https://t.co/eDtsxiBXQg",
                created_at: "2009-10-31T07:26:37.000Z",
                username: "percyliang",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1319828397699129346/wjBcgUH0_normal.jpg",
                name: "Percy Liang",
                id: "86481377",
            },
            {
                url: "https://t.co/S8h0zVuPHc",
                created_at: "2007-08-12T18:14:57.000Z",
                username: "jure",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1758953504415334400/QiZeIXbi_normal.jpg",
                name: "Jure Leskovec",
                id: "8143682",
            },
        ],
    },
    {
        id: 22,
        keywords: [
            "Confidence Calibration",
            "LLMs",
            "Multi-Agent RSA",
            "Pragmatics",
            "Preference Optimization",
            "Bootstrapped Preference Data",
            "Fine-Tuning",
            "Language Models",
            "Multi-Agent Systems",
            "Preference-based Learning",
            "Transfer Learning",
        ],
        summary:
            'The topic of the text is "Confidence Calibration in Large Language Models (LLMs) using LACIE method."',
        isOpinion: false,
        content:
            "\ud83d\udea8 Excited to share our new work on **confidence calibration** in LLMs! LLMs are often badly calibrated & overconfident, explicitly (eg. 'I'm 100% sure') and implicitly, eg. giving details/authoritative tone. We address both w/ a pragmatic speaker-listener multi-agent method \ud83e\uddf5\n\nWe implement this through multi-agent RSA/pragmatics-inspired preference optimization: the speaker agent generates answers, which are accepted/rejected by a listener agent based on how they sound. We prefer confident+correct or unconfident+incorrect, and disprefer mismatches.\n\nUsing bootstrapped pref. data, we finetune LLMs to be implicitly + explicitly calibrated. w/ a modeled listener, we get gains in calibration (+20.7 AUROC, -7.8 ECE) & precision (+18%). More importantly, gains transfer to humans, w/ 47% fewer false answers accepted in human eval\n\nCrucially, LACIE is better than just optimizing for truthfulness alone, i.e. pragmatic training with consideration for the listener is key. We show that LACIE's benefits transfer to other data as well, with major truthfulness gains on TruthfulQA when trained on TriviaQA!\n\nQualitatively, after LACIE-finetuning, models have a better separation in confidence between correct and incorrect answers. LACIE also leads to more hedging when models are wrong, and more detailed/explicitly confident answers when models are right.\n\nFinally, we see some cool emergent properties: LACIE training results in big increases in abstention, even though abstention is unattested in the training data. Tuning also leads to snarky models. When confident, models say things like 'Duh' or 'obviously' to convey confidence\ud83d\ude02\n\nThanks to my co-authors @peterbhase and @mohitban47! Paper: https://arxiv.org/abs/2405.21028 Code: https://github.com/esteng/pragmatic_calibration @huggingface page/models :https://huggingface.co/papers/2405.21028",
        author_id: "1037116695926792192",
        created_at: "2024-06-03T17:20:02.000Z",
        postId: "1797679651307032652",
        imgs: [
            "https://pbs.twimg.com/media/GPKi1ROakAYnkBV.jpg",
            "https://pbs.twimg.com/media/GPKjGHxboAAmFl9.jpg",
            "https://pbs.twimg.com/media/GPKjIdrbUAAXgPh.jpg",
            "https://pbs.twimg.com/media/GPKjPvobIAAGWMH.jpg",
            "https://pbs.twimg.com/media/GPKjRmmagAAmFDI.jpg",
            "https://pbs.twimg.com/media/GPKjTH4akAIROhQ.jpg",
            "https://pbs.twimg.com/media/GPKjZIrb0AAAksK.jpg",
            "https://pbs.twimg.com/media/GPKje1lXUAAB-q0.jpg",
            "https://pbs.twimg.com/media/GPKjgMZakAUNgOj.jpg",
            "https://pbs.twimg.com/media/GPKjkTXXoAAVYJN.jpg",
        ],
        urls: [
            "https://arxiv.org/abs/2405.21028",
            "https://github.com/esteng/pragmatic_calibration",
            "https://t.co/jQE6xwNBAy",
        ],
        users: [
            {
                username: "EliasEskin",
                url: "https://t.co/Jh7VvrT4i7",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1092506897066934272/x3rlmuHQ_normal.jpg",
                created_at: "2018-09-04T23:14:23.000Z",
                name: "Elias Stengel-Eskin",
                id: "1037116695926792192",
            },
            {
                username: "peterbhase",
                url: "https://t.co/stzY5QZUXe",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1147955093469356032/96kAzX_2_normal.png",
                created_at: "2019-04-19T14:52:30.000Z",
                name: "Peter Hase",
                id: "1119252439050354688",
            },
            {
                username: "mohitban47",
                url: "https://t.co/OLYSCSynXm",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1179127220037537792/zPLfOVwH_normal.jpg",
                created_at: "2012-09-18T04:25:22.000Z",
                name: "Mohit Bansal",
                id: "830355049",
            },
        ],
    },
    {
        id: 23,
        keywords: [
            "FSJ",
            "MSJ",
            "ASR",
            "Llama-2/3",
            "I-FSJ",
            "SOTA",
            "paper",
            "code",
            "GitHub",
        ],
        summary:
            "Improved Few-Shot Jailbreaking (I-FSJ) for efficient and SOTA few-shot jailbreaking against advanced defenses of Llama-2/3.",
        isOpinion: false,
        content:
            "\ud83d\udc7aMake Few-Shot Jailbreaking 'Great' Again! \ud83d\ude15Vanilla few-shot jailbreaking (FSJ) is inefficient, while many-shot jailbreaking (MSJ by @AnthropicAI) requires long-context capability. \ud83d\ude2fOur improved FSJ (I-FSJ) achieves SOTA ASRs against Llama-2/3, even with advanced defenses! Paper: https://arxiv.org/abs/2406.01288 Code: https://github.com/sail-sg/I-FSJ",
        imgs: ["https://pbs.twimg.com/media/GPNRJ_qbUAAMWZr.png"],
        urls: [
            "https://arxiv.org/abs/2406.01288",
            "https://github.com/sail-sg/I-FSJ",
        ],
        created_at: "2024-06-04T05:57:47.000Z",
        postId: "1797870346047258924",
        author_id: "1202375676004667392",
        users: [
            {
                url: "https://t.co/W864bCsPA4",
                username: "TianyuPang1",
                created_at: "2019-12-04T23:54:44.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1745476062237405184/-fVx6sn-_normal.jpg",
                id: "1202375676004667392",
                name: "Tianyu Pang",
            },
        ],
    },
    {
        id: 24,
        keywords: [
            "State-space models",
            "Learning dynamics",
            "Diagonal recurrence",
            "Loss landscape",
            "Adam optimization",
            "Linear RNNs",
            "Teacher-student example",
            "Gradient-based learning",
            "Normalization",
            "Reparametrization",
        ],
        summary:
            "State-space models are effective due to diagonal recurrence, which helps in better conditioning the loss landscape and facilitates Adam's job by making the Hessian diagonal. Normalization and reparametrization can mitigate the effect of large gradients.",
        isOpinion: false,
        content:
            "Why do state-space models work so well? With @orvieto_antonio, we study their learning dynamics and find that diagonal recurrence is key: 1. It helps in better conditioning the loss landscape 2. It facilitates Adam's job by making the Hessian diagonal \ud83d\udcdd https://arxiv.org/abs/2405.21064\n\nSSMs are linear RNNs and are thus simple enough to be studied theoretically. We start with a 1D teacher-student example and find that as the memory of the network increases, the loss becomes sharper. Gradient-based learning of long-term memories is hard, even in this simple case!\n\nWe can formalize this intuition by looking at the sensitivity of the hidden states on the recurrent parameters. Under reasonable assumptions, this quantity has a closed-form solution, which depends on the input distribution (c.f. \u03c1). It explodes as the network's memory increases.\n\nHow can we mitigate this effect? Normalization of the forward pass and reparametrization of the recurrent parameters can do so. This is directly featured in SSMs, but also indirectly in LSTMs! Importantly, it is easier to apply those fixes when the recurrence is diagonal.\n\nSSM-like models, such as the LRU, should thus be easier to learn than fully connected linear RNNs. We confirm that on a teacher-student task. Diagonality has another interesting effect: it makes explosion directions more axis-aligned, and Adam can also compensate for that.\n\nWe conclude with an analysis of how large gradients can be at initialization, as a function of how much memory they encode, on a next-token prediction task. Reparametrization is successful at mitigating the explosion effect, except for complex numbers (more on that in the paper).\n\nOverall, our results complement the common deep learning wisdom around vanishing and exploding gradients. We show that explosive behaviors still exist in RNNs, even when exploding gradients are removed from the picture (by keeping the dynamics stable).\n\nThis work was greatly inspired by the early work of @HochreiterSepp @SchmidhuberAI, and more recently by @_albertgu @orvieto_antonio and @sohamde_.",
        imgs: [
            "https://pbs.twimg.com/media/GPJ-b65XUAAOOoL.png",
            "https://pbs.twimg.com/media/GPJ-aIuWcAAcqKu.jpg",
            "https://pbs.twimg.com/media/GPJ-hheWIAASNBZ.png",
            "https://pbs.twimg.com/media/GPJ_KUvXUAADSoh.png",
            "https://pbs.twimg.com/media/GPJ_XYBWwAA4Eo5.jpg",
            "https://pbs.twimg.com/media/GPJ_XYRXsAA-yOu.png",
            "https://pbs.twimg.com/media/GPJ_qhjWsAASl5E.png",
        ],
        urls: ["https://arxiv.org/abs/2405.21064"],
        created_at: "2024-06-03T14:49:29.000Z",
        author_id: "936865625233817600",
        postId: "1797641762204430725",
        users: [
            {
                created_at: "2017-12-02T07:52:25.000Z",
                name: "Nicolas Zucchet",
                username: "NicolasZucchet",
                id: "936865625233817600",
                url: "https://t.co/4La0vtiDjk",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1545353618223730688/bhzZv_tv_normal.jpg",
            },
            {
                created_at: "2021-11-23T12:18:29.000Z",
                name: "Sepp Hochreiter",
                username: "HochreiterSepp",
                id: "1463119548115087362",
                url: "https://t.co/P3x5jU0zrp",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1463121437196267522/lT6EWJED_normal.jpg",
            },
            {
                created_at: "2019-08-20T12:15:46.000Z",
                name: "J\u00fcrgen Schmidhuber",
                username: "SchmidhuberAI",
                id: "1163786515144724485",
                url: "https://t.co/16khDh3Vwn",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1715797038535680000/ZFrYnYWD_normal.jpg",
            },
            {
                created_at: "2018-12-21T23:57:16.000Z",
                name: "Albert Gu",
                username: "_albertgu",
                id: "1076265378118959104",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1737900609616117760/rF23YDtv_normal.jpg",
                url: null,
            },
            {
                created_at: "2019-09-14T15:13:38.000Z",
                name: "Antonio Orvieto",
                username: "orvieto_antonio",
                id: "1172891108076077057",
                url: "https://t.co/VXg6JbHaXN",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1715721495480070145/gRAWAkLO_normal.jpg",
            },
            {
                created_at: "2011-05-27T05:59:44.000Z",
                name: "Soham De",
                username: "sohamde_",
                id: "306050621",
                url: "https://t.co/AaAuJWVK07",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1496089686628048898/7iWlv9TI_normal.jpg",
            },
        ],
    },
    {
        id: 25,
        summary:
            "Meta's fine-tuned Llama-3 model is still the best, while open-source variants are overfit to benchmarks and perform poorly on unseen tasks.",
        keywords: [
            "GPT",
            "Diffusion",
            "CLIP",
            "NLP",
            "Language Model",
            "LLM",
            "Meta",
            "Fine Tuning",
            "Benchmarks",
            "Overfitting",
        ],
        isOpinion: true,
        content:
            "The llama-3 instruct model fine tuned by Meta is still the best llama-3 on HF. I tried a dozen open source variants on various offline benchmarks and they are all quite literally overfit to leaderboards and do very poorly on tasks that are not present in benchmarks. Yes even the fancy \u201citerative DPO\u201d one does very very poorly with in context\n\nThis is pretty much why I stopped talking about any fine tuned variants because they are optimizing for benchmarks that don\u2019t matter\n\nOne model I tried did well in zero shot programming. When I give the model context (documentation) the score drops below the zero shot score! This is not the case with the Meta llama-3 variant. How can this be? My theory is that they are just overfit to  benchmark style questions or don\u2019t have enough data to cover the use cases",
        imgs: [],
        urls: [],
        users: [
            {
                created_at: "2009-08-31T22:06:04.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1678598826544734210/Z8ZMuiAR_normal.jpg",
                id: "70514287",
                username: "abacaj",
                name: "anton",
                url: null,
            },
        ],
        created_at: "2024-06-03T14:24:02.000Z",
        postId: "1797635357552328756",
        author_id: "70514287",
    },
    {
        id: 26,
        summary:
            "Designing Generative AI Systems with User Control and Transparency",
        keywords: [
            "Generative AI",
            "User Control",
            "Agency",
            "Transparency",
            "Design",
            "Generative Systems",
            "AI-based Systems",
            "User Experience",
            "Machine Learning",
            "AI Ethics",
        ],
        isOpinion: true,
        content:
            "Looking for recommendations of papers on designing generative AI-based systems in a way that supports user control / agency. Bonus points if the paper touches on the relationship between control and transparency. THANK YOU!!",
        imgs: [],
        urls: [],
        created_at: "2024-06-03T21:16:44.000Z",
        postId: "1797739217247666683",
        author_id: "2869101210",
        users: [
            {
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1134822582715392001/2okzkHQ9_normal.png",
                id: "2869101210",
                name: "Jenn Wortman Vaughan",
                created_at: "2014-10-21T17:25:24.000Z",
                url: "https://t.co/E4ZgCK0aFy",
                username: "jennwvaughan",
            },
        ],
    },
    {
        id: 27,
        summary: "Text Summarization",
        keywords: ["GPT", "GPT4", "GPT4O"],
        isOpinion: true,
        content: "Do you use gpt4o or did you switch back to gpt4?",
        imgs: [],
        urls: [],
        created_at: "2024-06-03T20:01:44.000Z",
        postId: "1797720343106457789",
        author_id: "1574621478557208577",
        users: [
            {
                created_at: "2022-09-27T04:46:40.000Z",
                username: "shakoistsLog",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1755724139531517952/LeKqLzQ-_normal.jpg",
                name: "shako",
                id: "1574621478557208577",
                url: null,
            },
        ],
    },
    {
        id: 28,
        keywords: [
            "AI",
            "Machine Learning",
            "Deep Learning",
            "NLP",
            "Protein Function Prediction",
            "ProtEx",
            "Retrieval-Augmented Models",
            "BLAST",
            "Pre-Trained Protein Language Models",
        ],
        summary:
            "ProtEx: A Retrieval-Augmented Approach for Protein Function Prediction",
        isOpinion: false,
        content:
            "Excited to share new work from @GoogleDeepMind: \u201cProtEx: A Retrieval-Augmented Approach for Protein Function Prediction\u201d https://biorxiv.org/content/10.1101/2024.05.30.596539v1\n\nWe propose a model, ProtEx, that can predict a protein\u2019s function given its amino acid sequence. ProtEx achieves state-of-the-art results across EC number, GO term, and Pfam family prediction tasks, with the largest improvements for rare classes, as highlighted for Pfam below.\n\nOur approach is inspired by retrieval-augmented models for NLP. By applying these methods to protein function prediction, we can combine the strengths of similarity-based search methods like BLAST and pre-trained protein language models.\n\nProtEx uses a new multi-sequence pre-training task which helps the model effectively compare query and exemplar sequences.\n\nOn a personal note, this is my first paper related to applications in biology, a truly inspiring space for applying ML/AI. It was a privilege to work with and learn from @bhaskar_gurram_, David Belanger, @andreea_gane, @mlbileschi_pub, @LucyColwell37, @toutanova, and @ank_parikh",
        imgs: [
            "https://pbs.twimg.com/media/GPKqGHOaQAEF-DP.png",
            "https://pbs.twimg.com/media/GPKqXcxa0AAoMbD.jpg",
            "https://pbs.twimg.com/media/GPKqcMLbkAAlUyw.jpg",
            "https://pbs.twimg.com/media/GPKqhN4bkAAPBjE.jpg",
        ],
        urls: ["https://biorxiv.org/content/10.1101/2024.05.30.596539v1"],
        created_at: "2024-06-03T17:49:46.000Z",
        author_id: "1075460972",
        postId: "1797687131219071130",
        users: [
            {
                created_at: "2013-01-10T02:28:10.000Z",
                id: "1075460972",
                name: "Pete Shaw",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1407474130505453570/P9ckZtjS_normal.jpg",
                username: "ptshaw2",
                url: "https://t.co/ykBFUZ7rO1",
            },
            {
                created_at: "2014-09-17T13:35:59.000Z",
                id: "2814951920",
                name: "bhaskar gurram",
                profile_image_url:
                    "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                username: "bhaskar_gurram_",
                url: null,
            },
            {
                created_at: "2016-06-22T17:13:32.000Z",
                id: "745666038956703744",
                name: "Andreea Gane",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/840835419470221312/VG0Qz8ep_normal.jpg",
                username: "andreea_gane",
                url: null,
            },
            {
                created_at: "2021-03-24T15:30:32.000Z",
                id: "1374745424804843524",
                name: "Max Bileschi",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1374746614338875393/tgFTfE8K_normal.jpg",
                username: "mlbileschi_pub",
                url: null,
            },
            {
                created_at: "2019-05-04T21:16:53.000Z",
                id: "1124784990300950529",
                name: "Lucy Colwell",
                profile_image_url:
                    "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                username: "LucyColwell37",
                url: null,
            },
            {
                created_at: "2018-10-12T21:03:16.000Z",
                id: "1050854439072882688",
                name: "Kristina Toutanova",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1142235832679485440/rbAWrMyC_normal.png",
                username: "toutanova",
                url: null,
            },
            {
                created_at: "2012-08-27T09:43:57.000Z",
                id: "784289617",
                name: "Ankur Parikh",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1535674848734855168/Ze1aHxHg_normal.jpg",
                username: "ank_parikh",
                url: "https://t.co/hvpeQeeqp2",
            },
        ],
    },
    {
        id: 29,
        keywords: [
            "OpenAI",
            "API",
            "Undergrad",
            "Grad Student",
            "$20",
            "000",
            "Bill",
            "Authorization",
            "GPT",
            "Diffusion",
            "CLIP",
        ],
        summary:
            "OpenAI API bill generated by undergrad without authorization.",
        isOpinion: true,
        content:
            "Just another day, waking up to find out that the undergrad hired by your grad student generated a $20,000 OpenAI API bill in the last three days, without your authorization. \ud83d\ude05",
        urls: [],
        imgs: [],
        author_id: "503452360",
        postId: "1798002439343444470",
        created_at: "2024-06-04T14:42:41.000Z",
        users: [
            {
                created_at: "2012-02-25T19:40:12.000Z",
                url: "https://t.co/n4YufzlN08",
                id: "503452360",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/3711270857/aac58ca6d6c8ca61292d632746d36d0a_normal.jpeg",
                name: "William Wang",
                username: "WilliamWangNLP",
            },
        ],
    },
    {
        id: 30,
        keywords: [
            "AI",
            "code",
            "models",
            "training",
            "context",
            "tracking",
            "entities",
            "math",
            "instruction",
            "tuning",
            "GPT",
            "Diffusion",
            "CLIP",
            "NLP",
            "Language Model",
            "3D Vision",
            "VAE",
        ],
        summary:
            '"Code training enhances models\' ability to track entities in context, but math and instruction tuning may not provide the same benefit."',
        isOpinion: false,
        content:
            "\ud83d\udcbbDoes code training improve models' ability to track entities in context?\ud83d\udce6 What about math or instruction tuning? @sebschu and I had hypothesized code helps, along with other observations RE: code helping 'reasoning'. We (@sebschu, @ShubhamToshniw6) find more evidence for this!\n\nWe find 'minimal pairs' of open source models where base models are continued to be trained on [code, math, instructions]. The above figure shows that additional code indeed helps, but this benefit may only prominently emerge with certain model or data scale.\n\nDo other types of 'highly structured' data, like math, help? In contrast to code, we do not find a clear benefit of additional math training . This includes models with 'instruct' formatted math data.\n\nDo models that are better at following instructions or better repond to user intent show improvements? Somewhat but not a ton! These kinds of training interacts with additional code training as well as scale, where smaller models & models w/o code tend to benefit more.\n\nIt was very self-satisfying to get these results (also in a way that confirms our initial hypothesis)! Here is the preprint, but there is also a forthcoming part 2 to this investigation \ud83e\udd94 https://arxiv.org/abs/2405.21068",
        urls: ["ttps://arxiv.org/abs/2405.21068"],
        imgs: [
            "https://pbs.twimg.com/media/GPPE9A7W8AASJcH.jpg",
            "https://pbs.twimg.com/media/GPPHoPMWUAA04UT.jpg",
            "https://pbs.twimg.com/media/GPPH51MW0AAuqUW.jpg",
        ],
        created_at: "2024-06-04T14:43:08.000Z",
        postId: "1798002551004254354",
        author_id: "1017699069177802753",
        users: [
            {
                username: "najoungkim",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1458194786117115907/SEpjgHUb_normal.jpg",
                id: "1017699069177802753",
                url: "https://t.co/KimiuwLkZi",
                name: "Najoung Kim \ud83e\udee0",
                created_at: "2018-07-13T09:15:40.000Z",
            },
            {
                username: "sebschu",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1608795227229143041/fcS_AgW9_normal.jpg",
                id: "7459192",
                url: "https://t.co/r1IKC9IAIw",
                name: "Sebastian Schuster",
                created_at: "2007-07-13T20:02:05.000Z",
            },
            {
                username: "ShubhamToshniw6",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1634578222007349250/ftiFlA3z_normal.jpg",
                id: "1366526653892079621",
                url: "https://t.co/80xTI3V1NY",
                name: "Shubham Toshniwal",
                created_at: "2021-03-01T23:12:02.000Z",
            },
        ],
    },
    {
        id: 31,
        keywords: [
            "LLM",
            "Simulation",
            "Individuals",
            "Prediction",
            "Insight",
            "Impersonation",
            "Improvisation",
            "RAG",
            "First Person",
            "Synthesis",
            "New Ideas",
            "Text Generation",
        ],
        summary:
            'The topic of the text is "Limitation of LLMs in simulating individuals for advice."',
        isOpinion: true,
        content:
            "I'm not a fan of that idea where people build LLM systems that attempt to simulate individuals - 'ask questions of a Paul Graham / Abraham Lincoln / etc' type things The idea that an LLM can usefully predict a response from an individual seems so obviously wrong to me\n\nIt's equivalent to getting business advice from a talented impersonator/ improv artist: just because they can 'sound like' someone doesn't mean they can provide genuinely useful insight\n\n'What did Abraham Lincoln say about X' as a RAG interface makes much more sense to me I don't see the value in faking a first person response, that's just misleading - and massively overestimates the LLM's ability to usefully synthesize new ideas based on previous text",
        author_id: "12497",
        created_at: "2024-06-04T10:42:48.000Z",
        postId: "1797942072554783196",
        imgs: [],
        urls: [],
        users: [
            {
                id: "12497",
                username: "simonw",
                url: "https://t.co/p4R0XiEYEc",
                created_at: "2006-11-15T13:18:50.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/378800000261649705/be9cc55e64014e6d7663c50d7cb9fc75_normal.jpeg",
                name: "Simon Willison",
            },
        ],
    },
    {
        id: 32,
        keywords: [
            "Task Drift Detection",
            "LLM Internals Analysis",
            "Activation Contrast for Task Inspection",
            "Metric Learning Probes",
            "OOD Data Robustness",
            "Multi-lingual Task Detection",
            "Prompt Injection Mitigation",
            "Activation-based Interpretability",
            "TaskTrack Toolkit",
            "AI Safety and Security Enhancement",
        ],
        summary:
            "The text discusses the vulnerability of LLMs to prompt injections and proposes a method to detect and locate secondary tasks using activations.",
        isOpinion: false,
        content:
            "Very excited about this work!! LLMs in applications process inputs from many sources, making them vulnerable to prompt injections. We look into models' internals (activations) to catch if models drifted from users' instructions after processing supposedly data-only sources. 1/\n\n2/ LLMs don't have formal language for instructions, making their detection hard to generalize. Other methods (e.g., fine-tuning, prompting) are either expensive or potentially not robust. In this work, instead of detecting instructions, we detect how models react to them.\n\n3/ We extract two sets of activations: just after processing users' prompts (primary task), and after processing the whole data block (either clean or poisoned with secondary tasks). Contrasting these two sets can effectively detect, and potentially locate secondary tasks.\n\n4/ Simple linear probes on the differences between the two activations sets can detect task drift on challenging OOD data containing malicious instructions, jailbreaks, and prompt injections with over 0.99 ROC AUC. No attacks were used to train the probes (only benign data).\n\n5/ We further train metric learning probes that yielded meaningful embeddings. We also show that the distances between the two sets of activations' embeddings can help locate secondary instructions within the context.\n\n6/ We stress-tested on even more challenging OOD data: secondary instructions in other languages, new ways to phrase secondary instructions (prompting models to lie), new primary tasks and system prompts, etc.  Probes retained the separation between clean and poisoned examples.\n\n7/ Notably, detection via activations seems to reflect what the model is actually attending to, rather than the existence of instructions. When using stronger primary prompts to ignore instructions in benign data with instructions, probes' results are similar to clean data.\n\n8/ That is to say, we potentially may use this with other prompting mitigations as complementary, synergetic solutions. Prompting guides the model to what to attend to, further guiding the probes, and activation probing may catch drift when prompting fails.\n\n9/ This work is extremely exciting for AI safety, security, and transparency, and hopefully more research on activation-based task inspection, decoding, and interpretability! We will open-source our TaskTrack toolkit, containing the dataset, activations, and inspection tools.\n\n10/10 This work was done in collaboration with my amazing coauthors who made it possible: @AideenFay (jointly led!!\ud83d\ude4f), @gchers, @AhmedGaSalem, @mariojfritz, and @ajpaverd Check out the paper for (many) more details: https://arxiv.org/abs/2406.00799",
        imgs: [
            "https://pbs.twimg.com/media/GPQ31K4WMAAY6fG.jpg",
            "https://pbs.twimg.com/media/GPQ5E6uWoAAEA78.jpg",
            "https://pbs.twimg.com/media/GPQ5q4PXgAANe_2.png",
            "https://pbs.twimg.com/media/GPQ6rgbWgAAPSQx.jpg",
            "https://pbs.twimg.com/media/GPQ6rgYWgAAoADk.png",
            "https://pbs.twimg.com/media/GPQ7JhNWsAASoyJ.png",
            "https://pbs.twimg.com/media/GPQ7PlbWIAAFFWa.jpg",
            "https://pbs.twimg.com/media/GPQ73JnW4AA8Lhs.png",
            "https://pbs.twimg.com/media/GPQ8mLDWAAENahC.jpg",
        ],
        urls: ["https://arxiv.org/abs/2406.00799"],
        author_id: "1338472496169967617",
        postId: "1798123957884760530",
        created_at: "2024-06-04T22:45:33.000Z",
        users: [
            {
                url: "https://t.co/oCryUUIb5j",
                created_at: "2020-12-14T13:14:53.000Z",
                username: "sahar_abdelnabi",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1757906514881531904/3Hqw7kQ0_normal.jpg",
                id: "1338472496169967617",
                name: "Sahar Abdelnabi \ud83c\udf49\ud83d\udd4a",
            },
            {
                url: "https://t.co/VwisezJ0gQ",
                created_at: "2015-10-07T18:29:55.000Z",
                username: "AideenFay",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1798027616223395842/JTWl5Wgp_normal.jpg",
                id: "3892282419",
                name: "Aideen Fay",
            },
            {
                url: "https://t.co/0oudbdXXNL",
                created_at: "2012-03-22T20:46:34.000Z",
                username: "gchers",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/560611765570916352/9hNtJ5RF_normal.png",
                id: "533485382",
                name: "Giovanni Cherubin",
            },
            {
                url: "https://t.co/0YsSFQ72r9",
                created_at: "2018-08-08T14:00:12.000Z",
                username: "AhmedGaSalem",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1027193219614953472/ajNFafLj_normal.jpg",
                id: "1027192756542865408",
                name: "Ahmed Salem",
            },
            {
                url: "https://t.co/jhSoAuCT1j",
                created_at: "2021-04-26T23:06:11.000Z",
                username: "mariojfritz",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1629192357055791105/jSa2rRmC_normal.jpg",
                id: "1386818885555572738",
                name: "Mario Fritz",
            },
            {
                url: "https://t.co/nU3om908B1",
                created_at: "2009-07-10T13:04:26.000Z",
                username: "ajpaverd",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/912964805681729537/wkHifT5H_normal.jpg",
                id: "55554859",
                name: "Andrew Paverd",
            },
        ],
    },
    {
        id: 33,
        keywords: [
            "AI",
            "Papers",
            "Authors",
            "Research",
            "Writing",
            "Communication",
            "Publication",
            "Academia",
        ],
        isOpinion: true,
        summary:
            'The text suggests that 90% of papers would be improved if authors replaced the standard "Conclusion" section with a simple "That\'s all folks! Thanks for reading!" to end the paper.',
        content:
            "Hot take: 90% of papers would be better if authors replaced: Conclusion In this paper we have shown...blah blah blah...this is a basis for much future work. with: Conclusion That's all folks! Thanks for reading!",
        imgs: [],
        urls: [],
        author_id: "940521871312764929",
        created_at: "2024-06-05T04:29:37.000Z",
        postId: "1798210542324387950",
        users: [
            {
                created_at: "2017-12-12T10:01:03.000Z",
                url: "https://t.co/6hnWACdfOq",
                id: "940521871312764929",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1615990199003271168/0l0jsvAL_normal.jpg",
                username: "m2saxon",
                name: "Michael Saxon",
            },
        ],
    },
    {
        id: 34,
        keywords: [
            "LoFiT",
            "Localized fine-tuning",
            "LLM representations",
            "Attention heads",
            "LoRA",
            "Representation intervention",
            "Inference-time Intervention",
            "Representation Engineering",
            "Llama",
            "Fine-tuning",
            "Generalization",
        ],
        isOpinion: false,
        summary:
            "LoFiT: Localized fine-tuning of LLM representations by finding important attention heads and learning offsets to their representations.",
        content:
            "\ud83d\udd2cLoFiT: Localized fine-tuning of LLM representations We fine-tune an LLM by \ud83d\udd0dFinding important attn heads for a task (3-10% of the Transformer) \ud83d\udd25Learning offsets to the representations of these heads Comparable acc. to LoRA w/200x fewer learned params w/ @xiye_nlp @gregd_nlp\n\nPrior interpretability work shows that specific attention heads in transformers help learn specific downstream tasks. To localize such heads, we learn a scaling weight vector for each attention head, then select the top-k heads with the largest scaling weight norm. \n\nAfter identifying a sparse set of important attention heads, we freeze all pre-trained weights, and only fine-tune offset vectors added to the representations of these attention outputs for the given task. This is a really small number of parameters to update!\n\nWe show that on tasks related to truthfulness and reasoning, LoFiT outperforms representation intervention methods (Inference-time Intervention and Representation Engineering) by a large margin.\n\nOn these tasks, by fine-tuning the representations of only 10% of the attention heads, LoFiT achieves comparable performance to PEFT methods such as LoRA with 200x fewer learned parameters.\n\nFine-tuning with LoFiT can make models more truthful and generalize better to other domains. We show that after fine-tuning on TruthfulQA with LoFiT, Llama 2-7B and 13B can generate responses that are more truthful than LoRA, and preserve performance on other QA datasets!\n\nCheck out our paper: http://arxiv.org/abs/2406.01563 And GitHub repository: https://github.com/fc2869/lo-fit",
        imgs: [
            "https://pbs.twimg.com/media/GPPhu85XAAAjLYW.jpg",
            "https://pbs.twimg.com/media/GPPihTma0AAuqQX.jpg",
            "https://pbs.twimg.com/media/GPPirGGbsAAECdF.jpg",
            "https://pbs.twimg.com/media/GPPi1CFa4AAYvKs.png",
        ],
        urls: ["https://t.co/cecjT3bkBJ", "https://t.co/fngca3qkrj"],
        created_at: "2024-06-04T16:27:55.000Z",
        author_id: "1712681731629682688",
        postId: "1798028924209049820",
        users: [
            {
                created_at: "2023-10-13T04:08:50.000Z",
                url: "https://t.co/0OQVaXaSGb",
                id: "1712681731629682688",
                name: "Fangcong Yin",
                username: "fangcong_y10593",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1798028529000706048/WqZkIy71_normal.jpg",
            },
            {
                created_at: "2020-03-23T17:06:14.000Z",
                url: "https://t.co/58TfkXozbj",
                id: "1242135548040548352",
                name: "Xi Ye",
                username: "xiye_nlp",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1685074542795104256/E5R5K6s__normal.jpg",
            },
            {
                created_at: "2017-12-06T17:16:17.000Z",
                id: "938457074278846468",
                name: "Greg Durrett",
                username: "gregd_nlp",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1662545047017910272/zzOwmMsh_normal.jpg",
                url: null,
            },
        ],
    },
    {
        id: 35,
        keywords: [
            "AI-synthesized data",
            "Rank-and-prune feedback",
            "Catastrophic degradation",
            "Restore performance",
            "Weaker models",
            "AI at Meta",
            "Felix Feng",
            "Dohmatobelvis",
            "F_charton",
            "YangpuPKU",
        ],
        summary:
            "The topic of the text is Leveraging AI-synthesized data without catastrophic degradation using Rank-and-prune feedback.",
        isOpinion: false,
        content:
            "How to leverage AI-synthesized data without catastrophic degradation? Rank-and-prune feedback, from humans or even weaker models, provably restores and even surpasses original performance! See https://arxiv.org/abs/2406.07515 @AIatMeta @feeelix_feng @dohmatobelvis @f_charton @yangpuPKU",
        users: [
            {
                created_at: "2020-03-23T17:06:14.000Z",
                url: "https://twitter.com/KempeLab",
                id: "12341939808398209",
                name: "Julia Kempe",
                username: "KempeLab",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1784317709791928322/5cp7Upcm_normal.jpg",
            },
            {
                created_at: "2020-03-23T17:06:14.000Z",
                url: "https://twitter.com/feeelix_feng",
                id: "19230918080382342",
                name: "Yunzhen Feng",
                username: "feeelix_feng",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1523345883269632003/ySCLoSIF_normal.jpg",
            },
            {
                created_at: "2020-03-23T17:06:14.000Z",
                url: "https://twitter.com/dohmatobelvis",
                id: "112918098401384",
                name: "Elvis Dohmatob",
                username: "dohmatobelvis",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/938415053665193985/AosWG1VB_normal.jpg",
            },
            {
                created_at: "2020-03-23T17:06:14.000Z",
                url: "https://twitter.com/f_charton",
                id: "12934098209483",
                name: "Fran\u00e7ois Charton",
                username: "dohmatobelvis",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1202167628124606465/J0uFRFxL_normal.jpg",
            },
            {
                created_at: "2020-03-23T17:06:14.000Z",
                url: "https://twitter.com/yangpuPKU",
                id: "1234028093242",
                name: "Pu Yang \u6768 \u57d4",
                username: "yangpuPKU",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1314479358371799041/XTl-O5bH_normal.jpg",
            },
        ],
        urls: ["https://arxiv.org/abs/2406.07515"],
        imgs: ["https://pbs.twimg.com/media/GP3OaPIWIAMCq7B.jpg"],
        created_at: "2024-06-12T18:29:37.000Z",
        postId: "1800822751273636109",
        author_id: "12341939808398209",
    },
    {
        id: 36,
        summary:
            "Preference for training multiple smaller models over one large model.",
        keywords: [
            "GPT",
            "Diffusion",
            "CLIP",
            "NLP",
            "Language Model",
            "VAE",
            "Model Training",
            "Team Size",
            "Scalability",
            "Parallel Processing",
        ],
        content:
            "i prefer 100 teams of 10 each to train 100 models than one team of 1000 to train one gigantic model.",
        isOpinion: true,
        postId: "1801477204196433964",
        urls: [],
        imgs: [],
        created_at: "2024-06-14T13:50:12.000Z",
        author_id: "48642190",
        users: [
            {
                username: "kchonyc",
                created_at: "2009-06-19T07:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1594801711884935189/ztAJPx0b_normal.jpg",
                id: "48642190",
                name: "Kyunghyun Cho",
                url: "https://t.co/GFET1Wumg1",
            },
        ],
    },
    {
        id: 37,
        summary:
            "In this work, we introduce 'PEGASUS', a method for creating personalized generative 3D face avatars using a monocular video input. It enables disentangled controls for attribute alteration while preserving identity.",
        keywords: [
            "3D Face Avatar",
            "Personalized Generative 3D Avatar",
            "Monocular Video Input",
            "Disentangled Controls",
            "Facial Attributes",
            "Synthetic Video Collection",
            "Person-Specific Generative 3D Avatar",
            "CVPR2024",
            "Poster Session",
            "Seattle",
        ],
        content:
            "We present our work 'PEGASUS: Personalized Generative 3D Avatars with Composable Attributes' at #CVPR2024! Project page: https://snuvclab.github.io/pegasus/ Code: https://github.com/snuvclab/pegasus \ud83e\uddf5(1/N) (Poster session information at the end) \n\nWe present a method for creating personalized generative 3D face avatars using a monocular video input. #PEGASUS enables disentangled controls to selectively alter the facial attributes of the target individual while preserving the identity. \ud83e\uddf5(2/N)\n\nOur approach consists of two stages: synthetic database generation and constructing a personalized generative avatar. \ud83e\uddf5(3/N)\n\nWe generate a synthetic video collection of the target identity with varying facial attributes, where the videos are synthesized by borrowing the attributes from monocular videos of diverse identities. \ud83e\uddf5(4/N)\n\nThen, we build a person-specific generative 3D avatar that can modify its attributes continuously while preserving its identity. \ud83e\uddf5(5/N)\n\nOur #CVPR2024 poster will be in Poster Session 1 & Exhibit Hall (Arch 4A-E, 88) during June 19, 2024 (Wednesday, 10:30 am - 12:00 pm). See you in Seattle! Work with @byungjun__kim. @jhugestar is the corresponding author. \ud83e\uddf5(6/N)",
        isOpinion: false,
        postId: "1801250625898111467",
        urls: [
            "https://t.co/LpYx3AR3pT",
            "https://github.com/snuvclab/pegasus",
        ],
        imgs: [],
        created_at: "2024-06-13T22:49:11.000Z",
        author_id: "129942121",
        users: [
            {
                username: "hyunssu_cha",
                created_at: "2020-04-17T09:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1506986018188136451/2DJ9Cf3l_normal.jpg",
                id: "129942121",
                name: "Hyunsoo Cha",
                url: "https://twitter.com/hyunssu_cha",
            },
            {
                username: "byungjun__kim",
                created_at: "2019-03-12T09:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1660544253901295621/kjHzawBt_normal.jpg",
                id: "12938109381",
                name: "Byungjun Kim",
                url: "https://twitter.com/byungjun__kim",
            },
            {
                username: "jhugestar",
                created_at: "2016-03-12T09:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1273165183322644481/Z04oOn32_normal.jpg",
                id: "1272832983",
                name: "Hanbyul (Han) Joo",
                url: "https://twitter.com/jhugestar",
            },
        ],
    },
    {
        id: 38,
        summary:
            "The text discusses the rapid advancements in AI and the importance of understanding the dominant driving force behind the change, which is exponentially cheaper compute and the scaling of end-to-end models.",
        keywords: [
            "AI",
            "GPT",
            "Transformer",
            "Encoder-Decoder",
            "Decoder-Only",
            "Language Models",
            "Multiturn Chat Interface",
            "Scalability",
            "Structures",
            "Learning Objectives",
            "Architectures",
            "Compute",
            "Data",
            "Driving Force",
        ],
        content:
            "I gave a lecture at Stanford CS 25. Lecture video: https://youtu.be/orDKvo8h71o?si=RIfyZ7NSUAJifOBF AI is moving so fast that it's hard to keep up. Instead of spending all our energy catching up with the latest development, we should study the change itself. First step is to identify and understand the dominant driving force behind the change. For AI, a single driving force stands out; exponentially cheaper compute and scaling of progressively more end-to-end models to leverage that compute. However this doesn\u2019t mean we should blindly adopt the most end-to-end approach because such an approach is simply infeasible. Instead we should find an \u201coptimal\u201d structure to add given the current level of 1) compute, 2) data, 3) learning objectives, 4) architectures. In other words, what is the most end-to-end structure that just started to show signs of life? These are more scalable and eventually outperform those with more structures when scaled up. Later on, when one or more of those 4 factors improve (e.g. we got more compute or found a more scalable architecture), then we should revisit the structures we added and remove those that hinder further scaling. Repeat this over and over. As a community we love adding structures but a lot less for removing them. We need to do more cleanup. In this lecture, I use the early history of Transformer architecture as a running example of what structures made sense to be added in the past, and why they are less relevant now. I find comparing encoder-decoder and decoder-only architectures highly informative. For example, encoder-decoder has a structure where input and output are handled by separate parameters whereas decoder-only uses the shared parameters for both. Having separate parameters was natural when Transformer was first introduced with translation as the main evaluation task; input is in one language and output is in another. Modern language models used in multiturn chat interfaces make this assumption awkward. Output in the current turn becomes the input of the next turn. Why treat them separately? Going through examples like this, my hope is that you will be able to view seemingly overwhelming AI advances in a unified perspective, and from that be able to see where the field is heading. If more of us develop such a unified perspective, we can better leverage the incredible exponential driving force! Slides: https://docs.google.com/presentation/d/1u05yQQaw4QXLVYGLI6o3YoFHv6eC3YN8GvWD8JMumpE/edit?usp=sharing",
        isOpinion: true,
        postId: "1800676312916656592",
        urls: ["https://t.co/Js7SThVO6S", "https://t.co/RccKFOqK7e"],
        imgs: ["https://pbs.twimg.com/media/GP1JW84bgAAI5J9.jpg"],
        created_at: "2024-06-12T08:47:12.000Z",
        author_id: "1231283897",
        users: [
            {
                username: "hwchung27",
                created_at: "2013-06-19T07:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1583376951527411713/yhyNEYMa_normal.jpg",
                id: "1231283897",
                name: "Hyung Won Chung",
                url: "https://twitter.com/hwchung27",
            },
        ],
    },
    {
        id: 39,
        summary:
            "LLM's internal representation of complex semantic structure as simplices and orthogonal subspaces, extending linear representation hypothesis.",
        keywords: [
            "LLMs",
            "Categorical Variables",
            "Semantic Hierarchy",
            "Linear Representation Hypothesis",
            "Simplices",
            "Orthogonal Subspaces",
            "Binary Concepts",
            "Complex Concepts",
            "Polytopes",
            "Semantic Hierarchy",
        ],
        content:
            "Fundamentally, high-level concepts group into categorical variables---mammal, reptile, fish, bird---with a semantic hierarchy---poodle is a dog is a mammal is an animal. How do LLMs internally represent this structure? https://arxiv.org/abs/2406.01506\n\nWe find an astonishingly simple answer: categorical concepts are simplices in the representation space, and hierarchically related variables are encoded in orthogonal subspaces. This extends the linear representation hypothesis to handle complex semantic structure.\n\nThis is work from @KihoPark_, @_Mr_YJ, @yibophd. Give them a follow! They're doing consistently great things in advancing our understanding of LLMs. Also check out the code at https://github.com/KihoPark/LLM_Categorical_Hierarchical_Representations\n\nThe problem here is extending linear representations from binary concepts to general, more complex, concepts.  A core idea: any categorical concept can be partitioned into many binary concepts, so we can build up complex representations from simple ones.\n\nWe want to compose the representations of binary representations to get representations of complex concepts. Problem: linear representations are naturally _directions_, not _vectors_. So, we don't have addition or natural composition operations.\n\nThe key insight is a way of assigning magnitudes to linear representations of binary features. Then we can use ordinary vector operations to build up complex concepts from simple ones.  This gets us categorical concepts represented as (very complex) polytopes.\n\nThe second insight is that the representation geometry handles hierarchical structure very elegantly. Specifically: different levels of the semantic hierarchy are represented in (nearly) orthogonal subspaces of the representation space.\n\nIn total, this gives an amazingly simple structure. Simple concepts are represented as simplices in the representation space, and complex concepts are built up as direct sums reflecting the hierarchical semantics. Experiments with Gemma and WordNet show the structure clearly!",
        isOpinion: false,
        postId: "1800221324348125617",
        urls: ["https://t.co/HK2iFLUpte", "https://t.co/ytDyv939LR"],
        imgs: [
            "https://pbs.twimg.com/media/GPupCEqW8AA0oif.jpg",
            "https://pbs.twimg.com/media/GPupGIzXIAARs1C.png",
        ],
        author_id: "129310283098",
        created_at: "2024-06-11T02:39:12.000Z",
        users: [
            {
                username: "victorveitch",
                created_at: "2020-06-19T07:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1105223309380198400/3I5wCV_5_normal.png",
                id: "129310283098",
                name: "Victor Veitch",
                url: "https://twitter.com/victorveitch",
            },
            {
                username: "KihoPark_",
                created_at: "2023-06-19T07:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1722291179612418048/lDOdBX9d_normal.jpg",
                id: "192830928",
                name: "Kiho Park",
                url: "https://twitter.com/KihoPark_",
            },
            {
                username: "_Mr_YJ",
                created_at: "2022-06-19T07:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1722300592133898240/1kCt3ZKX_normal.jpg",
                id: "192831028",
                name: "YJ Choe",
                url: "https://twitter.com/_Mr_YJ",
            },
            {
                username: "yibophd",
                created_at: "2021-06-19T07:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1598312430458867713/yGldomE__normal.jpg",
                id: "1901802323",
                name: "Yibo Jiang",
                url: "https://twitter.com/yibophd",
            },
        ],
    },
    {
        id: 40,
        summary: "Intelligence is more than comparing humans and machines.",
        keywords: [
            "Evolutionary Intelligence",
            "Social Intelligence",
            "Collective Intelligence",
            "Machine Intelligence",
            "Human Intelligence",
            "AI",
            "Machine Learning",
            "Artificial Intelligence",
            "Intelligence",
        ],
        author_id: "123919083208",
        content:
            "people often miss evolutionary, social, and collective intelligence when they narrowly compare a human's intelligence with that of machines",
        isOpinion: true,
        postId: "1801037789242212768",
        urls: [],
        imgs: [],
        created_at: "2024-06-13T08:44:12.000Z",
        users: [
            {
                username: "jeffbigham",
                created_at: "2015-06-19T07:35:16.000Z",
                profile_image_url:
                    "https://pbs.twimg.com/profile_images/1729294554434531328/lRtZEFZY_normal.jpg",
                id: "123919083208",
                name: "Jeffrey P. Bigham",
                url: "https://twitter.com/jeffbigham",
            },
        ],
    },
];
