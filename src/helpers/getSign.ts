const getSign = (dia: number, mes: number) => {
  if ((dia >= 21 && mes === 3) || (dia <= 20 && mes === 4)) return "Aries";
  if ((dia >= 24 && mes === 9) || (dia <= 23 && mes === 10)) return "Libra";
  if ((dia >= 21 && mes === 4) || (dia <= 21 && mes === 5)) return "Tauro";
  if ((dia >= 24 && mes === 10) || (dia <= 22 && mes === 11)) return "Escorpio";
  if ((dia >= 22 && mes === 5) || (dia <= 21 && mes === 6)) return "Geminis";
  if ((dia >= 23 && mes === 11) || (dia <= 21 && mes === 12)) return "Sagitario";
  if ((dia >= 21 && mes === 6) || (dia <= 23 && mes === 7)) return "Cancer";
  if ((dia >= 22 && mes === 12) || (dia <= 20 && mes === 1)) return "Capricornio";
  if ((dia >= 24 && mes === 7) || (dia <= 23 && mes === 8)) return "Leo";
  if ((dia >= 21 && mes === 1) || (dia <= 19 && mes === 2)) return "Acuario";
  if ((dia >= 24 && mes === 8) || (dia <= 23 && mes === 9)) return "Virgo";
  if ((dia >= 20 && mes === 2) || (dia <= 20 && mes === 3)) return "Piscis";
  else return ""
};

export default getSign;
