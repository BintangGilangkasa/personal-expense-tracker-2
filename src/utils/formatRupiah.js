// Format menjadi Rupiah 

export const formatRupiah = (number) => {
    const numericValue = Number(number);

    if (isNaN(numericValue) || number == null || number == undefined) {
        return 'Rp 0'
}

    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(numericValue);
}
export default formatRupiah;