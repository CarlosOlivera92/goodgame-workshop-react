class Producto {
    private nombre: string;
    private precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
    getNombre(): string {
        return this.nombre;
    }
    
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    setPrecio(precio: number): void {
        this.precio = precio;
    }
}
export default Producto;
