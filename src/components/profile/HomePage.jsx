import './assets/css/fonts.css'
import './assets/css/animate.css'
import './assets/css/bootsnav.css'
import './assets/css/bootstrap.min.css'
import './assets/css/flaticon.css'
import './assets/css/font-awesome.min.css'
// import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/responsive.css'

// import './assets/images/'
import img1 from './assets/images/about/unnamed.png'
import pdf1 from './assets/download/KhunwanaMonias_CV_2.pdf'
import imgPort from './assets/images/portfolio/p1.jpg'
import imgPort1 from './assets/images/portfolio/p2.jpg'
import imgPort3 from './assets/images/portfolio/p4.jpg'
import $ from 'jquery'


export default function HomePage()
{
	const obj = [
		{'link':'#','item':'ui/ux design1','img1':imgPort,'cardTitle':'T1','cardText':'Some quick example text to build on the card title and make up the bulk of the card'},
		{'link':'#','item':'ui/ux design','img1':imgPort1,'cardTitle':'T2','cardText':'Some quick example text to build on the card title and make up the bulk of the card'},
		{'link':'#','item':'ui/ux design','img1':imgPort3,'cardTitle':'T3','cardText':'Some quick example text to build on the card title and make up the bulk of the card'}		
	]
	
    return(
        <div>
			<section id="welcome-hero" class="welcome-hero" style={{ paddingTop : '150px' }}>
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<div class="header-text">
								<h2>hi <span>,</span> i am Monias Khunwana <span>.</span>   </h2>
								<p>Full-stack web developer</p>
								<a href={pdf1} download>download resume</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="about" class="about">
				<div class="section-heading text-center">
					<h2>about me</h2>
				</div>
				<div class="container">
					<div class="about-content">
						<div class="row">
							<div class="col-sm-6">
								<div class="single-about-txt">
									<h3>
										I am a Full-stack developer with knowledge of Java, Springboot and ReactJs Hardworking Developer offering extensive knowledge of core development matter. 
									</h3>
									<p>
									 	I am a driven and ambitious individual aspiring to excel as a software engineer.
										I firmly believe that excellence is not just an objective but a mindset cultivated
										through continuous learning and a steadfast commitment to self-improvement.
										This philosophy defines my identity and motivates me to consistently enhance
										my skills. My journey has been characterized by diverse experiences across
										various fields of study. I intentionally pursued this multidimensional approach,
										recognizing that a well-rounded individual is better equipped to navigate the
										challenges of the professional world. I have actively sought knowledge and
										exposure in areas such as electronics and the dynamic field of software
										engineering.
									</p>
									<div class="row">
										<div class="col-sm-4">
											<div class="single-about-add-info">
												<h3>phone</h3>
												<p>(+27)81 765 0044</p>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="single-about-add-info">
												<h3>email</h3>
												<p>khunwana.monias@gmail.com</p>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="single-about-add-info">
												<h3>website</h3>
												<p>www.Khunwanaweb.com</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-offset-1 col-sm-5">
								<div class="single-about-img">
									
									<img src={img1} className='img1' alt=""/>
									<div class="about-list-icon">
										<ul>
											<li>
												<a href="#">
													<i  class="fa fa-facebook" aria-hidden="true"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i  class="fa fa-dribbble" aria-hidden="true"></i>
												</a>
												
											</li>
											<li>
												<a href="#">
													<i  class="fa fa-twitter" aria-hidden="true"></i>
												</a>
												
											</li>
											<li>
												<a href="#">
													<i  class="fa fa-linkedin" aria-hidden="true"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i  class="fa fa-instagram" aria-hidden="true"></i>
												</a>
											</li>
											
											
										</ul>
									</div>

								</div>

							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section id="education" class="education">
				<div class="section-heading text-center">
					<h2>education & experience</h2>
				</div>
				<div class="container">
					<div class="education-horizontal-timeline">
						<div class="row">
						<div class="col-sm-4">
								<div class="single-horizontal-timeline">
									<div class="experience-time">
										<h2>2009 - 2013</h2>
										<h3>Matric Certificate in Science </h3>
									</div>
									<div class="timeline-horizontal-border">
										<i class="fa fa-circle" aria-hidden="true"></i>
										<span class="single-timeline-horizontal"></span>
									</div>
									<div class="timeline">
										<div class="timeline-content">
											<h4 class="title">
												Mandisa Shiceka High School
											</h4>
											<h5>Krugersdorp, RSA</h5>
											<p class="description">
												Matriculated High School
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="single-horizontal-timeline">
									<div class="experience-time">
										<h2>2015 - 2020</h2>
										<h3>Computer System Engineering</h3>
									</div>
									<div class="timeline-horizontal-border">
										<i class="fa fa-circle" aria-hidden="true"></i>
										<span class="single-timeline-horizontal"></span>
									</div>
									<div class="timeline">
										<div class="timeline-content">
											<h4 class="title">
												Tshwane University Of Technology
											</h4>
											<h5>Pretoria, RSA</h5>
											<p class="description">
												Gained skills in both Hardware and Software based technologies from Assembly, C, PLC(Ladder logic) to C++, Php, JavaScript including tools from Raspberry Pi,Arduino to web development.
											</p>
										</div>
									</div>
								</div>
							</div>
							
							<div class="col-sm-4">
								<div class="single-horizontal-timeline">
									<div class="experience-time">
										<h2>2021 - 2023</h2>
										<h3>NQF Level 5 : Software Development</h3>
									</div>
									<div class="timeline-horizontal-border">
										<i class="fa fa-circle" aria-hidden="true"></i>
										<span class="single-timeline-horizontal spacial-horizontal-line
										"></span>
									</div>
									<div class="timeline">
										<div class="timeline-content">
											<h4 class="title">
												WeThinkCode_
											</h4>
											<h5>Durban, RSA</h5>
											<p class="description">
												Acquired and honed skills in Software development using Python and Java amongst others and the use of git,gitlab and github including honing skills in communication,team work and mentoring.  
											</p>
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
	
			</section>

			
			<section id="experience" class="experience">
				<div class="section-heading text-center">
					<h2>experience</h2>
				</div>
				<div class="container">
					<div class="experience-content">
							<div class="main-timeline">
								<ul>
									<li>
										<div class="single-timeline-box fix">
											<div class="row">
												<div class="col-md-5">
													<div class="experience-time text-right">
														<h2>Jul 2023 - Feb 2024</h2>
														<h3>Johannesburg,Sandton</h3>
													</div>
												</div>
												<div class="col-md-offset-1 col-md-5">
													<div class="timeline">
														<div class="timeline-content">
															<h4 class="title">
																{/* <span><i class="fa fa-circle" aria-hidden="true"></i></span> */}
																GK Africa
															</h4>
															<h5>Gauteng, RSA</h5>
															<p class="description">
																Interned as a software developer at GK software which introduced me
																to troubleshooting and debugging code to identify and fix issues.
																I had the opportunity to apply and enhance programming skills in real
															world projects.
																I have developed critical thinking skills to analyse problems and
																propose effective solutions.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li>
									<div class="single-timeline-box fix">
										<div class="row">
											<div class="col-md-offset-1 col-md-5 experience-time-responsive">
												<div class="experience-time">
													<h2>
														{/* <span><i class="fa fa-circle" aria-hidden="true"></i></span> */}
														Sep 2020 - Feb 2021
													</h2>
													<h3>Electronic Assembler</h3>
												</div>
											</div>
											<div class="col-md-5">
												<div class="timeline">
													<div class="timeline-content text-right">
														<h4 class="title">
															E-Bitz Solution and Engineering 
														</h4>
														<h5>Centurion, RSA</h5>
														<p class="description">
															Work as a electronic assembler at E-Bitz Electronic Engineering Solution where I assembled, tested and packaged full raptors which their primary use is to inform maitainers of network towers of the state of different equipments using IOT which are installed in various parts of the country
														</p>
													</div>
												</div>
											</div>
											<div class="col-md-offset-1 col-md-5 experience-time-main">
												<div class="experience-time">
													<h2>
														{/* <span><i class="fa fa-circle" aria-hidden="true"></i></span> */}
														Sep 2021 - March 2022
													</h2>
													<h3>associate design director</h3>
												</div>
											</div>
										</div>
									</div>
								</li>

									

								</ul>
							</div>
						</div>
				</div>

			</section>

			<section id="skills" class="skills">
				<div class="skill-content">
					<div class="section-heading text-center">
						<h2>skills</h2>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<div class="single-skill-content">
									<div class="barWrapper">
										<span class="progressText">Java</span>
										<div class="single-progress-txt">
											<div class="progress ">
												<div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
													  
												</div>
											</div>
											{/* <h3>72%</h3>	 */}
										</div>
									</div>
									<div class="barWrapper">
										<span class="progressText">Springboot</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100" >
												    
											   </div>
											</div>
											{/* <h3>70%</h3>	 */}
										</div>
									</div>
									<div class="barWrapper">
										<span class="progressText">JavaScript</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="97" aria-valuemin="10" aria-valuemax="100" >
												   
											   </div>
											</div>
											{/* <h3>97%</h3>	 */}
										</div>
									</div>
									<div class="barWrapper">
										<span class="progressText">ReactJs</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
												    
											   </div>
											</div>
											{/* <h3>90%</h3>	 */}
										</div>
									</div>
									<div class="barWrapper">
										<span class="progressText">SQL</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
												    
											   </div>
											</div>
											{/* <h3>90%</h3>	 */}
										</div>
									</div>
									<div class="barWrapper">
										<span class="progressText">MySql</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
												    
											   </div>
											</div>
											{/* <h3>90%</h3>	 */}
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="single-skill-content">
									<div class="barWrapper">
										<span class="progressText">html 5</span>
										<div class="single-progress-txt">
											<div class="progress ">
												<div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
													
												</div>
											</div>
											{/* <h3>90%</h3>	 */}
										</div>
									</div>
									<div class="barWrapper">
										<span class="progressText">css</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100" >
												    
											   </div>
											</div>
											{/* <h3>85%</h3>	 */}
										</div>
									</div>
									<div class="barWrapper">
										<span class="progressText">communication</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="97" aria-valuemin="10" aria-valuemax="100" >
												   
											   </div>
											</div>
											{/* <h3>97%</h3>	 */}
										</div>
									</div>
									<div class="barWrapper">
										<span class="progressText"> creativity</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
												    
											   </div>
											</div>
											{/* <h3>90%</h3>	 */}
										</div>
									</div>
									<div class="barWrapper">
										<span class="progressText"> Team work</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
												    
											   </div>
											</div>
											{/* <h3>90%</h3>	 */}
										</div>
									</div>
									{/* <div class="barWrapper">
										<span class="progressText"> creativity</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
												    
											   </div>
											</div>
											<h3>90%</h3>	
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>			
				</div>

			</section>

			
		<section id="contact" class="contact">
			<div class="section-heading text-center">
				<h2>contact me</h2>
			</div>
			<div class="container">
				<div class="contact-content">
					<div class="row">
						<div class="col-md-offset-1 col-md-5 col-sm-6">
							<div class="single-contact-box">
								<div class="contact-form">
									<form>
										<div class="row">
											<div class="col-sm-6 col-xs-12">
												<div class="form-group">
												  <input type="text" class="form-control" id="name" placeholder="Name*" name="name" />
												</div>
											</div>
											<div class="col-sm-6 col-xs-12">
												<div class="form-group">
													<input type="email" class="form-control" id="email" placeholder="Email*" name="email" />
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-sm-12">
												<div class="form-group">
													<input type="text" class="form-control" id="subject" placeholder="Subject" name="subject" />
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-sm-12">
												<div class="form-group">
													<textarea class="form-control" rows="8" id="comment" placeholder="Message" ></textarea>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-sm-12">
												<div class="single-contact-btn">
													<a class="contact-btn" href="#" role="button">submit</a>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="col-md-offset-1 col-md-5 col-sm-6">
							<div class="single-contact-box">
								<div class="contact-adress">
									<div class="contact-add-head">
										<h3>Khunwana MN</h3>
										<p>FULL STACK DEVELOPER</p>
									</div>
									<div class="contact-add-info">
										<div class="single-contact-add-info">
											<h3>phone</h3>
											<p>081-765-0044</p>
										</div>
										<div class="single-contact-add-info">
											<h3>email</h3>
											<p>khunwana.monias@gmail.com</p>
										</div>
										<div class="single-contact-add-info">
										
									<ul>
										<li><a href="https://www.facebook.com/monias.khunwana/"><i class="fa fa-facebook"></i></a></li>
										<li><a href="https://github.com/Khunwana"><i class="fa fa-dribbble"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="https://www.linkedin.com/in/monias-khunwana-a253861b5/"><i class="fa fa-linkedin"></i></a></li>
										<li><a href="https://www.instagram.com/_monias_k/"><i class="fa fa-instagram"></i></a></li>
									</ul>
								
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>

		<section>

		<footer id="footer-copyright" class="footer-copyright">
			<div class="container">
				<div class="hm-footer-copyright text-center">
					<p>
						&copy; copyright yourname. design and developed by <a href="https://www.themesine.com/">themesine</a>
					</p>
				</div>
			</div>

			<div id="scroll-Top">
				<div class="return-to-top">
					<i class="fa fa-angle-up " id="scroll-top" ></i>
				</div>
				
			</div>
			
        </footer>
		</section>

			
			{/* <section id="portfolio" class="portfolio">
				<div class="portfolio-details">
					<div class="section-heading text-center">
						<h2>portfolio</h2>
					</div>
					<div class="container">
						<div class="portfolio-content">
							<div class="isotope">
								<div class="row">
									{
										obj.map((d) => (
											<div class="col-sm-4">
												<div class="card" >
													<img class="card-img-top" src={d.img1} alt="Card image cap"/>
													<div class="card-body">
														<h5 class="card-title">{d.cardTitle}</h5>
														<p class="card-text">{d.cardText}</p>
														<a href={d.link} class="btn btn-primary">Go somewhere</a>
													</div>
												</div>
											</div>
										))
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		

			<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
			{/* <!-- jquery.sticky.js --> */}
			<script src='./assets/js/jquery.sticky.js'/>
			
			{/* <!-- for progress bar start--> */}

			{/* <!-- progressbar js --> */}
			<script src='./assets/js/progressbar.js'></script>

			{/* <!-- appear js --> */}
			<script src='./assets/js/jquery.appear.js'></script>

			{/* <!-- for progress bar end -->

			<!--owl.carousel.js--> */}
			<script src='./assets/js/owl.carousel.min.js'></script>


			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
			{/* <!--Custom JS--> */}
        	<script src='./assets/js/custom.js'></script>
		</div>

		
    )
}