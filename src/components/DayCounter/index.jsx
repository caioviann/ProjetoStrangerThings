import { useState, useEffect } from 'react';
import './style.css';

function DayCounter() {
    // Data de início do namoro - ALTERE AQUI a data que vocês começaram a namorar
    // Formato: Ano, Mês (0-11), Dia
    const startDate = new Date(2024, 4, 26); // Exemplo: 1 de janeiro de 2024
    const [days, setDays] = useState(0);

    useEffect(() => {
        const calculateDays = () => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            startDate.setHours(0, 0, 0, 0);
            
            const timeDifference = today.getTime() - startDate.getTime();
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            
            setDays(daysDifference);
        };

        calculateDays();
        // Atualiza a cada minuto para garantir que está sempre correto
        const interval = setInterval(calculateDays, 60000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="day-counter">
            <h2 className="counter-title">Te amando há</h2>
            <div className="counter-number">{days}</div>
            <h2 className="counter-title">dias</h2>
        </div>
    );
}

export default DayCounter;

