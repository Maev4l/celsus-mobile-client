export const ListLibraries = `query ListLibraries { 
    libraries {
        id, name, description, booksCount
    } 
}`;

export const FetchLibraryBooks = `query FetchLibraryBooks ($id: ID!, $page:Int = 1, $pageSize: Int = 20) {
    library(id:$id, page:$page, pageSize:$pageSize) {
        name, 
        content {
            books {
                id,
                title,
                authors,
                thumbnail,
                library {
                    id,
                    name
                }
            },
            total, 
            itemsPerPage
        }
    }
}`;
