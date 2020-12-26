import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { slide as Menu } from 'react-burger-menu'
// https://reactjsexample.com/customizable-and-responsive-react-sidebar-library-with-dropdown-menus/

const NavBar = () => {
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
	const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })

	return (
		<Fragment>
			{isTabletOrMobile || isTabletOrMobileDevice ? (
				<div>
					<div
						className="nav-burger"
						style={{
							width: '100%',
							height: 60,
							backgroundColor: '#fff',
							shadowColor: '#000',
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.25,
							shadowRadius: 3.84,

							elevation: 5,
							border: 10,
							borderWidth: 10,
							borderColor: 'red',
							zIndex: 10,
							// position: 'fixed',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'row',
						}}
					>
						<div>
							<Menu
								customBurgerIcon={
									<img src={require('../assets/icon/align-left.svg')} />
								}
							>
								<a
									id="home"
									className="menu-item"
									href="/"
									style={{ color: 'white', marginLeft: '5%' }}
								>
									Home
								</a>

								<div class="dropdown show">
									<a
										class="btn btn-secondary dropdown-toggle"
										href="#"
										role="button"
										id="dropdownMenuLink"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										About Us
									</a>

									<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
										<a class="dropdown-item" href="/about">
											Company Profile
										</a>
										<a class="dropdown-item" href="/customer">
											Customer
										</a>
										<a class="dropdown-item" href="/visi">
											Visi Misi
										</a>
										<a class="dropdown-item" href="/certificate">
											Certificate
										</a>
									</div>
								</div>

								<div class="dropdown show" style={{ marginTop: 10 }}>
									<a
										class="btn btn-secondary dropdown-toggle"
										href="#"
										role="button"
										id="dropdownMenuLink"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Product
									</a>

									<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
										<Link class="dropdown-item" to="/detail-product/berco">
											UCR BERCO
										</Link>
										<Link class="dropdown-item" to="/detail-product/berco">
											UCR NR
										</Link>
										<Link class="dropdown-item" to="/detail-product/ofm">
											OFM
										</Link>
										<Link class="dropdown-item" to="/detail-product/feurst">
											FEURST
										</Link>
										<Link class="dropdown-item" to="/detail-product/get">
											Ground Engaging Tools
										</Link>
									</div>
									<div class="dropdown show" style={{ marginTop: 10 }}>
										<a
											class="btn btn-secondary dropdown-toggle"
											href="#"
											role="button"
											id="dropdownMenuLink"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Service
										</a>

										<div
											class="dropdown-menu"
											aria-labelledby="dropdownMenuLink"
										>
											<Link class="dropdown-item" to="/service-ctp">
												PTS
											</Link>
											<Link class="dropdown-item" to="/service-repair">
												REPAIR
											</Link>
										</div>
									</div>
									<a
										id="home"
										className="menu-item"
										href="/"
										style={{ color: 'white', marginLeft: '5%' }}
									>
										E-Catalog
									</a>
									<div class="dropdown show" style={{ marginTop: 10 }}>
										<a
											class="btn btn-secondary dropdown-toggle"
											href="#"
											role="button"
											id="dropdownMenuLink"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Event
										</a>

										<div
											class="dropdown-menu"
											aria-labelledby="dropdownMenuLink"
										>
											<Link class="dropdown-item" to="/service-ctp">
												GALERI 1
											</Link>
											<Link class="dropdown-item" to="/service-repair">
												GALERI 1
											</Link>
										</div>
									</div>
									<a
										id="home"
										className="menu-item"
										href="/contact"
										style={{ color: 'white', marginLeft: '5%' }}
									>
										Contact
									</a>
								</div>
							</Menu>
						</div>
						<div>
							<img
								src={require('../assets/logo/logo.jpg')}
								className="img-fluid"
								width="150"
								style={{ marginLeft: '35%', marginTop: -50 }}
							/>
						</div>
					</div>
				</div>
			) : (
				<nav
					className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps
      sps--abv"
				>
					<div className="container">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span
								style={{ color: 'red' }}
								className="navbar-toggler-icon"
							></span>
						</button>
						{/* <Link className="navbar-brand mx-auto" to="/">
						PAFINDO
					</Link> */}
						<Link
							className="navbar-brand mx-auto"
							to="/"
							//onClick={() => document.location.reload()}
						>
							<img
								src={require('../assets/logo/logo.jpg')}
								className="img-fluid"
								width="200"
							/>
						</Link>
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									{' '}
									<Link className="nav-link" to="/">
										Home
										<span className="sr-only">(current)</span>
									</Link>{' '}
								</li>

								<li className="nav-item dropdown">
									<a
										id="dropdownMenu1"
										href="#"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
										className="nav-link  dropdown-toggle"
									>
										About Us
									</a>
									<ul
										aria-labelledby="dropdownMenu1"
										className="dropdown-menu border-0  shadow"
									>
										<li>
											<Link to="/about" className="dropdown-item">
												Company Profile{' '}
											</Link>
										</li>

										<li>
											<Link to="/customer" className="dropdown-item">
												Customer
											</Link>
										</li>

										<li>
											<Link to="/visi" className="dropdown-item">
												Visi Misi
											</Link>
										</li>
										<li>
											<Link to="/certificate" className="dropdown-item">
												Certificate
											</Link>
										</li>
									</ul>
								</li>

								<li className="nav-item dropdown has-megamenu">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										data-toggle="dropdown"
									>
										{' '}
										Product{' '}
									</a>
									<div className="dropdown-menu megamenu">
										<div className="row">
											<div className="col-md-3">
												<div className="col-megamenu">
													<h6 className="title">UCR BERCO</h6>
													<ul className="list-unstyled">
														<li>
															<Link to="/detail-product/berco">UCR BERCO</Link>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-3">
												<div className="col-megamenu">
													<h6 className="title">UCR</h6>
													<ul className="list-unstyled">
														<Link to="/detail-product/ucr-nr">UCR NR</Link>
													</ul>
												</div>
											</div>
											<div className="col-md-3">
												<div className="col-megamenu">
													<h6 className="title">OFM</h6>
													<ul className="list-unstyled">
														<Link to="/detail-product/ofm">OFM</Link>
														{/* <li>
														<a href="#">
															Custom Menu
														</a>
													</li>
													<li>
														<a href="#">
															Custom Menu
														</a>
													</li>
													<li>
														<a href="#">
															Custom Menu
														</a>
													</li>
													<li>
														<a href="#">
															Custom Menu
														</a>
													</li>
													<li>
														<a href="#">
															Custom Menu
														</a>
													</li> */}
													</ul>
												</div>
											</div>
											<div className="col-md-3">
												<div className="col-megamenu">
													<h6 className="title">FEURST</h6>
													<ul className="list-unstyled">
														<li>
															<Link to="/detail-product/feurst">FEURST</Link>
														</li>
														{/* <li>
														<a href="#">
															Custom Menu
														</a>
													</li>
													<li>
														<a href="#">
															Custom Menu
														</a>
													</li>
													<li>
														<a href="#">
															Custom Menu
														</a>
													</li>
													<li>
														<a href="#">
															Custom Menu
														</a>
													</li>
													<li>
														<a href="#">
															Custom Menu
														</a>
													</li> */}
													</ul>
												</div>
											</div>
											<div className="col-md-3">
												<hr />
												<div className="col-megamenu">
													<h6 className="title">GET</h6>
													<ul className="list-unstyled">
														<li>
															<Link to="/detail-product/get">
																Ground Engaging Tools
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li className="nav-item dropdown">
									<a
										id="dropdownMenu1"
										href="#"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
										className="nav-link
                dropdown-toggle"
									>
										Service
									</a>
									<ul
										aria-labelledby="dropdownMenu1"
										className="dropdown-menu border-0
                shadow"
									>
										<li>
											<Link to="service-ctp" className="dropdown-item">
												PTS{' '}
											</Link>
										</li>
										<li>
											<Link to="service-repair" className="dropdown-item">
												REPAIR
											</Link>
										</li>
									</ul>
								</li>

								<li className="nav-item">
									{' '}
									<Link className="nav-link" to="/catalog">
										E-Catalog
									</Link>
								</li>

								<li className="nav-item dropdown">
									<a
										id="dropdownMenu1"
										href="#"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
										className="nav-link
                dropdown-toggle"
									>
										Event
									</a>
									<ul
										aria-labelledby="dropdownMenu1"
										className="dropdown-menu border-0
                shadow"
									>
										<li>
											<Link to="/galery" className="dropdown-item">
												Galeri 1{' '}
											</Link>
										</li>
										<li>
											<a href="#" className="dropdown-item">
												Galeri 2
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									{' '}
									<Link className="nav-link" to="/contact">
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			)}
		</Fragment>
	)
}

export default NavBar
