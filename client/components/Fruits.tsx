import type { Fruit, NewFruit } from '../../models/fruit'
import { useAuth0 } from "@auth0/auth0-react";

import { useState, useEffect } from 'react'

import { addFruit, deleteFruit, getFruits, updateFruit } from '../api'
import SelectedFruitForm from './SelectedFruit'
import AddFruitForm from './AddFruit'
import { ErrorMessage } from './Styled'

type State =
  | {
      selectedFruit: Fruit
      show: 'selected'
    }
  | {
      selectedFruit: null
      show: 'add' | 'none'
    }

const closedForm: State = {
  selectedFruit: null,
  show: 'none',
}



function Fruits() {
//user can see
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();

  const [error, setError] = useState('')
  const [fruits, setFruits] = useState<Fruit[]>([])
  const [form, setForm] = useState<State>(closedForm)

// TODO: call the useAuth0 hook and destructure getAccessTokenSilently
// const auth0 = useAuth0();
// const token = auth0.getAccessTokenSilently();
  

  useEffect(() => {
    getFruits()
      .then(setFruits)
      .catch((err) => setError(err.message))
  }, [])

  const handleAdd = async (fruit: NewFruit) => {
    try {
      // TODO: pass token as second parameter
      const token = await getAccessTokenSilently();
      const fruits = await addFruit(fruit, token)

      setFruits(fruits)
      handleCloseForm()
      hideError()
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      }
    }
  }


  
  const handleUpdate = async (updatedFruit: Fruit) => {    
    try {
      // // Check if the user is the creator of the fruit
      // if (updatedFruit.addedByUser !== user?.sub) {
      //   setError('You are not authorized to edit this fruit.')
      //   return
      // }
      const token = await getAccessTokenSilently();
      const fruits = await updateFruit(updatedFruit, token)

      setFruits(fruits)
      handleCloseForm()
      hideError()
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      }
    }
  }


  const handleDelete = async (id: number) => {
    try {
      // TODO: pass token as second parameter
      const token = await getAccessTokenSilently();
      const fruits = await deleteFruit(id, token)

      setFruits(fruits)
      handleCloseForm()
      hideError()
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      }
    }
  }

  const hideError = () => {
    setError('')
  }

  const handleOpenAddForm = () => {
    setForm({ show: 'add', selectedFruit: null })
  }

  const handleCloseForm = () => {
    setForm(closedForm)
  }


  // const handleSelectFruit = (fruit: Fruit) => {
  //   if (fruit.addedByUser !== user?.sub) {
  //     setForm({ show: 'none', selectedFruit: null });
  //   } else {
  //     setForm({ show: 'selected', selectedFruit: fruit });
  //   }
  // };

  useEffect(() => {
    setError('');
  }, [form.show, form.selectedFruit]);



  const handleSelectFruit = (fruit: Fruit) => {
    if (fruit.addedByUser !== user?.sub) {
      setError(`You are not authorized to edit this ${fruit.name}.`)
      setForm({ show: 'none', selectedFruit: null });
    } else {
      setForm({ show: 'selected', selectedFruit: fruit });
    }
  };



  return (

    <>
      {error && <ErrorMessage onClick={hideError}>Error: {error}</ErrorMessage>}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <button onClick={() => handleSelectFruit(fruit)} >
              {fruit.name}
            </button>
          </li>
        ))}
      </ul>

    {isAuthenticated && (
      <>
        {form.show === 'add' ? (
          <AddFruitForm onAdd={handleAdd} onClose={handleCloseForm} />
        ) : (
          <button onClick={handleOpenAddForm}>Add a Fruit</button>
        )}

        {form.show === 'selected' && (
          <SelectedFruitForm
            key={form.selectedFruit.id}
            fruit={form.selectedFruit}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onClose={handleCloseForm}
          />
        )}      
      </>
    )}
  </>
  )
}

export default Fruits
