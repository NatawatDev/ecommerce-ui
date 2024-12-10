import Swal from 'sweetalert2'

export const showSuccessAlert = (message: string) => {
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
    confirmButtonText: 'OK',
  })
}

export const showErrorAlert = (message: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: message,
    confirmButtonText: 'OK',
  })
}
