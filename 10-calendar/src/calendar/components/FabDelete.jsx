import React from 'react';
import { useUiStore } from '../../store/hook/useUiStore';
import useCalendarStore from '../../store/hook/useCalendarStore';
import { addHours } from 'date-fns';

export const FabDelete = () => {

const{startDeletingEvent,hasEventSelected} = useCalendarStore();

const handleDelete =()=>{
  startDeletingEvent();

}
    return (
      <>
        <button
        className='btn btn-danger fab-danger'
        onClick={handleDelete}
        style={{
          display: hasEventSelected ? '' : 'none'
        }}
        >
        <i className='fas fa-trash-alt'></i>
        </button>
      </>
    );
};

export default FabDelete;