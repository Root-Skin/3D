import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sf,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "前后端开发(实习)",
    company_name: "顺丰速运科技有限公司",
    icon: sf,
    iconBg: "#f6f6f6",
    date: "2018年7月 —— 2018年12月",
    points: [
      "SF Logistics Deployment组:负责内部部署监控网站的前端和后端开发,实现并上线新功能和优化性能和代码设计.",
      "参与代码审查，并向其他开发人员提供反馈.",
    ],
  },
  {
    title: "后端开发工程师",
    company_name: "纽睿科技有限公司",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2019年2月 —— 2021年3月",
    points: [
      "医美系统后台业务逻辑接口开发.",
      "与包括设计师、产品经理和其他开发人员在内的跨职能团队合作.",
    ],
  },
  {
    title: "后端开发工程师",
    company_name: "天津狮桥科技股份有限公司",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021年4月 —— ",
    points: [
      "物流数字化管理平台功能开发.",
      "参与前期需求评审,技术设计,文档落地,业务开发.以及上线后文档编写",
    ],
  },
  // {
  //   title: "网络&OS",
  //   // company_name: "家里蹲",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   // date: "",
  //   points: [
  //     "熟悉并且理解常用数据结构储存结构和基本操作以及应用.熟悉常见算法.",
  //     "熟悉计算机网络tcp/ip五层协议以及滑动窗口流量控制,重传,拥塞控制",
  //     "熟悉操作系统的内存管理,文件管理的实现和原理以及处理机调度算法",
  //     "熟悉(Select,Epoll)网络模型,路由协议(RIP,OSPF,BGP),路由算法",
  //     "能通过Wireshark分析各层网络报文",
  //   ],
  // },
];

const testimonials = [
  {
    knows: ["开发语言: JAVA,C"],
    // name: "Lisa Wang",
    // designation: "CTO",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    knows: [
      "熟悉 cortex-A7 应用+驱动开发: ",
      "(GPIO,EPIT,UART,I2C,",
      "SPI,CAN,ADC,DAC,MQTT).",
      "了解 cortex-M 下的 HAL 库开发.",
      "熟悉 STM32 常用外设以及寄存器的使用,能看懂硬件原理图,能实现基本流程设计.",
    ],
    // name: "Chris Brown",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    knows: [
      "熟悉计算机网络 tcp/ip 五层协议以及滑动窗口流量控制,重传,拥塞控制",
      "熟悉操作系统的内存管理,文件管理的实现和原理以及处理机调度算法.",
      "熟悉(Select,Epoll)网络模型,路由协议(RIP,OSPF,BGP),路由算法.",
      "能通过 Wireshark 分析各层网络报文.",
    ],
    // name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
