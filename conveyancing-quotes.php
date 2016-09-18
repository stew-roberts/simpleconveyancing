<?php
    $apiKey = '76261671-11f4-47e1-be77-3e5d461886b';
    $locality = str_replace("-", " ", $_GET['location']);
    $pageData = json_decode(file_get_contents('http://contentmanagement.streamwiredigital.com/index.php/api/format/json/apikey/' . $apiKey ));

?>
<!DOCTYPE html>
<html lang="en">

<head>
	<!-- META KEYS -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Simple Conveyancing Quotes in <?php echo $locality ?>: Simple Low Cost Conveyancing in <?php echo $locality ?>: Compare Quotes from Solicitors and Conveyancers in <?php echo $locality ?></title>
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
	<link href="/assets/css/style.css" rel="stylesheet">
	<link href="/assets/css/responsive.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
	<link rel="icon" type="image/png" href="/favicon.ico">
	<!--[if lt IE 9]>
        <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
</head>

<body class="page testimonial-page-1">

	<!-- PreLoader -->
	<div class="preloader">
		<div class="spinner">
			<div class="double-bounce1"></div>
			<div class="double-bounce2"></div>
		</div>
	</div>
	<!-- /.End Of PreLoader -->

	<!-- Main wrapper -->
	<div id="main-wrapper" class="fullFluide page-bg-07">


		<!-- Welcome Area Five -->
		<div class="homeFive positionRelative fullFluide" style="display:">
			<header id="header-areaFive" class="positionAbsolute">
				<div class="container positionRelative">
					<div class="search-box-big fix">
						<div class="row">
							<div class="col-sm-1 col-xs-2 text-center">
								<span class="search-close"><i class="fa fa-times" aria-hidden="true"></i></span>
							</div>
							<div class="col-sm-11 col-xs-10">
								<div class="search-boxs fix">
									<form action="#">
										<input type="text" name="s" placeholder="Search here...">
										<input type="submit" value="Search">
									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-9">
							<div class="header-left">
								<div class="logo padding-20">
									<a href="/index.php"><img src="/assets/img/logo-white-sm.png" alt=""></a>
								</div>
								<nav class="navigtation nav">
									<div class="navbar-header">
										<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-5" aria-expanded="false">
											<span class="sr-only">Toggle navigation</span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
										</button>
									</div>
									<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-5">
										<ul class="nav navbar-nav">
                                            <?php
                                                foreach ($pageData as $nav) {
                                                    if (!$nav->hideFromMenu) {
                                                        echo '<li><a href="/index.php#' . $nav->id . '">' . $nav->title . '</a></li>';
                                                    }
                                                }
                                            ?>						    
										</ul>
									</div>
								</nav>
							</div>
						</div>
						<div class="col-sm-3 hidden-xs">
							<div class="header-right padding-44">
								<!-- Social Icons -->
							</div>
						</div>
					</div>
				</div>
			</header>
			<!-- /.Header area end -->

			<!-- Page Title Section -->
			<section class="page-title-section page-title-overlay container">
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<h1>SIMPLE CONVEYACING</h1>
                            <p>Residential Conveyancing Quotes, Simple, Cheap and Easy</p>
						</div>
					</div>
				</div>
			</section>
			<!-- /.End Of Page Title Section -->

		</div>
		<!-- /.End Of Welcome Area Five -->

	</div>


    <section id="localquotes" class="container clearfix">
        <h2>Simple Conveyancing Quote in <?php echo $locality ?></h2>
        <p>You're looking for local simple conveyancing quotes? Here are Licensed Conveyancers and conveyancing solicitors in <?php echo $locality ?>. Using our online conveyancing quotes comparison service, you can find low cost, cheap, quality online conveyancing quotes from SRA regulated solicitors and CLC regulated licensed conveyancers in the <?php echo $locality ?> area.</p>
        <p>Compare Simple Conveyancing Quotes Online for Solicitors in <?php echo $locality ?></p>
        <p>Using the simple conveyancing comparison tool below, you can compare and instruct different solicitors and conveyancers in <?php echo $locality ?>.</p>
        <div id="conveyancing-quotes">&nbsp;</div>
        <script type="text/javascript">// <![CDATA[
                var tcnconfig = {
                license: '5401A685-AC71-49AD-B9511F2FC3982B59', /* This is where you put your unique license key */
                container: 'conveyancing-quotes' /* This is the unique id of your container */
                };
                (function() { var tcnjs = document.createElement('script'); tcnjs.type = 'text/javascript'; tcnjs.async = true;
                tcnjs.src = 'https://conveyancing.acquir-e.com/engine.min.js?' + Math.random();
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tcnjs, s);
                })();
        // ]]>
        </script>
    </section>

	<!-- CTA section - 4 -->
	<section class="cta-section section-padding cta-flat  cta-overlay img-bg img-bg-02">
		<div class="container">
			<div class="row">
				<div class="col-md-offset-2 col-md-8">
					<h2 class="cta-text">Ready to get a Quote?</h2>
					<p>Click the button below to get a Quote </p>
					<a href="#localquotes" class="cta-btn">Get a Quote</a>
				</div>
			</div>
		</div>
	</section>
	<!-- /.End Of CTA section - 4 -->


	<!-- Footer Section - 5 -->
	<footer class="footer-section white-footer">

		<div class="footer-top section-padding">
			<div class="container">
				<div class="row">
					<!-- Single Widget -->
					<div class="col-md-4">
						<div class="sin-widget">
							<h3 class="widget-title">Local Conveyancing</h3>
                            <ul>
                                <li>
                                	<a href="/conveyancing/location/London">Conveyancing in London</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Manchester">Conveyancing in Manchester</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Newcastle-Upon-Tyne">Conveyancing in Newcastle Upon Tyne</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Bristol">Conveyancing in Bristol</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Cardiff">Conveyancing in Cardiff</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Leeds">Conveyancing in Leeds</a>
                                </li>
                            </ul>
						</div>
					</div>
					<!-- /.End Of Single Widget -->

					<!-- Single Widget -->
					<div class="col-md-4">
						<div class="sin-widget">
							<h3 class="widget-title">National Conveyancing</h3>
                            <ul>
                                <li>
                                	<a href="/conveyancing/location/Sheffield">Conveyancing in Sheffield</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Nottingham">Conveyancing in Nottingham</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Blackpool">Conveyancing in Blackpool</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Preston">Conveyancing in Preston</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Birmingham">Conveyancing in Birmingham</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Northampton">Conveyancing in Northampton</a>
                                </li>
                            </ul>
						</div>
					</div>
					<!-- /.End Of Single Widget -->

					<!-- Single Widget -->
                    <div class="col-md-4">
						<div class="sin-widget">
							<h3 class="widget-title">Nearby Conveyancing</h3>
                            <ul>
                                <li>
                                	<a href="/conveyancing/location/Carlisle">Conveyancing in Carlisle</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Liverpool">Conveyancing in Liverpool</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/York">Conveyancing in York</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Oxford">Conveyancing in Oxford</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Leicester">Conveyancing in Leicester</a>
                                </li>
                                <li>
                                	<a href="/conveyancing/location/Peterborough">Conveyancing in Peterborough</a>
                                </li>
                            </ul>
						</div>
					</div>
					<!-- /.End Of Single Widget -->

				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="footer-bottom-left">
							<span>Copyright 2016 - All Right Reserved</span>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="footer-bottom-right">
							<p>Developed by <a href="http://www.technicalproperty.co.uk" alt="Technical Property - Software for the Property Sector">Technical Property</a> - Software Solutions for the Property Sector </p>
						</div>
					</div>
				</div>
			</div>

			<!-- Scroll Top -->
			<div class="scroll-top">
				<i class="fa fa-long-arrow-up" aria-hidden="true"></i>
			</div>
			<!-- /.End Of Scroll Top -->
		</div>
	</footer>
	<!-- /.End Of Footer Section - 5 -->




	<!-- JQUERY LIBRARY -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

	<!-- BOOTSTRAP JS -->
	<script src="/assets/js/bootstrap.min.js"></script>

	<!-- Infinite Scroll -->
	<script src="/assets/js/jquery.infinitescroll.min.js"></script>

	<!-- MAIN JS -->
	<script src="/assets/js/main.js"></script>
</body>

</html>