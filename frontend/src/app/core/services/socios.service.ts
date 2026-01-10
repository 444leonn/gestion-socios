import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SociosService {
  private apiUrl = `${environment.apiUrl}/socios`;

  async getAll(): Promise<Socio[]> {
    try {
      const response = await fetch(this.apiUrl);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching socios:', error);
      throw error;
    }
  }

  async getById(id: number): Promise<Socio> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching socio:', error);
      throw error;
    }
  }

  async create(socio: Omit<Socio, 'id'>): Promise<Socio> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(socio)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating socio:', error);
      throw error;
    }
  }

  async update(socio: Socio): Promise<void> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(socio)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('Error updating socio:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('Error deleting socio:', error);
      throw error;
    }
  }
}