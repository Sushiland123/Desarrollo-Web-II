import mongoose, { Schema } from 'mongoose';

// Definimos la interfaz para el usuario, asegurando el tipado en TypeScript
interface IUser {
  name: string;
  email: string;
  password: string;
  username: string;
}

// Definimos el esquema del usuario en la base de datos
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,  // El nombre es obligatorio
    trim: true,      // Elimina espacios en blanco al inicio y al final
  },
  email: {
    type: String,
    required: true,
    unique: true,    // Garantiza que el email sea único en la base de datos
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,  // Debe ser único para evitar duplicados
    unique: true,
    lowercase: true, // Convierte el valor a minúsculas automáticamente
    trim: true,
  },
});

// Creamos el modelo de usuario basado en el esquema
const User = mongoose.model<IUser>('User', userSchema);

export default User;
