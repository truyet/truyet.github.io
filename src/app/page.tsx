import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-between mx-auto max-w-5xl bg-gray-100 p-8 pb-20">
      {/* Header section */}
      <div className='w-full cv-header p-8 flex flex-row justify-center items-center'>
        <div className='w-0 md:w-60 md:px-8 invisible md:visible'>
          <Image
            src="/avatar.jpeg"
            alt='avatar'
            width={240}
            height={240}
            className="w-full h-auto rounded-full"
          />
        </div>
        <div className={`w-full flex flex-col`}>
          <div>
            <div className='lg:pr-12'>
              <h1 className="text-3xl font-bold">TRUYET NGUYEN</h1>
              <h2 className='pt-4 text-xl'> Backend Engineer / Technical Lead</h2>
            </div>
            <hr className='w-full my-2' />
          </div>

          <div className='mt-4 flex lg:flex-row lg:justify-between flex-col'>
            <span className='font-semibold text-xl'>Email: minhtruyet@gmail.com</span>
            <span className='font-semibold text-xl'>DOB: 1988</span>
          </div>
        </div>
      </div>

      {/* Summary section */}
      <div className='pt-10 flex flex-col'>
        <div className='flex flex-col space-y-4'>
          <h3 className={`heading text-2xl font-bold border-b pb-2`}>Summary</h3>
          <p>I&apos;m a backend engineer with over 10 years of experience in software development. I specialize in microservices architecture and building high-performance distributed systems.</p>

          <p>My experience spans full-stack development, DevOps, and solution architecture. I have hands-on experience with CI/CD pipelines, Kubernetes, and cloud infrastructure on AWS and Google Cloud. Recently, I&apos;ve been exploring AI technologies to enhance software capabilities, including implementing intelligent automation, predictive analytics, and natural language processing solutions.</p>

          <p>I enjoy leading teams and mentoring other developers. I&apos;m passionate about leveraging emerging technologies like generative AI and LLMs to solve complex business problems. I&apos;m committed to delivering innovative, high-quality solutions that create measurable business value.</p>
        </div>
      </div>

      {/* Skills section */}
      <div className='pt-10 flex flex-col'>
        <div className='flex flex-col space-y-6'>
          <section className='flex flex-col space-y-2'>
            <h3 className={`heading text-2xl font-bold border-b pb-2`}>Education & Certifications</h3>
            <div>
              <ul className="pl-4 list-disc">
                <li>Bachelor of Information Technology (2006-2010) - An Giang University</li>
              </ul>
            </div>
          </section>

          <section className='flex flex-col space-y-4'>
            <h3 className={`heading text-2xl font-bold border-b pb-2`}>Skills</h3>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <h4 className={`heading text-xl font-semibold`}>Programming Languages</h4>
                <ul className="pl-4 list-disc">
                  <li>Java, Golang, Scala, Node.js, Python</li>
                  <li>TypeScript, JavaScript, HTML5, CSS3</li>
                </ul>
              </div>
              <div>
                <h4 className={`heading text-xl font-semibold`}>Development Frameworks</h4>
                <ul className="pl-4 list-disc">
                  <li><b>Backend:</b> Spring Boot, Spring Reactive, Hibernate, NestJS, go-kratos</li>
                  <li><b>Frontend:</b> React, Vue, Next.js, Nuxt, React Native</li>
                  <li><b>Testing:</b> JUnit, JMeter, Postman, Playwright, E2E testing</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <h4 className={`heading text-xl font-semibold`}>Data Storage</h4>
                <ul className="pl-4 list-disc">
                  <li><b>SQL:</b> PostgreSQL, MySQL, MariaDB</li>
                  <li><b>NoSQL:</b> MongoDB, Cassandra, Neo4j, LevelDB</li>
                  <li><b>NewSQL:</b> CockroachDB</li>
                  <li><b>Big Data:</b> Hadoop, Google Cloud Storage, AWS S3</li>
                  <li><b>Caching:</b> Redis, Memcache</li>
                </ul>
              </div>
              <div>
                <h4 className={`heading text-xl font-semibold`}>Message & Streaming</h4>
                <ul className="pl-4 list-disc">
                  <li><b>Message Queue:</b> NATS, RabbitMQ, ActiveMQ, Redis Pub/Sub</li>
                  <li><b>Streaming:</b> Kafka, Apache Pulsar</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <h4 className={`heading text-xl font-semibold`}>Cloud & DevOps</h4>
                <ul className="pl-4 list-disc">
                  <li><b>Cloud:</b> AWS, Google Cloud Platform</li>
                  <li>Kubernetes on AWS, GCP and on-premise</li>
                  <li>Infrastructure as Code with Terraform</li>
                  <li><b>CI/CD:</b> GitLab CI, Jenkins, GitOps</li>
                </ul>
              </div>
              <div>
                <h4 className={`heading text-xl font-semibold`}>Architecture & Design</h4>
                <ul className="pl-4 list-disc">
                  <li><b>API:</b> REST, gRPC, Protocol Buffers</li>
                  <li><b>Protocols:</b> HTTP, WebSocket, TCP Socket</li>
                  <li><b>Architecture:</b> Microservices, Data-Driven, Hexagonal, MVC</li>
                  <li><b>Principles:</b> SOLID, DRY, KISS</li>
                  <li><b>Design Patterns:</b> Dependency Injection, Factory, Observer</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <h4 className={`heading text-xl font-semibold`}>Methodology & Tools</h4>
                <ul className="pl-4 list-disc">
                  <li>Agile Methodology (Scrum & Kanban)</li>
                  <li>Project Management with Trello, Jira, Confluence</li>
                  <li>Version Control with Git, Subversion</li>
                </ul>
              </div>
              <div>
                <h4 className={`heading text-xl font-semibold`}>Soft Skills</h4>
                <ul className="pl-4 list-disc">
                  <li>Product Mindset</li>
                  <li>Problem-solving</li>
                  <li>Critical Thinking</li>
                  <li>Continuous Learning</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Work Experience section */}
          <section className='flex flex-col space-y-4'>
            <h3 className={`heading text-2xl font-bold border-b pb-2`}>Work Experience</h3>
            <div className='flex flex-col space-y-6'>
              <div className='flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-sm'>
                <h4 className='heading text-xl font-semibold'>Kegmil, Singapore</h4>
                <span className='font-bold'>Backend Tech Lead - 10/2024 to present</span>
                <p><i>Field service management system for enterprise companies in Southeast Asia</i></p>
                <ul className="pl-4 list-disc">
                  <li>Lead the technical development of Kegmil Core in Java</li>
                  <li>Develop new features and improve system stability</li>
                  <li>Upgrade Java and Spring Boot to newer versions</li>
                  <li>Research and implement AI solutions</li>
                </ul>
                <p><span className='font-bold'>Technologies:</span> Java, Spring Boot, Apache Pulsar, Microservices, PostgreSQL, gRPC</p>
              </div>
              
              <div className='flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-sm'>
                <h4 className='heading text-xl font-semibold'>Galaxy Finx, HCMC</h4>
                <span className='font-bold'>Tech Lead - 09/2023 to 07/2024</span>
                <p><i>Digital banking and finance platform</i></p>
                <ul className="pl-4 list-disc">
                  <li>Lead the Lending team&apos;s technical development</li>
                  <li>Implement lending features and provide technical support</li>
                </ul>
                <p><span className='font-bold'>Technologies:</span> Java, Spring Boot, Kafka, Microservices</p>
              </div>
              
              <div className='flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-sm'>
                <h4 className='heading text-xl font-semibold'>FPT Software, HCMC</h4>
                <span className='font-bold'>Solution Architect - 05/2023 to 09/2023</span>
                <p><i>IT outsourcing company</i></p>
                <ul className="pl-4 list-disc">
                  <li>Create technical documentation with UML diagrams</li>
                  <li>Implement features based on specifications</li>
                </ul>
                <p><span className='font-bold'>Technologies:</span> Java, Spring Boot</p>
              </div>
              
              <div className='flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-sm'>
                <h4 className='heading text-xl font-semibold'>Hello Health Group, HCMC</h4>
                <span className='font-bold'>Backend Lead/Solution Architect - 08/2022 to 03/2023</span>
                <p><i>Healthcare digital marketing platform (Team: 10 members)</i></p>
                <ul className="pl-4 list-disc">
                  <li>Lead the backend team and improve system architecture</li>
                  <li>Redesign legacy systems using BFF architecture and microservices</li>
                  <li>Build data pipeline for customer data platform (CDP)</li>
                  <li>Implement OAuth2 authentication with Ory Hydra</li>
                </ul>
                <p><span className='font-bold'>Technologies:</span> Golang, React, Next.js, PostgreSQL, Kafka, RabbitMQ, Microservices</p>
                <p><span className='font-bold'>Achievements:</span></p>
                <ul className="pl-4 list-disc">
                  <li>Designed CDP architecture</li>
                  <li>Created Golang framework for backend development</li>
                </ul>
              </div>
              
              <div className='flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-sm'>
                <h4 className='heading text-xl font-semibold'>Galaxy Education, HCMC</h4>
                <span className='font-bold'>Technical Lead - 03/2021 to 05/2022</span>
                <p><i>EdTech startup focused on online learning (Team: 6 members)</i></p>
                <ul className="pl-4 list-disc">
                  <li>Design scalable infrastructure and service architecture</li>
                  <li>Maintain ican.vn website and ensure high availability</li>
                  <li>Work with product team to break down project requirements</li>
                  <li>Provide guidance on business models and technical solutions</li>
                </ul>
                <p><span className='font-bold'>Technologies:</span> Golang, React, Next.js, PostgreSQL, Kafka, RabbitMQ, Microservices</p>
                <p><span className='font-bold'>Achievements:</span></p>
                <ul className="pl-4 list-disc">
                  <li>Implemented effective SEO solutions</li>
                  <li>Served as Backend Architect for ICAN App</li>
                  <li>Developed SSO & OAuth2 identity system</li>
                </ul>
              </div>
              
              <div className='flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-sm'>
                <h4 className='heading text-xl font-semibold'>VNG, HCMC - Zalo Pay</h4>
                <span className='font-bold'>Senior Software Engineer - 10/2017 to 03/2018</span>
                <p><i>E-wallet payment platform</i></p>
                <ul className="pl-4 list-disc">
                  <li>Maintained the transaction processing engine (TPE) to ensure reliable payment operations</li>
                  <li>Helped upgrade the admin website with new features and improvements</li>
                  <li>Developed real-time data processing using Spark Streaming and Kafka</li>
                </ul>
                <p><span className='font-bold'>Technologies:</span> Java, Scala, Kafka, Apache Spark</p>
              </div>
              
              <div className='flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-sm'>
                <h4 className='heading text-xl font-semibold'>Lunex Telecom, HCMC</h4>
                <span className='font-bold'>Senior Software Engineer - 08/2015 to 10/2017</span>
                <p><i>Internal admin systems and Vodi mobile app</i></p>
                <ul className="pl-4 list-disc">
                  <li>Improved the Ticket & Sales system for better customer service</li>
                  <li>Built SMS and notification services for user communications</li>
                  <li>Created internal admin tools using Python and Django</li>
                  <li>Developed API services with Java and Spring Boot</li>
                </ul>
                <p><span className='font-bold'>Technologies:</span> Python, Java, Django, Bottle, Microservices</p>
              </div>
              
              <div className='flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-sm'>
                <h4 className='heading text-xl font-semibold'>VNG, HCMC - Zalo</h4>
                <span className='font-bold'>Software Engineer - 02/2012 to 10/2014</span>
                <p><i>OTT messaging application</i></p>
                <ul className="pl-4 list-disc">
                  <li>Gained expertise in Linux systems administration on Ubuntu</li>
                  <li>Built location-based services (LBS) using various databases</li>
                  <li>Developed notification APIs for user interactions</li>
                  <li>Created campaign targeting system for marketing team</li>
                  <li>Supported and maintained the Zalo API server</li>
                </ul>
                <p><span className='font-bold'>Technologies:</span> Java, Linux, Microservices, Kafka, MongoDB, PostgreSQL, Elasticsearch</p>
                <p><span className='font-bold'>Achievements:</span></p>
                <ul className="pl-4 list-disc">
                  <li>Improved LBS performance from 300-500ms to ~100ms</li>
                  <li>Scaled services to handle hundreds of requests per second</li>
                  <li>Implemented efficient campaign filtering queries</li>
                </ul>
              </div>
              
              <div className='flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-sm'>
                <h4 className='heading text-xl font-semibold'>Individual Systems Co.Ltd, HCMC</h4>
                <span className='font-bold'>Software Engineer - 05/2011 to 01/2012</span>
                <p><i>HR evaluation and bus system applications</i></p>
                <ul className="pl-4 list-disc">
                  <li>Developed web applications using ASP.NET MVC</li>
                  <li>Built Windows desktop applications with C#</li>
                  <li>Created HR evaluation tools and transportation management systems</li>
                </ul>
                <p><span className='font-bold'>Technologies:</span> C#, ASP.NET MVC, SQL Server</p>
              </div>
              
              <div className='flex flex-col space-y-2 p-4 bg-white rounded-lg shadow-sm'>
                <h4 className='heading text-xl font-semibold'>GMS, Can Tho</h4>
                <span className='font-bold'>Software Engineer - 05/2010 to 04/2011</span>
                <p><i>ERP system for fisheries industry</i></p>
                <ul className="pl-4 list-disc">
                  <li>Developed comprehensive ERP modules including inventory, accounting, sales, HR, and tax</li>
                  <li>Created database stored procedures and functions in SQL Server</li>
                  <li>Implemented object-relational mapping for data access</li>
                </ul>
                <p><span className='font-bold'>Technologies:</span> C#, SQL Server, OR Mapper</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
