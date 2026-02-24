<template>
  <div class="converter">
    <section class="converter-panel">
      <h2>Image Conversion</h2>
      <p class="subtitle">
        Select the longest-side dimension and target size, then convert to JPEG.
      </p>

      <div class="input-row">
        <label class="file-label" for="imageInput">Choose Image</label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          @change="onFileChange"
        />
      </div>

      <div v-if="selectedFile" class="file-meta">
        <div>
          <strong>Original</strong>
          <span>{{ selectedFile.name }}</span>
        </div>
        <div>
          <strong>Size</strong>
          <span>{{ formatBytes(originalSize) }}</span>
        </div>
      </div>

      <div class="settings-grid">
        <div class="field">
          <label for="resolutionSelect">Dimension (Longest Side)</label>
          <select
            id="resolutionSelect"
            v-model="selectedResolutionKey"
            :disabled="isProcessing"
          >
            <option
              v-for="option in resolutionOptions"
              :key="option.key"
              :value="option.key"
            >
              {{ option.label }} ({{ option.dimension }} px)
            </option>
          </select>
        </div>

        <div class="field">
          <label for="targetSizeMb">Target Size (MB)</label>
          <input
            id="targetSizeMb"
            v-model.number="targetSizeMb"
            type="number"
            min="0.1"
            step="0.1"
            :disabled="isProcessing"
          />
        </div>
      </div>

      <div class="actions">
        <button
          class="primary"
          :disabled="!selectedFile || isProcessing"
          @click="convert"
        >
          {{ isProcessing ? "Converting..." : "Start Conversion" }}
        </button>
        <button class="ghost" :disabled="isProcessing" @click="reset">
          Reset
        </button>
      </div>

      <p v-if="status" class="status">{{ status }}</p>
      <p v-if="error" class="error">{{ error }}</p>
    </section>

    <section class="preview-panel">
      <div class="preview-card">
        <h3>Original Preview</h3>
        <div class="preview-box">
          <img v-if="originalPreviewUrl" :src="originalPreviewUrl" alt="원본" />
          <p v-else>Select an image to see a preview.</p>
        </div>
      </div>

      <div class="preview-card">
        <h3>Converted Output</h3>
        <div class="preview-box">
          <img v-if="outputUrl" :src="outputUrl" alt="변환 결과" />
          <p v-else>Your converted image will appear here.</p>
        </div>
        <div v-if="outputFile" class="output-meta">
          <div>
            <strong>Output</strong>
            <span>{{ formatBytes(outputFile.size) }}</span>
          </div>
          <div>
            <strong>Reduction</strong>
            <span>{{ compressionRate }}</span>
          </div>
          <a class="download" :href="outputUrl" :download="outputFile.name">
            Download File
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { processImageToFile } from "@/lib/utils";

export default {
  name: "ImageConvert",
  data() {
    return {
      selectedFile: null,
      originalPreviewUrl: "",
      outputFile: null,
      outputUrl: "",
      originalSize: 0,
      resolutionOptions: [
        { key: "sd", label: "SD", dimension: 720 },
        { key: "hd", label: "HD", dimension: 1280 },
        { key: "fhd", label: "FHD", dimension: 1920 },
        { key: "qhd", label: "QHD", dimension: 2560 },
        { key: "uhd4k", label: "UHD 4K", dimension: 3840 },
      ],
      selectedResolutionKey: "uhd4k",
      targetSizeMb: 10,
      status: "",
      error: "",
      isProcessing: false,
    };
  },
  computed: {
    selectedResolution() {
      return (
        this.resolutionOptions.find(
          (option) => option.key === this.selectedResolutionKey,
        ) || this.resolutionOptions[this.resolutionOptions.length - 1]
      );
    },
    compressionRate() {
      if (!this.outputFile || !this.originalSize) return "-";
      const ratio = (1 - this.outputFile.size / this.originalSize) * 100;
      return `${Math.max(0, ratio).toFixed(1)}%`;
    },
  },
  methods: {
    async onFileChange(event) {
      const file = event.target.files && event.target.files[0];
      this.reset();
      if (!file) return;

      this.selectedFile = file;
      this.originalSize = file.size;
      this.error = "";

      try {
        this.originalPreviewUrl = await this.readFileAsDataUrl(file);
      } catch (err) {
        this.error = this.getErrorMessage(err);
      }
    },
    async convert() {
      if (!this.selectedFile) return;

      const targetSizeBytes = this.getTargetSizeBytes();
      if (!targetSizeBytes) {
        this.error = "Target size must be greater than 0 MB.";
        this.status = "";
        return;
      }

      this.isProcessing = true;
      this.status = `Converting to ${this.selectedResolution.label} (${this.selectedResolution.dimension}px), ${this.targetSizeMb} MB...`;
      this.error = "";

      try {
        if (!this.originalPreviewUrl) {
          this.originalPreviewUrl = await this.readFileAsDataUrl(this.selectedFile);
        }

        const resultFile = await processImageToFile(
          this.originalPreviewUrl,
          this.selectedFile.type,
          this.selectedFile.name,
          this.selectedFile.size,
          this.selectedResolution.dimension,
          targetSizeBytes,
        );

        if (this.outputUrl) {
          URL.revokeObjectURL(this.outputUrl);
        }
        this.outputFile = resultFile;
        this.outputUrl = URL.createObjectURL(resultFile);
        this.status = "Conversion complete";
      } catch (err) {
        this.error = this.getErrorMessage(err);
        this.status = "";
      } finally {
        this.isProcessing = false;
      }
    },
    reset() {
      if (this.outputUrl) {
        URL.revokeObjectURL(this.outputUrl);
      }
      this.outputUrl = "";
      this.outputFile = null;
      this.status = "";
      this.error = "";
    },
    getTargetSizeBytes() {
      const sizeMb = Number(this.targetSizeMb);
      if (!Number.isFinite(sizeMb) || sizeMb <= 0) return null;
      return Math.round(sizeMb * 1024 * 1024);
    },
    readFileAsDataUrl(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () =>
          reject(new Error("Failed to read the file."));
        reader.readAsDataURL(file);
      });
    },
    getErrorMessage(err) {
      const raw = err && err.message ? String(err.message) : "";
      if (raw.includes("지원하지 않는 이미지 포맷")) {
        return "Unsupported image format. Use JPG, PNG, WebP, GIF, or BMP.";
      }
      if (raw.includes("이미지 데이터를 해석")) {
        return "Failed to decode the image.";
      }
      if (raw.includes("파일이 너무 복잡")) {
        return `This file is too complex to process within ${this.targetSizeMb} MB.`;
      }
      if (raw) return raw;
      return "Conversion failed.";
    },
    formatBytes(bytes) {
      if (bytes === 0) return "0 B";
      if (!bytes) return "-";

      const units = ["B", "KB", "MB", "GB"];
      let value = bytes;
      let unitIndex = 0;

      while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024;
        unitIndex += 1;
      }

      const precision = value >= 10 || unitIndex === 0 ? 0 : 1;
      return `${value.toFixed(precision)} ${units[unitIndex]}`;
    },
  },
  beforeUnmount() {
    if (this.outputUrl) {
      URL.revokeObjectURL(this.outputUrl);
    }
  },
};
</script>

<style scoped>
.converter {
  display: grid;
  gap: 2rem;
  padding: 2rem 0 3rem;
}

.converter-panel {
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.subtitle {
  margin: 0.5rem 0 1.5rem;
  color: #555;
}

.input-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.file-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: #222;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
}

input[type="file"] {
  border: 1px dashed #bbb;
  padding: 0.6rem;
  border-radius: 12px;
  background: #fafafa;
}

.file-meta {
  margin-top: 1rem;
  display: grid;
  gap: 0.5rem;
}

.file-meta strong {
  display: inline-block;
  width: 6rem;
  color: #444;
}

.settings-grid {
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
}

.field {
  display: grid;
  gap: 0.4rem;
}

.field label {
  font-size: 0.9rem;
  color: #444;
  font-weight: 600;
}

.field input,
.field select {
  border: 1px solid #d6d6d6;
  background: #fff;
  border-radius: 10px;
  padding: 0.55rem 0.7rem;
  font-size: 0.95rem;
}

.actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
}

button {
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

button.primary {
  background: #ff9a3c;
  color: #1b1b1b;
}

button.ghost {
  background: #f1f1f1;
  color: #333;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status {
  margin-top: 1rem;
  color: #1a6b1a;
}

.error {
  margin-top: 1rem;
  color: #c0392b;
}

.preview-panel {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.preview-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.preview-box {
  margin-top: 1rem;
  border-radius: 12px;
  padding: 1rem;
  /* background: linear-gradient(135deg, #f5f5f5, #fff3e6); */
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.preview-box img {
  max-width: 100%;
  max-height: 260px;
  border-radius: 12px;
}

.output-meta {
  margin-top: 1rem;
  display: grid;
  gap: 0.5rem;
}

.output-meta strong {
  display: inline-block;
  width: 6rem;
  color: #444;
}

.download {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: #222;
  color: #fff;
  text-decoration: none;
  width: fit-content;
}

@media (max-width: 680px) {
  .converter-panel {
    padding: 1.5rem;
  }

  .actions {
    flex-direction: column;
    align-items: stretch;
  }

  button {
    width: 100%;
  }
}
</style>
