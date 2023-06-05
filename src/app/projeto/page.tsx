/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useState } from "react";
import Image from "next/image";

import capaempresa from '../../../public/img/capaempresa.png'
import BtnContato from "./products/page";
import dynamic from "next/dynamic";
import { Metadata } from 'next';
const ScrollTop = dynamic(() => import('@/components/ScrollBtn/ScrollToTopButton'));

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Projetos realizados por nossa empresa Exhouse Construtora.',
}

export default function Projetos() {
  const projects = [
    { id: 1, title: "Morumbi", image: "/img/casa1.jpg" },
    { id: 2, title: "Jardin", image: "/img/casa2.jpg" },
    { id: 3, title: "Itaim Bibi", image: "/img/casa3.jpg" },
    // Adicione outros projetos aqui
  ];

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
  };

  return (
    <main>
      
      <div className={styles.containerempresa}>
        <div className={styles.containercapa}>
          <div className={styles.contentempresa}>
            <h1>Nossos Projetos</h1>
            <Image src={capaempresa} alt="" />
            <div className={styles.stars}></div>
            <div className={styles.stars2}></div>
          </div>
          <section className={styles.containersection}>
            <p>Confira abaixo mais projetos realizados por nossa empresa.</p>
            <section className={styles.containerprojetos}>
              <div className={styles.cardsempresa}>
                <div className={styles.cardsproject}>
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className={`${styles.allcards} ${
                        project.id === selectedProjectId ? styles.active : ""
                      }`}
                      onClick={() => handleProjectClick(project.id)}
                    >
                        <img src={project.image} alt="" className={styles.imgfluid} />
                      <p>Residencial</p>
                      <h2>{project.title}</h2>
                      <Link
                        href={`/projeto/detailsprojetos/${project.id}`}
                        passHref
                      >
                        <button>Mais detalhes</button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
                <BtnContato/>
            </section>
          </section>
        </div>
      </div>
      <ScrollTop/>
    </main>
  );
}
