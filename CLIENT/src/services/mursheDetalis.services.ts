import axios from "axios";

const BASE_URL = "https://customermanagementsystem-gsu9.onrender.com";

class MursheService {
    getMursheDetails() {
        return axios.get(`${BASE_URL}/api/mursheDetalis`);
    }

    getMursheDetailsById(id: string) {
        return axios.get(`${BASE_URL}/api/mursheDetalis/${id}`);
    }

    insertMursheDetails(mursheData: any) {
        return axios.post(`${BASE_URL}/api/mursheDetalis`, mursheData);
    }

    updateMursheDetailsById(id: string, mursheData: any) {
        return axios.put(`${BASE_URL}/api/mursheDetalis/${id}`, mursheData);
    }

    deleteMursheDetailsById(id: string) {
        return axios.delete(`${BASE_URL}/api/mursheDetalis/${id}`);
    }
}

export default new MursheService();
