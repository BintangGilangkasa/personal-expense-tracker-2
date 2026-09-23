export const fetchCategories = async () => {
    const response = await fetch("/categories.json");

    if (!response.ok) {
        throw new Error("Gagal mengambil kategori");
    }

    return response.json();
};