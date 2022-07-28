import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }
  getAllEvents(){
    return this.http.get('http://localhost:3000/event')
  }
  postEvent(event:any){
    return this.http.post('http://localhost:3000/event',event)
  }
  deleteEvent(id:any){
    return this.http.delete('http://localhost:3000/event/'+id)
  }
  updateEvent(id:any,newEvent:any){
    return this.http.put('http://localhost:3000/event/'+id,newEvent)
  }
  getOneEvent(id:any){
    return this.http.get(`http://localhost:3000/event/${id}`)
  }
}
