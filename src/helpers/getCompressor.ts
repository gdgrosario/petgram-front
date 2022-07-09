import Compressor from 'compressorjs';

export async function getCompressor(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,

      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success: resolve,

      error: reject,
    });
  });
}
