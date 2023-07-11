const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

    
    function showReadingStatus(library){
        
        let books = " " 

        for(let i = 0; i<library.length ; i++){

                books += ` ${i+1} = ${library[i].title} by ${library[i].author} , ${library[i].readingStatus } `

        }

        return books
    }

    console.log(showReadingStatus(library))