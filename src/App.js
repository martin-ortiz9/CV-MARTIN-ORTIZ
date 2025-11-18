import './App.css';
import perfil from "./assets/Ellipse 5 (2).png";

export default function App() {
  return (
    <div className="app-container">
      <div className="container-btn">
      <button className="btn-imprimir" onClick={() => window.print()}>
            🖨️ Imprimir CV
      </button>
      </div>
      <div className="cv-container">
        <div className="cv-grid">
          
          
       
          <div className="left-column">
            <div className='container-photo'>
             <img src={perfil} alt= "foto de perfil" className="photo"/>
            </div>
            <h1 className="name">Martin Felipe Ortiz Sánchez</h1>
            <p className="profile-short">
              Ingeniero Informático, proactivo y organizado, con habilidades en programación y soporte técnico.
            </p>

            <div className="card">
              <h2>Contacto</h2>
              <p>📞 322-888-4735</p>
              <p>📍 Villavicencio - Meta</p>
              <p>✉ sanchesmartinfelipe@gmail.com</p>
              <p>🔗 <a href="https://www.linkedin.com/in/martin-felipe-ortiz-sanchez-6a7595254">LinkedIn</a></p>
            </div>

            <div className="card">
              <h2>Aptitudes</h2>
              <ul>
                <li>Capacidad analítica</li>
                <li>Comunicación asertiva</li>
                <li>Orientación al detalle</li>
                <li>Adaptabilidad</li>
              </ul>
            </div>
          </div>


          <div className="right-column">
            <div className="card">
              <h2>Perfil</h2>
              <p>
                Ingeniero Informático apasionado por la innovación tecnológica y la optimización de procesos. Experto en HTML, JavaScript, Python y React, con sólida experiencia en desarrollo de software, bases de datos y soporte técnico. Proactivo, orientado a resultados y capaz de liderar proyectos colaborativos, buscando siempre generar soluciones eficientes y de alto valor para cualquier equipo o empresa.
              </p>
            </div>

            <div className="card">
              <h2>Experiencia</h2>
              <ul>
                <li><strong>02-2023 / 04-2023</strong> - Auxiliar operativo de red estructural, TELING Telecomunicaciones</li>
                <li><strong>06-2023 / 10-2023</strong> - Soporte página web, AUNAR</li>
                 <li><strong>04-2025 / 09-2025</strong> - Soporte infraestructura tecnológica, Convenio SUEJE</li>
              </ul>
            </div>

            <div className="card">
              <h2>Formación</h2>
              <ul>
                <li>2019 - 2024: Ingeniero Informático, AUNAR</li>
                <li>2011 - 2017: Bachiller Académico, Colegio Luis Carlo Galán Sarmiento</li>
              </ul>
            </div>

            <div className="card">
              <h2>Conocimientos técnicos</h2>
              <ul>
                <li>Manejo de servidores y bases de datos MySQL</li>
                <li>Cableado estructurado de red</li>
                <li>Scrum, Jira, Postman</li>
                <li>Automatización front-end con Cucumber, Serenity y Selenium</li>
                <li>Patrones de diseño con ScreenPlay</li>
              </ul>
            </div>

            <div className="card">
              <h2>Otros cursos</h2>
              <ul>
                <li>Certificación en metodología ágil Scrum - CertiProf</li>
              
              </ul>
            </div>
            <div className="card">
              <h2>Referencias</h2>
              <ul>
              
                <li>Victor Manuel Loaiza, Ingeniero Electrónico - 320 238 9562</li>
                <li>Consuelo Sánchez Valderrama, Administradora de empresas - 312 351 2126</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      
    </div>
    
  );
}

