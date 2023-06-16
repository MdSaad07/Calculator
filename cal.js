function appendToResult(value) {
    document.getElementById('result').value += value;
  }

  function calculateResult() {
    const result = document.getElementById('result').value;
    if (result) {
      try {
        const finalResult = eval(result);
        document.getElementById('result').value = finalResult;
      } catch (error) {
        document.getElementById('result').value = 'Invalid Expression';
      }
    }
  }

  function clearResult() {
    document.getElementById('result').value = '';
  }