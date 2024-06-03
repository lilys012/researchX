export const postData = [
    {
        id: 0,
        keywords: [
            "Contextual Self-Supervised Learning",
            "Vision",
            "Invariance",
            "Equivariance",
            "SSL",
            "Human Perception",
            "Transformers",
            "Contextual World Models",
            "Image World Models",
            "Shortcuts",
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
            "Quantum Computing",
            "Bosonic Modes",
            "Noise Characterization",
            "Randomized Benchmarking",
            "Error Rate",
            "Fidelity",
            "Heating",
            "Dephasing",
            "Noise Correlation",
            "Trapped Ion Experiment",
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
            "DBSCAN",
            "fMRI",
            "NSD",
            "CLIP",
            "Decoding",
            "Contrastive Learning",
            "Semantic Concepts",
            "Body Motion",
            "Legs",
            "Hands",
            "Numerosity",
            "EBA",
            "rIPS",
            "Early Visual",
            "Native fMRI Space",
            "Opposite of a Face",
            "Offsembles",
            "Preprint",
            "Cory Efird",
            "Joel Zylber",
            "Alona Mariam",
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
            "Language models",
            "common-sense knowledge",
            "non-linguistic tasks",
            "LaMPP",
            "probabilistic models",
            "image segmentation",
            "rare inputs",
            "out-of-distribution inputs",
            "grounded perception",
            "control tasks",
            "prompting LMs",
            "robotics tasks",
            "multimodal LMs",
            "language-and-X tasks",
            "structured reasoning",
            "uncertainty",
            "navigation",
            "video-action segmentation",
            "LMs as a prior over parameters and labels",
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
            "AI",
            "Language Model",
            "Long-Form Generation",
            "Benchmark",
            "Language Models",
            "Domain-Specific",
            "Methodical Tasks",
            "Evaluation",
            "Factual Consistency",
            "Multi-Modal",
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
            "MEMORYLLM",
            "self-updatable parameters",
            "long-term information retention",
            "extensive benchmarks",
            "icmlconf",
            "read the full paper",
            "arxiv",
            "check out the code on GitHub",
            "great collaboration",
            "Yifan_Gao",
            "XtremSup",
            "ShiyangLi6",
            "JingfengY",
            "YinQingyu",
            "jiang_haoming",
            "generous help",
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
            "LooGLE",
            "ACL2024",
            "Long-context language models",
            "Long-dependency understanding",
            "Post-2022 long documents",
            "Natural Language Processing (NLP)",
            "Language Model",
            "Benchmark",
            "Arxiv.org",
            "Hugging Face (HF) Data",
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
            "zero-shot",
            "system message",
            "preference",
            "personalized RLHF",
            "Mistral 7B v0.2",
            "Janus 7B",
            "Multifaceted Collection",
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
            "RLHF/DPO",
            "Ranking Accuracy",
            "Preference Data",
            "Alignment Gap",
            "Policies",
            "Optimization",
            "Ref. Model",
            "Ranking",
            "Win Rates",
            "Loss",
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
            "Machine Learning",
            "Neural Networks",
            "Mechanistic Interpretability",
            "Low-Dimensional Representations",
            "Human Knowledge",
            "Nuclear Physics",
            "Collaboration",
            "MIT_Physics",
            "IAIFI_News",
            "AIatMeta",
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
            "Language Model",
            "LLM",
            "Pretrained",
            "Word Embeddings",
            "ACL2024",
            "Preprint",
            "Chi",
            "UIUC\\_NLP",
            "ACL",
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
            "Mark Zuckerberg",
            "Silicon Valley",
            "Meta",
            "Open-Source",
            "Artificial Intelligence",
            "AI",
            "Zuckerberg",
            "Meta Chief",
            "Open-Source AI",
            "Industry Ecosystem",
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
        keywords: ["AI", "OpenAI", "Google", "Aesthetic Difference"],
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
            "AI",
            "LLM",
            "RAG",
            "Westlaw",
            "Stanford",
            "Legal Research",
            "AI-Assisted Research",
            "Hallucinations",
            "Paper",
            "V2",
        ],
        summary: 'Legal AI-generated "facts" hallucinations and examples.',
        isOpinion: true,
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
            "fundamental challenge",
            "AI alignment paradox",
            "human goals",
            "human values",
            "perspective piece",
            "model tinkering",
            "neural net latent state",
            "steering vector",
            "broad community",
            "research",
            "real-world impact",
            "beneficial use",
            "humanity",
            "AI safety",
            "machine ethics",
            "AGI alignment",
            "value learning",
            "value misalignment",
            "alignment problem",
            "alignment research",
            "ethical AI",
            "value alignment",
            "value specification",
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
            "diffusion models",
            "multimodal controls",
            "multilingual texts",
            "sounds",
            "NLP",
            "Stable Diffusion",
            "XLM-Roberta",
            "sound-to-image generation",
            "image generation",
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
            "LLM",
            "instruction tuning",
            "LESS",
            "Adam",
            "Influence Formulation",
            "Bengali QA",
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
            "GPT-4",
            "evaluation sets",
            "LLMs",
            "Alpaca-52k",
            "Evol-Instruct-70k",
            "GPT-3.5",
            "NEFTune",
            "Llama-2-7B",
            "AlpacaEval 2.0",
            "Open LLM datasets",
            "ARC",
            "MMLU",
            "Winogrande",
            "response length",
            "superficial alignment hypothesis",
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
            "SAM-CLIP",
            "Vision Foundation Models",
            "Continual Learning",
            "Distillation Techniques",
            "Semantic Segmentation",
            "Zero-Shot Semantic Segmentation",
            "Text-Prompted Segmentation",
            "Head-Probing Experiments",
            "Visual Features",
            "Industry Jobs",
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
            "AI",
            "Machine Learning",
            "Citations",
            "Arxiv",
            "Peer Review",
            "Papers",
            "Research",
            "Scholarship",
            "Bibliometrics",
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
];