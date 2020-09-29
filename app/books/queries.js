/* eslint-disable import/prefer-default-export */
export const FetchBook = `query FetchBook($id: ID!) {
    book(id:$id) {
        id,
        title,
        authors,
        thumbnail,
        description,
        isbn10,
        isbn13,
        thumbnail,
        tags,
        bookSet,
        bookSetOrder,
        language,
        library {
            id,
            name,
        }
    }
}`;
