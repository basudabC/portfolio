import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-roboto">
      <Head>
        <title>Basudab Chowdhury | AI Data Scientist</title>
        <meta
          name="description"
          content="Portfolio of Basudab Chowdhury, AI Data Scientist specializing in LLMs, Computer Vision, and Bangla AI solutions."
        />
      </Head>

      {/* Header */}
      <header className="bg-corp-blue text-white py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Basudab Chowdhury</h1>
          <p className="text-xl">AI & BI Solutions Specialist</p>
        </div>
      </header>

      {/* About */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold text-corp-blue mb-4"
          >
            About Me
          </motion.h2>
          <p className="text-lg leading-relaxed">
            I am an AI & BI Solutions Specialist with expertise in developing AI
            solutions such as Large Language Models (LLMs) and Computer Vision.
            Skilled in cloud platforms, machine learning, data analysis, and
            model optimization, I have a proven track record of leading teams
            and delivering actionable insights to drive business decisions.
            Currently, I am pioneering a Bangla AI Call Center project to
            enhance multilingual communication.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold text-corp-blue mb-6"
          >
            Experience
          </motion.h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Manager BI & AI Researcher</h3>
              <p className="text-corp-blue">Aman Group Ltd | Oct 2024 - Present</p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Designed AI solutions with LLMs and Computer Vision, reducing
                  processing time by 15% and increasing productivity by 10%.
                </li>
                <li>
                  Fine-tuned LLMs with Hugging Face, improving accuracy by 12%
                  and reducing training time by 20%.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">
                Senior Manager Business Intelligence & AI Engineer
              </h3>
              <p className="text-corp-blue">
                Praava Health | Mar 2024 - Oct 2024
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Developed AI-powered dashboards with LLMs, improving
                  decision-making efficiency by 25%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold text-corp-blue mb-6"
          >
            Projects
          </motion.h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Bangla AI Call Center</h3>
              <p className="text-corp-blue">Aman Group Ltd | Ongoing</p>
              <p className="mt-2">
                A locally hosted AI call center using Bangla STT (Whisper), LLM
                (Mistral), and a custom-trained Bangla TTS voice (Piper).
                Integrated with Asterisk and a GSM modem for real-time
                telephony.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">AI-Agent Learning Assistant</h3>
              <p className="text-corp-blue">
                Aman Group BD | Mar 2025 - Mar 2025
              </p>
              <p className="mt-2">
                An interactive AI web app using Agentic RAG, built with
                Streamlit, Langgraph, and OpenAI, improving learning efficiency
                by 30%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold text-corp-blue mb-6"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "AI/ML Development",
              "Large Language Models",
              "Computer Vision",
              "NLP",
              "MLOps",
              "Python",
              "SQL",
              "Data Visualization",
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
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold text-corp-blue mb-6"
          >
            News & Articles
          </motion.h2>
          <div className="space-y-4">
            <div>
              <a
                href="https://www.prothomalo.com/technology/%E0%A6%9A%E0%A6%BE%E0%A6%B0-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A3%E0%A7%87%E0%A6%B0-%E0%A6%9A%E0%A7%87%E0%A6%96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corp-blue hover:text-corp-gold underline"
              >
                Prothom Alo: চার তরুণের চেখ (Four Young Innovators)
              </a>
            </div>
            <div>
              <a
                href="https://www.jagonews24.com/country/news/423116"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corp-blue hover:text-corp-gold underline"
              >
                Jago News: AI Engineer - Face Recognition System
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1usK-mZ8RHkd8bIPAlMwq-3hx2ReDte0R/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corp-blue hover:text-corp-gold underline"
              >
                Google Drive: Article on AI Innovations
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/14Nw8ZFnWJSyd9p0-CUBV-HWtXC5UIZEV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corp-blue hover:text-corp-gold underline"
              >
                Google Drive: Feature on Bangla AI Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold text-corp-blue mb-6"
          >
            Contact
          </motion.h2>
          <p>Email: basudab@example.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/basudabC"
              className="text-corp-blue hover:text-corp-gold"
            >
              github.com/basudabC
            </a>
          </p>
          <p>LinkedIn: [Add your LinkedIn URL]</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-corp-blue text-white py-4 px-4 text-center">
        <p>© {new Date().getFullYear()} Basudab Chowdhury. All rights reserved.</p>
      </footer>
    </div>
  );
}