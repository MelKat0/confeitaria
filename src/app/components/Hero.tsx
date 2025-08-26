import "./Hero.css";

export default function Hero(){
  return(
    <section className="hero-section">
      <div className="hero-text"> 
        <h1 className="hero-title">BEM VINDO ao</h1>
        <h2 className="hero-subtitle">Quitiliano's Cakes</h2>
        <h3 className="hero-phrase">
            Nada como um doce caseiro pra adoçar o dia!
        </h3>
        <p className="hero-description">
            Nossos bolos de pote são feitos com ingredientes 
            selecionados, muito carinho e aquele sabor irresistível que 
            conquista a cada colherada.
        </p>
      </div>
      <div className="hero-image">
        <img src="bolo.png" alt="bolo torta" />
      </div>
    </section>
  );
}