const contactServices = {}

contactServices.getAgendas = async () => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas');
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

contactServices.getOneAgenda = async (slug) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug);
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

//Crear agenda. Se puede copiar enlace o poner enlace + slug + '/contacts', por si se cambia en algun momento el nombre de la agenda. 
contactServices.crearContactos = async (slug, formData) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await resp.json()
        
        return data
    } catch (error) {
        console.log(error);
    }
}

contactServices.deleteContact = async (slug, id) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/' + id, {
            method: 'DELETE'
        });
        if (!resp.ok) throw new Error('error al eliminar!')
       
        return contactServices.getOneAgenda(slug) 
    } catch (error) {
        console.log(error);
    }
}

contactServices.updateContact = async (slug, id, formData) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!resp.ok) throw new Error('error deleting')
        
        return contactServices.getOneAgenda(slug) 
    } catch (error) {
        console.log(error);
    }
}

export default contactServices