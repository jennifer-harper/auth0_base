import request from 'superagent'

import * as Chr from '../models/basic'
const serverURL = '/api/v1/basic'


export function getUploads(): Promise<Chr.BasicId[]> {
    return request
    .get(serverURL)
    .then(res => res.body)
  }
  
  export function createUpload(data:Chr.BasicData): Promise<Chr.BasicId>{
    return request
    .post(serverURL)
    .send(data)
    .then(res => res.body)
  }
  
  export function delUpload(id:number){
    return request
    .delete(`${serverURL}/${id}`)
    .then((res) => {return res.body})
  }


  export function getIdUpload(id:number){
    return request
    .get(`${serverURL}/${id}`)
    .then(res => res.body)
  }

  export function editUpload(id:number, data:Chr.BasicData): Promise<Chr.BasicId>{
    return request
      .patch(`${serverURL}/${id}`)
      .send(data)
      .then((res) => {
        return res.body;
      })
  }