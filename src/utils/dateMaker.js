function dateMaker(input) {
  const date = new Date(input).getDate();
  const month = new Date(input).getMonth();
  const year = new Date(input).getFullYear();

  const monthList = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  return `${date} ${monthList[month]} ${year}`;
}

export default dateMaker;
