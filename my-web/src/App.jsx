import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

function App() {


  return (

  
    <>

{/* <!--------------------- Intro --------------------------------------------------------------> */}
<header>
<Navbar/>
</header>

<section className='b-container m-auto'>

<div class= "h1 text-center">
	<h1>
	<span class="font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent box-decoration-clone">Ing. Orlando Mata Monge</span>
	</h1>
	<h1>
	<span class="font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent box-decoration-clone">Ingeniero Químico</span>
	</h1>
	<h1>
	<span class="font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent box-decoration-clone">Máster en Energía y Sostenibilidad</span>
	</h1>
	<div class='text-primary-600 font-semibold text-center grid grid-cols-3 p-4 m-2 text-2xl'>
		<div class='flex justify-center items-center'>
		<svg class="w-6 h-6 text-primary-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
		<path fill-rule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"/>
		</svg>		  
		Madrid, 28009</div>
		<div class='flex justify-center items-center'>
			<svg class="w-6 h-6 text-primary-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
			<path d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z"/>
			<path d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z"/>
			</svg>			
			<a href="mailto:orl1289@gmail.com">orl1289@gmail.com</a></div>
			<div class='flex justify-center items-center'>
				<svg class="w-6 h-6 text-primary-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
					<path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z"/>
				  </svg>	  
				+34 692 536587</div>
	</div>
</div>


{/* --------------------- Education --------------------------------------------------------------> */}


<div class='text-primary-600 text-center p-4 m-2'>

	<div class='flex justify-center items-center'>
		<svg class="w-7 h-7 text-primary-600 mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
		<path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2c.6 0 1-.4 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
		</svg>
		<h1 class= 'font-bold text-4xl '>Formación Académica</h1>
	</div>

		<h2 class='text-2xl p-4 font-semibold list-item list-inside'>Universidad de Vigo
		<p class='italic'> Máster en Energía y Sostenibilidad (2023)</p>
		</h2>
		 <h2 class='text-2xl p-4 font-semibold list-item list-inside'>Universidad de Costa Rica
		 <p class='italic'> Licenciatura en Ingeniería Química (2019)</p>
		</h2>

</div>
	

{/* <!--------------------- Experience --------------------------------------------------------------> */}
<div class='text-primary-600 text-center p-4 m-2'>

	<div class='flex justify-center items-center'>
		<svg class="w-7 h-7 text-primary-600 mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
			<path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clip-rule="evenodd"/>
		</svg>
		<h1 class= 'font-bold text-4xl '>Experiencia Profesional</h1>
	</div>
	
{/* <!-- Edit Experience  --> */}
	
		<h2 class='font-semibold text-2xl '> Ingeniero Interno en Voltfer 
		<i>- (Vigo, España) - Abril 2023 a Mayo 2023</i>
		</h2>
	
		<div class=' p-1 text-xl text-justify ml-20 mr-20'>
		<p class='list-item list-inside'>
		Participé en tareas relacionadas con el diseño de sistemas fotovoltaicos para autoconsumo doméstico e industrial, como parte de la práctica profesional.
		</p>
		<p class='list-item list-inside'>
		Brindé apoyo al área comercial	recopilando información a través de una prospección de potenciales clientes en polígonos comerciales de la zonas de Pontevedra, y alrededores.
		</p>
		</div>
</div>
	{/* <!-- #1 --> */}
	<div class='text-primary-600 text-center p-4 m-2'>
	<h2 class='font-semibold text-2xl '> Team Manager, Data Management en Amazon
		<i>- (San José, Costa Rica) - Agosto 2021 a Agosto 2022</i></h2>
			  
		<div class='p-1 text-xl text-justify ml-20 mr-20'>
		<p class='list-item list-inside'>
		Reporté directamente a la oficina corporativa ubicada en diferente geografía y zona horaria, en un entorno multicultural.</p>	
		<p class='list-item list-inside'>
		Lideré de un equipo remoto conformado por 8 personas con más de 70 procesos en el catálogo, para los mercados de EMEA y LATAM.</p>
		<p class='list-item list-inside'>
		Determiné indicadores de desempeño (KPI's), objetivos, estrategias y metas de alto nivel para el negocio operativo.</p>
		<p class='list-item list-inside'>
		Presenté informes de datos quincenales a la alta dirección para la revisión de métricas de desempeño del equipo y otros puntos clave.
		</p>
		<p class='list-item list-inside'>
		Gestioné proyectos relacionados con la recepción o migración de procesos, basados en el catálogo de servicios en alcance.
		</p>
		<p class='list-item list-inside'>
		Preparé las evaluaciones de desempeño y las revisiones de talento del equipo anuales, con base en los hallazgos del análisis mensual, retroalimentación y oportunidades de mejora.
		</p>
		<p class='list-item list-inside'>
		Creé e implementé mecanismos para anticipar las necesidades de demanda y asegurar la disponibilidad de personal.
		</p>
		<p class='list-item list-inside'>
		Recluté y supervisé nuevos miembros del equipo en áreas de conocimiento de producto y servicio al cliente.
		</p>
		<p class='list-item list-inside'>
		Enseñé y ayudé a desarrollar el potencial de miembros del equipo, delegando asignaciones y proyectos acorde con sus habilidades e intereses.
		</p>
		<p class='list-item list-inside'>
		Anticipé la implementación exitosa de herramientas, información y recursos para el equipo.
		</p>
		<p class='list-item list-inside'>
		Desarrollé oportunidades efectivas de redes profesionales participando en foros/proyectos según correspondía, y asistí a reuniones regulares de miembros profesionales con la gerencia de nivel superior.
		</p>

		</div>
	</div>
	{/* <!-- #2 --> */}
	<div class='text-primary-600 text-center p-4 m-2'>
		<h2 class='font-semibold text-2xl '> Process Lead, Data Management en Amazon
			<i>- (San José, Costa Rica) - Octubre 2020 a Julio 2021</i></h2>
				  
			<div class='p-1 text-xl text-justify ml-20 mr-20'>
			<p class='list-item list-inside'>
			Promovido de Sr. Associate al ofrecer un alto rendimiento procesando un gran volumen de transacciones, y el fomento de la colaboración en el equipo.
      </p>
			<p class='list-item list-inside'>
			Garanticé la óptima utilización del personal a diario al asignar las tareas eficientemente con base en su disponibilidad y experiencia.
			</p>
			<p class='list-item list-inside'>
			Realicé el monitoreo diario asegurando el cumplimiento de las métricas diarias (SLA y otros KPI) a través de varias herramientas de visualización.
			</p>
			<p class='list-item list-inside'>
			Coordiné las propuestas de mejora continua de los procesos bajo sólidas políticas y procedimientos de gestión de datos.
			</p>
			<p class='list-item list-inside'>
			Satisfice las necesidades de acceso a la información y generación de reportes mediante el diseño de consultas simples y complejas en la aplicación.			
			</p>
			<p class='list-item list-inside'>
			Supervisé la revisión de defectos, casos difíciles y escalaciones acorde con la escala de impacto de severidad para cumplir con los requisitos del cliente
			</p>
			<p class='list-item list-inside'>
			Ejercí el rol de punto de contacto interno y externo para las acciones del equipo relacionadas con los procedimientos de operación estándar.
			</p>
			<p class='list-item list-inside'>
			Establecí los medios efectivos para la actualización de los Procedimientos Operativos Estándar y prioricé la formación sobre los nuevos cambios.	
			</p>
			<p class='list-item list-inside'>
			Configuré y evalué nuestras herramientas y soluciones de proceso antes de su implementación.
			</p>
			<p class='list-item list-inside'>
			Redacté respuestas a reclamos durante y después de cualquier proyecto de adquisición o migración.
			</p>
		</div>		
	</div>	
	{/* <!-- #3 --> */}

	<div class='text-primary-600 text-center p-4 m-2'>
			<h2 class='font-semibold text-2xl '> Sr. Associate, Data Management en Amazon
				<i>- (San José, Costa Rica) - Septiembre 2017 a Septiembre 2020</i></h2>
					  
		<div class='p-1 text-xl text-justify ml-20 mr-20'>
				<p class='list-item list-inside'>
				Aseguré un servicio al cliente de alta calidad proporcionando una resolución oportuna, gestionando la comunicación e interacción a través del sistema de tickets.
				</p>
				<p class='list-item list-inside'>
				Gestioné y optimicé procesos transaccionales dentro de PS Oracle (RDBMS), garantizando la precisión de los datos, la integridad y el cumplimiento de los estándares organizativos y requisitos regulatorios.	
				</p>
				<p class='list-item list-inside'>
				Colaboré de manera interfuncional con colegas para identificar requisitos, optimizar flujos de trabajo y procesos.
				</p>
				<p class='list-item list-inside'>
				Demostré un fuerte compromiso con el crecimiento personal y profesional buscando activamente oportunidades para aprender y asumir nuevas responsabilidades a medida que surgían.
				</p>

		</div>
	</div>
	{/* <!-- #4 --> */}
	<div class='text-primary-600 text-center p-4 m-2'>
		<h2 class='font-semibold text-2xl '>Asistente de Laboratorio de Química – Universidad de Costa Rica
			<i>- (San José, Costa Rica) - Agosto 2015 a Marzo 2017</i></h2>
				  
	<div class='p-1 text-xl text-justify ml-20 mr-20'>
			<p class='list-item list-inside'>
			Preparé y impartí conferencias a los estudiantes, proporcionando tanto conocimientos teóricos como demostraciones prácticas para mejorar la comprensión de acuerdo con el programa del curso.
			</p>
			<p class='list-item list-inside'>
			Supervisé las sesiones de laboratorio asegurando el cumplimiento de los protocolos de seguridad y el manejo adecuado de equipos y materiales.	
			</p>
			<p class='list-item list-inside'>
			Brindé asistencia individual durante las sesiones de laboratorio, ofreciendo orientación y apoyo para mejorar su experiencia de aprendizaje.
			</p>
			<p class='list-item list-inside'>
			Colaboré con miembros del cuerpo docente para asignar pruebas y calificarlas, y medir el progreso general y la comprensión del estudiante.
			</p>

	</div>
	</div>
	{/* <!-- #5 --> */}
	<div class='text-primary-600 text-center p-4 m-2'>
		<h2 class='text-primary-600 font-semibold text-2xl'>Coordinación Talleres sobre Potabilidad y Tratamiento del agua – Universidad de Costa Rica
			<i>- (San José, Costa Rica) - Agosto 2014 a Noviembre 2015</i></h2>
				  
	<div class='p-1 text-xl text-justify ml-20 mr-20'>
			<p class='list-item list-inside'>
			Impartí capacitaciones sobre contaminación microbiana y el incumplimiento de la normativa nacional en acueducto y alcantarillado sanitarios; análisis químico del agua y sus resultados.
			</p>
			<p class='list-item list-inside'>
			Evalué la calidad del agua potable en términos de parámetros químicos como DQO, dureza y presencia de nitrato y fosfato de varias localidades, para asegurar el cumplimiento de las normativas.
			</p>


	</div>
	</div>

{/* <!----------------------Languages---------------------------------------------------------------------- --> */}

<div class='text-primary-600 text-center p-4 m-2'>
	<div class='flex justify-center items-center'>
		<svg class="w-7 h-7 text-primary-600 mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
		<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.4 7.7c2 .5 2.4 2.8 3.2 3.8 1 1.4 2 1.3 3.2 2.7 1.8 2.3 1.3 5.7 1.3 6.7M20 15h-1a4 4 0 0 0-4 4v1M8.6 4c0 .8.1 1.9 1.5 2.6 1.4.7 3 .3 3 2.3 0 .3 0 2 1.9 2 2 0 2-1.7 2-2 0-.6.5-.9 1.2-.9H20m1 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
		</svg> 
		<h1 class= 'font-bold p-1 text-4xl '>Idiomas</h1>
	</div>
	<div class='text-primary-600 text-center text-2xl p-4'>
		<h2 class='h3 p-1 font-semibold list-item list-inside'> Español
		<i class='italic'> (Nativo)</i></h2>
		<h2 class='h3 p-1 font-semibold list-item list-inside'> Inglés
		<i class='italic'> (Profesional)</i></h2>
		<h2 class='h3 p-1 font-semibold list-item list-inside'> Francés
		<i class='italic'> (Fluido)</i></h2>
	</div>
</div>


{/* <!-------------------------------Certifications------------------------------------------------------------- --> */}

<div class='text-primary-600 text-center p-4 m-2'>
	<div class='flex justify-center items-center'>
		<svg class="w-7 h-7 text-primary-600 mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
			<path fill-rule="evenodd" d="M7 4a7 7 0 0 1 12 5c0 2.4-1.2 3.9-2.2 5v.1c-1 1.3-1.8 2.2-1.8 3.9 0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1c0-1.6-.8-2.6-1.8-3.9C6.2 12.8 5 11.4 5 9a7 7 0 0 1 2-5Zm2 17c0-.6.4-1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.6-13.4A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0c0-.5.2-1 .6-1.4Z" clip-rule="evenodd"/>
		  </svg> 
		<h1 class= 'font-bold p-1 text-4xl '>Cursos y Certificaciones</h1>
	</div>
	<div class='text-primary-600 text-centertext-2xl p-4'>
		<h2 class='text-2xl p-1 font-semibold list-item list-inside'> Alianza Francesa de Costa Rica
			<p class='italic'> DELF Niveau B1 (2012)</p></h2>
	</div>
</div>

{/* <!-------------------------------Congress------------------------------------------------------------- --> */}
<div class='text-primary-600 text-center p-4 m-2'>
	<div class='flex justify-center items-center'>
		<svg class="w-7 h-7 text-primary-600 mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
			<path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z"/>
		</svg> 
		<h1 class= 'font-bold p-1 text-4xl '>Congresos</h1>
	</div>
	<div class='text-primary-600 text-centertext-2xl p-4'>
		<h2 class='text-2xl p-1 font-semibold list-item list-inside'>XXIV Congreso Latinoamericano de Estudiantes de Ingeniería Química y Carreras Afines
			<p class='italic'> Universidad Tecnológica Nacional (Buenos Aires, Argentina) - 2018</p>
		   </h2>
	</div>
</div>



{/* <!--------------------- Skills --------------------------------------------------------------> */}

<div class='text-primary-600 text-center p-4 m-2'>
	<div class='flex justify-center items-center p-1'>
		<svg class="w-7 h-7 text-primary-600 mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
			<path fill-rule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-1 9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm2-5c.6 0 1 .4 1 1v6a1 1 0 1 1-2 0v-6c0-.6.4-1 1-1Zm4 4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z" clip-rule="evenodd"/>
		</svg>
		<h1 class= 'font-bold text-4xl '>Habilidades</h1>
	</div>

	<div class='grid grid-cols-3 p-2 m-2 text-2xl'>		
		<div>Resolución de problemas</div>
		<div>Pensador analítico</div>
		<div>Resolución colaborativa</div>
		<div>Trabajo en equipo</div>
		<div>Enfocado al cliente</div>
		<div>Automotivado</div>
		<div>Planificador y conceptualizador</div>
		<div>Autonomo y proactivo</div>
		<div>Comunicación oral y escrita efectiva</div>
		<div>Atento a los detalles</div>
		<div>Escucha activa</div>
		<div>Ajustado al 'deadline'</div>
		<div>Adaptable</div>
		<div>Orientado al proceso</div>
		<div>Emprendedor</div>
		<div>Orientado al aprendizaje</div>
		<div>Redacción de memorias técnicas</div>
		<div>Habituado a trabajar en un entorno multicultural</div>
		<div>Extracción de datos y creación de reportes</div>
		<div>Herramientas de visualización de datos</div>
	
	</div>
</div>
		
{/* <!---------------------Knowledge --------------------------------------------------------------> */}

<div class='text-primary-600 text-center p-4 m-2'>
	<div class='flex justify-center items-center'>
		<svg class="w-7 h-7 text-primary-600 mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
			<path d="M11 21V2.4a3.5 3.5 0 0 0-4.8 1.8A3.5 3.5 0 0 0 4 8l-.7 1.1-.1.4-.1.3a3.5 3.5 0 0 0 0 1.5A3.9 3.9 0 0 0 2 14v.9l.2.6a3.8 3.8 0 0 0 1 1.4 4 4 0 0 0 .6.5v.1A3.5 3.5 0 0 0 7 21a3.4 3.4 0 0 0 4.2.5 1 1 0 0 1-.2-.5Zm11-7.7v-.1a4 4 0 0 0-1-2 3.4 3.4 0 0 0-.2-1.7V9c-.3-.4-.5-.8-.8-1a3.4 3.4 0 0 0-.6-2.6 4 4 0 0 0-1.6-1.3A3.5 3.5 0 0 0 13 2.4V21c0 .2 0 .4-.2.5A3.4 3.4 0 0 0 17 21a3.5 3.5 0 0 0 3-3.5 5.4 5.4 0 0 0 .7-.5 4.2 4.2 0 0 0 .7-.9l.3-.5.2-.7v-.2a4 4 0 0 0 0-1.4Z"/>
		  </svg>		  
		<h1 class= 'font-bold text-4xl p-1'>Conocimientos</h1>
	</div>
	<h3 class="font-bold text-2xl p-2"> Software</h3>
	<div class='grid grid-cols-3 p-2 m-2 text-2xl'>
			<div>Microsoft Word</div>
			<div>Microsoft Excel</div>
			<div>Microsoft Office Power Point</div>
			<div>Autocad (Intermedio)</div>
			<div>Minitab (Intermedio)</div>
			<div>PowerBi (Intermedio)</div>
			<div>Matlab</div>
			<div>Oracle People Soft</div>
			<div>Salesforce CRM</div>
			<div>OnBase ECM</div>
			<div>Alteryx</div>
			<div>Unisim</div>
			<div>Chemcad</div>
			<div>Dialux</div>
			<div>PVSol</div>
			<div>PVGis</div>
			<div>CEX</div>
			<div>HULC</div>
			<div>Cypetherm</div>
			<div>Servicios en la nube</div>
			<div>Amazon Chime</div>
			<div>AWS Cloud Practitioner</div>
			<div>Amazon QuickSight</div>
	</div>
	<h3 class='font-bold text-2xl p-2'> Lenguajes de programación</h3>
	<div class='grid grid-cols-3 p-2 m-2 text-2xl'>
			<div>SQL (PostgreSQL)</div>
			<div>Python</div>
			<div>Python Libraries: Pandas,Numpy, Matplotlib</div>
	</div>
	<h3 class='font-bold text-2xl p-2'>Web development</h3>
	<div class='grid grid-cols-3 p-2 m-2 text-2xl'>
		<div>CSS</div>
		<div>HTML</div>
		<div>Frameworks: Svelte</div>
	</div>
	<h3 class='font-bold text-2xl p-2'> Marco Legislativo</h3>
	<div class='grid grid-cols-3 p-2 m-2 text-2xl'>
			<div>Documento Básico para el Ahorro de Energía</div>
			<div>Código Técnico de la Edificación</div>
			<div>El Plan Nacional Integrado de Energía y Clima 2021-2030 (PNIEC)</div>
	</div>
	
</div>
{/* <!---------------------Professional interest --------------------------------------------------------------> */}

<div class='text-primary-600 text-center p-4 m-2'>
	<div class='flex justify-center items-center'>
			<svg class="w-7 h-7 text-primary-600 mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
				<path fill-rule="evenodd" d="M7 4a7 7 0 0 1 12 5c0 2.4-1.2 3.9-2.2 5v.1c-1 1.3-1.8 2.2-1.8 3.9 0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1c0-1.6-.8-2.6-1.8-3.9C6.2 12.8 5 11.4 5 9a7 7 0 0 1 2-5Zm2 17c0-.6.4-1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.6-13.4A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0c0-.5.2-1 .6-1.4Z" clip-rule="evenodd"/>
			</svg>
			<h1 class= 'font-bold text-4xl p-4 '>Áreas de interés profesional</h1>
	</div>
	<div>
		<div class='grid grid-cols-3 p-2 m-2 text-2xl'>
		<div>Documento Básico para el Ahorro de Energía</div>
		<div>Código Técnico de la Edificación</div>
		<div>El Plan Nacional Integrado de Energía y Clima 2021-2030 (PNIEC)</div>
	</div>
	</div>
</div>

{/* <!---------------------Insert animation --------------------------------------------------------------> */}

</section>	

<footer>
<Footer/>	
</footer>
    </>
  )
}

export default App
