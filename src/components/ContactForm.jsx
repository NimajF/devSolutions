import { useState } from "react"

export default function ContactForm(){


    
    return (
        <form>
        <label htmlFor="name">Nombre</label>
        <input autoComplete="on" type="text" id="name" name="name" placeholder="Escribe tu nombre" />

        <label htmlFor="email">Correo Electronico</label>
        <input autoComplete="on" type="email" id="email" name="email" placeholder="Escribe tu email" />

        <label htmlFor="message">Mensaje</label>
        <textarea
            id="message"
            name="message"
            placeholder="Describa su proyecto"
        />

        <button type="submit">Enviar</button>
      </form>
    )
}