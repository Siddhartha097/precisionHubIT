import {
  Elevate,
  JAVA,
  LM,
  Productivity,
  QA,
  RD,
  dev,
  firebase,
  flutter,
  kotlin,
  objC,
  proto,
  reactNative,
  swift,
} from "@/images";

const Features = [
  {
    label: "Powerful Software Solutions",
    para: "Our software provides advanced features and benefits to help you streamline your workflow and achieve your goals.",
  },
  {
    label: "User-Friendly Interface",
    para: "Our software is designed with a user-friendly interface, making it easy for anyone to navigate and use.",
  },
  {
    label: "Seamless Integration",
    para: "Our software seamlessly integrates with other tools and systems, allowing you to work efficiently and effectively.",
  },
];

const Supports = [
  {
    label: "Customization, Support, Training",
    desc: "We offer additional services such as customization, support, and training to meet your specific needs. Our team of experts is here to assist you every step of the way.",
  },
  {
    label: "Customization Options",
    desc: "We provide a wide range of customization options to tailor our software solutions to your unique requirements. Our team will work closely with you to ensure that the final product meets your expectations.",
  },
  {
    label: "24/7 Support",
    desc: "Our dedicated support team is available 24/7 to assist you with any technical issues or questions you may have. We are committed to providing prompt and reliable support to ensure your satisfaction.",
  },
];

const WorkFlow = [
  {
    id: 1,
    label: "Efficiency Boost",
    content:
      "Our software seamlessly integrates into your existing systems, optimizing your operations.",
  },
  {
    id: 2,
    label: "Cost Savings",
    content:
      "Reduce expenses and maximize your budget with our software's cost-effective features.",
  },
  {
    id: 3,
    label: "User-Friendly",
    content:
      "Experience a smooth learning curve with our intuitive software interface and comprehensive support.",
  },
  {
    id: 4,
    label: "Customizable Solutions",
    content:
      "Tailor our software to meet your specific needs and achieve your business goals.",
  },
];

const Services = [
  {
    label: "Comprehensive Support and Training",
    content:
      "Our software comes with a range of support and training options to ensure your success.",
  },
  {
    label: "24/7 Customer Support",
    content:
      "Our dedicated team is available around the clock to assist you with any questions or issues.",
  },
  {
    label: "Personalized Training Programs",
    content:
      "We offer customized training programs tailored to your specific needs and goals.",
  },
];

const WorkingStyle = [
  {
    key: 1,
    content: `Step into the dynamic world of website development with our company,
      where innovation meets excellence to craft digital masterpieces that
      captivate and inspire. Our working style is a symphony of
      creativity, expertise, and dedication, harmoniously orchestrated to
      bring your vision to life.`,
  },
  {
    key: 2,
    content: `At the heart of our approach lies a relentless pursuit of
      perfection, fueled by a passion for pushing boundaries and exceeding
      expectations. From the initial brainstorming sessions to the final
      product launch, we embark on a thrilling journey alongside our
      clients, collaborating closely to ensure every pixel, every line of
      code, resonates with their unique essence.`,
  },
  {
    key: 3,
    content: `Our team, a collective of visionary designers, brilliant developers,
      and strategic thinkers, thrives on challenges and embraces
      complexity with unwavering resolve. Each member brings a wealth of
      experience and a commitment to craftsmanship, blending artistry with
      technical prowess to deliver solutions that not only meet but
      surpass industry standards.`,
  },
  {
    key: 4,
    content: `Transparency and communication form the cornerstone of our
      methodology, fostering trust and fostering a sense of partnership at
      every stage of the process. We keep our clients informed, engaged,
      and empowered, inviting them to participate in the creative dialogue
      and providing regular updates to ensure alignment with their goals
      and aspirations.`,
  },
  {
    key: 5,
    content: ` Innovation is our guiding star, guiding us to explore new
      technologies, trends, and techniques that elevate our work to new
      heights. Whether it's harnessing the latest advancements in
      responsive design, integrating cutting-edge functionalities, or
      optimizing performance for seamless user experiences, we stay at the
      forefront of digital evolution to deliver solutions that are as
      forward-thinking as they are visually stunning.`,
  },
  {
    key: 6,
    content: ` But beyond mere aesthetics and functionality, we strive to imbue
      every project with soul, infusing it with a sense of authenticity
      and purpose that resonates deeply with its audience. Whether we're
      crafting a sleek corporate website, an immersive e-commerce
      platform, or a vibrant community hub, our ultimate aim is to create
      meaningful connections and leave a lasting impression on the digital
      landscape.`,
  },
  {
    key: 7,
    content: `In essence, our working style is a celebration of creativity,
      collaboration, and commitment to excellence, where every project is
      not just a job but a labor of love. Join us on this exhilarating
      journey, where dreams become realities and possibilities are limited
      only by imagination.`,
  },
];

const Sols = [
  {
    title: "Streamline Your Processes with Our Innovative Solutions",
    content:
      "Our solutions are designed to meet your specific needs, ensuring seamless implementation and maximum efficiency.",
    button: "Learn More",
    link: "learn",
    imgSrc:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Optimize Your Operations with Our Tailored Solutions",
    content:
      "We work closely with you to understand your challenges and provide customized solutions that drive results.",
    button: "Contact Us",
    link: "contact",
    imgSrc:
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Transform Your Business with Our Cutting-Edge Solutions",
    content:
      "Our team of experts will guide you through the implementation process, ensuring a smooth transition and optimal performance.",
    button: "Get Started",
    link: "#",
    imgSrc:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FAQs = [
  {
    id: "item-1",
    title: "How does it work?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
  },
  {
    id: "item-2",
    title: "What are the benefits?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
  },
  {
    id: "item-3",
    title: "Is it customizable?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
  },
  {
    id: "item-4",
    title: "How can I get support?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
  },
  {
    id: "item-5",
    title: "Is there a free trial?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
  },
];

const workServices = [
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Services",
    link: "#",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "FAQ",
    link: "#",
  },
  {
    label: "Insights",
    link: "/insights",
  },
];

const BasicPlans = [
  {
    content: "Powerful features for your business",
  },
  {
    content: "Secure data storage and backup",
  },
  {
    content: "24/7 customer support is available",
  },
];

const BusinessPlans = [
  {
    content: "Advanced features for your business",
  },
  {
    content: "Increased storage capacity",
  },
  {
    content: "Priority customer support",
  },
  {
    content: "Customizable branding options",
  },
  {
    content: "Integration with third-party apps",
  },
];

const WebDevChartsLeft = [
  {
    label: "DISCOVERY",
    content:
      "It is the initial phase where we gather all the necessary data, statistics, layout and templates matching the Business Profile.",
    color: "text-[#D8540A]",
    number: 1,
  },
  {
    label: "DOCUMENTATION",
    content:
      "A to Z information, Client Agreement, Domain Registration, Security Certificates and anything that includes the horizon of Website Development is right there for client's records",
    color: "text-[#BDA00A]",
    number: 2,
  },
  {
    label: "DESIGN",
    content:
      "According to UI & UX Designs and algorithms, our team will map a layout that suits the Business niche perfectly.",
    color: "text-[#63C006]",
    number: 3,
  },
];

const WebDevChartsRight = [
  {
    label: "LAUNCH",
    content:
      "The final step is the Launch of the Website! We believe in going Live with a Bang! All Social Media Channel will be hit right from the very moment.",
    color: "text-[#0CC6D2]",
    number: 4,
  },
  {
    label: "BUG TESTING",
    content:
      "Our Developers gets the job done like spreading butter on a toast! Bug Testing is the way to ensure smooth functioning of the website.",
    color: "text-[#5703E0]",
    number: 5,
  },
  {
    label: "DEVELOPMENT",
    content:
      "When all is up and running, then comes the construction of the Website. Our Web Developers will chalk out the plan and ensure speedy delivery.",
    color: "text-[#F2055B]",
    number: 6,
  },
];

const AppDevChartsUp = [
  {
    label: "Research & Planning",
    content:
      "full-fledged Blueprint; client's nature of business, target & interests, strategies, adroit ideas & innovation.",
    img: RD,
    step: 1,
    bgColor: "bg-orange-300",
    textColor: "text-orange-600",
  },
  {
    label: "Wireframe",
    content:
      "Visual Map! Wireframe is a platform where the designing of the app is carried out",
    img: "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    step: 2,
    bgColor: "bg-sky-300",
    textColor: "text-sky-600",
  },
  {
    label: "Prototype",
    content:
      "A construction of a model for the client to assess the app before introducing online",
    img: proto,
    step: 3,
    bgColor: "bg-purple-300",
    textColor: "text-purple-600",
  },
];

const AppDevChartsDown = [
  {
    label: "Development",
    content:
      "Crucial step; Development & Coding of Android App to make it light, attractive and user-friendly",
    img: dev,
    step: 4,
    bgColor: "bg-green-300",
    textColor: "text-green-600",
  },
  {
    label: "Launch & Maintenance",
    content:
      "Once the Android App Development is ready to run online and be introduced under observation",
    img: LM,
    step: 5,
    bgColor: "bg-rose-300",
    textColor: "text-rose-600",
  },
  {
    label: "Quality Assurance",
    content:
      "A Testing Program to check, run and to ensure that the app stands bug free.",
    img: QA,
    step: 6,
    bgColor: "bg-slate-300",
    textColor: "text-neutral-600",
  },
];

const Technologies = [
  {
    label: "Java",
    content:
      "Mobile app programming is best facilitated with the use of the Java language as it is versatile and is robust. This means that it is likely to run on any device rendering cross platform mobile app development services. Java is highly in use for creating gaming apps as then one version works with all. It is seen that gaming apps respond well with Java Language and less chance of system hanging up. This saves much of the troubles in fixing errors and issue that may show-up with time. Not only this but also the performance of the language is such that the user experience becomes exciting. The impressive aspect of Java application is that it is simple, can target a large audience and because of the simple functionality that it offers, the purpose of the app is sure to fulfil.",
    imgSrc: JAVA,
  },
  {
    label: "Kotlin",
    content:
      "It is another platform where cross platform mobile app development progresses and fetched fruitful results. Often tagged as the Programming language for the Next Generation , this language offers a little more than Java could. Kotlin programming language has no limitations whatsoever. It is easy to use, handle and bring out exciting features that can leave a user hooked to the app for hours. The unique aspect of this language is that it has got the support of Google which meaning launching an app on Google Play store will be successful as it will readily accept the type of app one is building. For the competitive world that we are in today, it is best to use software that will support the needs of the coming generation. Kotlin is one such mobile application development platforms which make that achievable.",
    imgSrc: kotlin,
  },
  {
    label: "Flutter",
    content:
      "A platform which offers real time database, cloud computing and is a highly custom web application development language which can work in accordance with the client needs without any hassles. It stands vital that the mobile app should not only be functional but also provide comfort where the client is at ease of browsing and manoeuvring the app whichever way he wants. Today mobile app developers are working in close coordination with the programming language to bring out the best user experience. Firebase offers cloud storage which reduces the risk of smartphones hanging up which is a common problem with mobile apps. Also, because of the other feature which includes sending invitations, notifications, dynamic links that connect the user mode and the option for advertising through Google Ads and more makes this platform one of a kind. This way one can generate brand curiosity among the customers and keep them hooked.",
    imgSrc: flutter,
  },
  {
    label: "Firebase",
    content:
      "A platform which offers real time database, cloud computing and is a highly custom web application development language which can work in accordance with the client needs without any hassles. It stands vital that the mobile app should not only be functional but also provide comfort where the client is at ease of browsing and manoeuvring the app whichever way he wants. Today mobile app developers are working in close coordination with the programming language to bring out the best user experience. Firebase offers cloud storage which reduces the risk of smartphones hanging up which is a common problem with mobile apps. Also, because of the other feature which includes sending invitations, notifications, dynamic links that connect the user mode and the option for advertising through Google Ads and more makes this platform one of a kind. This way one can generate brand curiosity among the customers and keep them hooked.",
    imgSrc: firebase,
  },
  {
    label: "Swift",
    content:
      "An intuitive language as one may call because of the interactive nature that it offers and a platform where the coding is flexible, fun and concise. With Swift, iPhone application development becomes unique and expressive at the same time. This platform offers to work as a team as multiple people can work on one project where you get the chance to modify, share and overcome challenges as it becomes your very own playground. As the platform is said to be lightning fast iOS app development not only becomes quick to project and use but also the outcomes are crisp and smooth leaving no room for error. The language gives the advantage to track bugs, check on source codes, option for mailing lists and different ways for regular building and development where mobile app development becomes one of a kind making the app to stand out",
    imgSrc: swift,
  },
  {
    label: "Objective C",
    content:
      "A language that helps in iOS app development where one requires the use of multiple objects. In other words, we can say, where there is a use of complex functions and a need to target dynamic audience, Objective C is the easiest language to proceed and work that will ensure a successful iOS mobile app development. The language is an object oriented platform which works with message passing which is a method to invoke command behaviour. This helps mobile app developers to work innovatively with their idea to construct an application. The platform works best with OS X and iOS operating systems with Cocoa and Cocoa Touch frameworks. It is frequently in use today by iPhone App Developers that help them to create interactive mobile applications.",
    imgSrc: objC,
  },
  {
    label: "React Native",
    content:
      "A platform that helps mobile app developers to build apps with the medium of JavaScript. As it uses Java has its framework that allows cross platform mobile app development which benefits the user to be able to use the application on any operating system. As the framework it uses is Java that allows the developer to build mobile UI design without much modification which in other words ensures error-free application development offering better performance and user friendly exposure. When building apps the foremost thing that needs to be the focus is the interactive functionality and attractive design. React Native ensures both allowing iOS mobile app development compatible with the next generation. The major focus stands in the present times, is to target the young audiences and this platform helps in achieving exactly that in myriad ways to achieve the set goal.",
    imgSrc: reactNative,
  },
];

const DataScFeatures = [
  {
    label: "Expertise in Data Science",
    content:
      "Our team specializes in machine learning, AI, big data analysis, and predictive modeling. We have the knowledge and skills to tackle complex data challenges and deliver actionable insights.",
  },
  {
    label: "Cutting-edge Technology Solutions",
    content:
      "We leverage the latest technologies and tools to develop innovative solutions that drive business growth. Our expertise in data science allows us to provide tailored solutions to meet your specific needs.",
  },
  {
    label: "Data-driven Decision Making",
    content:
      "We help businesses make informed decisions by analyzing and interpreting  complex data sets. Our data-driven approach empowers organizations to  optimize processes, improve efficiency, and achieve strategic goals.",
  },
];

const DataScWorkFlow = [
  {
    id: 1,
    label: "Consultation Process",
    content:
      "Schedule a consultation to discuss your data science needs and goals.",
  },
  {
    id: 2,
    label: "Project Development",
    content:
      "Our team will work closely with you to develop and implement your data science project.",
  },
  {
    id: 3,
    label: "Testing and Refinement",
    content:
      "We will rigorously test and refine your data science solution for optimal performance",
  },
  {
    id: 4,
    label: "Project Completion",
    content:
      "Once finalized, we will deliver your completed data science project to you.",
  },
];

const DataScSupports = [
  {
    id: 1,
    label: "Expert Data Science Solutions",
    content:
      "Our department offers a range of services including consulting, analytics as a service, and custom solution development. We have a team of experienced data scientists ready to help you leverage the power of data for your business.",
  },
  {
    id: 2,
    label: "Data Analytics Consulting",
    content:
      "Our consulting services provide expert guidance and support in leveraging data analytics to drive business growth. We analyze your data, identify insights, and help you make data-driven decisions to optimize your operations and achieve your goals.",
  },
  {
    id: 3,
    label: "Analytics as a Service",
    content:
      "With our analytics as a service offering, you can access advanced analytics capabilities without the need for extensive infrastructure or in-house expertise. We provide scalable and flexible solutions that enable you to extract valuable insights from your data and drive innovation.",
  },
];

const FBtnContent = [
  {
    label: "Streamline operations and increase efficiency with our software.",
  },
  {
    label:
      "Unlock new opportunities and drive growth with our innovative solutions.",
  },
  {
    label: "Stay ahead of the competition with our industry-leading software.",
  },
];

const SecBtnContent = [
  {
    label: "Innovative Solutions for Your Software Needs",
    content:
      "Our software company offers a range of services to bring your ideas to life. From concept development to implementation, we are here to support you every step of the way.",
  },
  {
    label: "Customized Software Solutions for Your Business",
    content:
      "We understand that every business is unique. Our team of experts will work closely with you to create tailored software solutions that meet your specific requirements.",
  },
  {
    label: "Seamless Integration with Existing Systems",
    content:
      "Don t let outdated systems hold you back. Our software solutions seamlessly integrate with your existing infrastructure, ensuring smooth operations and enhanced efficiency",
  },
];

const SecBtnList = [
  {
    label: "Submit Your Idea",
    content:
      "Share your idea with us by submitting it through our user-friendly platform to connect and collaborate with our company.",
  },
  {
    label: "Project Development",
    content:
      "Our team of experienced developers will bring your idea to life, ensuring high-quality and efficient project development.",
  },
  {
    label: "Testing and Refinement",
    content:
      "We rigorously test and refine your software project to ensure it meets your requirements and exceeds your expectations.",
  },
];

const SeemlessList = [
  {
    label: "Enhance Collaboration and Efficiency",
    content:
      "Our seamless integration capabilities enable teams to work together seamlessly, breaking down silos and fostering collaboration. Increase efficiency and achieve better results with integrated workflows",
  },
  {
    label: "Automate Tasks and Save Time",
    content:
      "With our software's seamless integration, you can automate repetitive tasks and save valuable time. Focus on what matters most while our integration takes care of the rest",
  },
  {
    label: "Seamless Integration for Enhanced Productivity",
    content:
      "Unlock the full potential of your team with our seamless integration capabilities. Boost productivity, streamline processes, and achieve your goals faster.",
  },
];

const SeemlessList2 = [
  {
    label: "Submit Your Idea",
    content:
      "We offer tailored integration solutions to meet the unique needs of your business. Our team will work closely with you to understand your requirements and deliver a solution that fits perfectly.",
  },
  {
    label: "Project Development",
    content:
      "Efficiently exchange data between your software systems with our seamless integration services. Say goodbye to manual data entry and enjoy automated processes.",
  },
  {
    label: "Testing and Refinement",
    content:
      "Our integration solutions enable better collaboration and productivity by ensuring smooth communication between your software applications. Experience seamless workflows and improved efficiency.",
  },
];

const SimplifyList = [
  {
    label: "Streamline Your Workflow",
    content: "Effortlessly manage tasks, projects, and deadlines.",
  },
  {
    label: "Seamless Integration",
    content: "Connect with your favorite tools and platforms.",
  },
  {
    label: "Increase Collaboration",
    content: "Work together in real time, from anywhere.",
  },
];

const SimplifyList2 = [
  {
    id: 1,
    label: "Increase Efficiency",
    content:
      "Implement Simplify to Amplify in your company's workflow to increase efficiency",
  },
  {
    id: 2,
    label: "Improve Productivity",
    content:
      "Utilize Simplify to Amplify to improve productivity and streamline your processes.",
  },
  {
    id: 3,
    label: "Optimize Performance",
    content:
      "Optimize performance by integrating Simplify to Amplify into your workflow.",
  },
  {
    id: 4,
    label: "Achieve Success",
    content:
      "With Simplify to Amplify, you can achieve success and take your company to new heights.",
  },
];

const ElevateListU = [
  {
    label: "Save Time",
    content:
      "Automate repetitive tasks and streamline your workflow for increased productivity",
  },
  {
    label: "Reduce Errors",
    content:
      "Eliminate manual data entry and minimize the risk of costly mistakes",
  },
];

const ElevateListL = [
  {
    label: "Real-time",
    content:
      "Collaborate seamlessly with your team, ensuring everyone is on the same page and working together towards success.",
  },
  {
    label: "Task Management",
    content:
      "Stay organized and prioritize tasks effectively with our intuitive task management features.",
  },
];

const ElevateList = [
  {
    title:
      "Easily integrate our solutions to simplify and improve your workflow.",
    subTitle:
      "Discover our software's powerful automation features that save time and eliminate manual errors",
    id: 1,
    img: Elevate,
    list: ElevateListU
  },
  {
    title: "Enhance Team Productivity with Collaboration Tools",
    subTitle:
      "Our software provides a range of collaboration tools designed to boost team productivity and streamline workflows. From real-time document editing to task management, our platform has everything you need to work efficiently.",
    id: 1,
    img: Productivity,
    list: ElevateListL,
  },
];



export {
  ElevateList,
  SimplifyList,
  SimplifyList2,
  SeemlessList,
  SeemlessList2,
  SecBtnList,
  FBtnContent,
  SecBtnContent,
  DataScSupports,
  DataScWorkFlow,
  DataScFeatures,
  Features,
  Supports,
  WorkFlow,
  Services,
  WorkingStyle,
  FAQs,
  Sols,
  BasicPlans,
  BusinessPlans,
  WebDevChartsLeft,
  WebDevChartsRight,
  workServices,
  AppDevChartsUp,
  AppDevChartsDown,
  Technologies,
};
