# Student Performance Prediction

A Machine Learning project that predicts whether a student will pass the math exam based on demographic and preparation data.

---

# Problem Statement

The goal is to predict if a student will **pass** (score ≥ 40 in math) using the following features:
- Gender
- Race/Ethnicity
- Parental Education
- Lunch type
- Test Preparation Course

---

# Dataset

- Source: [Kaggle – Students Performance Dataset](https://www.kaggle.com/datasets/spscientist/students-performance-in-exams)
- Target Variable: `pass_math` (1 = pass, 0 = fail)
- Size: 1000 entries

---

# Tools & Libraries

- Python
- pandas, seaborn, matplotlib
- scikit-learn (RandomForestClassifier)
- HTML, CSS, JavaScript (for UI)

---

# Project Workflow

1. Data Cleaning & Preprocessing
2. EDA & Visualization
3. Feature Engineering
4. Model Building (Random Forest)
5. Model Evaluation (Accuracy, Confusion Matrix)
6. Simple Web UI (User input form + prediction display)
7. Documentation (PDF Report)

---

#  Example Prediction

```python
# Simulated user input:
# [male, group B, bachelor's, standard lunch, completed prep]
input_data = [[1, 1, 2, 1, 1]]
prediction = model.predict(input_data)
