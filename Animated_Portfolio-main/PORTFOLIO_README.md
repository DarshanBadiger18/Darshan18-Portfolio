<div align="center">

# 👨‍💻 Darshan Badiger — Project Portfolio

[![GitHub](https://img.shields.io/badge/GitHub-NITHINKR06-181717?style=for-the-badge&logo=github)](https://github.com/NITHINKR06)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-00C7B7?style=for-the-badge&logo=vercel)](https://nithinkr.vercel.app)

**Frontend Developer** · **Cybersecurity Enthusiast** · **NMAMIT '27**

*Designing & developing interactive web interfaces with React, and applying principles of Offensive Security, Threat Detection & System Hardening.*

---

**98 Repositories** · **74 Public** · **24+ Private** · **18 Featured Below**

</div>

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|---|---|
| **Languages** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white) ![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) ![Spring](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) |
| **AI / ML** | ![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD21E?style=flat-square&logo=huggingface&logoColor=black) ![OpenAI](https://img.shields.io/badge/GPT--4o-412991?style=flat-square&logo=openai&logoColor=white) ![Tesseract](https://img.shields.io/badge/Tesseract_OCR-4285F4?style=flat-square&logoColor=white) ![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white) ![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white) ![SHAP](https://img.shields.io/badge/SHAP-4B275F?style=flat-square&logoColor=white) |
| **Security** | ![Kali Linux](https://img.shields.io/badge/Kali_Linux-557C94?style=flat-square&logo=kalilinux&logoColor=white) ![iptables](https://img.shields.io/badge/iptables-FCC624?style=flat-square&logo=linux&logoColor=black) ![HMAC-SHA256](https://img.shields.io/badge/HMAC--SHA256-4B275F?style=flat-square&logoColor=white) |
| **Tools** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) ![Pygame](https://img.shields.io/badge/Pygame-3776AB?style=flat-square&logo=python&logoColor=white) |

</div>

---

## 🏆 Featured Projects

> Only projects with **complete project documentation** in their README are listed below.

---

### 🔐 Cybersecurity & Security

---

#### 1. 🛡️ WALRUS — Cybersecurity & Digital Safety Platform

[ · `TypeScript 60.5%` · `JavaScript 34.7%` · `Python 1.9%`



<details>
<summary>💻 <b>Code Snippet — AI Threat Scoring</b></summary>

```typescript
interface ThreatAnalysisResult {
  threatScore: number;       // 0-10 scale
  confidence: number;        // Model confidence %
  category: 'phishing' | 'malware' | 'fraud' | 'safe';
  reasoning: string;
  recommendations: string[];
}

async function analyzeContent(input: string, type: 'text' | 'url' | 'email'): Promise<ThreatAnalysisResult> {
  const result = await huggingFaceAPI.classify(input, {
    model: 'facebook/bart-large-mnli',
    candidateLabels: ['phishing', 'malware', 'fraud', 'legitimate'],
  });
  return {
    threatScore: calculateThreatScore(result),
    confidence: result.scores[0] * 100,
    category: result.labels[0],
    reasoning: generateReasoning(result, input),
    recommendations: getRecommendations(result.labels[0]),
  };
}
```

</details>

---

#### 2. 🧠 DriftGuard — ML Network Intrusion Detection System

[![Repo](https://img.shields.io/badge/Repo-DriftGuard-blue?style=flat-square&logo=github)](https://github.com/NITHINKR06/DriftGuard) · `Jupyter Notebook 86.4%` · `Python 8.0%`

DriftGuard is a machine learning-based network intrusion detection system (NIDS) that addresses one of the most persistent challenges in cybersecurity: the inability of ML models to generalize across different network environments. Most intrusion detection systems fail when deployed in networks different from where they were trained, but DriftGuard maintains robust performance across diverse environments — from academic networks to real-world ISP traffic — without requiring retraining.

The system employs an ensemble of three complementary AI models working together through a weighted fusion approach. The Isolation Forest provides fast, unsupervised tree-based anomaly detection on high-dimensional network traffic data with a contamination factor of 0.1. The Dense Autoencoder uses a symmetric architecture (77 → 50 → 25 → 50 → 77) trained exclusively on benign traffic samples, detecting anomalies through reconstruction error analysis. The Bidirectional LSTM Autoencoder captures temporal dependencies in network flows using a window size of 10 timesteps, identifying sequential attack patterns that point-based models miss. Risk scores are computed via weighted ensemble fusion (0.3 × Isolation Forest + 0.4 × Autoencoder + 0.3 × LSTM), and SHAP (SHapley Additive exPlanations) analysis provides interpretable explanations for each flagged flow.

DriftGuard validates its approach across three distinct datasets: CICIDS2017 for training, UNSW-NB15 for cross-dataset validation, and UGR16v2noIRC for real-world ISP traffic validation. The system achieves a processing throughput of approximately 2,380 network flows per second with low latency, making it viable for production deployment. Future enhancements include Zeek real-time inference integration and automated MITRE ATT&CK technique mapping.

<details>
<summary>🔧 <b>ML Architecture</b></summary>

```
Models:
  Isolation Forest   — Unsupervised tree-based anomaly detection, contamination=0.1
  Autoencoder        — Dense NN: 77 → 50 → 25 → 50 → 77, trained on benign traffic only
  LSTM Autoencoder   — Bidirectional LSTM layers, window=10 timesteps, temporal patterns

Scoring: 0.3×IF + 0.4×AE + 0.3×LSTM (weighted ensemble fusion)

Datasets:
  CICIDS2017         — Training dataset (academic network)
  UNSW-NB15          — Cross-dataset validation
  UGR16v2noIRC       — Real-world ISP traffic validation

Future: Zeek Real-Time Inference + MITRE ATT&CK Auto-Mapping
```

</details>

---

#### 3. 🔐 CHC Secure File Management System

[![Repo](https://img.shields.io/badge/Repo-chc--secure--file--system-blue?style=flat-square&logo=github)](https://github.com/NITHINKR06/chc-secure-file-system) · `Python 47.2%` · `TypeScript 45.2%`


<summary>💻 <b>Code Snippet — CHC Encryption Core (Python)</b></summary>

```python
import hashlib, hmac

class CHCEncryptor:
    """Contextual Hash Chain encryption with forward security."""
    
    def __init__(self, master_secret: str):
        self.master_secret = master_secret.encode()
    
    def derive_seed(self, block_hash: str, timestamp: str, file_id: str) -> bytes:
        """Derive unique encryption seed from blockchain context."""
        context = f"{block_hash}:{timestamp}:{file_id}".encode()
        return hmac.new(self.master_secret, context, hashlib.sha256).digest()
    
    def encrypt_block(self, plaintext: bytes, seed: bytes, prev_cipher: bytes = b'') -> bytes:
        """CHC block encryption — each block depends on previous ciphertext."""
        chain_state = hashlib.sha256(seed + prev_cipher).digest()
        keystream = self._expand_key(chain_state, len(plaintext))
        return bytes(p ^ k for p, k in zip(plaintext, keystream))
```

</details>


---

## 🌱 Currently Learning

- 🔒 Advanced **Offensive Security** & Threat Detection
- ☁️ **AWS** — Cloud services & architecture
- 📱 **Flutter** — Cross-platform mobile development
- 🔐 **InfoSec** — Penetration testing, system hardening
- 🤖 **LangChain** — AI agent development

---

## ⚠️ Private Repositories

> 24+ additional projects are in private repositories. Contact me for access and demos.

---

## 📬 Connect

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-NITHINKR06-181717?style=for-the-badge&logo=github)](https://github.com/NITHINKR06)
[![Email](https://img.shields.io/badge/Email-Contact_Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:nithinkr06@gmail.com)

</div>

---

<div align="center">

*⭐ If you find these projects interesting, please consider giving them a star!*

</div>
