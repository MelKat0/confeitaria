import Swal from "sweetalert2";

export default function useAlert() {
    function ConfirmAlert() {
        Swal.fire({
            title: "Compra realizada!",
            text: "Muito obrigada pela sua compra!",
            icon: "success" 
        });
    }
    function doubleAlert() {
        Swal.fire({
            title: "Segundo Alerta",
            text: "Texto do Segundo Alerta",
            icon: "question" 
        }).then((result) => {
            Swal.fire({
                position: "top-end",
                toast: true,
                icon: 'success',
                title: "Produto Adicionado",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });
        });
    }   
    return { ConfirmAlert, doubleAlert };
}