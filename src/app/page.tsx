import Image from 'next/image'
import { Ovo, Lato } from 'next/font/google'

const ovo = Ovo({ subsets: ['latin'], weight: "400" })

export default function Home() {
  return (
    <main className="flex flex-col justify-between mx-auto max-w-5xl bg-gray-100 p-8 pb-20">
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
          <div className={`${ovo.className}`}>
            <div className='lg:pr-12'>
              <h1>TRUYET NGUYEN</h1>
              <h2 className='pt-4'> Backend Lead / Technical Lead</h2>
            </div>
            <hr className='w-full' />
          </div>

          <div className='mt-4 flex lg:flex-row lg:justify-between flex-col'>
            <span className='font-semibold text-xl'>E: minhtruyet@gmail.com</span>
            <span className='font-semibold text-xl'>P: +84 987 288 651 </span> 
            <span className='font-semibold text-xl'>DOB: 1988</span>
          </div>
        </div>
      </div>
      <div className='pt-10 flex flex-col'>
        <div className='flex flex-col space-y-4'>
          <h3 className={`${ovo.className} heading`}>Summary</h3>
          <p>I am a seasoned backend engineer with over a decade of experience in software engineering. I have a strong focus on microservices architecture and am proficient in designing, developing, testing, maintaining, and optimizing distributed systems. I have a particular emphasis on high-performance services.</p>

          <p>I have also worked as a full-stack developer, a DevOps engineer, and a solution architect. In my role as a DevOps engineer, I have experience with CI/CD, Kubernetes, and infrastructure on AWS. I am also familiar with GKE and the Cloud Native Foundation. This gives me a unique perspective on the software development process, and I am able to bridge the gap between the different teams involved.</p>

          <p>I am confident in my ability to lead and mentor other developers, and I am always looking for ways to improve my leadership skills. I am also a motivated and enthusiastic professional who is always eager to learn new things. I am confident that I can use my skills and experience to contribute to the success of innovative product development endeavors.</p>
        </div>
      </div>

      <div className='pt-10 flex flex-col'>
        <div className='flex flex-col space-y-4'>
          <section className='flex flex-col space-y-2'>
            <h3 className={`${ovo.className} heading`}>Education & Certifications</h3>
            <div>
              <ul className="pl-4 list-disc">
                <li>Bachelor of Information Technology (2006-2010) - An Giang University</li>
              </ul>
            </div>
          </section>
          <section className='flex flex-col space-y-2'>
            <h3 className={`${ovo.className} heading`}>Skills</h3>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <h4 className={`${ovo.className} heading`}>Programming Languages</h4>
                <ul className="pl-4 list-disc">
                  <li>Java, Golang, Scala, Nodejs, Python.</li>
                  <li>Typescript, Javascript, HTML5, CSS3.</li>
                </ul>
              </div>
              <div>
                <h4 className={`${ovo.className} heading`}>Development Frameworks</h4>
                <ul className="pl-4 list-disc">
                  <li><b>Backend Development:</b> Spring Framework, Spring Reactive, Spring Boot, Hibernate, Spring JPA, Spring R2DBC, NestJS, go-kratos, ...</li>
                  <li><b>Frontend Development:</b> ReactJS, Vue, Next, Nuxt, React Native, ...</li>
                  <li><b>Testing:</b> Spring Test, JUnit, JMeter, Postman, Playwright, E2E, testify, ...</li>
                </ul>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <h4 className={`${ovo.className} heading`}>Data Storage</h4>
                <ul className="pl-4 list-disc">
                  <li><b>RDBMS:</b> Postgresql, Mysql, MariaDB.</li>
                  <li><b>NoSQL:</b> MongoDB, Cassandra, Neo4j, Key-Value. </li>
                  <li><b>NewSQL:</b> CockroachDB.</li>
                  <li><b>Big Data / Data Lake:</b> Hadoop, GCP, S3. </li>
                  <li><b>Caching:</b> Redis, Memcache.</li>
                </ul>
              </div>
              <div>
                <h4 className={`${ovo.className} heading`}>Event / Streaming Queue</h4>
                <ul className="pl-4 list-disc">
                  <li><b>Message Queue:</b> RabbitMQ, Redis Pub/Sub, AWS SES.</li>
                  <li><b>Streaming:</b> Kafka, Apache Pulsar.</li>
                </ul>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <h4 className={`${ovo.className} heading`}>Operations</h4>
                <ul className="pl-4 list-disc">
                  <li><b>Cloud:</b> AWS, GCP.</li>
                  <li>Kubernetes Orchestration on AWS, GCP and On Primise.</li>
                  <li>Infrastructure as Code with Terraform,</li>
                  <li><b>CI/CD:</b> Gitlab CI, Jenskin on k8s, GitOps.</li>
                </ul>
              </div>
              <div>
                <h4 className={`${ovo.className} heading`}>Design & Architects</h4>
                <ul className="pl-4 list-disc">
                  <li>API Interface: RESTful API,  Protobuf</li>
                  <li><b>Protocol:</b>HTTP, gRPC, Websocket, TCP Socket.</li>
                  <li><b>Architects:</b> Microservies, Data Driven, Hexagonal, MVC</li>
                  <li><b>Principles:</b> SOLID, DRY, KISS.</li>
                  <li><b>Design Pattern:</b> Singleton, Factory, Prototype, Builder, Adapter, Decorator, Chain of Repositories, Command, Observer,  Dependency Injection </li>
                </ul>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <h4 className={`${ovo.className} heading`}>Methodology & Tools</h4>
                <ul className="pl-4 list-disc">
                  <li>Familiar with Agile Methodology </li>
                  <li>Familiar with Scrum & Kaban processes</li>
                  <li>Experienced on Trello, Jira, Confluence</li>
                  <li>Source Code Version Control with Git, Subversion</li>
                </ul>
              </div>
              <div>
                <h4 className={`${ovo.className} heading`}>Soft Skills</h4>
                <ul className="pl-4 list-disc">
                  <li>Product Mindset</li>
                  <li>Problem-solving</li>
                  <li>Critical Thinking</li>
                  <li>Learning & Research</li>
                </ul>
              </div>
            </div>
          </section>
          <section className='flex flex-col space-y-2'>
            <h3 className={`${ovo.className} heading`}>Work Experiences</h3>
            <div className='flex flex-col space-y-4'>
              <div className='flex flex-col space-y-2'>
                <h4 className='heading'>Hello Health Group, HCMC</h4>

                <span className='font-bold'>Technical Lead/Solution Architect - 08/2022 to 03/2023 </span>
                <p><i>A healthcare startup company is working on digital marketing and content. We build the services support for health care market.</i></p>
                <ul className="pl-4 list-disc">
                  <li>Proficiently led a small-sized backend team, effectively guiding and managing their efforts.</li>
                  <li>Restructured and reorganized legacy architecture using BFF architecture and microservices, enhancing system efficiency and maintainability.</li>
                  <li>Designed a robust Data Pipeline Platform, laying the foundation for the development of a cutting-edge CDP platform.</li>
                  <li>Collaborated closely with the backend team to ensure strict adherence to recommended architecture and proposed efficient workflows for backend development.</li>
                  <li>Expertly designed and developed secure authentication services, adhering to the Oauth2 protocol with Ory Hydra, as well as user service to enhance user experiences and data security.</li>
                </ul>
              </div>
              <div className='flex flex-col space-y-2'>
                <h4 className='heading'>Galaxy Education, HCMC</h4>
                <span className='font-bold'>Technical Lead - 03/2021 to 05/2022 </span>
                <p><i>A startup company focuses on edutech. We build the education products to enhance the online learning experiences.</i></p>
                <ul className="pl-4 list-disc">
                  <li>Designed and implemented robust infrastructure and service architecture, ensuring scalability, reliability, and optimal performance of systems.</li>
                  <li>Planned and executed website ican.vn's maintenance activities, ensuring its smooth operation and uninterrupted availability to users.</li>
                  <li>Collaborated closely with the product team to breakdown project tasks and requirements, effectively aligning the backend team's efforts with the overall project goals.</li>
                  <li>Provided expert guidance on business models and technical problem-solving, enabling the team to make informed decisions and overcome challenges effectively.
                  </li>

                </ul>
              </div>
              <div className='flex flex-col space-y-2'>
                <h4 className='heading'>Zoop Care, HCMC</h4>
                <span className='font-bold'>Senior Software Engineer - 03/2020 to 03/2021 </span>
                <p><i>This is a health care product, we build a CMS for Health Care provider and an application for their customers aiming to become a leading Health Care platform in Vietnam and SEA.</i></p>
                <ul className="pl-4 list-disc">
                  <li>Proactively maintained and enhanced features within the applications using Java, optimizing their performance and user experience.</li>
                  <li>Successfully led the migration process of legacy code from Java to Golang, streamlining codebase and improving system efficiency.</li>
                  <li>Development & Enhancement the Backend and Frontend of Patient Profiles, Promotion & Campaigns services</li>
                </ul>
              </div>
              <div className='flex flex-col space-y-2'>
                <h4 className='heading'>Zamo, HCMC</h4>

                <span className='font-bold'>Devops / Backend Lead - 03/2018 to 03/2020 </span>
                <i>Project: Kegmil</i>
                <p><i>Kegmil is a cutting-edge SaaS-based platform designed specifically for companies in the Southeast Asian (SEA) region to efficiently manage field services operations. The platform enables seamless resource management by overseeing assets, workers' activities, scheduling, dispatching jobs, optimizing routing, and incorporating IoT-based maintenance solutions. The project was executed by a highly skilled team of 4 members.</i></p>
                <ul className="pl-4 list-disc">
                  <li>Organized daily stand-up meetings to ensure effective communication and collaboration within the team.</li>
                  <li>Managed the infrastructure on AWS, Operated the kubernetes orchestration, which used Infrastructure as Code.</li>
                  <li>Designed the system solution providing REST, gRPC, webapp on AWS and K8s</li>
                  <li>Built the project template & CI/CD flow base on GitOps and containerized.</li>
                  <li>Set up the services mesh & monitoring system.</li>
                  <li>Conducted thorough research and designed innovative workflows and IOT Platform proposals, presenting them to the CTO for review and approval.</li>
                  <li>Actively supported backend code development and maintenance.</li>
                  <li>Focused on adapting the system for multi-tenant support and conducted thorough research on BPMN 2.0 workflow, multi-tenant database architecture, serverless functions, and Cloud Native Software ecosystems for Kubernetes.</li>
                </ul>
              </div>
              <div className='flex flex-col space-y-2'>
                <h4 className='heading'>VNG, HCM - Zalo Pay</h4>
                <span className='font-bold'>Senior Software Engineer - 10/2017 - 03/2018</span>
                <p><i>An e-wallet product</i></p>
                <ul className="pl-4 list-disc">
                  <li>Successfully managed the maintenance of TPE (transaction process engine), ensuring uninterrupted operation.</li>
                  <li>Assisted the data team in upgrading the admin website, implementing new features and improvements smoothly.</li>
                  <li>Involved analysis process, utilizing Spark Streaming and Kafka to enable real-time data processing and insights.</li>
                </ul>
              </div>
              <div className='flex flex-col space-y-2'>
                <h4 className='heading'>Lunex Telecom, HCM</h4>
                <span className='font-bold'>Senior Software Engineer - 08/2015 to 10/2017</span>
                <p><i>Product: Internal Admin Site, Vodi (apps)</i></p>
                <ul className="pl-4 list-disc">
                  <li>Managed the maintenance and improvement of the Ticket & Sale system, optimizing customer service and ticket issue management.</li>
                  <li>Developed SMS and notification services, enhancing communication and engagement with users.</li>
                  <li>Designed and created the Internal Admin Site using Python and Django, providing a user-friendly interface for efficient internal operations.</li>
                  <li>Assisted the backend team in building and maintaining API services based on Java and SpringBoot, ensuring seamless integration with other modules and external systems.
                  </li>

                </ul>
              </div>
              <div className='flex flex-col space-y-2'>
                <h4 className='heading'>VNG, HCM - Zalo</h4>

                <span className='font-bold'>Software Engineer - 02/2012 to 10/2014</span>
                <p><i>A OTT Application</i></p>
                <ul className="pl-4 list-disc">
                  <li>Acquired proficiency in Linux and gained extensive experience working on the Ubuntu operating system.</li>
                  <li>Developed and maintained a Location-Based Service (LBS) that initially used Neo4J as the database, but due to performance constraints, successfully migrated to MongoDB, PostgreSQL, and eventually Elasticsearch for enhanced efficiency.</li>
                  <li>Designed, developed, and maintained a robust Notification API responsible for notifying users about interactions initiated by other users.</li>
                  <li>Led the development of a Campaign Service that supports the marketing team in setting rules for delivering targeted advertisements to users on Zalo.
                  </li>
                  <li>Provided expert support and maintenance for the Zalo API server in collaboration with the team.</li>
                </ul>
              </div>
              <div className='flex flex-col space-y-2'>
                <h4 className='heading'>Individual Systems Co.Ltd, HCM</h4>
                <span className='font-bold'>Software Engineer - 05/2011 - 01/2012</span>
                <p><i>Project: HR Evaluation, Bus System Development web application use ASP .NET MVC, windows application use C#.
                </i></p>
              </div>
              <div className='flex flex-col space-y-2'>
                <h4 className='heading'>GMS, Can Tho</h4>
                <span className='font-bold'>Software Engineer - 05/2010 - 04/2011</span>
                <p><i>Project: ERP Development ERP(Store, Accounting, Sale, Human Resource, tax) for fisheries use C#, OR Mapper and write store procedure, function on SQL Server.
                </i></p>
              </div>
            </div>
          </section>
        </div>

      </div>
    </main>
  )
}