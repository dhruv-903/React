import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../store/slices/UserSlice'
import styled from 'styled-components';

function DeleteAllUser() {

  const dispatch = useDispatch();

  const deleteAllUser = () => {
    dispatch(deleteUsers(0))
  }

  return (
    <Wrapper>
      <button onClick={deleteAllUser} >Delete All User</button>
    </Wrapper>
  )
}

export default DeleteAllUser

const Wrapper = styled.section`
  button{
    background: red;
    color: white;
    font-size: 23px;
    border: 1px solid red;
    padding: 10px 20px;
    border-radius: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    margin-left: 30px;
    margin-bottom: 30px;
  }
`;