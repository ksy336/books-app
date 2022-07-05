import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env.REACT_APP_API_KEY)
class BooksService {
    async getAllBooks(inputValue: string, orderBy: string, maxResults: number) {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&orderBy=${orderBy}&maxResults=${maxResults}&key=${API_KEY}`);
        try {
            const data = await response.data;
            return data;
        } catch(e) {
            throw new Error("Fetching book data failed!");
        }
    }
}
const booksService = new BooksService();
export default booksService;