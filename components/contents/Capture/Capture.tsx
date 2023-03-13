import { useRef, useEffect, useState } from "react";

function CaptureScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageDataUrl, setImageDataUrl] = useState("");

  useEffect(() => {
    // Canvas 크기 설정
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  const handleCapture = () => {
    // CanvasRenderingContext2D 객체 가져오기
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (canvas && context) {
      context.drawImage(
        document.documentElement,
        0,
        0,
        canvas.width,
        canvas.height
      );
      const dataUrl = canvas.toDataURL();
      setImageDataUrl(dataUrl);
    }
    // Canvas에 그림 그리기

    // 이미지 저장
  };

  return (
    <div>
      <canvas ref={canvasRef} />
      <button onClick={handleCapture}>Capture</button>
      {imageDataUrl && <img src={imageDataUrl} alt="captured" />}
    </div>
  );
}

export default CaptureScreen;
