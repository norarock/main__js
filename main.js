console.log(dayjs().format('ss秒'));

const addSubtract = dayjs().subtract(1, 'second').format('ss秒');
console.log(addSubtract);