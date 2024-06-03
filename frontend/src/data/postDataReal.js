// import { PostType } from "../store/slices/post"
export const postData = [
    {
        id: 0,
        keywords: [
            "Contextual Self-Supervised Learning",
            "Vision",
            "Invariance",
            "Equivariance",
            "Task-Specific Symmetries",
            "Context",
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
            "https://twitter.com/sharut_gupta/status/1796192764121555411/photo/1",
            "https://twitter.com/sharut_gupta/status/1796192768890388588/photo/1",
            "https://twitter.com/sharut_gupta/status/1796192776561811801/photo/1",
            "https://twitter.com/sharut_gupta/status/1796192781712445734/photo/1",
            "https://twitter.com/sharut_gupta/status/1796192781712445734/photo/2",
            "https://twitter.com/sharut_gupta/status/1796192787710242856/photo/1",
            "https://twitter.com/sharut_gupta/status/1796192787710242856/photo/2",
            "https://twitter.com/sharut_gupta/status/1796192793213219027/photo/1",
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
            "randomized benchmarking-like protocol",
            "bosonic modes",
            "noise source",
            "correlation",
            "AlphaFold 3",
            "GPT",
            "Diffusion",
            "CLIP",
            "NLP",
            "Language Model",
            "3D Vision",
            "VAE",
            "trapped ion experiment",
        ],
        summary:
            "Developed a benchmarking protocol to characterize noise in bosonic modes, examining error rates, source, and correlation; validated using trapped ion experiment.",
        isOpinion: false,
        content:
            "Excited to share our new preprint: https://arxiv.org/abs/2405.15237\n\nWe adapt a randomized benchmarking-like protocol to bosonic modes to efficiently characterize a noise source, its strength and its correlation.\n\nPing @SydneyNano, @MJBiercuk\n\nOur goal is to characterize bosonic modes in a driven setting. To do this, we apply randomized displacements in phase space, followed by an inversion step and measure a fidelity. Similar to traditional RB, the decay of mean fidelity gives us the error rate.\n\nWith our protocol, we can also determine the noise source (heating vs dephasing) and the correlation of the noise. We built analytical error models to describe these and validated everything on our trapped ion experiment.\n\n",
        imgs: [
            "https://twitter.com/CValahu/status/1794973628867432473/photo/1",
            "https://twitter.com/CValahu/status/1794979285436080421/photo/1",
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
            "CLIP",
            "NLP",
            "NSD",
            "VAE",
            "Brain-decoded",
            "Semantic Categories",
            "Face Opposite",
            "Offsembles",
        ],
        summary:
            "The text presents a novel fMRI clustering method based on DBSCAN to understand shared sensitivity to visual semantic concepts and their negations in the brain.",
        isOpinion: false,
        content:
            "\ud83d\udea8PAPER ALERT\ud83d\udea8What\u2019s the opposite of a face?\n\nWe developed a novel fMRI clustering method based on DBSCAN to understand shared sensitivity to visual semantic concepts (and their negations!) in the brain\ud83e\udde0\ud83e\uddf5(1/7). https://arxiv.org/abs/2405.17663\n\nOur adapted clustering algorithm clusters the parameters of an NSD -> CLIP decoding model learned via contrastive learning of fMRI inputs.  Clusters are constrained to contain voxels from multiple participants but aren't required to be adjacent (yet clusters emerge!)\n\nTo better understand the semantic properties in brain-decoded CLIP embeddings, we identified images most associated with the cluster centroid (& negation). Food images are confounded with color/shape information in NSD; our method allows us to identify and decouple these factors.\n\nWe identified semantic categories reported in prior work (e.g. faces, bodies, places, orientation), but also novel fine-grained categories (e.g. body motion, legs, hands, general & body-specific numerosity) in fine-grained subsets of brain regions (e.g. EBA, rIPS, early visual).\n\nOur method allows for interpretability of semantic sensitivity in visual cortex, allowing us to discern further semantic categories related to proximity (close / far), lighting conditions, indoors / outdoors location and words in native fMRI space via our adaptation of DBSCAN.\n\nWe find that, according to visual cortex, \u201cthe opposite of a face\u201d is images of people whose faces are obscured but otherwise EXPECTED (e.g. people looking away from the camera, wearing a ski mask).\n\nWe note this similarity to the concept of \u201coffsembles\u201d in recent work (P\u00e9rez-Ortega et al., 2024). Check out our preprint for more figures and to read the full set of results. Work led by the amazing @cory_efird alongside myself, @JoelZylber16090 & @alonamarie.",
        imgs: [
            "https://twitter.com/Alxmrphi/status/1795990408129888682/photo/1",
            "https://twitter.com/Alxmrphi/status/1795990410264711449/photo/1",
            "https://twitter.com/Alxmrphi/status/1795990412479410460/photo/1",
            "https://twitter.com/Alxmrphi/status/1795990414874345972/photo/1",
            "https://twitter.com/Alxmrphi/status/1795990417307050141/photo/1",
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
            "AI",
            "Language Models",
            "LaMPP",
            "Common-sense Knowledge",
            "Non-linguistic Tasks",
            "Image Segmentation",
            "Rare Inputs",
            "Out-of-distribution Inputs",
            "Structurally Novel Inputs",
            "Grounded Perception",
            "Control Tasks",
            "Sparse Datasets",
            "Biased Datasets",
            "Hard-to-collect Datasets",
            "Prompting LMs",
            "Robotics Tasks",
            "Multimodal LMs",
            "Language-and-X Tasks",
            "Model Chaining",
            "Structured Reasoning",
            "Uncertainty",
            "Navigation",
            "Video-Action Segmentation",
            "LMs as a Prior",
        ],
        summary:
            "Introducing LaMPP, a generic approach that uses language models as priors over probabilistic models of tasks to improve performance on rare, out-of-distribution, or structurally novel inputs without hurting in-distribution accuracy.",
        isOpinion: false,
        content:
            "\ud83c\udf89New Paper\ud83c\udf89\n\nLanguage models possess a great deal of common-sense knowledge about real-world environments.\ud83c\udf0e\n\nHow can we take advantage of this for *non-linguistic* tasks?\n\n\ud83d\udd17: https://arxiv.org/abs/2302.02801\n\n\ud83e\uddf51/\n\nWe introduce LaMPP, a generic approach that treats LMs as priors over probabilistic models of tasks. We do this by decomposing problems p(Y|X) into p(Y)p(X|Y), then using the LM to induce a prior over the label space p(Y). 2/\n\nFor example, in image segmentation, we use  LMs to provide priors over (latent) rooms and object labels. This information can then be used to resolve perceptual ambiguity: if we see a bed, we are likely in a bedroom, and thus the nearby table is likely a nightstand. 3/\n\nOverall, we find that LaMPP improves model performance on rare, out-of-distributions, or structurally novel inputs---sometimes by a very wide margin---without hurting in-distribution accuracy. 4/\n\nWe anticipate it can benefit grounded perception and control tasks where training datasets can be sparse, biased, or hard to collect. 5/\n\nThis work is related to other works that have explored prompting LMs to generate plausible plans and actions for robotics tasks (https://aclanthology.org/2022.acl-long.120/, https://say-can.github.io) or chaining multimodal LMs to perform language-and-X tasks (https://socraticmodels.github.io). 6/\n\nUnlike model chaining approaches however, our framework enables models to perform structured reasoning under uncertainty, rather than purely passing messages in string space. 7/\n\nThere's much more in the paper, including applications to two other tasks (navigation and video-action segmentation) and ways of using LMs as a prior over *parameters* as well as labels. See links below! \ud83d\udcc4: https://arxiv.org/abs/2302.02801 \ud83d\udcbb: https://github.com/belindal/LaMPP 8/\n\nMuch thanks to amazing collaborators  @verityw_, @pratyusha_PS, @jacobandreas! (PS: PhD programs take notice -- Will is applying this cycle, and would be a fantastic asset to any lab!)9/9\n\n",
        imgs: [
            "https://twitter.com/belindazli/status/1624191746438762497/photo/1",
            "https://twitter.com/belindazli/status/1624191751597756417/photo/1",
            "https://twitter.com/belindazli/status/1624191755607474177/photo/1",
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
            "DOLOMITES",
            "Domain-Specific",
            "Long-Form",
            "Methodical Tasks",
            "Language Model",
            "Clinician",
            "Teacher",
            "Planning",
            "Task Objective",
            "Task Procedure",
            "Factual Consistency",
            "Evaluation",
            "Gemini-1.5",
            "Multi-Turn Conversations",
            "Multi-Modal Expansion",
        ],
        summary:
            "Google DeepMind introduces DOLOMITES, a long-form generation benchmark for evaluating language models on realistic domain-specific tasks.",
        isOpinion: false,
        content:
            "Excited to share new work done @GoogleDeepMind: \ud83c\udfd4\ufe0f DOLOMITES: Domain-Specific Long-Form Methodical Tasks, a new long-form generation benchmark for evaluating language models on **realistic** domain-specific tasks. Website: https://dolomites-benchmark.github.io Paper: https://arxiv.org/abs/2405.05938\n\nExperts in various fields use writing to organize & report their work. From a clinician writing a plan of treatment to a teacher writing a lesson plan, these tasks are pervasive across fields. Crucially, these tasks all require producing some structured output given some input.\n\nWe generalize these tasks as **methodical tasks** because of their structured format and methodical nature of execution. Through DOLOMITES, we study the capabilities of LMs to assist experts with these tasks.\n\nFirst, we collect descriptions of 519 such tasks from experts across 25 fields. Each task has a standard format and contains a task objective, procedure, input & output sections.\n\nTasks are validated for being representative tasks from each field, most are medium-high complexity and take a significant amount of time to complete. Further, we study the societal implications of using LMs for these tasks by consulting an independent group of experts.\n\nWe then instantiate these tasks with plausible inputs and outputs by sampling relevant documents from the web and synthesizing examples (input and output pairs) of these tasks, which are further post-edited by  the same experts who provided the tasks.\n\nEvaluation is conducted through 1) factual consistency with the reference and 2) LM-based evaluation of pairs of generations. Find results for several LMs in our paper! We propose two evaluation modes, reference-based and reference-less, described here:https://dolomites-benchmark.github.io/evaluation/index.html\n\nWe are excited that this benchmark has already been adapted to evaluate models in the new Gemini-1.5 report released recently: http://goo.gle/GeminiV1-5\n\nWe are really excited to expand DOLOMITES with community contributions (more tasks, multi-turn conversations, multi-modal expansion). If you have a task of your own that you'd like to see included, please head to https://docs.google.com/forms/d/e/1FAIpQLSdMaLnT6VC9conVPK-e3LbtDF-YteOaum7_aCdOsNgdb4pk7g/viewform?usp=sf_link or just reach out if you'd like to chat. We are really excited to expand DOLOMITES with community contributions (more tasks, multi-turn conversations, multi-modal expansion). If you have a task of your own that you'd like to see included, please head to https://docs.google.com/forms/d/e/1FAIpQLSdMaLnT6VC9conVPK-e3LbtDF-YteOaum7_aCdOsNgdb4pk7g/viewform?usp=sf_link or just reach out if you'd like to chat.\n\nWork done in collaboration with @priyanka_17, @kuzman, @spranesh, @fantinehuot, @JonathanBerant, @yatskar, @dipanjand, @mlapata, @chris_alberti.",
        imgs: [
            "https://twitter.com/cmalaviya11/status/1795825935692034270/photo/1",
            "https://twitter.com/cmalaviya11/status/1795825963248586961/photo/1",
            "https://twitter.com/cmalaviya11/status/1795826011038449739/photo/1",
            "https://twitter.com/cmalaviya11/status/1795826033616461923/photo/1",
            "https://twitter.com/cmalaviya11/status/1795826090793123994/photo/1",
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
            "long-term information",
            "performance drops",
            "benchmarks",
            "icmlconf",
            "arxiv",
            "GitHub",
            "collaboration",
            "Machine Learning",
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
            "long-context language models",
            "long-dependency understanding",
            "post-2022 long documents",
            "ACL 2024",
            "arXiv",
            "Hugging Face Datasets",
            "bigainlco",
            "long-dependencies",
            "language models",
        ],
        summary:
            "LooGLE benchmark for long-dependency understanding in post-2022 long documents.",
        isOpinion: false,
        content:
            "\ud83e\uddd0Can long-context language models really understand long contexts? \ud83d\udce2Excited to introduce LooGLE (#acl2024  main), a new benchmark targeting long-dependency understanding in post-2022 long documents. \ud83d\udc49Paper: http://arxiv.org/abs/2311.04939 \ud83d\udc49HF Data: http://hf.co/datasets/bigainlco/LooGLE",
        author_id: "2556242232",
        postId: "1796458866903073234",
        created_at: "2024-05-31T08:29:05.000Z",
        imgs: [
            "https://twitter.com/ZilongZheng/status/1796458866903073234/photo/1",
        ],
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
            "LLM personalization/alignment",
            "Multifaceted Collection",
            "196k unique system messages",
            "diverse human preferences",
            "personalized RLHF",
            "fine-grained preference data",
            "Mistral 7B v0.2",
            "Janus 7B",
            "74.8% win rate vs Mistral 7B Instruct v0.2",
            "70.8% win rate vs GPT-3.5-Turbo-0125",
            "57.9% win rate vs GPT-4-Turbo-0125",
        ],
        summary:
            "New zero-shot alignment method for personalizable LLMs using system messages, achieving high win rates and surpassing other models in alignment and diversity.",
        isOpinion: false,
        content:
            "\ud83d\udea8 New LLM personalization/alignment paper \ud83d\udea8 \ud83e\udd14 How can we obtain personalizable LLMs without explicitly re-training reward models/LLMs for each user? \u2714 We introduce a new zero-shot alignment method to control LLM responses via the system message \ud83d\ude80\n\nAligning LLMs with human preferences is crucial for building reliable AI systems. A vast majority of alignment methods focus mostly on simple binary schemes\u2014helpfulness or harmlessness. \ud83c\udf08 However, human preferences aren't just binary; they're multifaceted and diverse! Recent works suggest a new paradigm called personalized RLHF to consider individual preferences during alignment. \ud83d\udcb8 However, current personalization methods require collecting fine-grained preference data for each individual. This approach may not be scalable in terms of time, storage, and cost. \ud83d\udd0d We focus on the role of the system message to guide an LLM to adopt specific behaviors or roles, crafting responses that resonate on a personal level with users. Traditionally, LLMs operate under a default system message like 'You are a helpful assistant\u2026' But what if we could do more?\n\nWe introduce the Multifaceted Collection, a dataset with 196k unique system messages for aligning LLMs to diverse human preferences, enhancing our approach that trains LLMs to adapt to new and unseen preferences, boosting personalization! It consists of 65k unique instructions, each accompanied by 3 synthetic system messages, along with respective personalized responses. Through a set of quantitative analyses, it encompasses a variety of preferences. We also train Mistral 7B v0.2 on the dataset, enabling our resulting LLM, Janus 7B \ud83c\udfad, to generate personalized responses tailored to user preferences.\n\nWe tested Janus on 921 instructions across 5 benchmarks to see if it aligns with human verified diverse system messages. In a pairwise ranking human evaluation setting, Janus 7B achieves win rates of 74.8% vs Mistral 7B Instruct v0.2, 70.8% vs GPT-3.5-Turbo-0125, and 57.9% vs GPT-4-Turbo-0125! Results in direct assessment with GPT-4 evaluation show similar trends, where Janus 7B scores 4.24 out of 5, surpassing LLaMA 3 8B Instruct (4.1) and other similar sized models, and nearly matching bigger sized LLM, LLaMA 3 Instruct 70B (4.39) and proprietary LLM, GPT-4-Turbo-0125 (4.35)!\n\nSurprisingly, when assessing the helpfulness of the response on 3 benchmarks (AlpacaEval 2.0, MT-Bench, Arena Hard Auto v0.1), Janus outperforms LLaMA 3 8B Instruct by a +4.0%, +0.1%, and +0.3% margin. Janus is also designed to reflect a broad range of individual values while prioritizing safety by maintaining consistent standards for harmlessness. Janus 7B shows an average maximum toxicity of 0.256 and a toxicity probability of 0.061, significantly lower than other instruction-tuned models maintaining diversity score on RealToxicityPrompts. \ud83c\udf1fTraining models with various system messages not only boosts diversity but also efficiently enhances alignment with the general public\u2019s preferences, without compromising safety! \u2705 This confirms the powerful impact of system message generalization!\n\n To learn more about our work, please check out our paper, code, datasets and models! Paper: https://arxiv.org/abs/2405.17977 Code: https://github.com/kaistAI/Janus Datasets and models: https://t.co/QIOVRkjyiA\n\nI'd like to thank all my co-authors for their valuable comments & advice throughout the project! And a special thanks to @suehpark, who co-led this project with me! @seungonekim @seo_minjoon",
        imgs: [
            "https://twitter.com/sylee_ai/status/1796539962780979478/photo/1",
            "https://twitter.com/sylee_ai/status/1796540178158453242/photo/1",
            "https://twitter.com/sylee_ai/status/1796540310513909896/photo/1",
            "https://twitter.com/sylee_ai/status/1796540554484031857/photo/1",
            "https://twitter.com/sylee_ai/status/1796540554484031857/photo/2",
            "https://twitter.com/sylee_ai/status/1796540681827328177/photo/1",
            "https://twitter.com/sylee_ai/status/1796540681827328177/photo/2",
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
            "idealized ranking accuracy",
            "alignment gap",
            "RLHF/DPO",
            "policy",
            "ranking",
            "preference-tuned models",
            "divergence",
            "off-policy behaviors",
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
            "https://twitter.com/_angie_chen/status/1796220428345573399/photo/1",
            "https://twitter.com/_angie_chen/status/1796220431709462794/photo/1",
            "https://twitter.com/_angie_chen/status/1796220433622040661/photo/1",
            "https://twitter.com/_angie_chen/status/1796220435501056385/photo/1",
            "https://twitter.com/_angie_chen/status/1796220439003385857/photo/1",
            "https://twitter.com/_angie_chen/status/1796222260245934391/photo/1",
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
            "#ICML2024",
            "Neural Networks",
            "Mechanistic Interpretability",
            "Low-dimensional Representations",
            "Nuclear Physics",
            "MIT_Physics",
            "IAIFI",
            "AIatMeta",
            "ML Venue",
            "Human Knowledge",
        ],
        summary:
            "Mechanistic interpretability reveals low-dimensional representations in neural networks aligned with human knowledge in nuclear physics case study.",
        isOpinion: false,
        content:
            "Very excited to share that our paper has been accepted at #ICML2024 and is now out! I was incredibly fortunate to collaborate with amazing scientists from @MIT_Physics, @iaifi_news, and @AIatMeta. This is my second paper and my first in a ML venue!\n\nIn this paper, we argue that mechanistic interpretability can reveal low-dimensional representations in neural networks that align with human knowledge, as shown through a case study on nuclear physics. Check it out!",
        postId: "1797074412073558477",
        author_id: "2633759965",
        created_at: "2024-06-02T01:15:02.000Z",
        imgs: [
            "https://twitter.com/samuelperezdi/status/1797074412073558477/photo/1",
        ],
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
            "Word Embeddings",
            "Language Models",
            "LLM",
            "Controlling LM Generation Style",
            "Pretrained LLM Backbones",
            "ACL2024",
            "Preprint",
            "Chi",
            "UIUC NLP",
            "ACL Main Venue",
        ],
        isOpinion: false,
        summary:
            "Efficiently controlling language model generation style through word embeddings.",
        content:
            "\ud83d\udca1In the era of pretrained LLM backbones, what are fundamental mechanisms behind effectively & efficiently controlling LM generation style? \ud83d\ude80 Introducing \u201cWord Embeddings Are Steers for Language Models\u201d, which we'll present at #ACL2024! \ud83d\udcdc Preprint: https://arxiv.org/pdf/2305.12798\n\nThis is work led by my amazing labmate, Chi, and many thanks to our amazing team of collaborators @uiuc_nlp for all of the thoughtful discussion & contributions! Happy to discuss more in \ud83c\uddf9\ud83c\udded ACL main venue. \ud83e\udd17",
        imgs: [
            "https://twitter.com/YiFung10/status/1792610904892387519/photo/1",
            "https://twitter.com/YiFung10/status/1792610904892387519/photo/2",
            "https://twitter.com/YiFung10/status/1792610904892387519/photo/3",
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
];
