import React, { useState } from "react";
import Register from "views/register";
import { register as registerRequest } from 'api/guest';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { routeCodes } from "routes";
import Auth from 'helpers/Auth';
import { useDispatch } from "react-redux";
import { setSiteInited } from "state/main/mainSlice";

const RegisterContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const handleSubmit = async (inputs) => {
    try {
      setIsRequestInProgress(true);
      const response = await registerRequest(inputs);
      const { data: { authorization: { token } } } = response;
      Auth.setToken(token);
      toast.success(`Authenticated as ${ inputs.email }`, {
        autoClose: 2000,
      });
      setTimeout(() => {
        dispatch(setSiteInited(false));
        navigate(routeCodes.HOMEPAGE);
      }, 2200);
    } catch (error) {
      if(error.response && error.response.status) {
        switch (error.response.status) {
          case 401 : {
            toast.error('Invalid credentials');
            break;
          }
          case 422 : {
            const errors = error.response.data.errors;
            Object.keys(errors).forEach(key => {
              toast.error(errors[key][0]);
            });
            break;
          }
          default: {
            toast.error('Something went wrong');
          }
        }
      } else {
        toast.error('Something went wrong');
      }
      setIsRequestInProgress(false);
    }
  };

  return (
    <Register
      onSubmit={ handleSubmit }
      isFormLoading={ isRequestInProgress }
    />
  )
};

export default RegisterContainer;
