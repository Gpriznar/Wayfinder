const colorCode = (stat) => {
  if (stat >= 0.9) {
    return 'green stat-style';
  }
  if (stat <= 0.89 && stat >= 0.50) {
    return 'orange stat-style';
  }
  if (stat <= 0.49) {
    return 'red stat-style';
  }
};

export default colorCode;
