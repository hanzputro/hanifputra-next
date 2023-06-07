import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Andada_Pro } from "next/font/google";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

export interface ProjectDetailType {
  title: string;
  tags: [];
  description: string;
  image: string;
  imageBlur: string;
  thumbnail: string;
  thumbnailBlur: string;
  width: number;
  height: number;
}

export interface ImageListCustomType {
  blur: string;
}

interface ProjectProps {
  project: ProjectDetailType[];
  setCurrentHash: (value: string) => void;
  currentHash: string;
}

const Project = ({ project, setCurrentHash, currentHash }: ProjectProps) => {
  const [isDetailVisible, setDetailVisible] = useState(false);
  const [detailSelected, setDetailSelected] = useState(0);

  const handleShowDetail = (id: number) => {
    setDetailVisible(!isDetailVisible);
    setDetailSelected(id);
  };

  const handleGalleryAspectRatio = (height: number) => {
    if (height == 200) return "4 / 2";
    if (height == 400) return "1";
    return "2 / 3";
  };

  const projectRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (_latest) => {
    if (currentHash !== "#project") {
      setCurrentHash("#project");
    }
  });

  const galleryVariants = {
    initial: { y: 50, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 0.8,
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  interface galleryType {
    handleShowDetail: (value: number) => void;
  }

  const GalleryDetail = useCallback(
    ({ handleShowDetail }: galleryType) => {
      return (
        <>
          {project?.map((item, idx) => {
            return (
              <AnimatePresence key={item.title}>
                {isDetailVisible && (
                  <motion.div
                    key={detailSelected}
                    className="fixed inset-0 w-full h-full m-auto z-[100] backdrop-blur-md bg-white bg-opacity-80"
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: detailSelected == idx ? 1 : 0,
                    }}
                    exit={{
                      scale: 0,
                    }}
                    transition={{
                      duration: 0,
                    }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 text-3xl cursor-pointer p-[20px] pb-[30px] leading-[0px] bg-[#FFEE00] text-white"
                      onClick={() => handleShowDetail(idx)}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: 0.4,
                        },
                      }}
                    >
                      x
                    </motion.div>

                    <motion.div
                      className="w-full h-full object-contain overflow-auto"
                      initial={{
                        opacity: 0,
                        scale: 1.2,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.6,
                      }}
                    >
                      <motion.div
                        className="fixed top-0 mb-5 p-6"
                        initial={{
                          opacity: 0,
                          y: -15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <h2
                          className={`${andadaPro.className} text-[30px] text-[#1f1f1f] mb-1`}
                        >
                          {item.title}
                        </h2>
                        <p className="text-lg mt-1">{item.description}</p>
                        {item.tags.map((tag: { name: string }, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] border-[#FFEE00] bg-black border py-1 px-2 mr-2 rounded-lg font-semibold text-[#FFEE00]"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </motion.div>
                      <Image
                        className="w-[800px] max-w-full pt-[160px] px-10 mx-auto"
                        ref={projectRef}
                        id={`thumb-${idx}`}
                        src={`/assets/images/project/${item.image}`}
                        blurDataURL={item.imageBlur}
                        alt={item.title}
                        placeholder="blur"
                        width={item.width}
                        height={item.height}
                        priority
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </>
      );
    },
    [project, handleShowDetail]
  );

  return (
    <section
      ref={projectRef}
      className="relative w-full px-24 pt-24 min-h-screen"
    >
      <div className="flex items-center mb-12">
        <motion.h2
          className={`${andadaPro.className} text-[170px] leading-[0.75] tracking-[-10px] text-[#e2e2e2] opacity-[0] blur-[1px] ml-[-10px]`}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 0.62, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          WORKS
        </motion.h2>
        <motion.h2
          className={`${andadaPro.className} text-[50px] absolute`}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          Project<span className="inline-block text-[#FFEE00]">_</span>
        </motion.h2>
      </div>

      <div className="mt-12 pb-20">
        <div className="xs:columns-1 sm:columns-3 lg:columns-4 gap-3">
          {project?.map((item, idx) => (
            <motion.div key={item.title} variants={galleryVariants}>
              <motion.div
                key={idx}
                className="mb-3"
                style={{
                  aspectRatio: handleGalleryAspectRatio(item.height),
                }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                onClick={() => handleShowDetail(idx)}
              >
                <motion.div
                  className="w-full h-full"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: isDetailVisible ? 0.5 : 1,
                  }}
                  exit={{ scale: 1 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                  }}
                >
                  <Image
                    className="w-full h-full object-contain"
                    ref={projectRef}
                    id={`thumb-${idx}`}
                    src={`/assets/images/project/thumb/${item.thumbnail}`}
                    blurDataURL={item.thumbnailBlur}
                    alt={item.title}
                    placeholder="blur"
                    width={item.width}
                    height={item.height}
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <GalleryDetail handleShowDetail={handleShowDetail} />
      </div>
    </section>
  );
};

export default Project;
