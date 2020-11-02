import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true
});

const COLUMN_SERVICE = {
  createColumn(columnData) {
    return service.post('/api/columns', columnData);
  },
  getColumns() {
    return service.get('/api/columns');
  },
  deleteColumn(id) {
    return service.post(`/api/columns/${id}/delete`, {});
  },
  updateColumn(id, columnData) {
    return service.post(`/api/columns/${id}/update`, columnData);
  },
  getColumnDetails(id) {
    return service.get(`/api/columns/${id}`);
  }
};

export default COLUMN_SERVICE;
