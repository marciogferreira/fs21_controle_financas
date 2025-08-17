import Swal from 'sweetalert2';

const Message = {
    success: (msg) => {
        Swal.fire({
            title: "🎉 Óia ai! Num é que deu certo mesmo! 🎉",
            text: msg,
            icon: "success",
        });
    },
    error: (msg) => {
        Swal.fire({
            title: "💥 Ixi! Tem parada errada ai! 💥",
            text: msg,
            icon: "error",
        });
    },
    errorCallBack: (msg, callBack) => {
        Swal.fire({
            title: "💥 Valha! Algo de errado não está certo, cuida! 💥",
            text: msg,
            icon: "error",
        }).then(() => {
            callBack();
        });
    },
    info: (msg) => {
        Swal.fire({
            title: "🤔 Mermão, presta atenção aqui! 🤔",
            text: msg,
            icon: "info",
        });
    },
    confirmation: (msg, callBack) => {
        Swal.fire({
            title: "⚠️ Cuidado! Tem certeza disso? ⚠️",
            text: msg,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sim!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
               callBack()
            }
        });
    }
}

export default Message;