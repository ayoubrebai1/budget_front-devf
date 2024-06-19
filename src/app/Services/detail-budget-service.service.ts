import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailBudgetComponent } from '../Components/detail-budget/detail-budget.component';
import { detailbudget } from '../Models/detailbudget';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailBudgetServiceService {
  private baseUrl = 'http://localhost:8081/detailBudget';
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(this.baseUrl);
  }
  createDetailBudget(detailBudget) {
    return this.http.post(this.baseUrl, detailBudget, { responseType: 'text' });
  }
  changeStatus(detail) {
    return this.http.put(`${this.baseUrl}/changeStatus`, detail);
  }
  DeleteDetailBudget(detailBudget) {
    return this.http.delete(this.baseUrl, detailBudget);
  }
  UpdateDetail(detail) {
    return this.http.put(this.baseUrl, detail);
  }
  sendMessage(detail) {
    return this.http.put(`${this.baseUrl}/sendMessage`, detail);
  }
  
  getDetailById(id: number): Observable <detailbudget> {
    return this.http.get<detailbudget>(`${this.baseUrl}/${id}`);
  }
  
}
