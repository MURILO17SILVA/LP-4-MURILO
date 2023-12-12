// src/components/Auction.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { database } from '../firebase';

interface AuctionParams {
  auctionId: string;
}

interface Auction {
  id: string;
  title: string;
  description: string;
  image: string;
  currentBid: number;
  remainingTime: number;
  finished: boolean;
  canceled: boolean;
  winnerName?: string;
  winningBid?: number;
}

const Auction: React.FC = () => {
  const { auctionId } = useParams<AuctionParams>();
  const history = useHistory();
  const [auction, setAuction] = useState<Auction | null>(null);

  useEffect(() => {
    const fetchAuctionDetails = async () => {
      // Implementar lógica para buscar os detalhes do leilão do Firebase
      // Atualizar o estado com os detalhes do leilão ou redirecionar para a página inicial se o leilão não existir
    };

    fetchAuctionDetails();
  }, [auctionId, history]);

  const handlePlaceBid = () => {
    // Implementar lógica para enviar um lance para o leilão
    // Desabilitar ou ocultar o formulário após o envio do lance
  };

  return (
    <div>
      {auction ? (
        <>
          <h2>{auction.title}</h2>
          <p>{auction.description}</p>
          <img src={auction.image} alt="Product" />
          <p>Maior Lance Atual: R${auction.currentBid}</p>
          <p>Tempo Restante: {auction.remainingTime} minutos</p>
          <form onSubmit={handlePlaceBid}>
            <label>Nome do Participante:</label>
            <input type="text" required />
            <br />
            <label>Valor do Lance (mínimo R${auction.currentBid + 10}):</label>
            <input type="number" min={auction.currentBid + 10} required />
            <br />
            <button type="submit">Enviar Lance</button>
          </form>
          {auction.finished ? (
            <p>O leilão foi finalizado. Vencedor: {auction.winnerName}, Lance: R${auction.winningBid}</p>
          ) : auction.canceled ? (
            <p>O leilão foi cancelado.</p>
          ) : null}
          <button onClick={() => history.push('/')}>Retornar à Página Inicial</button>
        </>
      ) : (
        <p>Leilão não encontrado.</p>
      )}
    </div>
  );
};

export default Auction;
