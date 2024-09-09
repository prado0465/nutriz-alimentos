import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo'; 
import './Payment.css';
import Navigation from '../../componets/Navigation';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('cartao');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    endereco: '',
    numeroCartao: '',
    validade: '',
    cvv: '',
  });
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const [boletoGerado, setBoletoGerado] = useState(false);
  const [pixGerado, setPixGerado] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(''); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'cartao') {
  
      alert("Pagamento com Cartão Processado");
      setCompraFinalizada(true);
    } else if (paymentMethod === 'boleto') {
      gerarBoleto();
    } else if (paymentMethod === 'pix') {
      gerarPix();
    }
  };

  const gerarBoleto = () => {

    const boletoLink = 'https://www.example.com/boleto/123456';
    setQrCodeData(boletoLink); 
    setBoletoGerado(true);
    setPixGerado(false); 
    setCompraFinalizada(true);
  };

  const gerarPix = () => {

    const pixCode = '00020126580014BR.GOV.BCB.PIX01365e849ddf-fe04-4aa4-99ef-7757edc4a034520400005303986540510.005802BR5922Bruno de Almeida Prado6009SAO PAULO62140510UgywczZyA96304A0B1';
    setQrCodeData(pixCode); 
    setPixGerado(true);
    setBoletoGerado(false); 
    setCompraFinalizada(true);
  };

  return (
    <div>
      <Navigation />
      <div className="payment-container">
        <h1>Área de Pagamento</h1>
        {!compraFinalizada && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Método de Pagamento</label>
              <div className="payment-options">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cartao"
                    checked={paymentMethod === 'cartao'}
                    onChange={() => setPaymentMethod('cartao')}
                  />
                  Cartão de Crédito
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="boleto"
                    checked={paymentMethod === 'boleto'}
                    onChange={() => setPaymentMethod('boleto')}
                  />
                  Boleto
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={() => setPaymentMethod('pix')}
                  />
                  Pix
                </label>
              </div>
            </div>

            {paymentMethod === 'cartao' && (
              <>
                <div className="form-group">
                  <label htmlFor="numeroCartao">Número do Cartão</label>
                  <input
                    type="text"
                    id="numeroCartao"
                    name="numeroCartao"
                    value={formData.numeroCartao}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="validade">Validade (MM/AA)</label>
                  <input
                    type="text"
                    id="validade"
                    name="validade"
                    value={formData.validade}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}

            {paymentMethod === 'boleto' && (
              <div className="form-group">
                <label htmlFor="boleto">Gerar Boleto</label>
                <button type="button" onClick={gerarBoleto}>
                  Gerar Boleto
                </button>
              </div>
            )}

            {paymentMethod === 'pix' && (
              <div className="form-group">
                <label htmlFor="pix">Gerar Pix</label>
                <button type="button" onClick={gerarPix}>
                  Gerar QR Code Pix
                </button>
              </div>
            )}

            <button type="submit" className="submit-button">
              Finalizar Compra
            </button>
          </form>
        )}

        {compraFinalizada && (
          <div className="compra-finalizada">
            <h2>Compra Finalizada com Sucesso!</h2>
            <p>Obrigado pela sua compra. Seus itens serão enviados em breve.</p>
          </div>
        )}

        {boletoGerado && (
          <div className="qr-code-section">
            <h2>Pagamento via Boleto</h2>
            <p>Use o QR Code abaixo para pagar o boleto:</p>
            <QRCode value={qrCodeData} size={200} />
            <p>Ou <a href={qrCodeData} target="_blank" rel="noopener noreferrer">clique aqui</a> para acessar o boleto.</p>
          </div>
        )}

        {pixGerado && (
          <div className="qr-code-section">
            <h2>Pagamento via Pix</h2>
            <p>Use o QR Code abaixo para pagar via Pix:</p>
            <QRCode value={qrCodeData} size={200} />
            <p>Ou <a href={qrCodeData} target="_blank" rel="noopener noreferrer">clique aqui</a> para acessar o pagamento via Pix.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;