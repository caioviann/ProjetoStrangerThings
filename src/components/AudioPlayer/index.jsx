import { useEffect, useRef, useState } from 'react';
import './style.css';

function AudioPlayer({ src, loop = true, autoplay = true, volume = 0.4 }) {
    const audioRef = useRef(null);
    const [showPlayButton, setShowPlayButton] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        
        if (!audio) return;
        
        // Configura o volume e loop imediatamente
        audio.volume = volume;
        audio.loop = loop;
        audio.muted = false;

        const tryPlay = async () => {
            try {
                audio.currentTime = 0;
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    await playPromise;
                }
                setHasInteracted(true);
                setShowPlayButton(false);
            } catch (error) {
                // Autoplay bloqueado - mostra botão
                setShowPlayButton(true);
            }
        };

        // Tenta tocar quando o áudio tiver dados suficientes para começar
        const handleLoadedData = () => {
            if (autoplay && !hasInteracted) {
                tryPlay();
            }
        };

        const handleCanPlay = () => {
            if (autoplay && !hasInteracted) {
                tryPlay();
            }
        };

        const handleCanPlayThrough = () => {
            if (autoplay && !hasInteracted) {
                tryPlay();
            }
        };

        // Adiciona múltiplos listeners para pegar o momento certo
        audio.addEventListener('loadeddata', handleLoadedData);
        audio.addEventListener('canplay', handleCanPlay);
        audio.addEventListener('canplaythrough', handleCanPlayThrough);
        
        // Tenta tocar imediatamente se já tiver dados
        if (autoplay && audio.readyState >= 2 && !hasInteracted) {
            setTimeout(() => tryPlay(), 100);
        }

        // Tenta tocar após um pequeno delay para garantir que está pronto
        const immediatePlay = setTimeout(() => {
            if (autoplay && !hasInteracted && audio.readyState >= 2) {
                tryPlay();
            }
        }, 200);

        // Handler para interação do usuário (fallback)
        const handleUserInteraction = () => {
            if (autoplay && !hasInteracted && audio) {
                tryPlay();
            }
        };

        // Escuta interações do usuário na página inteira
        document.addEventListener('click', handleUserInteraction, { once: true, passive: true });
        document.addEventListener('touchstart', handleUserInteraction, { once: true, passive: true });
        document.addEventListener('keydown', handleUserInteraction, { once: true, passive: true });

        return () => {
            clearTimeout(immediatePlay);
            audio.removeEventListener('loadeddata', handleLoadedData);
            audio.removeEventListener('canplay', handleCanPlay);
            audio.removeEventListener('canplaythrough', handleCanPlayThrough);
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
        };
    }, [autoplay, loop, volume, hasInteracted, src]);

    const handlePlayClick = async () => {
        const audio = audioRef.current;
        if (audio) {
            try {
                audio.currentTime = 0;
                await audio.play();
                setShowPlayButton(false);
                setHasInteracted(true);
            } catch (error) {
                console.error('Erro ao tocar música:', error);
            }
        }
    };

    if (!src) {
        return null;
    }

    return (
        <>
            <audio 
                ref={audioRef}
                src={src}
                loop={loop}
                preload="auto"
                autoPlay={autoplay}
                playsInline
            />
            {showPlayButton && (
                <button 
                    className="play-music-button"
                    onClick={handlePlayClick}
                >
                    🎵 Tocar Música
                </button>
            )}
        </>
    );
}

export default AudioPlayer;

