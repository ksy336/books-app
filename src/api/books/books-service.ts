import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

class BooksService {
    async getAllBooks(inputValue: string, orderBy: string, maxResults: number, category: string, visible: number) {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}+${category}&orderBy=${orderBy}&maxResults=${maxResults}&startIndex=${visible}&key=${API_KEY}`);
        try {
            const data = await response.data;
            console.log(data);
            return data;
        } catch(e) {
            throw new Error("Fetching book data failed!");
        }
    }
}
const booksService = new BooksService();
export default booksService;