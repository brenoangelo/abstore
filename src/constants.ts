/* Formatação de Valor*/

export function format(value: Number) {
  let result = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value))

  return result
}

/* Calc do disconto */

export function calcDiscount(price: number, discount: number) {
  const finalPrice = discount ? price - (price/100 * discount) : price

  return finalPrice
}