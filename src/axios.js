import axios from 'axios';


const instance=axios.create({
    basURL:'https://us-central1-clone1-4e27e.cloudfunctions.net/api'//the api(cloud func) URL
});

export default instance;

//http://localhost:5001/clone1-4e27e/us-central1/api