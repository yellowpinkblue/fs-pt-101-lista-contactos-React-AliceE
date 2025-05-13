import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import contactServices from "../services/contactServices";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditarContactos = () => {

    //Para poder ver qué hay en id del user:

    const params = useParams() 
    const {store, dispatch} = useGlobalReducer()

    const navigate = useNavigate()

    // iniciamos el estado con el contacto dentro de la agenda 
    // Tiene que ser el mismo id que el que se recibe por params
   
       const [formData, setFormData] = useState(store.agenda.find(el => el.id == params.id))
       const handleChange = e => {
           setFormData({
               ...formData, [e.target.name]: e.target.value
           })
       }
   
       const handleCancel = () => {
           navigate('/')
       }
   
   
        const handleSubmit = e => {
           e.preventDefault();
           contactServices.updateContact('yellowpinkblue', params.id, formData)
           navigate('/')
           
       }
   
        const handleReset = (e) => {
           e.preventDefault();
           setFormData({
               name: '',
               phone: '',
               address: '',
               email: ''
           })
       }
   
       return (
   
           <div className="container g-3">
                 <h2>Edita tu contacto</h2>
               <form onSubmit={handleSubmit} className="form-control row g-2">
                   <input className="form-control" onChange={handleChange} value={formData.name} placeholder="nombre" name="name" type="text" />
                   <input className="form-control" onChange={handleChange} value={formData.phone} placeholder="teléfono" name="phone" type="text" />
                   <input className="form-control" onChange={handleChange} value={formData.email} placeholder="email" name="email" type="text" />
                   <input className="form-control" onChange={handleChange} value={formData.address} placeholder="domicilio" name="address" type="text" />
                   
                   <div className="text-center text-md-end p-3">

                        <button className="btn btn-outline-primary me-2 mb-2" onClick={handleSubmit}>
                            <i class="fa-solid fa-floppy-disk"></i>
                        </button>

                        <button className="btn btn-outline-warning me-2 mb-2" onClick={handleReset}>
                            <i className="fa-solid fa-eraser"></i>
                        </button>

                        <button className="btn btn-outline-danger me-2 mb-2" onClick={handleCancel}>
                            <i className="fa-solid fa-rotate-left"></i>
                        </button>

                    </div>
                </form>
           </div>
       )
}