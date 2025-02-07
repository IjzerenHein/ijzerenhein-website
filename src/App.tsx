import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { WordCloud } from "./WordCloud";

export function App() {
  return (
    <div className="app-outer absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center py-4">
      <div className="flex flex-col h-full w-full max-w-screen-lg">
        <div className="flex flex-row justify-between mx-4 my-8">
          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <h1 className="text-5xl font-bold">Hein Rutjes</h1>
            <motion.h2
              className="text-sm text-muted uppercase"
              initial={{ opacity: 0, translateX: -1000 }}
              animate={{ opacity: 0.5, translateX: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              App & Software Developer, Creator
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex flex-row gap-3 py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 5 }}
          >
            <a href="https://www.linkedin.com/in/hein-rutjes-97b5b08/">
              <FaLinkedinIn
                size={22}
                className="icon hover:opacity-100 hover:scale-125 opacity-50 transition-all duration-300"
              />
            </a>
            <a href="https://github.com/IjzerenHein">
              <FaGithub
                size={22}
                className="icon hover:opacity-100 hover:scale-125 opacity-50 transition-all duration-300"
              />
            </a>
            <a href="mailto:hrutjes@gmail.com">
              <FaEnvelope
                size={22}
                className="icon hover:opacity-100 hover:scale-125 opacity-50 transition-all duration-300"
              />
            </a>
          </motion.div>
        </div>
        <WordCloud />
        <motion.div
          className="text-center"
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 0.5, translateY: 0 }}
          transition={{ delay: 7, duration: 1 }}
        >
          <h2 className="text-sm uppercase">
            KvK 72827645 - TAX NL001883184B33
          </h2>
        </motion.div>
      </div>
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: 5000 }}
        transition={{ duration: 5 }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-white" />
      </motion.div>
    </div>
  );
}
