export const Templates = [
    {
        name: "Blog Title",
        desc: "An AI Tool That Generates Blog Titles Based On Your Prompt",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt: "Give Me 5 Blog Topic Idea Bullet Wise Only Based On Given Niche Topic And Give Me Result In Rich Text Formate",
        slug: "generate-blog-title",
        form: [
            {
                label: "Enter Your Blog Niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter Your Blog Outline",
                field: "textarea",
                name: "outline",
                required: false
            }
        ]
    },
    {
        name: "Blog Content",
        desc: "An AI Tool That Generates Blog Content Based On Your Prompt",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/8733/8733428.png",
        aiPrompt: "Generate Blog Content With Given Topic In Rich Text Formate",
        slug: "generate-blog-content",
        form: [
            {
                label: "Enter Your Blog Topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter Your Blog Outline",
                field: "textarea",
                name: "outline",
                required: false
            }
        ]
    },
    {
        name: "YouTube Video Ideas",
        desc: "Generate YouTube Video Ideas  Based On Given Niche",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        aiPrompt: "Provide 5 Unique YouTube Video Ideas Related To The Given Niche Topic In Bullet Points Only(No Description)",
        slug: "generate-youtube-ideas",
        form: [
            {
                label: "Enter Video Niche",
                field: "input",
                name: "niche",
                required: true
            }
        ]
    },
    {
        name: "YouTube Script Outline",
        desc: "Create a YouTube Video Script Outline Based On Your Topic",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        aiPrompt: "Generate a Structured Outline For a YouTube Video Script Based On The Given Topic",
        slug: "generate-youtube-script-outline",
        form: [
            {
                label: "Enter Video Topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter Any Key Points You Want To Include",
                field: "textarea",
                name: "keypoints",
                required: false
            }
        ]
    },
    {
        name: "Code Explanation",
        desc: "Explain Code Snippets In Simple Language",
        category: "Code",
        icon: "https://cdn-icons-png.flaticon.com/128/3573/3573187.png",
        aiPrompt: "Explain The Provided Code In Simple Language With Step By Step Details",
        slug: "generate-code-explanation",
        form: [
            {
                label: "Paste Your Code Here",
                field: "textarea",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "Code Optimization",
        desc: "Optimize Code Snippets For Better Performance",
        category: "Code",
        icon: "https://cdn-icons-png.flaticon.com/128/3573/3573187.png",
        aiPrompt: "Optimize The Given Code For Better Performance And Provide Comments For Any Changes",
        slug: "optimize-code",
        form: [
            {
                label: "Paste Your Code Here",
                field: "textarea",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "Blog Intro Generator",
        desc: "Generate an Engaging Introduction for Your Blog Post",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt: "Generate a Catchy Introduction for a Blog Post Based on the Provided Topic",
        slug: "generate-blog-intro",
        form: [
            {
                label: "Enter Blog Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Blog Conclusion Generator",
        desc: "Create a Strong Conclusion for Your Blog Post",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt: "Write a Conclusion for a Blog Post Based on the Provided Topic and Key Points",
        slug: "generate-blog-conclusion",
        form: [
            {
                label: "Enter Blog Topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter Key Points or Summary of Blog",
                field: "textarea",
                name: "keypoints",
                required: false
            }
        ]
    },
    {
        name: "Blog SEO Keywords",
        desc: "Generate SEO-Friendly Keywords for Your Blog Post",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt: "Generate a List of SEO-Friendly Keywords Related to the Provided Blog Topic",
        slug: "generate-blog-seo-keywords",
        form: [
            {
                label: "Enter Blog Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Social Media Caption",
        desc: "Generate Engaging Captions for Social Media Posts",
        category: "Social",
        icon: "https://cdn-icons-png.flaticon.com/128/3955/3955024.png",
        aiPrompt: "Create an Engaging Social Media Caption Based on the Given Context",
        slug: "generate-social-caption",
        form: [
            {
                label: "Enter Post Context",
                field: "textarea",
                name: "context",
                required: true
            }
        ]
    },
    {
        name: "Email Newsletter",
        desc: "Create Professional Email Newsletter Content",
        category: "Email",
        icon: "https://cdn-icons-png.flaticon.com/128/561/561127.png",
        aiPrompt: "Generate Professional Email Newsletter Content Based on the Given Topic",
        slug: "generate-newsletter",
        form: [
            {
                label: "Enter Newsletter Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Product Description",
        desc: "Generate Compelling Product Descriptions",
        category: "Marketing",
        icon: "https://cdn-icons-png.flaticon.com/128/3081/3081559.png",
        aiPrompt: "Create a Compelling Product Description Based on the Given Details",
        slug: "generate-product-description",
        form: [
            {
                label: "Enter Product Details",
                field: "textarea",
                name: "details",
                required: true
            }
        ]
    },
    {
        name: "Meta Description",
        desc: "Generate SEO-Optimized Meta Descriptions",
        category: "SEO",
        icon: "https://cdn-icons-png.flaticon.com/128/1378/1378598.png",
        aiPrompt: "Create an SEO-Friendly Meta Description Based on the Given Content",
        slug: "generate-meta-description",
        form: [
            {
                label: "Enter Page Content or Topic",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "FAQ Generator",
        desc: "Generate Relevant FAQs for Your Content",
        category: "Content",
        icon: "https://cdn-icons-png.flaticon.com/128/4403/4403358.png",
        aiPrompt: "Generate a List of Relevant FAQs Based on the Given Topic",
        slug: "generate-faqs",
        form: [
            {
                label: "Enter Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Content Rewriter",
        desc: "Rewrite Content While Maintaining Context",
        category: "Content",
        icon: "https://cdn-icons-png.flaticon.com/128/2921/2921222.png",
        aiPrompt: "Rewrite the Given Content While Maintaining Its Original Context",
        slug: "rewrite-content",
        form: [
            {
                label: "Enter Content to Rewrite",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "Hashtag Generator",
        desc: "Generate Relevant Hashtags for Social Media",
        category: "Social",
        icon: "https://cdn-icons-png.flaticon.com/128/1827/1827975.png",
        aiPrompt: "Generate Relevant Hashtags Based on the Given Topic or Content",
        slug: "generate-hashtags",
        form: [
            {
                label: "Enter Topic or Content",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "Call-to-Action Generator",
        desc: "Create Compelling Call-to-Action Phrases",
        category: "Marketing",
        icon: "https://cdn-icons-png.flaticon.com/128/1584/1584942.png",
        aiPrompt: "Generate Compelling Call-to-Action Phrases Based on the Given Context",
        slug: "generate-cta",
        form: [
            {
                label: "Enter Context or Goal",
                field: "textarea",
                name: "context",
                required: true
            }
        ]
    },
    {
        name: "Article Summarizer",
        desc: "Create Concise Summaries of Long Articles",
        category: "Content",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt: "Generate a Concise Summary of the Given Article Content",
        slug: "summarize-article",
        form: [
            {
                label: "Paste Article Content",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "Video Description",
        desc: "Generate Engaging Video Descriptions",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        aiPrompt: "Create an Engaging Video Description Based on the Given Details",
        slug: "generate-video-description",
        form: [
            {
                label: "Enter Video Title and Key Points",
                field: "textarea",
                name: "details",
                required: true
            }
        ]
    },
    {
        name: "LinkedIn Post Generator",
        desc: "Generate Professional LinkedIn Posts Based on a Given Topic",
        category: "Social",
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111467.png",
        aiPrompt: "Create a Professional LinkedIn Post Based on the Given Topic and Details",
        slug: "generate-linkedin-post",
        form: [
            {
                label: "Enter Post Topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter Key Points or Details",
                field: "textarea",
                name: "details",
                required: false
            }
        ]
    },
    {
        name: "Job Description Generator",
        desc: "Create Job Descriptions for Various Roles",
        category: "HR",
        icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
        aiPrompt: "Generate a Job Description Based on the Given Role and Responsibilities",
        slug: "generate-job-description",
        form: [
            {
                label: "Enter Job Title",
                field: "input",
                name: "title",
                required: true
            },
            {
                label: "Enter Key Responsibilities",
                field: "textarea",
                name: "responsibilities",
                required: false
            }
        ]
    },
    {
        name: "Resume Bullet Points",
        desc: "Generate Strong Bullet Points for Your Resume",
        category: "Career",
        icon: "https://cdn-icons-png.flaticon.com/128/196/196358.png",
        aiPrompt: "Generate Powerful Resume Bullet Points Based on the Given Job Role and Achievements",
        slug: "generate-resume-bullets",
        form: [
            {
                label: "Enter Job Role",
                field: "input",
                name: "role",
                required: true
            },
            {
                label: "Enter Key Achievements",
                field: "textarea",
                name: "achievements",
                required: false
            }
        ]
    },
    {
        name: "Poem Generator",
        desc: "Create a Poem Based on a Specific Theme",
        category: "Creative Writing",
        icon: "https://cdn-icons-png.flaticon.com/128/921/921329.png",
        aiPrompt: "Write a Poem Based on the Provided Theme or Emotion",
        slug: "generate-poem",
        form: [
            {
                label: "Enter Poem Theme or Emotion",
                field: "input",
                name: "theme",
                required: true
            }
        ]
    },
    {
        name: "Listicle Generator",
        desc: "Generate a List of Ideas or Points Based on a Topic",
        category: "Content",
        icon: "https://cdn-icons-png.flaticon.com/128/3126/3126540.png",
        aiPrompt: "Create a List of Ideas or Points Based on the Given Topic",
        slug: "generate-listicle",
        form: [
            {
                label: "Enter Topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Personal Bio Generator",
        desc: "Generate a Short Personal Bio for Social Media or Websites",
        category: "Social",
        icon: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
        aiPrompt: "Generate a Short and Engaging Bio Based on the Provided Information",
        slug: "generate-personal-bio",
        form: [
            {
                label: "Enter Key Information About Yourself",
                field: "textarea",
                name: "info",
                required: true
            }
        ]
    },
    {
        name: "Tagline Generator",
        desc: "Create a Catchy Tagline for Your Brand or Product",
        category: "Marketing",
        icon: "https://cdn-icons-png.flaticon.com/128/869/869808.png",
        aiPrompt: "Generate a Catchy Tagline Based on the Provided Brand or Product Details",
        slug: "generate-tagline",
        form: [
            {
                label: "Enter Brand or Product Details",
                field: "textarea",
                name: "details",
                required: true
            }
        ]
    },
    {
        name: "Customer Review Generator",
        desc: "Generate Positive Customer Reviews for Your Product or Service",
        category: "Marketing",
        icon: "https://cdn-icons-png.flaticon.com/128/3159/3159328.png",
        aiPrompt: "Generate a Positive Customer Review Based on the Provided Product or Service Information",
        slug: "generate-customer-review",
        form: [
            {
                label: "Enter Product or Service Details",
                field: "textarea",
                name: "details",
                required: true
            }
        ]
    },
    {
        name: "Case Study Outline",
        desc: "Create an Outline for a Case Study",
        category: "Content",
        icon: "https://cdn-icons-png.flaticon.com/128/1437/1437214.png",
        aiPrompt: "Generate a Case Study Outline Based on the Provided Topic and Details",
        slug: "generate-case-study-outline",
        form: [
            {
                label: "Enter Topic or Business Scenario",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter Any Key Points or Goals",
                field: "textarea",
                name: "keypoints",
                required: false
            }
        ]
    }

];
