import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true
});

const CARD_SERVICE = {
  createCard(cardData) {
    return service.post('/api/card', cardData);
  },
  getCards() {
    return service.get('/api/card');
  },
  deleteCard(id) {
    return service.post(`/api/card/${id}/delete`, {});
  },
  updateCard(id, cardData) {
    return service.post(`/api/card/${id}/update`, cardData);
  },
  getCardDetails(id) {
    return service.get(`/api/card/${id}`);
  }
};

export default CARD_SERVICE;
