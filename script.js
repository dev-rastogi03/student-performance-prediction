document.getElementById('predictForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const gender = parseInt(document.getElementById('gender').value);
  const race = parseInt(document.getElementById('race').value);
  const education = parseInt(document.getElementById('education').value);
  const lunch = parseInt(document.getElementById('lunch').value);
  const prep = parseInt(document.getElementById('prep').value);

  // Simple scoring logic:
  // +1 if standard lunch, +1 if test prep completed, +1 if bachelor's or higher
  let score = 0;
  if (lunch === 1) score++;
  if (prep === 1) score++;
  if (education === 2) score++;

  let prediction;
  if (score >= 2) {
    prediction = "✅ Prediction: Likely to Pass";
  } else {
    prediction = "❌ Prediction: Likely to Fail";
  }

  document.getElementById('result').innerText = prediction;
});
