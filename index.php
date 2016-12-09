<?php include('./config/config.php'); ?>
<?php include('./config/api.php'); ?>
<!DOCTYPE html>
<!-- saved from url=(0046)http://company.design360studios.com/about.html -->
<html lang="en" data-ember-extension="1">
    <head>
        <?php include('./components/meta.php'); ?>
    </head>

<body class="" style="overflow-y: visible;">
    <a href="#" id="back-to-top" title="Back to top">
        <img src="./public/img/back-top.png" alt="Back to Top">
    </a>
    <header class="header-area">
        <?php include('./components/header-top.php'); ?>
        <?php include('./components/header-bottom.php'); ?>
    </header>
    <!-- /.End Of Header -->


    <!-- PAGE TITLE Area
      =========================== -->
    <section class="page-title fix">
        <div class="container bb-bottom">
            <div class="row">
                <div class="col-md-12">
                    <div class="page-title-content">
                        <h2 class="page-title">Simple Conveyancing</h2>
                        <span class="sub-title"><?php echo $pageData->{'0'}->metadescription ?></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  -->


    <?php foreach ($pageData as $section) : ?>
        <?php if (!$section->hideFromMenu) : ?>
        <section id="<?php echo $section->id; ?>" class="container">
            <?php include('./components/copy.php'); ?>
        </section>
        <?php endif; ?>
    <?php endforeach; ?>

    <!-- Footer Area
        =========================== -->
    <footer id="footer-area">
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
        <div class="footer-bottom fix">
            <div class="container bb-top foo-padding">
                <div class="row">
                    <div class="col-sm-6 copyright">
                        <span>&copy; <?php echo date("Y") ?> Site Developed by <a href="http://www.technicalproperty.co.uk" target="_blank" title="Technical Property : Software Solutions for the Property Industry">Technical Property</a></p></span>
                    </div>
                    <div class="col-sm-6 text-right">
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- /.End Of Footer Area -->


    <script src="./public/js/jquery.min.js"></script>
    <script src="./public/js/jquery.meanmenu.js"></script>
    <script src="./public/js/waypoints.min.js"></script>
    <script src="./public/js/bootstrap.min.js"></script>
    <script src="./public/js/jquery.counterup.min.js"></script>
    <script src="./public/js/owl.carousel.min.js"></script>
    <script src="./public/js/jquery.prettyPhoto.js"></script>
    <script src="./public/js/slick.min.js"></script>
    <script src="./public/js/main.js"></script>
    <script src="./public/js/color-settings.js"></script>



</body></html>