import dbCon from './connection'
import * as Chr from '../../models/basic'

//*******************Get all
export function fetchAllDB(){
    return dbCon('basic')
}

//*******************Delete existing
export function deleteDB (id:number){
    return dbCon('basic').delete().where('id', id)
}
//*******************Create new
export function createDB (data:Chr.BasicData){
    return dbCon('basic').insert(data)
    .returning('*')
}


//*******************Get and edit based on id
export function getIdDB(id:number){
    return dbCon('basic')
    .select("*")
    .where ('id', id)
    .first()
}

//create database function
export function editDB(id: number, data:Chr.BasicData){
    return dbCon('basic')
    .where('id', id)
    .update(data)
    .returning('*')
 }