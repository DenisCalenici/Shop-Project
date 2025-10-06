
import React from 'react';
import s from './LoadingOverlay.module.css';


interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  message = "Загрузка товара..." 
}) => {
  return (
    <div className={s.loadingOverlay}>
      
      
      <div className={s.loadingContainer}>
        
        
        <div className={s.loadingAnimation}>
          <div className={s.circle}></div>
          <div className={s.circle}></div>
          <div className={s.circle}></div>
        </div>
        
     
        <p className={s.loadingMessage}>{message}</p>
        
      </div>
    </div>
  );
};

export default LoadingOverlay;