import axios from "axios";
import config from "./config";

const client = axios.create(config.api);

const NashtaService = {
    saveDataMeeting(title, location, participant, date, note, image){
        let formData = new FormData();
        formData.append("title", title);
        formData.append("location", location);
        formData.append("participant", participant);
        formData.append("date", date);
        formData.append("note", note);
        formData.append("image", image);
        return client.request({
            method: "post",
            url: "/data/createData",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    getData(page){
        return client.request(
            {
                method: "get",
                url: `data/readAll?filter=&orderby=id asc&top=5&skip=${page}`
            },
            {crossdomain: true}
        );
    },
}
export default NashtaService;