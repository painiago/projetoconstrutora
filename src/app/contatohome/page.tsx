'use client';
import { faLocationDot, faSquarePhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles.module.scss'
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContatoHome (){
  const [campos, setCampos] = useState<{ [key: string]: string }>({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    nome: '',
    email: '',
    mensagem: ''
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setCampos((prevCampos) => ({ ...prevCampos, [name]: value }));
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateForm()) {
      send();
    }
  }

  function validateForm() {
    const newErrors: { [key: string]: string } = {};

    if (campos.nome.trim() === '') {
      newErrors.nome = 'O campo nome é obrigatório.';
    }else if (campos.nome.length > 100){
      newErrors.nome = 'O campo nome deve ter no máximo 100 caracteres.';
    }else if (/[!#$%&^&*()_+\-=[\]@{};':"\\|,<>/?]/.test(campos.nome)){
      newErrors.nome = 'O campo nome contém caracteres especiais inválidos.';
    }

    if (campos.email.trim() === '') {
      newErrors.email = 'O campo email é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(campos.email)) {
      newErrors.email = 'O email inserido é inválido.';
    }

    if (campos.mensagem.trim() === '') {
      newErrors.mensagem = 'O campo mensagem é obrigatório.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }
 
  function clearForm() {
    setCampos({
      nome: '',
      email: '',
      mensagem: ''
    });
    setErrors({});
  }

  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach((key) => formData.append(key, campos[key]));
    axios
      .post('/send', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        toast.success('Mensagem enviada com sucesso.');
        clearForm();
      })
      .catch(() => {
        toast.error('Ocorreu um erro ao enviar a mensagem.');
      });
  }

  return(


<section className={styles.containercontato} id='contato'>
<div className={styles.titulocontato}>
  <p>Entrar em contato</p>
  <p>Entre em contato conosco e transforme seus projetos em realidade.</p>
  <p>Não deixe seus sonhos esperando, entre em contato agora mesmo!</p>
</div>
<div className={styles.contentcontato}>
  <div className={styles.formcontato}>
    <form onSubmit={handleFormSubmit}>
      <input type="text" id="fname" placeholder='Digite seu nome' name='nome' onChange={handleInputChange}
              value={campos.nome} />
                {errors.nome && <p className={styles.error}>{errors.nome}</p>}
      <input type="text" id='femail' placeholder='Digite seu email' onChange={handleInputChange}
              value={campos.email} name='email'/>
               {errors.email && <p className={styles.error}>{errors.email}</p>}
      <textarea name="mensagem" id="fmensage" cols={50} rows={15} placeholder='Digite sua mensagem'  onChange={handleInputChange}
              value={campos.mensagem}  ></textarea>
                {errors.mensagem &&  <p className={styles.error}>{errors.mensagem}</p>}
                <button type="submit">Enviar</button>
      <p>Seu contato será retornado em até 2 dias úteis.</p>
    </form>
  </div>
  <div className={styles.socialiconscontato}>
    <div>
      <FontAwesomeIcon icon={faLocationDot} />
      <p>342 Avenida Brasil, 23 São Carlos, São Paulo, SP-45233-0098</p>
    </div>
    <div className={styles.containertime}>
      <FontAwesomeIcon icon={faSquarePhone} />
      <p>(11) 89782-8113 / </p>
      <p>(11) 88582-3113</p>
    </div>
    <div className={styles.containertime}>
    <FontAwesomeIcon icon={faEnvelope} />
      <p>exhouseconstrutora@gmail.com.br</p>
    </div>
    <div>
      <FontAwesomeIcon icon={faClock} />
      <p>Seg - Sex : 8h - 18h /</p>
      <p>Sáb: 8h - 13h / </p>
      <p>Dom: Fechado!</p>
    </div>
  </div>
</div>
</section>

)
}