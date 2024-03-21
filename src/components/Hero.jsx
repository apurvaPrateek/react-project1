export default function Hero() {
  return (
    <main>
      <div className="content">
        <div className="slogan">Your feet deserve the best</div>
        <div className="info">
          Your feet deserve the best and we're here to help you with our
          shoes.Your feet deserve the best and we're here to help you with our
          shoes.
        </div>
        <div className="buttons">
          <button id="shopNowBtn">Shop Now</button>
          <button id="categoryBtn">Category</button>
        </div>
        <div className="social-links">
          <span>Also Available On</span>
          <div className="links">
            <img src="./images/flipkart.png" alt="flipkart-img"/>
            <img src="./images/amazon (1).png" alt="amazon-img"/>
          </div>
        </div>
      </div>
      <img src="./images/hero-image.png" alt="shoes-pic" />
    </main>
  );
}
