import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen font-roboto">
      <Head>
        <title>Basudab Chowdhury | AI & BI Solutions Specialist</title>
        <meta
          name="description"
          content="Portfolio of Basudab Chowdhury, an AI & BI Solutions Specialist with over 6 years of experience in Generative AI, LLMs, and Agent Systems."
        />
      </Head>

      {/* Hero Section */}
      <header className="bg-corp-blue text-white py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl mb-4"
          >
            Basudab Chowdhury
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-6"
          >
            AI & BI Solutions Specialist
          </motion.p>
          <motion.a
            href="https://drive.google.com/file/d/1lGbuTzdPwsiTikTvAHtVL9NTATdKqjKI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block bg-corp-gold text-corp-blue py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Download Resume
          </motion.a>
        </div>
      </header>

      {/* About */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            With over 6 years of experience as an AI & BI Solutions Specialist,
            I specialize in developing advanced AI solutions, including Large
            Language Models (LLMs), Computer Vision, and Agent Systems.
            Currently at Aman Group Ltd, I am driving innovation in Generative
            AI and LLMs, with expertise in multimodal applications and
            real-time systems like the Bangla AI Call Center. My skills in cloud
            platforms, machine learning, data analysis, and MLOps enable me to
            lead teams and deliver actionable insights that transform business
            outcomes.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-corp-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8">Experience</h2>
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-2xl">Manager BI & AI Researcher</h3>
              <p className="text-corp-blue">
                Aman Group Ltd | Oct 2024 - Present, Dhaka
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Designed AI solutions with LLMs and Computer Vision, reducing
                  processing time by 15% and increasing productivity by 10%.
                </li>
                <li>
                  Fine-tuned LLMs using Hugging Face Transformers, improving
                  accuracy by 12% and reducing training time by 20%.
                </li>
                <li>
                  Developed multimodal AI models (text + image), achieving 95%
                  accuracy.
                </li>
                <li>
                  Created APIs for AI integration, cutting integration time by
                  30%.
                </li>
                <li>
                  Optimized workflows with MLOps, reducing deployment errors by
                  40%.
                </li>
                <li>
                  Built ASR systems with 90%+ transcription accuracy.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-2xl">
                Senior Manager Business Intelligence & AI Engineer
              </h3>
              <p className="text-corp-blue">
                Praava Health | Mar 2024 - Oct 2024, Dhaka
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Developed AI dashboards with LLMs, improving decision-making
                  by 25%.
                </li>
                <li>
                  Automated reporting with LLMs, reducing effort by 30% and
                  speeding up generation by 40%.
                </li>
                <li>
                  Deployed AI tools across departments, boosting productivity
                  by 15%.
                </li>
                <li>
                  Led AI R&D, accelerating model deployment by 20%.
                </li>
                <li>
                  Enhanced operational efficiency by 20% and cut costs by 15%.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-2xl">Manager - Business Intelligence</h3>
              <p className="text-corp-blue">
                Daraz (Alibaba Group) | Feb 2022 - Feb 2024, Dhaka
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Led BI team to enhance dashboards, improving reporting speed
                  by 50%.
                </li>
                <li>
                  Delivered insights, boosting decision-making efficiency by
                  25%.
                </li>
                <li>
                  Built self-service SQL tools, reducing query time by 30%.
                </li>
                <li>
                  Developed predictive models, increasing forecast accuracy by
                  20%.
                </li>
                <li>
                  Improved data quality, reducing reporting errors by 15%.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl">Data Scientist</h3>
              <p className="text-corp-blue">
                LeReve | Jan 2020 - Feb 2022, Dhaka
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Improved dashboards with Tableau/Power BI, increasing
                  adoption by 30%.
                </li>
                <li>
                  Analyzed datasets, boosting customer engagement by 15%.
                </li>
                <li>
                  Deployed predictive models, enhancing retention by 25%.
                </li>
                <li>
                  Delivered insights, improving decision-making by 20%.
                </li>
                <li>
                  Optimized visualizations, cutting report time by 40%.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card"
            >
              <h3 className="text-2xl">Data Analyst</h3>
              <p className="text-corp-blue">
                Indigo Yin - ULTRALYSIS | Feb 2019 - Dec 2019, UK
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Optimized data systems, improving processing speed by 30%.
                </li>
                <li>
                  Generated insights with SQL/Python, boosting efficiency by
                  25%.
                </li>
                <li>
                  Built predictive models, increasing accuracy by 20%.
                </li>
                <li>
                  Delivered insights, reducing decision-making time by 15%.
                </li>
                <li>Automated workflows, saving 10+ hours weekly.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-2xl">AI-Agent Learning Assistant</h3>
              <p className="text-corp-blue">
                Aman Group BD | Mar 2025 |{" "}
                <a
                  href="https://github.com/basudabC/Study_Buddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub
                </a>
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Built an Agentic RAG app with Streamlit, Langgraph, and
                  OpenAI, improving learning by 30%.
                </li>
                <li>Integrated vector databases for efficient knowledge retrieval.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-2xl">RAG-Powered PDF Parser</h3>
              <p className="text-corp-blue">
                Aman Group Ltd | Oct 2024 - Nov 2024 |{" "}
                <a
                  href="https://github.com/basudabC/HR-Resume-Management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub
                </a>
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Automated PDF extraction with RAG and LLMs, achieving 95%
                  accuracy.
                </li>
                <li>Reduced manual effort by 40% and processing time by 50%.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-2xl">Real-Time Healthcare Translation</h3>
              <p className="text-corp-blue">
                Praava Health | Oct 2024 - Nov 2024 |{" "}
                <a
                  href="https://github.com/basudabC/RealtimeTranlate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub
                </a>
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Built a multilingual translation app with Flask and Web
                  Speech API.
                </li>
                <li>Supported 20+ languages, reducing communication barriers.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl">SQL Query Generator</h3>
              <p className="text-corp-blue">Daraz Bangladesh | Jan 2023 - Jun 2023</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Created an LLM-powered tool for SQL queries and report
                  summarization.
                </li>
                <li>Reduced insight generation time by 40%.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card"
            >
              <h3 className="text-2xl">Face Recognition System</h3>
              <p className="text-corp-blue">
                Bangladesh Police | Jan 2021 - Jun 2021 |{" "}
                <a
                  href="https://www.jagonews24.com/country/news/423116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Article
                </a>
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Developed a real-time face recognition system with OpenCV.
                </li>
                <li>Optimized for scalability and diverse conditions.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="card"
            >
              <h3 className="text-2xl">Bangla AI Call Center</h3>
              <p className="text-corp-blue">Aman Group Ltd | Ongoing</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Built a local AI call center with Bangla STT (Whisper), LLM
                  (Mistral), and TTS (Piper).
                </li>
                <li>Integrated with Asterisk and GSM modem for real-time use.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-corp-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Generative AI",
              "LLMs",
              "Agent Systems",
              "Computer Vision",
              "NLP",
              "MLOps",
              "Python",
              "SQL",
              "Data Visualization",
              "Cloud Platforms",
              "RAG",
              "Speech-to-Text",
            ].map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-corp-blue text-white p-4 rounded-lg text-center shadow hover:bg-corp-gold transition"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Articles */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8">News & Articles</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.prothomalo.com/technology/%E0%A6%9A%E0%A6%BE%E0%A6%B0-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A3%E0%A7%87%E0%A6%B0-%E0%A6%9A%E0%A7%87%E0%A6%96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corp-blue hover:text-corp-gold underline"
              >
                Prothom Alo: Four Young Innovators
              </a>
            </li>
            <li>
              <a
                href="https://www.jagonews24.com/country/news/423116"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corp-blue hover:text-corp-gold underline"
              >
                Jago News: Face Recognition System
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1usK-mZ8RHkd8bIPAlMwq-3hx2ReDte0R/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corp-blue hover:text-corp-gold underline"
              >
                Google Drive: AI Innovations Article
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/14Nw8ZFnWJSyd9p0-CUBV-HWtXC5UIZEV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corp-blue hover:text-corp-gold underline"
              >
                Google Drive: Bangla AI Solutions Feature
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-corp-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8">Contact</h2>
          <p>Email: basudab.chowdhory@gmail.com</p>
          <p>Phone: +88 01750 973483</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/basudab007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-corp-blue hover:text-corp-gold underline"
            >
              linkedin.com/in/basudab007
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/basudabC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-corp-blue hover:text-corp-gold underline"
            >
              github.com/basudabC
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-corp-blue text-white py-6 px-6 text-center">
        <p>© {new Date().getFullYear()} Basudab Chowdhury. All rights reserved.</p>
      </footer>
    </div>
  );
}
