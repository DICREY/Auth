// Librarys 
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Imports
import '../css/user.css'

// Main component
export const UserProfile = () => {
  const { user } = useAuth0();

  // Formatear fecha de creación (si está disponible)
  const formatDate = (dateString) => {
    if (!dateString) return 'No disponible';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <main className="user-profile-container">
      <picture className="user-profile-header">
        <img
          src={user.picture}
          alt="Profile"
          className="user-avatar"
        />
        <h2 className="user-name">{user.name}</h2>
        <p className="user-nickname">{user.nickname || 'Sin apodo'}</p>
      </picture>

      <section className="user-info-grid">
        <div className="info-item">
            <label>Email</label>
            <p>{user.email || 'No disponible'}</p>
            <span className={`verification-badge ${user.email_verified ? 'verified' : 'unverified'}`}>
              {user.email_verified ? 'Verificado' : 'No verificado'}
            </span>
        </div>

        <div className="info-item">
            <label>Última actualización</label>
            <p>{formatDate(user.updated_at)}</p>
        </div>

        <div className="info-item">
            <label>Localidad</label>
            <p>{user.locale || 'No especificada'}</p>
        </div>

        <div className="info-item">
            <label>Teléfono</label>
            <p>{user.phone_number || 'No proporcionado'}</p>
        </div>

        <div className="info-item">
          <label>ID de usuario</label>
          <p className="user-id">{user.sub}</p>
        </div>

        {user.app_metadata && Object.keys(user.app_metadata).length > 0 && (
          <div className="info-item">
              <label>Metadatos</label>
              <pre className="metadata">
                {JSON.stringify(user.app_metadata, null, 2)}
              </pre>
          </div>
        )}
      </section>
    </main>
  );
};
