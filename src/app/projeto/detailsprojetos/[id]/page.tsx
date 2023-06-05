/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import projectsData from "./projectsData";
import Modal from "react-modal";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import dynamic from "next/dynamic";

const ScrollTop = dynamic(() => import('@/components/ScrollBtn/ScrollToTopButton'));
const BtnContact = dynamic(() => import('../../products/page'));



function useCurtida() {
  const [curtidas, setCurtidas] = useState(0);
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCurtida = localStorage.getItem("curtida");
      if (storedCurtida === "true") {
        setLiked(true);
        setCurtidas(1);
      }
    }
  }, []);

  const handleCurtir = () => {
    if (isLiked) {
      setCurtidas(curtidas - 1);
      if (typeof window !== "undefined") {
        localStorage.removeItem("curtida");
      }
    } else {
      setCurtidas(curtidas + 1);
      if (typeof window !== "undefined") {
        localStorage.setItem("curtida", "true");
      }
    }
    setLiked(!isLiked);
  };

  return { curtidas, isLiked, handleCurtir };
}

export default function DetailsProjects() {
  const [selectedProjectId, setSelectedProjectId] = useState<number>(
    typeof window !== "undefined" ? Number(localStorage.getItem("selectedProjectId")) || 1 : 1
  );
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    proprietario: string;
    subtitle: string;
    status: string;
    startDate: string;
    endDate: string;
    area: string;
    address: string;
    image: string;
    imageNext: string;
    vendedor: string;
    imgNext: string;
    oimg: string;
  } | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const { curtidas, isLiked, handleCurtir } = useCurtida();

  useEffect(() => {
    const fetchProjectDetails = async (projectId: number) => {
      const project = projectsData.find((p) => p.id === projectId) || null;
      setSelectedProject(project);
      setRelatedProjects(getRelatedProjects(projectId));
    };

    fetchProjectDetails(selectedProjectId);
  }, [selectedProjectId]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedProjectId", selectedProjectId.toString());
    }
  }, [selectedProjectId]);

  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
  };

  const getRelatedProjects = (projectId: number) => {
    const relatedIds = projectsData
      .filter((project) => project.id !== projectId)
      .map((project) => project.id);
    return projectsData.filter((project) => relatedIds.includes(project.id));
  };

  if (!selectedProject) {
    return <p>Carregando...</p>;
  }

  // MODAL
  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalIsOpen(false);
  };

  return (
    <>
      <main className={styles.containermain}>
      <ScrollTop/>
        <section className={styles.containerdetails}>
          <div className={styles.containerglobalimgs}>
            <div className={styles.containergeral}>
              <div className={styles.containeroneimg}>
                <div onClick={() => openModal(selectedProject.image)}>
                  <div className={styles.imageContainer}>
                    <img src={selectedProject.image} alt="" className={styles.slideimgone} />
                    <span className={styles.hoverIcon}>
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.containerextended}>
                <div className={styles.slide}>
                  <img src={selectedProject.imageNext} alt="" className={styles.slideimg}   onClick={() => openModal(selectedProject.imageNext)}/>
                </div>
                <div className={styles.slide}>
                  <img src={selectedProject.imgNext} alt="" className={styles.slideimg} onClick={() => openModal(selectedProject.imgNext)}/>
                </div>
                <div className={styles.slide}>
                  <img src={selectedProject.oimg} alt="" className={styles.slideimg} onClick={() => openModal(selectedProject.oimg)}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.containerdetalhes}>
          <div className={styles.contentdetalhes}>
            <p>{selectedProject.title}</p>
            <h1>{selectedProject.proprietario}</h1>
            <div className={styles.contvendedor}>
              <span>
                <FontAwesomeIcon icon={faUser} className={styles.iconuser} />
                <p>{selectedProject.vendedor} - Vendedor</p>
              </span>
            </div>
            <ul>
              <li>
                <strong>Status:</strong> {selectedProject.status}
              </li>
              <li>
                <strong>Início:</strong> {selectedProject.startDate} /{" "}
                <strong>Concluído:</strong> {selectedProject.endDate}
              </li>
              <li>
                <strong>Área construída:</strong> {selectedProject.area}
              </li>
              <li>
                <strong>Endereço:</strong> {selectedProject.address}
              </li>
            </ul>
            <div className={styles.curtidas}>
              <button id="like" className={styles.labelgeral} onClick={handleCurtir}>
                <div className={`${styles.label} ${isLiked ? styles.liked : ""}`}>
                  <FontAwesomeIcon icon={faHeart} className={styles.heart} />
                </div>
                <p>Curtir</p>
                <div className={styles.number} id="number">
                  {curtidas}
                </div>
              </button>
            </div>
          </div>
        </section>
        <section className={styles.containerprojects}>
          <p>Confira abaixo mais projetos realizados por nossa empresa.</p>
          <div className={styles.projectList}>
            <div className={styles.containerList}>
              {projectsData.map((project) => (
                <button
                  key={project.id}
                  className={`${styles.projectItem} ${
                    project.id === selectedProjectId ? styles.active : ""
                  }`}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className={styles.imageContainer}>
                    <img src={project.image} alt="" className={styles.imgfluid} />
                    <span className={styles.hoverIcon}>
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                  </div>
                  <div className={styles.textContainer}>
                    <p>{project.title}</p>
                    <p>{project.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        contentLabel="Imagem Modal"
      >
        <img src={selectedImage} alt="" className={styles.modalImage} />
      </Modal>
      <BtnContact/>
    </>
  );
}