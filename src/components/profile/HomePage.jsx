import './assets/css/fonts.css'
import './assets/logo/favicon.png'
import './assets/css/animate.css'
import './assets/css/bootsnav.css'
// import './assets/css/bootstrap.min.css'
import './assets/css/flaticon.css'
import './assets/css/font-awesome.min.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/css/owl.theme.default.min.css'
import './assets/css/responsive.css'
import './assets/css/style.css'
// import './assets/images/'
import img1 from './assets/images/about/unnamed.png'
import pdf1 from './assets/download/KhunwanaMonias_CV_2.pdf'


export default function HomePage()
{
    return(
        <div>
			<section id="welcome-hero" class="welcome-hero">
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
																<span><i class="fa fa-circle" aria-hidden="true"></i></span>
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

									

								</ul>
							</div>
						</div>
				</div>

			</section>
        </div>

		
    )
}