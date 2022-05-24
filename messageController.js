const chatbotMassages = [
    {
        'id' : 1,
        'text' :' Bonjour, êtes-vous un homme ou une femme ?',
        'user' : 'admin',
        'responseType' : 'BUTTON'
    },
   
    {
        'id' : 2,
        'text' :'Merci, quel est votre prénom ?',
        'user' : 'admin',
        'responseType' : 'NORMAL'
      
    },

    {
        'id' : 3,
        'text' :' Joli prénom, 😊 ! Quelle est votre date de naissance?',
        'user' : 'admin',
        'responseType' : 'DATE'

    },
    {
        'id' : 4,
        'text' :'Merci/vous êtes',
        'user' : 'admin',
        'responseType' : 'Normal'
    },

]


const getMessages = (request, response) => {
   
    response.status(200).json(chatbotMassages);

}

const getMessageById = (request, response) => {
    const id = parseInt(request.params.id)

    if (id > chatbotMassages.length )  {
        response.status(200).json(results.rows)
    } else {
        response.status(200).json(chatbotMassages[id-1]);

    } 
  
}

const createMessage = (request, response) => {
    //to do
}

const deleteMessage = (request, response) => {
    //to do
}

const updateMessage = (request, response) => {
    //to do
}


module.exports = {
    getMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage,
  }