import { useState } from "react";
import { useNavigate } from "react-router-dom";
import contactServices from "../services/contactServices";

export const CrearContactos = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState(({
        name: '',
        phone: '',
        address: '',
        email: ''
    }));
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
        contactServices.crearContactos('yellowpinkblue', formData)
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

        <div className="container">
              <h2>Crea un nuevo contacto</h2>
            <form onSubmit={handleSubmit} className="form-control row g-2">
                <input className="form-control" onChange={handleChange} value={formData.name} placeholder="nombre" name="name" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.phone} placeholder="teléfono" name="phone" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.email} placeholder="email" name="email" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.address} placeholder="domicilio" name="address" type="text" />
                <div className="hstack gap-2">
                    <input className="btn btn-primary" type="submit" onClick={handleSubmit} />
                    <input className="btn btn-warning" type="reset" onClick={handleReset} />
                    <button className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
                </div>    
            </form>
        </div>
    )
}