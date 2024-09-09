import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './Products.css';
import Navigation from '../../componets/Navigation';
import { FaShoppingCart } from 'react-icons/fa'; 

function Products() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Novo estado para a barra de pesquisa
  const navigate = useNavigate();  

  const products  = [
    {
      id: 1,
      name: 'Seleta de Legumes',
      price: 58.99,
      imageUrl: 'https://nutriz.com.br/static/media/INST_seletadelegumes.653cfef07afb3cf42201.png'
    },
    {
      id: 2,
      name: 'Brócolis',
      price: 39.99,
      imageUrl: 'https://nutriz.com.br/static/media/INST_Brocolis.26bbe9fb6f38e916b565.png'
    },
    {
      id: 3,
      name: 'Mandioca Palitos',
      price: 35.75,
      imageUrl: 'https://nutriz.com.br/static/media/INST_MandiocaPalitos.e2e2fd6f9edafb1195ac.png'
    },
    {
      id: 4,
      name: 'Couve-de-Bruxelas',
      price: 40.99,
      imageUrl: 'https://nutriz.com.br/static/media/INST_CouveDeBruxelas.fcbdba541b566d70c812.png'
    },
    {
      id: 5,
      name: 'Jardineira Panachê',
      price: 45.89,
      imageUrl: 'https://nutriz.com.br/static/media/INST_jardineirapanache.3b6cc9269bef78310c31.png'
    },
    {
      id: 6,
      name: 'Polenta Noisette',
      price: 40.99,
      imageUrl: 'https://nutriz.com.br/static/media/INST_PolentaNoisette.8eed8ef9c9d0b762afcd.png'
    },
    {
      id: 7,
      name: 'Cenoura Baby',
      price: 39.99,
      imageUrl: 'https://nutriz.com.br/static/media/INST_CenouraBaby.692606884283ef53b4e7.png'
    },
    {
      id: 8,
      name: 'Vagem Inteira',
      price: 50.99,
      imageUrl: 'https://nutriz.com.br/static/media/INST_VagemInteira.aec73f671d4dbb8cf6b3.png'
    },
    {
      id: 9,
      name: 'Ervilha Fresca',
      price: 42.79,
      imageUrl: 'https://nutriz.com.br/static/media/INST_ErvilhaFresca.b069458936ac17bd782e.png'
    },
    {
      id: 10,
      name: 'Jardineira Primavera',
      price: 30.56,
      imageUrl: 'https://nutriz.com.br/static/media/INST_jardineiraprimavera.ae01de55781726d1c8f5.png'
    },
    {
      id: 11,
      name: 'Mandioca Pedaços',
      price: 48.99,
      imageUrl: 'https://nutriz.com.br/static/media/INST_MandiocaPedaco.b1d66170a43943839cc4.png'
    },
    {
      id: 12,
      name: 'Espinafre Folhas',
      price: 38.89,
      imageUrl: 'https://nutriz.com.br/static/media/INST_EspinafreFolhas.684b3dc45bc8623cdc64.png'
    },
    {
      id: 13,
      name: 'Espinafre Picado',
      price: 35.69,
      imageUrl: 'https://nutriz.com.br/static/media/INST_EspinafrePicado.7c6b5f58d15699b6adda.png'
    },
    {
      id: 14,
      name: 'Cenoura em cubos',
      price: 48.29,
      imageUrl: 'https://nutriz.com.br/static/media/INST_cenouracubos.75f2c31eeaa14cde8da6.png'
    },
    {
      id: 15,
      name: 'Couve-flor',
      price: 35.59,
      imageUrl: 'https://nutriz.com.br/static/media/INST_Couveflor.b690bc1fcfd093175747.png'
    },
    {
      id: 16,
      name: 'Jardineira com Ervilhas',
      price: 39.99,
      imageUrl: 'https://nutriz.com.br/static/media/INST_jardineiracomervilhas.80677bcf64251edd0bd3.png'
    },
    {
      id: 17,
      name: 'Brócolis ',
      price: 48.29,
      imageUrl: 'https://nutriz.com.br/static/media/INST_brocolis_2kg.ee99c5ba7e4362d2de77.png'
    },
    {
      id: 18,
      name: 'Polenta Palito ',
      price: 53.29,
      imageUrl: 'https://nutriz.com.br/static/media/INST_polentapalito.fa8de42d2b426f34b584.png'
    },
    {
      id: 19,
      name: 'Vagem Pedaços',
      price: 65.29,
      imageUrl: 'https://nutriz.com.br/static/media/INST_VagemPedaco.6365ad1d64d93de3c4be.png'
    }
  ];



  const LinhaAtacadoProducts = [
    {
      id: 23,
      name: 'Brócolis',
      price: 25.99,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_brocolis.0942e4da786ae1cec6a7.png'
    },
    {
      id: 24,
      name: 'Couve-flor',
      price: 18.50,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_couve_flor.7b5c678a9befe20b1173.png'
    },
    {
      id: 25,
      name: 'Ervilha Fresca',
      price: 25.39,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_ervilha_fresca.8d3ef2a3a6f0c3a3d526.png'
    },
    {
      id: 26,
      name: 'Milho Grão ',
      price: 36.59,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_Milho.bb003a871ff5badcd468.png'
    },
    {
      id: 27,
      name: 'Jardineira com Ervilhas',
      price: 29.89,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_jardineira_com_ervilhas.ae1888b578733abbd6f8.png'
    },
    {
      id: 28,
      name: 'Pão de Queijo Super Lanche',
      price: 36.89,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_PaoDeQueijoSuperLanche.b3284f3c93f25ed541be.png'
    },
    {
      id: 29,
      name: 'Alho Inteiro',
      price: 42.89,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_AlhoInteiro.3c74e8f1b6e2039efac9.png'
    },
    {
      id: 30,
      name: 'Alho Picado',
      price: 37.89,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_AlhoPicado.e58671a6befd822d480c.png'
    },
    {
      id: 31,
      name: 'Polenta Palitos',
      price: 34.89,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_polentaPalitos.bc00fd74c0baf2571862.png'
    },
    {
      id: 32,
      name: 'Mandioca Pedaços ',
      price: 35.89,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_MandiocaPedaco.e4fc03d2ec5851fddd1f.png'
    },
    {
      id: 33,
      name: 'Pão de Queijo Tradicional',
      price: 30.89,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_PaoDeQueijoTradicional.605a1f747d59d6732725.png'
    },
    {
      id: 34,
      name: 'Pão de Queijo Coquetels',
      price: 27.89,
      imageUrl: 'https://nutriz.com.br/static/media/ATAC_PaoDeQueijoCoquetel.1c091cfe3bdd3f2914b2.png'
    },
  ];


  const LinhaVarejoProducts = [
    {
      id: 35,
      name: 'Brócolis',
      price: 25.99,
      imageUrl: 'https://nutriz.com.br/static/media/VAR_brocolis.06cda944bf060c3da88d.png'
    },
    {
      id: 36,
      name: 'Couve-flor',
      price: 18.50,
      imageUrl: 'https://nutriz.com.br/static/media/VAR_couve_flor.779869204f712196a525.png'
    },
    {
      id: 37,
      name: 'Ervilha Fresca',
      price: 25.39,
      imageUrl: 'https://nutriz.com.br/static/media/VAR_ervilha_fresca.237fee2ca1f5e88fb16b.png'
    },
    {
      id: 38,
      name: 'Seleta de Legumes ',
      price: 36.59,
      imageUrl: 'https://nutriz.com.br/static/media/VAR_seleta_de_legumes.4d8f79ee972335eaca06.png'
    },
    {
      id: 39,
      name: 'Jardineira Panachê',
      price: 46.89,
      imageUrl: 'https://nutriz.com.br/static/media/VAR_jardineira_panache.f8150488edbf0967ef3b.png'
    },
    {
      id: 40,
      name: 'Polenta Palitos',
      price: 36.89,
      imageUrl: 'https://nutriz.com.br/static/media/VAR_polenta_palitos.ce5097431a8ce7451888.png'
    },
    
  ];




  const bomApetiteProducts = [
    {
      id: 41,
      name: 'Brócolis',
      price: 25.99,
      imageUrl: 'https://nutriz.com.br/static/media/BA_Brocolis.530564937fb65d83f0a9.png'
    },
    {
      id: 42,
      name: 'Couve-flor',
      price: 18.50,
      imageUrl: 'https://nutriz.com.br/static/media/BA_CouveFlor.c701f27d91b57103c524.png'
    },
    {
      id: 43,
      name: 'Ervilha',
      price: 25.39,
      imageUrl: 'https://nutriz.com.br/static/media/BA_Ervilha.172da77fb31fe75096bc.png'
    },
    {
      id: 44,
      name: 'Jardineira com Ervilhas ',
      price: 36.59,
      imageUrl: 'https://nutriz.com.br/static/media/BA_JardineiraErvilha.ea7107398ce56e7ed5eb.png'
    },
    {
      id: 22,
      name: 'Jardineira Panachê',
      price: 39.89,
      imageUrl: 'https://nutriz.com.br/static/media/BA_JardineiraPanache.3d7a2c6c0ab6aca46d07.png'
    },
  ];

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => 
      prevCart.filter(item => item.id !== productId)
    );
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const goToPayment = () => {
    if (cart.length > 0) {
      navigate('/payment');  
    } else {
      alert("O carrinho está vazio. Adicione itens antes de prosseguir para o pagamento.");
    }
  };

  // Função para filtrar os produtos com base no termo de pesquisa
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navigation />
      <div className="cart-icon" onClick={goToPayment}>
        <FaShoppingCart size={30} />
        <span>Total: R$ {getTotal()}</span>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Procurar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="products-container">
        <h1 className="products-title">Linha Institucional</h1>
        <div className="products-list">
          {filteredProducts.map((product) => ( 
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">R$ {product.price.toFixed(2)} /kg</p>
                <button onClick={() => addToCart(product)} className="add-to-cart-button">Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>
        
        <h1 className="products-title">Linha Atacado</h1>
        <div className="products-list">
          {LinhaAtacadoProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">R$ {product.price.toFixed(2)} /kg</p>
                <button onClick={() => addToCart(product)} className="add-to-cart-button">Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>

        <h1 className="products-title">Linha Varejo</h1>
        <div className="products-list">
          {LinhaVarejoProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">R$ {product.price.toFixed(2)} /kg</p>
                <button onClick={() => addToCart(product)} className="add-to-cart-button">Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>

        <h1 className="products-title">Linha Bom Apetite</h1>
        <div className="products-list">
          {bomApetiteProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">R$ {product.price.toFixed(2)} /kg</p>
                <button onClick={() => addToCart(product)} className="add-to-cart-button">Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="cart-summary">
        <h2>Itens no Carrinho</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <span>{item.name}</span> - Quantidade: {item.quantity} - Preço: R$ {(item.price * item.quantity).toFixed(2)}
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-from-cart-button">Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;