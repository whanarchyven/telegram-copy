import React, { useRef, useEffect } from 'react';

interface AudioVisualizerProps {
    audioData: number[];
    type:'mine'|'foreign'
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ audioData,type }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const width = canvas.width;
        const height = canvas.height;

        // Отрисовка аудио визуализации
        const draw = () => {
            if (!context) return;

            context.clearRect(0, 0, width, height);
            context.fillStyle = type=='foreign'?'#d7d7d7':'#5ca853'; // Цвет столбцов
            const barWidth = (width / audioData.length);
            let barHeight;
            let x = 0;

            for (let i = 0; i < audioData.length; i++) {
                barHeight = audioData[i];

                if (!context) return;
                context.fillRect(x, height - barHeight, barWidth, barHeight);

                x += barWidth + 4;
            }
        };

        draw();
    }, [audioData]);

    return <canvas className={'w-[200px] h-6'} ref={canvasRef} />;
};

export default AudioVisualizer;
