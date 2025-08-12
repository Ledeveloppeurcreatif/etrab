import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const trajets = [
    { 
      from: 'Lomé', 
      to: 'Dapaong', 
      price: '10.000 FCFA',
      whatsappNumber: '22893104011', // Responsable Lomé
      responsable: 'Agence Lomé'
    },
        { 
      from: 'Dapaong', 
      to: 'Lomé', 
      price: '3500 FCFA',
      whatsappNumber: '22893104013', // Responsable Dapaong
      responsable: 'Agence Dapaong'
    },
    { 
      from: 'Lomé', 
      to: 'Kara', 
      price: '10.000 FCFA',
      whatsappNumber: '22893104012', // Responsable Lomé
      responsable: 'Agence Lomé'
    },
    { 
      from: 'Kara', 
      to: 'Lomé', 
      price: '6000 FCFA',
      whatsappNumber: '22893104014', // Responsable Kara
      responsable: 'Agence Kara'
    },
        { 
      from: 'Dapaong', 
      to: 'Kara', 
      price: '3000 FCFA',
      whatsappNumber: '22893104012', // Responsable Dapaong
      responsable: 'Agence Dapaong'
    },
    { 
      from: 'Kara', 
      to: 'Dapaong', 
      price: '3000 FCFA',
      whatsappNumber: '22893104014', // Responsable Kara
      responsable: 'Agence Kara'
    },
  ];

  const handleReservation = (trajet: typeof trajets[0]) => {
    const message = `Bonjour, je souhaite réserver un trajet ${trajet.from} - ${trajet.to}. Tarif: ${trajet.price}`;
    const whatsappUrl = `https://wa.me/${trajet.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Choisissez votre trajet</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        
        <div className="modal-body">
          <p className="modal-description">
            Sélectionnez votre destination et réservez directement via WhatsApp
          </p>
          
          <div className="trajets-list">
            {trajets.map((trajet, index) => (
              <div key={index} className="trajet-item">
                <div className="trajet-info">
                  <div className="trajet-route">
                    <span className="from">{trajet.from}</span>
                    <i className="ri-arrow-right-line"></i>
                    <span className="to">{trajet.to}</span>
                  </div>
                  <div className="trajet-details">
                    <div className="trajet-price">{trajet.price}</div>
                    <div className="trajet-responsable">{trajet.responsable}</div>
                  </div>
                </div>
                <button 
                  className="reserve-btn"
                  onClick={() => handleReservation(trajet)}
                >
                  Réserver
                </button>
              </div>
            ))}
          </div>
          
          <div className="modal-info">
            {/* <p><strong> Contact :</strong> +228 93 10 40 11</p> */}
            <p><strong> Horaires :</strong> Départ quotidien à 7h00. Si vous avez un empechement signalez 
            votre absence au moins 30min avant le départ sinon vous perdez.</p>
            <p><strong> Bagages :</strong> Inclus dans le tarif, sauf surplus.</p>
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          max-width: 500px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          border-bottom: 1px solid #e9ecef;
        }

        .modal-header h2 {
          margin: 0;
          color: #333;
          font-size: 24px;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          padding: 4px;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: #f8f9fa;
          color: #333;
        }

        .modal-body {
          padding: 24px;
        }

        .modal-description {
          color: #666;
          margin-bottom: 24px;
          text-align: center;
        }

        .trajets-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .trajet-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .trajet-item:hover {
          border-color: #2887ff;
          background: #f8fff9;
        }

        .trajet-info {
          flex: 1;
        }

        .trajet-route {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .from, .to {
          font-weight: 600;
          color: #333;
        }

        .trajet-route i {
          color: #2887ff;
        }

        .trajet-price {
          color: #2887ff;
          font-weight: 600;
          font-size: 14px;
        }

        .trajet-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .trajet-responsable {
          color: #888;
          font-size: 12px;
        }

        .reserve-btn {
          background: #2887ff;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .reserve-btn:hover {
          background: #77B5FE;
          transform: translateY(-1px);
        }

        .modal-info {
          background: #f8f9fa;
          padding: 16px;
          border-radius: 12px;
        }

        .modal-info p {
          margin: 8px 0;
          font-size: 14px;
          color: #555;
        }

        @media (max-width: 600px) {
          .modal-content {
            margin: 20px;
            width: calc(100% - 40px);
          }

          .trajet-item {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }

          .reserve-btn {
            width: 100%;
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;