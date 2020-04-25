import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UCdzhxHVrbrXdwVt5DH3fK35X43PqcjMAYVGJLUXbEHcdL2a--NPwXOIYW4x1lhAq1cvEFDW4ryTZgZGO-vDY1e_PDTQSekQrjqRgwiIzvcv9JeCxrmZg1xkVBOiXnYx'
    }
});