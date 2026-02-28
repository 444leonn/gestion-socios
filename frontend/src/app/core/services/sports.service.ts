import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Deporte } from "../models/deporte";

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  private apiUrl = `${environment.apiUrl}/deportes`;

  async getAll(): Promise<Deporte[]> {
    try {
      const response = await fetch(this.apiUrl);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching sports:', error);
      throw error;
    }
  }

  async getById(id: number): Promise<Deporte> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching sport:', error);
      throw error;
    }
  }

  async create(deporte: Omit<Deporte, 'id'>): Promise<Deporte> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(deporte)
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating sport:', error);
      throw error;
    }
  }

  async update(id: number, deporte: Partial<Deporte>): Promise<Deporte> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(deporte)
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating sport:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting sport:', error);
      throw error;
    }
  }
}