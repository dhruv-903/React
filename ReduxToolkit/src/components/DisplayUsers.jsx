import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { removeUser } from '../store/slices/UserSlice';

function DisplayUsers() {

    const data = useSelector((state) => {
        return state.users;
    })

    const dispatch = useDispatch()

    const deleteUsers = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <Wrapper>
            {
                data.map((user, id) => {
                    return <li key={id} >{user}
                        <button className='btn btn-delete' onClick={() => deleteUsers(id)} >
                            <RiDeleteBinLine /> Delete
                        </button>
                    </li>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
li{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    border-bottom:1px solid #eee;

    &:first-child{
        border-top:1px solid #eee
    }
}

button{
    background:red;
}

`;

export default DisplayUsers