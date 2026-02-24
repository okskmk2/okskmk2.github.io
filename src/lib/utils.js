/**
 * 이미지 단계별 압축 및 변환 함수
 * 1단계: 4K 리사이징
 * 2단계: 품질 0.8까지 하향
 * 예외: 처리 후에도 10MB 초과 시 에러 반환
 * * @param {string} base64Str - 원본 이미지의 Base64 데이터
 * @param {string} mimeType - 원본 이미지의 MIME 타입
 * @param {string} filename - 저장될 파일 이름
 * @param {number} originalSize - (선택) 원본 파일의 크기(Byte)
 * @returns {Promise<File>} - 최종 압축된 JPEG File 객체
 */
export async function processImageToFile(
  base64Str,
  mimeType,
  filename,
  originalSize = null,
) {
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB
  const TARGET_MIME = "image/jpeg";

  // 1. MIME 타입 유효성 검사
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "image/bmp",
  ];
  if (!allowedMimeTypes.includes(mimeType.toLowerCase())) {
    throw new Error(
      `지원하지 않는 이미지 포맷입니다: ${mimeType}. (JPG, PNG, WebP, GIF, BMP만 가능)`,
    );
  }

  const finalFileName = filename.split(".")[0] + ".jpg";

  // 2. Image 객체 생성 및 로드
  const img = await new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () =>
      reject(new Error("이미지 데이터를 해석하는 데 실패했습니다."));
    image.src = base64Str;
  });

  // 3. 캔버스 생성 및 1차 작업: 4K 리사이징
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  const maxDim = 3840;
  let width = img.width;
  let height = img.height;

  // 4K보다 큰 경우에만 축소
  if (width > maxDim || height > maxDim) {
    const scale = maxDim / Math.max(width, height);
    width *= scale;
    height *= scale;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);

  // 4. 초기 압축 수행 (Quality 0.95 권장 - 1.0은 용량 뻥튀기 위험이 큼)
  let finalBlob = await new Promise((res) =>
    canvas.toBlob(res, TARGET_MIME, 0.95),
  );

  // 5. 2차 작업: 10MB 초과 시 품질 하향 (0.8까지)
  if (finalBlob.size > MAX_SIZE) {
    for (let q = 0.9; q >= 0.8; q -= 0.05) {
      finalBlob = await new Promise((res) =>
        canvas.toBlob(res, TARGET_MIME, q),
      );
      if (finalBlob.size <= MAX_SIZE) break;
    }
  }

  // 6. 최종 검증: 품질 0.8까지 낮췄음에도 10MB를 초과하는 경우
  if (finalBlob.size > MAX_SIZE) {
    throw new Error("파일이 너무 복잡하여 처리가 불가능합니다.");
  }

  // 7. (선택적 안전장치) 만약 변환 결과가 원본보다 커졌다면?
  // 4K 리사이징을 안 한 상태에서 품질만 변환될 때 발생 가능
  if (originalSize && finalBlob.size > originalSize) {
    console.warn("압축 결과가 원본보다 커서 처리를 중단합니다.");
    // 이 경우 상황에 따라 에러를 던지거나, 원본을 그대로 쓰도록 호출부에서 제어하세요.
  }

  return new File([finalBlob], finalFileName, {
    type: TARGET_MIME,
    lastModified: Date.now(),
  });
}
