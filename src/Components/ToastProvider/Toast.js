// src/Components/ToastProvider/Toast.js
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

const ToastMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#4CAF50';
      case 'error':
        return '#F44336';
      case 'warning':
        return '#FF9800';
      case 'info':
      default:
        return '#2196F3';
    }
  }};
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: 1;
  transform: translateY(0);
  max-width: 300px;
  margin: 10px;

  &.fade-out {
    opacity: 0;
    transform: translateY(20px);
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const ToastIcon = styled.div`
  font-size: 24px;
`;

export const Toast = ({ toast, removeToast }) => {
  const { message, type, id } = toast;

  useEffect(() => {
    const timer = setTimeout(() => removeToast(id), 3000); 
    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <ToastMessage type={type} className="toast-message">
      <ToastIcon>
        {type === 'success' && <FaCheckCircle />}
        {type === 'error' && <FaTimesCircle />}
        {type === 'warning' && <FaExclamationTriangle />}
        {type === 'info' && <FaInfoCircle />}
      </ToastIcon>
      <span>{message}</span>
    </ToastMessage>
  );
};

export default Toast;
