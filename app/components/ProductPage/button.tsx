import React, { useState } from 'react';


const ToggleBlock = () => {
    // Создаем состояние для отслеживания видимости блока
    const [isOpen, setIsOpen] = useState(false);

    // Функция для переключения состояния
    const toggleBlock = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            {/* Кнопка для переключения */}
            <button

                onClick={toggleBlock}
            >
                {isOpen ? 'Скрыть информацию' : 'Показать информацию'}
            </button>

            {/* Скрытый блок */}
            {isOpen && (
                <div >
                    <h2>Важная информация</h2>
                    <p>
                        Здесь размещается ваш контент или информация,
                        которая показывается при открытии блока.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ToggleBlock;
