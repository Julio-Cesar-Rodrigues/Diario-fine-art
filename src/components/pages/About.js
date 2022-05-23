import React from 'react'
import photo from '../../images/mari2.jpg'
import '../styles/About.css'

const About = () => {
  return (
    <div className="container">
      <div className="about-page">
        <div className="side-about">
          <img className="photo-perfil" src={photo} alt="Mariana Monçôres" />
          <h1 className="title-principal">Mariana Monçôres</h1>
          <h3 className="title-secundary">Fotógrafa, Marqueteira</h3>

          <div className="resume-area">
            <h3 className="title-secundary">Resumo Executivo</h3>
            <p className="text-secundary">
              Como fotógrafa e marqueteira profissional, aprendi a combinar
              ambas as áreas. O que permitiu me comunicar através da arte:
              produzindo retratos não convencionais e experiencias memoráveis
              aos meus clientes.
            </p>
          </div>
          <div className="resume-area">
            <h3 className="title-secundary">Áreas de especialidade</h3>
            <ul className="text-secundary">
              <li>Social Midia</li>
              <li>Marketing Pessoal</li>
              <li>Marketing Promocional</li>
              <li>Edição Fine Art</li>
              <li>Fotografia Gestante</li>
              <li>Fotografia de Retrato</li>
              <li>Fotografia de Eventos</li>
              <li>Fotografia Corporativa</li>
            </ul>
          </div>
        </div>

        <div className="side-experience">
          <h2 className="title-alt">Experiência Profissional</h2>
          <section className="section-about">
            <h3>Fotografia</h3>
            <i>Diário Fine Art | 2021 - Atualmente</i>
            <p className="text-alt">
              Atuo como Micro Empreendedora Individual.
              <br /> Exercendo funções como: Fotógrafa, Editora, Social Midia,
              contabilidade e atendimento ao público.
            </p>
          </section>

          <section className="section-about">
            <h3>Marketing</h3>
            <i>
              Clínica Vip Odonto, Estágio/MEI - Duque de Caxias, RJ | 2018-2022
            </i>
            <ul className="text-alt">
              <li>Produzi conteúdos audiovisual nas redes sociais</li>
              <li>Gerenciei a experiência de satisfação dos Pacientes</li>
              <li>Colaborei com as mídias sociais da Empresa</li>
            </ul>
          </section>
          <section className="section-about">
            <h3>Filmmaker, Marketing</h3>
            <i>Centro de Saúde Vitrice - Carangola, MG | 2020-2021</i>
            <ul className="text-alt">
              <li>Responsável por gravar e editar videos da empresa</li>
              <li>Auxiliei na cobertura dos eventos</li>
              <li>Colaborei com o marketing do site e midias sociais</li>
            </ul>
          </section>
          <div>
            <h2 className="title-secundary">Além da Fotografia</h2>
            <div className="section-about">
              <h3>Universidade Estácio de Sá</h3>
              <i>Graduação em Marketing e Publicidade</i>
              <p className="text-alt">
                Turma 2019 - 2021
                <br />
                Média 8.5
              </p>
            </div>
            <section className="section-about">
              <h3>Colégio Futuro Vip</h3>
              <i>Ensino Médio</i>
              <p className="text-alt">
                Turma 2013 - 2015
                <br />
                Média 8
              </p>
            </section>
            <section className="section-about">
              <h3>Curso CNA Idiomas</h3>
              <i>Formação em inglês</i>
              <p className="text-alt">
                Turma 2008 - 2015
                <br />
                Atual nivel: Inglês Intermediário
              </p>
            </section>
          </div>
          <div>
            <h2 className="title-secundary">Informações Extracurriculares</h2>
            <section className="section-about">
              <h3>Bailarina - Studio Paty Dance</h3>
              <p>São Jõao de Meriti</p>
            </section>
            <section className="section-about">
              <h3>Modelo fotográfica - Well Models</h3>
              <p>Rio de Janeiro</p>
            </section>
            <section className="section-about">
              <h3>Automaquiagem - Instituto Embeleze</h3>
              <p>Workshop Presencial</p>
            </section>
            <section className="section-about">
              <h3>Makeup Academy - Renata Meins</h3>
              <p>Curso Online</p>
            </section>
            <section className="section-about">
              <h3>Visagismo - Phillp Hallawell</h3>
              <p>Palestra Online</p>
            </section>
            <section className="section-about">
              <h3>História da Arte - Aline Pascholati</h3>
              <p>Curso Online</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
