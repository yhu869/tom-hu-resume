const yearElement = document.getElementById("year");
const translations = {
  en: {
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.download": "Download Resume",
    "hero.eyebrow": "Software Engineer",
    "hero.name": "Tom Hu",
    "hero.meta": "M.Eng. Software Engineering · Full-Stack & Backend Engineer · Toronto, ON",
    "hero.subtitle": "I build high-performance web applications, backend services, and cloud-native systems with a strong focus on scalability, reliability, and measurable product impact.",
    "hero.summary": "With experience across Django, FastAPI, React, Spring, PostgreSQL, Redis, Kafka, Kubernetes, AWS, and GCP, I enjoy turning complex business requirements into clean, production-ready software.",
    "hero.download": "Download PDF Resume",
    "hero.projects": "View projects",
    "hero.contact": "Contact me",
    "hero.highlight1": "Optimized page load from 3s to 113ms",
    "hero.highlight2": "Reduced first-screen load from 6s to ~825ms",
    "hero.highlight3": "Built systems supporting 20,000–50,000 daily peak events",
    "snapshot.title": "Professional Snapshot",
    "snapshot.emailLabel": "Email:",
    "snapshot.locationLabel": "Location:",
    "snapshot.locationValue": "Toronto, ON / Shanghai, China",
    "snapshot.educationLabel": "Education:",
    "snapshot.educationValue": "M.Eng. in Software Engineering",
    "education.eyebrow": "Education",
    "education.title": "Academic background",
    "education.masterTitle": "Master of Engineering – Software Engineering",
    "education.masterSchool": "Western University · London, ON",
    "education.bachelorTitle": "Bachelor of Computer Science (Honours)",
    "education.bachelorSchool": "University of Windsor · Windsor, ON",
    "experience.eyebrow": "Experience",
    "experience.title": "What I’ve worked on",
    "experience.baimeng.role": "Software Engineer",
    "experience.baimeng.company": "Baimeng Information Technology Co., Ltd. · Shanghai, China",
    "experience.baimeng.summary": "Built a real estate analysis and decision support platform using Django and React with data visualization, caching, access control, and production-grade testing.",
    "experience.baimeng.point1": "Developed a real estate analysis system with Django, React, Chart.js, PostgreSQL, and Redis, and implemented fine-grained permissions with Django REST Framework.",
    "experience.baimeng.point2": "Implemented PDF chart export with jsPDF and html2canvas, dynamically adjusting capture areas and scaling for clear output across varying DPI and resolutions.",
    "experience.baimeng.point3": "Optimized Django ORM queries with select_related and prefetch_related, reducing page load time from 3s to 113ms.",
    "experience.baimeng.point4": "Built and maintained tests covering 120+ Django APIs, 80+ Celery tasks, and 50+ React components to improve reliability under high concurrency.",
    "experience.trip.role": "Software Development Intern",
    "experience.trip.company": "Trip.com · Shanghai, China",
    "experience.trip.summary": "Designed backend services and frontend features for hotel search, booking, and order processing in a high-traffic travel platform.",
    "experience.trip.point1": "Designed backend services with FastAPI and Celery, integrating MySQL, Redis, and Kafka, and implemented hotel search and display features with React.",
    "experience.trip.point2": "Optimized hotel listing queries with pagination tuning, composite indexes, sharding, and replication strategies, reducing response time from 2.5s to under 300ms.",
    "experience.trip.point3": "Improved Kafka order event throughput with topic partitioning, asynchronous batch production, and consumer concurrency controls, supporting 20,000–50,000 daily peak order events.",
    "experience.trip.point4": "Reduced first-screen load time from 6s to about 825ms through bundle analysis, CDN loading, lazy loading, and tree shaking.",
    "experience.chenghua.role": "Software Developer (CO-OP)",
    "experience.chenghua.company": "ChengHua · Chengdu, China",
    "experience.chenghua.summary": "Contributed to a distributed environmental monitoring system using microservices, messaging infrastructure, GIS visualization, and cloud-native deployment practices.",
    "experience.chenghua.point1": "Built a high-availability environmental monitoring management system with Spring Cloud, RabbitMQ, MongoDB, React, GIS maps, and Recharts.",
    "experience.chenghua.point2": "Designed an RBAC system with Spring Security and MySQL to resolve permission conflicts and secure critical operational data.",
    "experience.chenghua.point3": "Developed reliable asynchronous messaging with RabbitMQ, using producer-consumer decoupling, dead-letter queues, and retry logic.",
    "experience.chenghua.point4": "Optimized large file uploads with chunked upload, resumable transfer, and instant upload, reducing upload time from 9–18s to 1–2s.",
    "projects.eyebrow": "Projects",
    "projects.title": "Things I’ve built",
    "projects.social.title": "Cloud-Based Social Media App",
    "projects.social.summary": "Built and deployed containerized backend microservices on GCP with Kubernetes, focusing on production stability, authentication, and deployment efficiency.",
    "projects.social.point1": "Handled 10,000+ active daily requests through Cloud SQL tuning and connection pool optimization.",
    "projects.social.point2": "Reduced production deploy time from 20 minutes to 5 minutes with optimized rolling updates and scheduling.",
    "projects.social.point3": "Improved auth reliability with session caching and async verification, reducing identity-related incidents.",
    "projects.store.title": "Online Computer Store Web Application",
    "projects.store.summary": "Improved product catalog, checkout, and deployment performance in a full-stack e-commerce application using Node.js, Express, MongoDB, AWS, and Square Web Payments.",
    "projects.store.point1": "Reduced product catalog page load time from 3s to 610ms through query and aggregation optimization.",
    "projects.store.point2": "Kept payment confirmation time around 1 second with asynchronous payment processing and caching.",
    "projects.store.point3": "Improved production stability using AWS deployment, S3, CloudFront, auto scaling, and load balancing.",
    "projects.ask": "Ask for details",
    "skills.eyebrow": "Skills",
    "skills.title": "Tools and technologies",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks & Libraries",
    "skills.platforms": "Databases & Cloud",
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s connect",
    "contact.summary": "I’m open to software engineering opportunities and collaborations in backend, full-stack, and cloud-focused roles.",
    "contact.email": "Email me",
    "footer.copyright": "© <span id=\"year\"></span> Tom Hu. All rights reserved.",
    "footer.top": "Back to top"
  },
  zh: {
    "nav.education": "教育背景",
    "nav.experience": "工作经历",
    "nav.projects": "项目经历",
    "nav.skills": "技能",
    "nav.contact": "联系我",
    "nav.download": "下载简历",
    "hero.eyebrow": "软件工程师",
    "hero.name": "胡渝戈",
    "hero.meta": "软件工程硕士 · 全栈 / 后端工程师 · Toronto, ON",
    "hero.subtitle": "我专注于构建高性能 Web 应用、后端服务和云原生系统，注重系统的可扩展性、稳定性以及可量化的业务价值。",
    "hero.summary": "具备 Django、FastAPI、React、Spring、PostgreSQL、Redis、Kafka、Kubernetes、AWS 和 GCP 等技术栈经验，擅长将复杂业务需求落地为清晰、稳定且可上线的工程方案。",
    "hero.download": "下载 PDF 简历",
    "hero.projects": "查看项目",
    "hero.contact": "联系我",
    "hero.highlight1": "将页面加载时间从 3 秒优化到 113 毫秒",
    "hero.highlight2": "将首屏加载时间从 6 秒降低到约 825 毫秒",
    "hero.highlight3": "构建过支持 20,000–50,000 日峰值事件的系统",
    "snapshot.title": "个人概览",
    "snapshot.emailLabel": "邮箱：",
    "snapshot.locationLabel": "所在地：",
    "snapshot.locationValue": "Toronto, ON / Shanghai, China",
    "snapshot.educationLabel": "学历：",
    "snapshot.educationValue": "软件工程硕士",
    "education.eyebrow": "教育背景",
    "education.title": "学术经历",
    "education.masterTitle": "工程硕士 · 软件工程",
    "education.masterSchool": "Western University · London, ON",
    "education.bachelorTitle": "计算机科学荣誉学士",
    "education.bachelorSchool": "University of Windsor · Windsor, ON",
    "experience.eyebrow": "工作经历",
    "experience.title": "我的工作内容",
    "experience.baimeng.role": "软件工程师",
    "experience.baimeng.company": "Baimeng Information Technology Co., Ltd. · Shanghai, China",
    "experience.baimeng.summary": "使用 Django 和 React 构建房地产分析与决策支持平台，覆盖数据可视化、缓存优化、权限控制和生产级测试。",
    "experience.baimeng.point1": "使用 Django、React、Chart.js、PostgreSQL 和 Redis 开发房地产分析系统，并通过 Django REST Framework 实现细粒度权限控制。",
    "experience.baimeng.point2": "基于 jsPDF 和 html2canvas 实现图表导出 PDF，动态调整截图区域与缩放比例，确保在不同分辨率和 DPI 下清晰完整。",
    "experience.baimeng.point3": "通过 select_related 和 prefetch_related 优化 Django ORM 查询，将页面加载时间从 3 秒降至 113 毫秒。",
    "experience.baimeng.point4": "维护覆盖 120+ Django API、80+ Celery 任务和 50+ React 组件的测试体系，提高高并发场景下的稳定性。",
    "experience.trip.role": "软件开发实习生",
    "experience.trip.company": "Trip.com · Shanghai, China",
    "experience.trip.summary": "为高流量旅游平台设计酒店搜索、预订与订单处理相关的后端服务和前端功能。",
    "experience.trip.point1": "使用 FastAPI 和 Celery 设计后端服务，整合 MySQL、Redis 和 Kafka，并使用 React 实现酒店搜索和展示功能。",
    "experience.trip.point2": "通过分页优化、复合索引、分库分表和主从策略优化酒店列表查询，将响应时间从 2.5 秒降低到 300 毫秒以内。",
    "experience.trip.point3": "通过 Kafka 分区、异步批量生产和消费者并发控制优化订单事件吞吐，支持 20,000–50,000 的日峰值订单事件处理。",
    "experience.trip.point4": "通过打包分析、CDN、懒加载和 Tree Shaking，将首屏加载时间从 6 秒降至约 825 毫秒。",
    "experience.chenghua.role": "软件开发实习生（CO-OP）",
    "experience.chenghua.company": "ChengHua · Chengdu, China",
    "experience.chenghua.summary": "参与分布式环境监测系统开发，涵盖微服务、消息系统、GIS 可视化以及云原生部署实践。",
    "experience.chenghua.point1": "使用 Spring Cloud、RabbitMQ、MongoDB、React、GIS 地图和 Recharts 构建高可用环境监测管理系统。",
    "experience.chenghua.point2": "基于 Spring Security 和 MySQL 设计 RBAC 权限系统，解决权限冲突并保护关键业务数据。",
    "experience.chenghua.point3": "使用 RabbitMQ 构建可靠异步消息机制，结合生产消费解耦、死信队列和重试策略保障消息投递。",
    "experience.chenghua.point4": "通过分片上传、断点续传和秒传优化大文件上传，将上传时间从 9–18 秒降低到 1–2 秒。",
    "projects.eyebrow": "项目经历",
    "projects.title": "我做过的项目",
    "projects.social.title": "基于云的社交媒体应用",
    "projects.social.summary": "在 GCP 上使用 Kubernetes 部署容器化后端微服务，重点优化生产稳定性、身份认证和部署效率。",
    "projects.social.point1": "通过优化 Cloud SQL 索引和连接池，稳定处理 10,000+ 日活请求。",
    "projects.social.point2": "通过优化滚动发布和调度策略，将生产环境部署时间从 20 分钟缩短到 5 分钟。",
    "projects.social.point3": "通过会话缓存和异步校验提升认证稳定性，减少身份相关故障。",
    "projects.store.title": "在线电脑商城 Web 应用",
    "projects.store.summary": "在 Node.js、Express、MongoDB、AWS 和 Square Web Payments 技术栈下优化商品目录、结账和部署性能。",
    "projects.store.point1": "通过查询与聚合优化，将商品目录页面加载时间从 3 秒降至 610 毫秒。",
    "projects.store.point2": "通过异步支付处理和缓存，将支付确认时间稳定在约 1 秒。",
    "projects.store.point3": "通过 AWS 部署、S3、CloudFront、自动扩缩容和负载均衡提升生产环境稳定性。",
    "projects.ask": "联系我了解更多",
    "skills.eyebrow": "技能",
    "skills.title": "工具与技术栈",
    "skills.languages": "编程语言",
    "skills.frameworks": "框架与库",
    "skills.platforms": "数据库与云平台",
    "contact.eyebrow": "联系我",
    "contact.title": "欢迎联系",
    "contact.summary": "我目前在寻找软件工程相关机会，也欢迎后端、全栈和云计算方向的合作交流。",
    "contact.email": "发送邮件",
    "footer.copyright": "© <span id=\"year\"></span> 胡渝戈. 保留所有权利。",
    "footer.top": "返回顶部"
  }
};

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const elements = document.querySelectorAll("[data-i18n]");
const languageButtons = document.querySelectorAll(".lang-button");

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;

  elements.forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key];

    if (!value) {
      return;
    }

    if (key === "footer.copyright") {
      element.innerHTML = value;
      const footerYear = document.getElementById("year");
      if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
      }
      return;
    }

    element.textContent = value;
  });

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  localStorage.setItem("resume-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("resume-language") || "en";
applyLanguage(savedLanguage);
