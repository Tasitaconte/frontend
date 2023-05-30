export default (ruta) => {
    if (ruta.legth < 3) {
        return (ruta === "/") ? ruta : "/";
    }
    return `/${ruta}`;
}