import React from "react";
import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";

function App(props) {
	return (
	  <div className="App">
		<div className="wrap">
			<div className="header">
				<Header />
				<SubHeader />
				<TopNav />
			</div>
				
			<ImageSlider />
			<div className="content">
			  <div className="products-box">
				<div className="products">
					<h5><span>FEATURED</span> PRODUCTS</h5>
					<div className="section group">
						<ProductDetail price="$484.99" title='Standard Motor'/>
						<ProductDetail price="$423.99" title='Not-So-Standard Motor'/>
						<ProductDetail price="$320.72" title='Basically-A-Standard Motor'/>
			 			<ProductDetail price="$257.16" title='Semi-Automatic Motor'/>
						<ProductDetail price="$733.80" title='Fully-Automatic Motor'/>
					</div>
				</div>
					
				<div className="products products-secondbox">
					<h5><span>Our</span> Specials</h5>
				    <div className="section group">
					  <ProductDetail price="$484.99" title='yo'/>
					  <ProductDetail price="$733.80" title='yo'/>
					  <ProductDetail price="$320.72" title='yo'/>
			 		  <ProductDetail price="$257.16" title='yo'/>
					  <ProductDetail price="$423.99" title='yo'/>
				    </div>
				</div>
			  </div>
			</div>
			<Footer />
		  </div>   
		</div>
	);
}

export default App;
