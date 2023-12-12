// src/components/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { database } from '../firebase';

interface Auction {
  id: string;
  title: string;
  description: string;
  image: string;
  currentBid: number;
  remainingTime: number;
}

const Home: React.FC = () => {
  const [activeAuction, setActiveAuction] = useState<Auction | null>(null);

  useEffect(() => {
    const fetchActiveAuction = async () => {
      // Implementar lógica para buscar o leilão ativo do Firebase
      // Atualizar o estado com os detalhes do leilão ativo ou null se não houver leilão
    };

    fetchActiveAuction();
  }, []);

  return (
    <div>
      <h1>Auctions App</h1>
      {activeAuction ? (
        <>
          <h2>{activeAuction.title}</h2>
          <p>{activeAuction.description}</p>
          <img src={activeAuction.image} alt="Product" />
          <p>Maior Lance Atual: R${activeAuction.currentBid}</p>
          <p>Tempo Restante: {activeAuction.remainingTime} minutos</p>
          <Link to={`/auction/${activeAuction.id}`}>
            <button>Participar do Leilão</button>
          </Link>
        </>
      ) : (
        <p>Nenhum leilão ocorrendo no momento.</p>
      )}
    </div>
  );
};

export default Home;
