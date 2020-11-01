import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true
});

const CARD_SERVICE = {
  createCard(cardData) {
    return service.post('/api/cards', cardData);
  },
  getCards() {
    return service.get('/api/cards');
  },
  deleteCard(id) {
    return service.post(`/api/cards/${id}/delete`, {});
  },
  updateCard(id, cardData) {
    return service.post(`/api/cards/${id}/update`, cardData);
  },
  getCardDetails(id) {
    return service.get(`/api/cards/${id}`);
  }
};

export default CARD_SERVICE;
