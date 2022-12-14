import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import {
  useState,
  useRef,
} from "react";
import './index.css';
import { toast } from "react-toastify";

const TodoRow = ({
  todo,
  onTodoUpdate,
  onTodoDelete,
  editing,
  onEditingItemIdSet,
}) => {
  const [editingTitle, setEditingTitle] = useState('');
  const editingInputRef = useRef();
  useEffect(() => {
    if(editing && editingInputRef.current) {
      editingInputRef.current.focus();
    }
  }, [editing]);
  return (
    <div className='todo-row'>
      {
        editing ? (
          <>
            <input
              value={ editingTitle }
              ref={ editingInputRef }
              onChange={ (e) => {
                setEditingTitle(e.target.value)
              } }
              className='edit-input roboto-regular'
            />
          </>
        ) :
          (
            <label className={ todo.completed ? 'complete text-black-plain ch-container' : 'text-black-plain ch-container' }>
              <input
                type='checkbox'
                checked={ todo.completed }
                onChange={ () => {
                  const changedTodo = {
                    ...todo,
                    completed: !todo.completed,
                  };
                  onTodoUpdate(changedTodo);
                } }
              />
              <span className='checkmark'></span>
              <span className='roboto-regular ml-7'>
                { todo.title }
              </span>
            </label>
          )
      }

      {
        editing ? (
          <div>
            <span
              onClick={ () => {
                if(0 === editingTitle.length) {
                  toast.error('Title can\'t be blank');
                  return;
                }
                const newTodo = {
                  ...todo,
                  title: editingTitle,
                };
                onTodoUpdate(newTodo);
                onEditingItemIdSet(null);
              } }
              className='edit-action'
              role='presentation'
            >
              Save
            </span>
            <span
              onClick={ () => {
                onEditingItemIdSet(null);
              } }
              role='presentation'
              className='delete-action'
            >
              Cancel
            </span>
          </div>
        ) : (
          <div>
            <span
              className='edit-action'
              role='presentation'
              onClick={ () => {
                setEditingTitle(todo.title);
                onEditingItemIdSet(todo.id);
              } }
            >
              Edit
            </span>
            <span
              className='delete-action'
              role='presentation'
              onClick={ () => onTodoDelete(todo.id) }
            >
              Delete
            </span>
          </div>
        )
      }

    </div>
  )
};

TodoRow.propTypes = {
  todo: PropTypes.object,
  editing: PropTypes.bool,
  onTodoUpdate: PropTypes.func,
  onTodoDelete: PropTypes.func,
  onEditingItemIdSet: PropTypes.func,
};

TodoRow.defaultProps = {
  todo: {},
  editing: false,
  onTodoUpdate: console.log,
  onTodoDelete: console.log,
  onEditingItemIdSet: console.log,
};

export default TodoRow;
