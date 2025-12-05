
import { PortfolioData } from './types';

// =========================================================================
// EDIT THIS FILE TO UPDATE YOUR WEBSITE CONTENT
// =========================================================================

export const UI_LABELS = {
  en: {
    nav: { about: 'About', experience: 'Experience', research: 'Research', skills: 'Skills', sayHello: 'Say Hello' },
    hero: { open: 'OPEN FOR OPPORTUNITIES', hi: "Hi, I'm", contact: 'Contact Me', download: 'Download CV' },
    experience: { title: 'Work Experience', subtitle: 'Professional Journey' },
    education: { title: 'Education & Research', subtitle: 'Academic Background', eduTitle: 'Education', honors: 'Honors', pubTitle: 'Selected Publications', published: 'Published' },
    skills: { title: 'Technical Arsenal', subtitle: 'Skills & Competencies', count: 'SKILLS', languages: 'Languages', hobbies: 'Interests & Hobbies' },
    contact: { title: 'Get In Touch', subtitle: "Let's Connect", heading: 'Interested in working together?', text: "I'm currently open for new opportunities in game design and interactive media. Whether you have a project in mind or just want to chat about game dev, feel free to reach out.", email: 'Send Email', call: 'Call Me', copied: 'Email copied to clipboard!' },
    footer: { copyright: 'Zhao Wenbo. All rights reserved.' }
  },
  cn: {
    nav: { about: '关于', experience: '经历', research: '研究', skills: '技能', sayHello: '打个招呼' },
    hero: { open: '正在寻找机会', hi: '你好，我是', contact: '联系我', download: '下载简历' },
    experience: { title: '工作经历', subtitle: '职业旅程' },
    education: { title: '教育与研究', subtitle: '学术背景', eduTitle: '教育经历', honors: '荣誉奖项', pubTitle: '精选论文', published: '发表于' },
    skills: { title: '技能武器库', subtitle: '能力清单', count: '项技能', languages: '语言能力', hobbies: '兴趣爱好' },
    contact: { title: '取得联系', subtitle: '保持沟通', heading: '有兴趣一起合作吗？', text: '目前正在寻找游戏策划与交互媒体设计的新机会。如果您有相关项目或想交流游戏开发，欢迎随时联系。', email: '发送邮件', call: '拨打电话', copied: '邮箱已复制到您的剪贴板！' },
    footer: { copyright: '赵文博。保留所有权利。' }
  }
};

export const DATA_EN: PortfolioData = {
  profile: {
    name: "Zhao Wenbo",
    title: "Game Designer & Interactive Media Artist",
    about: "Aspiring game designer with 3 years of experience in casual game design, market research, and interactive system development. Holds a BA in Digital Media Art with a strong academic and international background. My work bridges the gap between digital immersion and cultural heritage, seeking to create meaningful interactive experiences.",
    // PLEASE PLACE YOUR IMAGES IN THE PUBLIC FOLDER AND NAME THEM AS BELOW
    avatar: "/cartoon.png", 
    cartoon: "/cartoon.png",
    // ADD MORE PHOTOS HERE FOR THE SLIDESHOW
    gallery: [
      "/profile.png",
      "/cartoon.png", 
      "/1.png", 
      "/2.png", 
      "/3.png", 
      "/4.png", 
      "/5.png", 
      "/6.png", 
      "/7.png", 
      "/8.png", 
      "/9.png", 
      "/10.png", 
      // "/photo3.png", 
      // "/photo4.png"
    ],
    languages: ["Chinese (Native)", "English (Fluent)", "French (B1)"],
    hobbies: ["Photography", "Bird Watching", "Gaming", "Digital Gadgets"],
    contact: {
      email: "xu216126@gmail.com",
      phone: "+86 18800125107",
      location: "Beijing, China",
      // Add your real links here if available
      // github: "https://github.com/yourusername", 
      // linkedin: "https://linkedin.com/in/yourusername"
    }
  },
  education: [
    {
      school: "Communication University of China",
      degree: "Bachelor of Arts in Digital Media Art",
      period: "Sep 2017 - Jun 2021",
      location: "Beijing, China",
      gpa: "3.58/4",
      details: [
        "Relevant Courses: Design Psychology (95), Virtual Reality Creation (97), HCI Technology (95), Interactive Art Thinking (96)"
      ],
      honors: [
        "3rd Prize, Beijing Animation Design Competition (2020)",
        "Canada Digital Media Exchange Program (2019)"
      ]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Game Market Analyst",
      company: "Xiamen Paoyou Network Technology Co., Ltd.",
      period: "Jan 2023 - Jun 2023",
      description: [
        "Developed analysis frameworks based on session duration and user profiles.",
        "Conducted deep-dive teardowns of 20+ games, assessing systems and performance metrics.",
        "Forecasted market trends using 2022-2023 industry reports.",
        "Monitored market data via SensorTower, Reyun, and Diandian to provide strategic insights."
      ]
    },
    {
      id: "exp-2",
      role: "Casual Game Designer",
      company: "Competitive World (Beijing) Network Technology Co., Ltd.",
      period: "Jan 2021 - Sep 2022",
      description: [
        "Designed system architecture and core gameplay for puzzle and idle games.",
        "Led competitive analysis to optimize monetization strategies and User Experience (UX).",
        "Balanced game economies, resulting in a 10% Year-over-Year revenue improvement.",
        "Designed seasonal events that increased Daily Active Users (DAU) by 12%."
      ]
    },
    {
      id: "exp-3",
      role: "Interactive Visual Designer",
      company: "Beijing New Drama Yuan Culture Technology Co., Ltd.",
      period: "Sep 2019 - Dec 2019",
      description: [
        "Built an interactive projection system using Unity & LiDAR for the Panasonic Expo.",
        "Implemented OpenCV body tracking and OSC protocol for real-time synchronization.",
        "Created audio-reactive visuals using Notch."
      ]
    }
  ],
  research: [
    {
      id: "res-1",
      title: "Enhancing the Digital Inheritance and Embodied Experience of Zen via Multimodal Mixed Reality System",
      link: "https://dl.acm.org/doi/10.1145/3641234.3671076",
      type: "ACM",
      year: "2024"
    },
    {
      id: "res-2",
      title: "Flowing with Zen: Empowering Intangible Cultural Heritage through Immersive Mixed Reality Spaces",
      link: "https://ieeexplore.ieee.org/document/10536535/",
      type: "IEEE",
      year: "2024"
    }
  ],
  skills: [
    {
      category: "Design & Research",
      items: ["Game Design", "Interaction Logic", "UX Flow", "Market Research", "System Architecture"]
    },
    {
      category: "Development & Tools",
      items: ["Unity", "Unreal Engine", "C#", "Axure", "Sketch", "Adobe Suite", "Notch", "OpenCV"]
    },
    {
      category: "Data Analysis",
      items: ["SensorTower", "Reyun", "Diandian", "Excel", "Data Visualization"]
    }
  ]
};

export const DATA_CN: PortfolioData = {
  profile: {
    name: "赵文博",
    title: "游戏策划 & 交互媒体艺术家",
    about: "拥有3年经验的游戏策划，专注于休闲游戏设计、市场研究及交互系统开发。拥有数字媒体艺术学士学位，具备扎实的学术与国际化背景。我的工作致力于连接数字沉浸体验与文化传承，探索创造有意义的交互体验。",
    // 请将您的图片放入 public 文件夹并命名为以下名称
    avatar: "/cartoon.png", 
    cartoon: "/cartoon.png",
    // 在此处添加更多照片路径用于轮播展示
    gallery: [
      "/profile.png",
      "/cartoon.png", 
      "/1.png", 
      "/2.png", 
      "/3.png", 
      "/4.png", 
      "/5.png", 
      "/6.png", 
      "/7.png", 
      "/8.png", 
      "/9.png", 
      "/10.png", 
      // "/photo3.png", 
      // "/photo4.png"
    ],
    languages: ["中文 (母语)", "英语 (流利)", "法语 (B1)"],
    hobbies: ["摄影", "观鸟", "游戏", "数码产品"],
    contact: {
      email: "xu216126@gmail.com",
      phone: "+86 18800125107",
      location: "中国北京",
    }
  },
  education: [
    {
      school: "中国传媒大学",
      degree: "数字媒体艺术 学士",
      period: "2017年9月 - 2021年6月",
      location: "中国北京",
      gpa: "3.58/4",
      details: [
        "相关课程：设计心理学 (95)、虚拟现实创作 (97)、人机交互技术 (95)、互动艺术思维 (96)"
      ],
      honors: [
        "2020年北京市动漫设计竞赛三等奖",
        "2019年加拿大数字媒体交流项目"
      ]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "高级市场分析师",
      company: "厦门泡游网络科技有限公司",
      period: "2023年1月 - 2023年7月",
      description: [
        "根据体验时长与用户画像搭建分析框架。",
        "深度拆解20+款游戏，评估系统与性能指标。",
        "利用2022-2023年行业报告预测市场趋势。",
        "通过SensorTower、热云数据、点点数据等渠道观测市场数据，提供战略洞察。"
      ]
    },
    {
      id: "exp-2",
      role: "休闲游戏策划",
      company: "北京竞技世界网络科技有限公司",
      period: "2021年1月 - 2022年9月",
      description: [
        "设计解谜与放置类游戏的系统架构与核心玩法。",
        "主导竞品分析，优化商业化策略与用户体验 (UX)。",
        "平衡游戏经济数值，实现日流水同比增长10%。",
        "设计季节性活动，提升日活跃用户 (DAU) 12%。"
      ]
    },
    {
      id: "exp-3",
      role: "交互视觉设计师",
      company: "北京新剧元文化科技有限公司",
      period: "2019年9月 - 2019年12月",
      description: [
        "利用Unity与激光雷达为松下展厅搭建交互投影系统。",
        "应用OpenCV人体追踪与OSC协议实现实时同步。",
        "使用Notch创作音频反应视觉效果。"
      ]
    }
  ],
  research: [
    {
      id: "res-1",
      title: "Enhancing the Digital Inheritance and Embodied Experience of Zen via Multimodal Mixed Reality System",
      link: "https://dl.acm.org/doi/10.1145/3641234.3671076",
      type: "ACM",
      year: "2024"
    },
    {
      id: "res-2",
      title: "Flowing with Zen: Empowering Intangible Cultural Heritage through Immersive Mixed Reality Spaces",
      link: "https://ieeexplore.ieee.org/document/10536535/",
      type: "IEEE",
      year: "2024"
    }
  ],
  skills: [
    {
      category: "设计与研究",
      items: ["游戏设计", "交互逻辑", "用户体验流", "市场研究", "系统架构"]
    },
    {
      category: "开发与工具",
      items: ["Unity", "Unreal Engine", "C#", "Axure", "Sketch", "Adobe Suite", "Notch", "OpenCV"]
    },
    {
      category: "数据分析",
      items: ["SensorTower", "热云数据", "点点数据", "Excel", "数据可视化"]
    }
  ]
};
