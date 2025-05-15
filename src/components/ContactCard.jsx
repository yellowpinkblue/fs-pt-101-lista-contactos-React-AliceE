import { useNavigate } from "react-router-dom"
import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import contactServices from "../services/contactServices"


export const ContactCard = props => {

    const { store, dispatch } = useGlobalReducer()
    const [contactToDelete, setContactToDelete] = useState(null)

    const navigate = useNavigate()

    const handleDelete = async () => {
    try {
        const resp = await contactServices.deleteContact('yellowpinkblue', props.cid)
        dispatch({ type: 'get_agenda_by_slug', payload: resp.contacts })
        
    } catch (error) {
        console.error(error)
    }
}

    const handleEdit = () => {
        navigate('/editar/' + props.cid)
    }


    return (
        <>
            <div className="card mb-3 shadow-sm">
                <div className="d-flex flex-column flex-md-row align-items-center p-3">
                    <div className="text-center mb-3 mb-md-0 me-md-4">
                        <img className="img-fluid rounded-circle" 
                        src="https://static.vecteezy.com/system/resources/previews/005/419/157/non_2x/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-illustration-on-a-white-isolated-background-vector.jpg" 
                        alt={props.name} 
                        />
                    </div>
                    <div className="w-75 text-start align-content-center">
                        <h5 className="fw-bold">{props.name}</h5>
                        <p className="mb-1"><i className="fas fa-phone-alt me-2"></i>{props.phone}</p>
                        <p className="mb-1"><i className="fas fa-envelope me-2"></i>{props.email}</p>
                        <p className="mb-1"><i className="fas fa-map-marker-alt me-2"></i>{props.address}</p>
                    </div>
                    <div className="text-center text-md-end p-3">

                        <button className="btn btn-outline-primary me-2 mb-2" onClick={handleEdit}>
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="btn btn-outline-danger me-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fas fa-trash-alt"></i>
                        </button>

                    </div>

                </div>
            </div>

            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">¿Estás seguro?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ¿Quieres eliminar este contacto?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        

        </>    
    )
}

