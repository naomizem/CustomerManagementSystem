import axios from "axios";

const BASE_URL = "https://customermanagementsystem-gsu9.onrender.com";

class PaturService {
    getPaturDetails() {
        return axios.get(`${BASE_URL}/api/paturDetalis`);
    }

    getPaturDetailsById(id: string) {
        return axios.get(`${BASE_URL}/api/paturDetalis/${id}`);
    }

    insertPaturDetails(paturData: any) {
        return axios.post(`${BASE_URL}/api/paturDetalis`, paturData);
    }

    updatePaturDetailsById(id: string, paturData: any) {
        return axios.put(`${BASE_URL}/api/paturDetalis/${id}`, paturData);
    }

    deletePaturDetailsById(id: string) {
        return axios.delete(`${BASE_URL}/api/paturDetalis/${id}`);
    }
}

export default new PaturService();
